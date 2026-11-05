"use strict";
// Offline fixture loaded ONLY in tests. Replaces fetch to the OpenAI endpoint.
// No real API call, key, network access, or billing is involved.
const realFetch = global.fetch;
const fixtures = {
  mentor_feedback: {
    result: "Correct", issueType: "NONE",
    whatIsGood: "Your code creates a useful variable for the task.",
    whatIsWrong: "There is no major correctness issue.",
    whatToFixNext: "Try another input to extend the exercise.",
    optionalNote: "", nextStep: "Test with another input."
  },
  task_mentor_answer: { answer: "Start with the values you want to transform. Which variable holds those values?" },
  attempt_analysis: {
    mistake_type: "partial_understanding", is_close: true, missing_concept: "loop structure",
    hint_level: 1, notes: "The input is partially complete."
  },
  hint_quality: { rating: "appropriate", reason: "The hint guides without giving away the answer.", revision_instruction: "" }
};

global.fetch = async function (url, options = {}) {
  if (String(url) !== "https://api.openai.com/v1/responses") {
    throw new Error(`Unexpected network request from offline mock: ${String(url)}`);
  }
  if (options.method !== "POST" || !options.headers?.Authorization?.startsWith("Bearer ")) {
    throw new Error("Unexpected OpenAI request method or authorization header");
  }
  const request = JSON.parse(options.body);
  if (!request.model || !request.instructions || !Array.isArray(request.input)) {
    throw new Error("Malformed outgoing OpenAI Responses API request");
  }
  const name = request.text?.format?.name;
  const userText = request.input[0]?.content?.[0]?.text || "";
  if (userText.includes("[[MOCK_API_ERROR]]")) {
    return new Response(JSON.stringify({ error: { message: "Simulated upstream failure" } }), {
      status: 429, headers: { "content-type": "application/json" }
    });
  }
  const result = name ? fixtures[name] : "Consider how your code handles values in that collection. What should happen next?";
  if (result === undefined) throw new Error(`Unrecognized OpenAI JSON schema: ${name}`);
  const text = typeof result === "string" ? result : JSON.stringify(result);
  const output = name === "mentor_feedback"
    ? { output: [{ type: "message", content: [{ type: "output_text", text }] }] }
    : { output_text: text };
  return new Response(JSON.stringify(output), {
    status: 200, headers: { "content-type": "application/json" }
  });
};
