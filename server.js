const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || readLocalEnv("PORT") || 3000);
// Local-only by default; not an authenticated public service.
const HOST = process.env.HOST || readLocalEnv("HOST") || "127.0.0.1";
const MAX_BODY_BYTES = 32768;
const REQUESTS_PER_MINUTE = 12;
const rateLimits = new Map();
const OPENAI_MODEL = process.env.OPENAI_MODEL || readLocalEnv("OPENAI_MODEL") || "gpt-4.1-mini";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(JSON.stringify(data));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let bytes = 0;
    let tooLarge = false;
    request.on("data", chunk => {
      if (tooLarge) return;
      bytes += chunk.length;
      if (bytes > MAX_BODY_BYTES) {
        tooLarge = true;
        reject(Object.assign(new Error("Request body too large"), { status: 413 }));
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => { if (!tooLarge) resolve(Buffer.concat(chunks).toString("utf8")); });
    request.on("error", reject);
  });
}

function parsePayload(body) {
  let value;
  try { value = JSON.parse(body || "{}"); }
  catch { throw Object.assign(new Error("Invalid JSON"), { status: 400 }); }
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw Object.assign(new Error("Expected a JSON object"), { status: 400 });
  }
  function check(item, depth = 0) {
    if (depth > 12) throw Object.assign(new Error("Payload nesting too deep"), { status: 400 });
    if (typeof item === "string" && item.length > 12000) throw Object.assign(new Error("Input field too long"), { status: 400 });
    if (Array.isArray(item)) {
      if (item.length > 200) throw Object.assign(new Error("Array too long"), { status: 400 });
      item.forEach(x => check(x, depth + 1));
    } else if (item && typeof item === "object") {
      if (Object.keys(item).length > 100) throw Object.assign(new Error("Too many fields"), { status: 400 });
      Object.values(item).forEach(x => check(x, depth + 1));
    }
  }
  check(value);
  return value;
}

function sendHandlerError(response, error) {
  if ([400, 413].includes(error.status)) return sendJson(response, error.status, { error: error.message });
  console.error("Iteriq AI request failed:", error.message);
  sendJson(response, 502, { error: "Unable to complete the AI request. Please try again." });
}

function isAllowedOrigin(request) {
  if (!request.headers.origin) return true; // Not an authentication boundary.
  try {
    const origin = new URL(request.headers.origin);
    return ["http:", "https:"].includes(origin.protocol) &&
      origin.host.toLowerCase() === (request.headers.host || "").toLowerCase();
  } catch { return false; }
}

function allowRequest(request) {
  const now = Date.now();
  for (const [ip, item] of rateLimits) {
    if (now - item.start >= 60000) rateLimits.delete(ip);
  }
  const ip = request.socket.remoteAddress || "unknown";
  const item = rateLimits.get(ip);
  if (!item) { rateLimits.set(ip, { start: now, count: 1 }); return true; }
  if (item.count >= REQUESTS_PER_MINUTE) return false;
  item.count++;
  return true;
}

function extractResponseText(data) {
  if (data.output_text) {
    return data.output_text;
  }

  const message = data.output?.find((item) => item.type === "message");
  const text = message?.content?.find((item) => item.type === "output_text")?.text;
  return text || "";
}

function readLocalEnv(name) {
  const envPath = path.join(ROOT, ".env");
  if (!fs.existsSync(envPath)) {
    return "";
  }

  const match = fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.match(/^\s*([^#=\s]+)\s*=\s*(.+?)\s*$/))
    .find((parts) => parts && parts[1] === name);

  return match ? match[2].replace(/^["']|["']$/g, "") : "";
}

async function createMentorFeedback(payload) {
  const apiKey = process.env.OPENAI_API_KEY || readLocalEnv("OPENAI_API_KEY");
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Set it before starting the server.");
  }

  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    signal: AbortSignal.timeout(30000),
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions: [
        "You are a senior developer acting as a concise coding mentor inside a learning app.",
        "Review the user's exact submission against the concrete current task, language, and level.",
        "The task object may include acceptedCriteria, solutionIntent, and referenceSolution. Treat acceptedCriteria as the grading source of truth.",
        "Classify the submission before writing feedback. Use exactly one issueType: LOGIC_ERROR, STRUCTURE_ERROR, MINOR_SYNTAX, STYLE_ISSUE, or NONE.",
        "Use result exactly as one of: Correct, Correct (minor note), Incorrect.",
        "LOGIC_ERROR means the core concept is wrong, such as wrong grouping, wrong calculation, or wrong columns. Result must be Incorrect.",
        "STRUCTURE_ERROR means the solution is incomplete or missing a required part, such as missing GROUP BY entirely. Result must be Incorrect.",
        "MINOR_SYNTAX means the logic and required structure are correct but there is a small syntax issue, such as a missing semicolon, harmless capitalization, or minor formatting. Result must be Correct (minor note).",
        "STYLE_ISSUE means the code works and satisfies the task but naming, formatting, or readability could improve. Result must be Correct.",
        "NONE means the required concept, structure, and behavior are correct. Result must be Correct.",
        "Do not mark a submission incorrect solely because of missing semicolons, whitespace differences, capitalization, or minor formatting inconsistencies.",
        "Prioritize concept validation first. Minor syntax and style notes are non-blocking.",
        "Validate behavior, not keyword presence. A required keyword, method, helper, or pattern only counts if it affects the printed, returned, logged, selected, or otherwise final output.",
        "If the user leaves a broken output line unchanged and adds a correct-looking line elsewhere, result must be Incorrect.",
        "For Python safe dictionary lookup tasks, .get() or an equivalent guard must be used inside the print/return/output expression. Unsafe bracket access in the output remains Incorrect even if .get() appears on another line.",
        "For JavaScript or TypeScript fallback tasks, the fallback must be part of the console.log, return value, or value later rendered. An unused fallback expression is Incorrect.",
        "For SQL GROUP BY tasks, verify that every non-aggregated SELECT column is included in GROUP BY and that the grouped column matches the task. GROUP BY on the wrong column is Incorrect; a missing semicolon is only Correct (minor note).",
        "For Java, Kotlin, Swift, or C# safe Map/object access tasks, the guard or fallback must protect the printed or returned value. Unused helper code does not satisfy the task.",
        "If the user's submission is equivalent to the referenceSolution or satisfies acceptedCriteria, do not say it is wrong; say the required behavior is present and give a meaningful conceptual next challenge.",
        "For correct submissions, do not suggest formatting-only changes, exact spacing, punctuation, or string concatenation unless exact formatting is explicitly part of acceptedCriteria.",
        "For correct submissions, make whatToFixNext and nextStep a small learning extension such as adding an item, printing a different key/value pair, calculating an average, handling a missing key, or turning the logic into a function.",
        "If referenceSolution conflicts with acceptedCriteria, grade by acceptedCriteria and explain the smallest missing requirement.",
        "Analyze what the user actually wrote: code, identifiers, values, output text, or explanation. Reference a specific phrase, variable, function, value, or behavior from the submission whenever possible.",
        "Do not repeat or summarize the task description. Use the task only as the evaluation standard.",
        "Keep every field to one short sentence. Be specific, direct, and actionable.",
        "Do not use generic praise such as 'good start', 'nice attempt', or 'you made an attempt'.",
        "Do not provide a full solution, complete code, or multiple future steps unless the user explicitly asks for a solution.",
        "For whatIsGood: say what is correct or useful in the submission, grounded in the user's text. If nothing is task-relevant, say that the submitted text does not yet include a task-relevant piece.",
        "For correct submissions, whatIsWrong must not sound like failure; say there is no major correctness issue or give only a non-blocking minor/style note.",
        "For incorrect submissions, whatIsWrong must name the concept or structure problem by comparing the submission to acceptedCriteria.",
        "For optionalNote: use an empty string unless there is a MINOR_SYNTAX or STYLE_ISSUE note.",
        "For whatToFixNext: if result is Incorrect, give exactly one concrete edit. If result is Correct or Correct (minor note), give a small optional improvement or extension.",
        "For nextStep: give one immediate action that continues from whatToFixNext; do not introduce a second unrelated goal.",
        "Example: if the task asks for a dictionary and the submission is 'hello', say that 'hello' is not a dictionary or task-relevant output, then ask them to replace it with a small dictionary.",
        "If skipContext is present, the task was resumed from Needs review. Use skipContext.reasonLabel, previousSubmission, detectedMistake, and skipCount to make feedback more specific, but still grade only the current submission against acceptedCriteria."
      ].join(" "),
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({
                task: payload.task,
                submission: payload.submission,
                language: payload.language,
                level: payload.level,
                skipContext: payload.skipContext || null
              }, null, 2)
            }
          ]
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "mentor_feedback",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              result: { type: "string", enum: ["Correct", "Correct (minor note)", "Incorrect"] },
              issueType: { type: "string", enum: ["LOGIC_ERROR", "STRUCTURE_ERROR", "MINOR_SYNTAX", "STYLE_ISSUE", "NONE"] },
              whatIsGood: { type: "string" },
              whatIsWrong: { type: "string" },
              whatToFixNext: { type: "string" },
              optionalNote: { type: "string" },
              nextStep: { type: "string" }
            },
            required: ["result", "issueType", "whatIsGood", "whatIsWrong", "whatToFixNext", "optionalNote", "nextStep"]
          }
        }
      }
    })
  });

  const data = await apiResponse.json();
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || "OpenAI request failed.");
  }

  return JSON.parse(extractResponseText(data));
}

async function createTaskMentorAnswer(payload) {
  const apiKey = process.env.OPENAI_API_KEY || readLocalEnv("OPENAI_API_KEY");
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Set it before starting the server.");
  }

  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    signal: AbortSignal.timeout(30000),
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions: [
        "You are a senior developer mentor inside a guided coding task.",
        "Answer only questions that are related to the current task, language, expected output, or the user's last submission.",
        "If the question is unrelated, briefly redirect the learner back to the current task and offer one task-related question they could ask.",
        "Guide the learner without completing the task for them. Give only the next useful move, not the whole workflow.",
        "Keep the answer 2 to 3 short sentences maximum.",
        "End with exactly one guiding question or exactly one next action.",
        "Do not include code, full pseudocode, or a complete final answer unless the learner explicitly asks for code, a solution, or the full answer.",
        "If the learner asks vague help such as 'foundation', 'basics', 'help me', 'help starting', 'where do I start', or 'where to begin', give only the first step. Do not mention later steps like calculations, loops, conditionals, validation, tests, or formatting.",
        "For vague starting help, use this pattern: name the first data shape or first decision, connect it to the current task in one sentence, then give one next action.",
        "For hint-style questions, use hintCount as the number of previous help requests on this exact task or lesson step.",
        "If explicitAnswerRequest is true, you may show the smallest exact code needed. Otherwise, reveal exact code only when hintCount is 3 or higher.",
        "If hintCount is 0, keep the hint conceptual: do not name the exact method, function, or final expression unless the submission is already very close. Ask a guiding question.",
        "If hintCount is 1, you may name the missing concept or where the fix belongs, but do not provide the complete expression or final line.",
        "If hintCount is 2, you may mention the method or pattern more clearly, but still leave the final expression for the learner to write.",
        "For hints, do not give the exact final line unless explicitAnswerRequest is true or hintCount is 3 or higher.",
        "For first hints about safe dictionary/object lookup, prefer wording like: 'Think about a lookup pattern that will not crash when the key is missing.' Do not name the exact method on the first hint unless the learner already used it correctly.",
        "Only use safe lookup, missing key, fallback, .get(), optional property, or undefined wording when learningContext.expectedConcept or the current prompt is actually about missing keys, missing properties, or fallback behavior.",
        "For safe lookup fill-in steps such as print(scores.get('stretch', ____)), distinguish the exact mistake. If currentStepInput is the dictionary itself, say the fallback should be one score value, not the whole dictionary. If .get() is already used, do not say the learner still assumes the key exists unless their current input still uses direct bracket lookup.",
        "For first fallback-value hints, explain that the blank is the value returned when the key is missing. Do not reveal the exact fallback value unless explicitAnswerRequest is true or hintCount is 3 or higher. In particular, do not say 'use 0', '0 as the fallback', or that 0 makes sense on the first hint.",
        "If the original task expectedOutput reveals the fallback value, do not quote or name that expectedOutput in a first fallback-value hint. Ask what value should represent the missing case instead.",
        "For dictionary value aggregation steps, focus on keys versus stored values: using a dictionary directly in sum(...) uses keys, not the stored score values. Ask what method returns the values, but do not mention safe lookup, fallback values, or .get().",
        "If the learner included a correct-looking pattern but the output still uses the broken expression, point to that mismatch without writing the exact answer.",
        "Example hint style: 'You're still printing the unsafe lookup. Which expression should be inside print so the fallback is actually used?'",
        "If a solution is explicitly requested, keep it short and do not expand beyond the smallest useful example.",
        "For coding help, separate explanation from code. Use short paragraphs for explanation and put any code in a fenced markdown code block with the language name, such as ```python.",
        "Keep code snippets minimal and show only the relevant lines for the next step.",
        "Use the user's last submission when it helps. Do not invent a submission if it is empty.",
        "Use the recent conversation only to understand follow-up replies. Do not drift into a general chat.",
        "If learningContext is present, answer as a short concept-learning mentor for that specific lesson step. The learningContext is the primary task; the original task and payload.submission are only background unless learningContext asks for comparison.",
        "When learningContext is present, prioritize context in this order: stepTitle, prompt, codeShown, currentStepInput, lastValidationResult, then original task background.",
        "When learningContext is present, do not restart from the original full task, do not tell the learner to create the original data/project, and do not answer as if they are on the main task screen.",
        "Use learningContext.prompt, codeShown, microStepType, expectedConcept, currentStepInput, and lastValidationResult to answer the exact micro-step the learner is working on.",
        "The learningContext.expectedConcept is authoritative for the concept being practiced. Do not reuse generic dictionary hints from another concept.",
        "For fill-in-the-blank micro-steps, reference the blank directly, explain what type of expression belongs there, and respond to the user's currentStepInput. Do not reveal the exact filled expression unless explicitAnswerRequest is true or hintCount is 3 or higher.",
        "For short-explanation micro-steps, do not use fill-in-the-blank wording such as 'this blank should be' unless the prompt actually contains a blank. If the learner writes irrelevant text, say it does not answer the question yet and point them to the behavior being compared.",
        "For questions like 'Why use .get() instead of scores[... ]?', focus on direct lookup possibly raising an error when the key is missing, while .get() can return a fallback. Do not treat the learner's text as a fallback value.",
        "On the first hint for a short-explanation question, do not write the full expression with the exact key and fallback. Keep it conceptual; the learner should explain the behavior in their own words.",
        "For spot-the-mistake, quick prediction, fix-the-code, and light-apply micro-steps, stay within that step's prompt and shown code. Do not jump back to the original task or ahead to later steps.",
        "Use learningContext.stepTitle, learningContext.wasCorrect, and the user's submission when explaining. Do not say an incorrect or unrelated attempt worked.",
        "When learningContext.currentStepInput is present, treat it as the user's live input for the current lesson step and reference it directly. Do not guess what they typed.",
        "For Fix the Code steps, use learningContext.originalBrokenCode, expectedFix, validationRule, currentStepInput, and lastValidationResult. Point to the exact line or clause that needs attention without giving the final code too early.",
        "For Python safe-lookup Fix the Code steps, use this progression: first hint says the issue is still in the print(...) line and asks what lookup expression inside that line could avoid crashing when the key is missing; second hint says instead of printing the direct bracket lookup, the printed expression should use a lookup with a fallback; third hint may name the .get(...) pattern inside print(...).",
        "For SQL Fix the Code steps, point to the SELECT/GROUP BY relationship. First hint: identify the query clause controlling result shape. Second hint: the non-aggregated SELECT column should match GROUP BY. Third hint may say to add or adjust GROUP BY, without writing the full query.",
        "For JavaScript/TypeScript object or array Fix the Code steps, point to the logged/returned expression or collection method. First hint identifies the exact output expression or collection step; second hint names the kind of fallback or array operation; third hint may name the pattern without rewriting the full code.",
        "For Java/Kotlin/Swift/C# map/list Fix the Code steps, point to the lookup/output line and ask what guard or fallback should happen before the value is printed or returned.",
        "Keep Learn Deeper answers step-specific and short. Do not jump ahead to future lesson steps unless the user explicitly asks.",
        "Do not repeat explanations or examples already given in the recent conversation. If the learner needs the same idea, refer to it briefly and move forward.",
        "If the learner replies with agreement or a simple continuation such as 'yes', 'ok', 'sure', 'got it', 'next', or 'continue', advance to the next small action instead of re-explaining.",
        "Ask the learner to try or paste one small thing before continuing whenever they have not shown an attempt for the current step.",
        "When appropriate, ask one short follow-up question that helps the learner choose their next move, but do not ask a question if a concrete next action is clearer.",
        "Tie every answer to the current task. Keep the tone mentor-like, direct, and practical.",
        "If skipContext is present, the task was resumed from Needs review. Use the previous submission, selected skip reason, and detected mistake to guide the next hint without giving away the full answer."
      ].join(" "),
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({
                task: payload.task,
                lastSubmission: payload.submission || payload.lastSubmission || "",
                question: payload.question,
                hintCount: Number(payload.hintCount || 0),
                explicitAnswerRequest: Boolean(payload.explicitAnswerRequest),
                skipContext: payload.skipContext || null,
                learningContext: payload.learningContext || null,
                recentConversation: Array.isArray(payload.conversation) ? payload.conversation.slice(-6) : []
              }, null, 2)
            }
          ]
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "task_mentor_answer",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              answer: { type: "string" }
            },
            required: ["answer"]
          }
        }
      }
    })
  });

  const data = await apiResponse.json();
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || "OpenAI request failed.");
  }

  return JSON.parse(extractResponseText(data));
}

async function createAttemptAnalysis(payload) {
  const apiKey = process.env.OPENAI_API_KEY || readLocalEnv("OPENAI_API_KEY");
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Set it before starting the server.");
  }

  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    signal: AbortSignal.timeout(30000),
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions: [
        "You are a coding mentor system that analyzes a student's attempt.",
        "Your job is only to identify the mistake type, determine closeness, identify the missing concept, and choose a hint level from 1 to 3.",
        "Mistake types must be exactly one of: syntax_error, wrong_structure, missing_step, partial_understanding, logic_error, irrelevant_attempt.",
        "is_close must be true only when the user is close or partially correct; false when the attempt is far off, empty, or irrelevant.",
        "Hint levels: 1 = very subtle nudge only, 2 = directional guide without answer, 3 = strong hint that is almost the answer but still not the full solution.",
        "Adjust hint_level by hintCount: if hintCount is 0 prefer 1, use 2 only if the submission is already close; if hintCount is 1 prefer 2; if hintCount is 2 or higher use 3.",
        "missing_concept should be short, such as dictionary lookup, aggregation with GROUP BY, safe access pattern, printing result, or loop structure.",
        "notes must be short factual internal reasoning, not shown to the learner.",
        "Do not explain the answer. Do not generate a hint. Only analyze and classify."
      ].join(" "),
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({
                task: payload.task || payload.taskDescription || "",
                userSubmission: payload.submission || payload.userCode || "",
                hintCount: Number(payload.hintCount || 0)
              }, null, 2)
            }
          ]
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "attempt_analysis",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              mistake_type: {
                type: "string",
                enum: ["syntax_error", "wrong_structure", "missing_step", "partial_understanding", "logic_error", "irrelevant_attempt"]
              },
              is_close: { type: "boolean" },
              missing_concept: { type: "string" },
              hint_level: { type: "integer", enum: [1, 2, 3] },
              notes: { type: "string" }
            },
            required: ["mistake_type", "is_close", "missing_concept", "hint_level", "notes"]
          }
        }
      }
    })
  });

  const data = await apiResponse.json();
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || "OpenAI request failed.");
  }

  return JSON.parse(extractResponseText(data));
}

async function createAdaptiveHint(payload) {
  const apiKey = process.env.OPENAI_API_KEY || readLocalEnv("OPENAI_API_KEY");
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Set it before starting the server.");
  }

  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    signal: AbortSignal.timeout(30000),
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions: [
        "You are a coding mentor giving a hint to a student.",
        "Help the student figure out the solution without giving it away.",
        "Return only the hint text. Do not return JSON, labels, markdown headings, or analysis.",
        "Use mistakeAnalysis.hint_level to control explicitness.",
        "Treat hintCount as the number of previous hints on this exact step and explicitAnswerRequest as permission to reveal the answer.",
        "Level 1: ask a guiding question, point to what to think about, do not mention exact methods or syntax, and do not provide the exact expression.",
        "Level 2: clearly describe the missing concept and where the change belongs; you may name a method only if needed, but do not give the full expression or final line.",
        "Level 3: be clear about what needs to change and you may reference specific methods or patterns, but do not give the complete final answer unless explicitAnswerRequest is true or hintCount is 3 or higher.",
        "Never output the full correct solution. Never rewrite the user's code completely.",
        "If hintCount is 0 and the task is a safe dictionary lookup, do not write the exact .get(...) expression and avoid naming .get unless the user is already very close.",
        "For first safe-lookup hints, use wording like: 'Think about a lookup pattern that will not crash when the key is missing.'",
        "Only use safe lookup, missing key, fallback, .get(), optional property, or undefined wording when the task is actually about missing keys, missing properties, or fallback behavior.",
        "For fallback-value questions, classify whether the learner omitted the fallback, used the whole dictionary, used another variable, used the wrong type, or still used unsafe bracket lookup. If .get() is already present with the wrong fallback, focus on the fallback value, not on unsafe lookup.",
        "When the learner uses the whole dictionary as the fallback, say the fallback should be a single value of the type being returned. Do not reveal the exact fallback value on the first hint; avoid phrases like 'use 0' or '0 as the fallback' until later hints.",
        "Do not quote task.expectedOutput if doing so would reveal the answer to the current fallback blank on a first hint.",
        "For dictionary value aggregation tasks, focus on keys versus stored values: using a dictionary directly in sum(...) uses keys, not the stored scores. Ask what method returns the values, but do not mention safe lookup, fallback values, or .get().",
        "For Fix the Code hints, point to the exact line, clause, or expression that needs attention without giving the full code. For safe dictionary lookup, first say the issue is in the print(...) line; second say the direct bracket lookup should be replaced by a lookup with a fallback; third may name the .get(...) pattern.",
        "If hintCount is 1, you can say the fix belongs in the print, return, SELECT, GROUP BY, or output expression, but still leave the exact code for the learner.",
        "Only reveal exact code if the learner explicitly asks for the answer or has already asked for help at least 3 times on this step.",
        "Keep the hint concise: 2 to 4 sentences maximum.",
        "Be encouraging but not verbose. Focus on the next step only.",
        "Do not mention hint level.",
        "Bad hint: Use scores.get('stretch', 0) inside print.",
        "Good hint: The issue is still in the print(...) line. What lookup expression inside that line could avoid crashing when the key is missing?"
      ].join(" "),
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({
                task: payload.task || payload.taskDescription || "",
                userSubmission: payload.submission || payload.userCode || "",
                mistakeAnalysis: payload.analysis || payload.mistakeAnalysis || {},
                hintCount: Number(payload.hintCount || 0),
                explicitAnswerRequest: Boolean(payload.explicitAnswerRequest)
              }, null, 2)
            }
          ]
        }
      ]
    })
  });

  const data = await apiResponse.json();
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || "OpenAI request failed.");
  }

  return extractResponseText(data).trim();
}

async function evaluateHintQuality(payload) {
  const apiKey = process.env.OPENAI_API_KEY || readLocalEnv("OPENAI_API_KEY");
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY. Set it before starting the server.");
  }

  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    signal: AbortSignal.timeout(30000),
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      instructions: [
        "You are a hint quality evaluator for a coding mentor system.",
        "Evaluate whether the generated hint is appropriate for the student's current state.",
        "Return only strict JSON matching the schema.",
        "Do not rewrite the hint yourself.",
        "Rate too_strong if the hint gives the exact final answer, rewrites the user's code completely, includes copy-paste-ready code when hint_level is 1 or 2, removes the need for thinking, or mentions exact variable/column names too early when not necessary.",
        "When hintCount is 0, rate too_strong if the hint names the exact method and complete expression needed for the fix.",
        "When hintCount is 0 for safe lookup tasks, rate too_strong if the hint names the exact method before the learner is already close.",
        "When hintCount is 1, rate too_strong if the hint provides the final line or exact expression instead of only naming the concept or location of the fix.",
        "Exact answer reveals are appropriate only when explicitAnswerRequest is true or hintCount is 3 or higher.",
        "Rate too_weak if the hint is vague, generic, does not address the actual mistake, could apply to almost any task, ignores the user's submission, or does not help with the next step.",
        "Rate appropriate if it matches hint_level, addresses the actual mistake, gives the next useful direction, avoids the full answer, and is concise and task-specific.",
        "Level 1 should be conceptual, avoid exact syntax, and usually ask a guiding question.",
        "Level 2 can name the concept and point to the issue location, but should not include the final line of code.",
        "Level 3 can be direct and mention methods or patterns, but should still avoid the complete final answer unless explicitly allowed.",
        "revision_instruction should say what to change if the rating is too_weak or too_strong; otherwise use an empty string."
      ].join(" "),
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: JSON.stringify({
                task: payload.task || payload.taskDescription || "",
                userSubmission: payload.submission || payload.userCode || "",
                mistakeAnalysis: payload.analysis || payload.mistakeAnalysis || {},
                hintCount: Number(payload.hintCount || 0),
                explicitAnswerRequest: Boolean(payload.explicitAnswerRequest),
                generatedHint: payload.hint || payload.generatedHint || ""
              }, null, 2)
            }
          ]
        }
      ],
      text: {
        format: {
          type: "json_schema",
          name: "hint_quality",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              rating: { type: "string", enum: ["too_weak", "appropriate", "too_strong"] },
              reason: { type: "string" },
              revision_instruction: { type: "string" }
            },
            required: ["rating", "reason", "revision_instruction"]
          }
        }
      }
    })
  });

  const data = await apiResponse.json();
  if (!apiResponse.ok) {
    throw new Error(data.error?.message || "OpenAI request failed.");
  }

  return JSON.parse(extractResponseText(data));
}

async function handleMentorFeedback(request, response) {
  try {
    const body = await readRequestBody(request);
    const payload = parsePayload(body);

    if (!payload.task || !payload.submission || !payload.language || !payload.level) {
      sendJson(response, 400, { error: "task, submission, language, and level are required." });
      return;
    }

    const feedback = await createMentorFeedback(payload);
    sendJson(response, 200, feedback);
  } catch (error) {
    sendHandlerError(response, error);
  }
}

async function handleTaskMentor(request, response) {
  try {
    const body = await readRequestBody(request);
    const payload = parsePayload(body);

    if (!payload.task || !payload.question) {
      sendJson(response, 400, { error: "task and question are required." });
      return;
    }

    const answer = await createTaskMentorAnswer(payload);
    sendJson(response, 200, answer);
  } catch (error) {
    sendHandlerError(response, error);
  }
}

async function handleAttemptAnalysis(request, response) {
  try {
    const body = await readRequestBody(request);
    const payload = parsePayload(body);

    if (!payload.task && !payload.taskDescription) {
      sendJson(response, 400, { error: "task or taskDescription is required." });
      return;
    }

    const analysis = await createAttemptAnalysis(payload);
    sendJson(response, 200, analysis);
  } catch (error) {
    sendHandlerError(response, error);
  }
}

async function handleAdaptiveHint(request, response) {
  try {
    const body = await readRequestBody(request);
    const payload = parsePayload(body);

    if ((!payload.task && !payload.taskDescription) || (!payload.analysis && !payload.mistakeAnalysis)) {
      sendJson(response, 400, { error: "task and analysis are required." });
      return;
    }

    const hint = await createAdaptiveHint(payload);
    sendJson(response, 200, { hint });
  } catch (error) {
    sendHandlerError(response, error);
  }
}

async function handleHintEvaluation(request, response) {
  try {
    const body = await readRequestBody(request);
    const payload = parsePayload(body);

    if ((!payload.task && !payload.taskDescription) || (!payload.analysis && !payload.mistakeAnalysis) || (!payload.hint && !payload.generatedHint)) {
      sendJson(response, 400, { error: "task, analysis, and hint are required." });
      return;
    }

    const evaluation = await evaluateHintQuality(payload);
    sendJson(response, 200, evaluation);
  } catch (error) {
    sendHandlerError(response, error);
  }
}

function serveStatic(request, response) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, `http://localhost:${PORT}`).pathname);
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  // Serve only the public browser assets. Never expose .env, source maps,
  // package files, Git metadata, or server-side source code.
  const publicFiles = new Set(["/", "/index.html", "/styles.css", "/app.js"]);
  if (!publicFiles.has(pathname)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  const fileName = pathname === "/" ? "index.html" : pathname.slice(1);
  fs.readFile(path.join(ROOT, fileName), (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[path.extname(fileName)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff"
    });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://localhost:${PORT}`);

  if (request.method === "OPTIONS") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }
  if (request.method === "POST") {
    if (!isAllowedOrigin(request)) return sendJson(response, 403, { error: "Origin not allowed." });
    if (!(request.headers["content-type"] || "").toLowerCase().startsWith("application/json")) {
      return sendJson(response, 415, { error: "Content-Type must be application/json." });
    }
    if (!allowRequest(request)) {
      response.setHeader("Retry-After", "60");
      return sendJson(response, 429, { error: "Too many requests. Try again shortly." });
    }
  }

  if (requestUrl.pathname === "/api/mentor-feedback" && request.method === "POST") {
    handleMentorFeedback(request, response);
    return;
  }

  if ((requestUrl.pathname === "/ask-mentor" || requestUrl.pathname === "/api/task-mentor") && request.method === "POST") {
    handleTaskMentor(request, response);
    return;
  }

  if (requestUrl.pathname === "/api/analyze-attempt" && request.method === "POST") {
    handleAttemptAnalysis(request, response);
    return;
  }

  if (requestUrl.pathname === "/api/generate-hint" && request.method === "POST") {
    handleAdaptiveHint(request, response);
    return;
  }

  if (requestUrl.pathname === "/api/evaluate-hint" && request.method === "POST") {
    handleHintEvaluation(request, response);
    return;
  }

  if (request.method === "GET") {
    serveStatic(request, response);
    return;
  }

  sendJson(response, 405, { error: "Method not allowed." });
});

server.listen(PORT, HOST, () => {
  console.log(`Iteriq running at http://${HOST}:${PORT}`);
});
