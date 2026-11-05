const appShell = document.querySelector(".app-shell");
const form = document.querySelector("#planner-form");
const languageSelect = document.querySelector("#language");
const languageCustomField = document.querySelector("#language-custom-field");
const customLanguageInput = document.querySelector("#custom-language");
const ambitionSelect = document.querySelector("#ambition");
const ambitionCustomField = document.querySelector("#ambition-custom-field");
const customAmbitionInput = document.querySelector("#custom-ambition");
const taskInput = document.querySelector("#task");
const hoursInput = document.querySelector("#hours");
const hoursOutput = document.querySelector("#hours-output");
const planTitle = document.querySelector("#plan-title");
const planSubtitle = document.querySelector("#plan-subtitle");
const paceChip = document.querySelector("#pace-chip");
const insightStrip = document.querySelector("#insight-strip");
const currentTaskView = document.querySelector(".current-task-view");
const moduleList = document.querySelector("#module-list");
const taskToolsPanel = document.querySelector("#task-tools-panel");
const openHelpPanelButton = document.querySelector("#open-help-panel");
const closeHelpPanelButton = document.querySelector("#close-help-panel");
const taskToolButtons = document.querySelectorAll("[data-tool]");
const taskToolResponse = document.querySelector("#task-tool-response");
const taskMentorQuestion = document.querySelector("#task-mentor-question");
const askTaskMentorButton = document.querySelector("#ask-task-mentor");
const taskMentorResponse = document.querySelector("#task-mentor-response");
const startSubmitRow = document.querySelector("#start-submit-row");
const startSubmitButton = document.querySelector("#start-submit");
const submissionPanel = document.querySelector("#submission-panel");
const editorModeInputs = document.querySelectorAll("input[name='editor-mode']");
const attemptEditor = document.querySelector("#attempt-editor");
const editorLineNumbers = document.querySelector("#editor-line-numbers");
const editorLanguage = document.querySelector("#editor-language");
const runCodeButton = document.querySelector("#run-code");
const formatCodeButton = document.querySelector("#format-code");
const codeOutputPanel = document.querySelector("#code-output-panel");
const codeOutput = document.querySelector("#code-output");
const codeOutputStatus = document.querySelector("#code-output-status");
const taskAttemptInput = document.querySelector("#task-attempt");
const submitAttemptButton = document.querySelector("#submit-attempt");
const submissionStatus = document.querySelector("#submission-status");
const mentorFeedback = document.querySelector("#mentor-feedback");
const nextStepPanel = document.querySelector("#next-step-panel");
const nextStepTitle = document.querySelector("#next-step-title");
const nextStepCopy = document.querySelector("#next-step-copy");
const nextStepOptionsPanel = document.querySelector(".next-step-options");
const relevanceCard = document.querySelector("#relevance-card");
const practiceGrid = document.querySelector("#practice-grid");
const studyToolsGrid = document.querySelector(".study-tools-grid");
const flashcardList = document.querySelector("#flashcard-list");
const quizList = document.querySelector("#quiz-list");
const startQuizButton = document.querySelector("#start-quiz");
const checkQuizButton = document.querySelector("#check-quiz");
const quizResult = document.querySelector("#quiz-result");
const glossaryList = document.querySelector("#glossary-list");
const builderList = document.querySelector("#builder-list");
const interviewList = document.querySelector("#interview-list");
const gradeInterviewButton = document.querySelector("#grade-interview");
const interviewResult = document.querySelector("#interview-result");
const helpActions = document.querySelector("#help-actions");
const helpQuestion = document.querySelector("#help-question");
const askHelpButton = document.querySelector("#ask-help");
const helpResponse = document.querySelector("#help-response");
const notesPanel = document.querySelector("#notes-panel");
const notesToggle = document.querySelector("#notes-toggle");
const noteTitle = document.querySelector("#note-title");
const notesInput = document.querySelector("#notes");
const saveNoteButton = document.querySelector("#save-note");
const clearNoteButton = document.querySelector("#clear-note");
const savedNotes = document.querySelector("#saved-notes");
const noteCount = document.querySelector("#note-count");
const progressMeterFill = document.querySelector("#progress-meter-fill");
const progressSummary = document.querySelector("#progress-summary");
const progressStats = document.querySelector("#progress-stats");
const progressEvents = document.querySelector("#progress-events");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const themeIcon = document.querySelector(".theme-icon");
const generateButton = document.querySelector("#generate-button");
const setupSummary = document.querySelector("#setup-summary");
const setupSummaryTitle = document.querySelector("#setup-summary-title");
const setupSummaryMeta = document.querySelector("#setup-summary-meta");
const editSetupButton = document.querySelector("#edit-setup");
const collapseSetupButton = document.querySelector("#collapse-setup");
const sidebarCollapseToggle = document.querySelector("#sidebar-collapse-toggle");
const sidebarExpandToggle = document.querySelector("#sidebar-expand-toggle");
const sidebarRailItems = document.querySelectorAll("[data-sidebar-rail]");
const sidebarReviewCount = document.querySelector("#sidebar-review-count");
const todayFocusCopy = document.querySelector("#today-focus-copy");
const skillTrack = document.querySelector("#skill-track");
const masteryTrack = document.querySelector("#mastery-track");
const levelProgressFill = document.querySelector("#level-progress-fill");
const levelProgressText = document.querySelector("#level-progress-text");
const taskStatusPill = document.querySelector("#task-status-pill");
const roadmapName = document.querySelector("#roadmap-name");
const roadmapModule = document.querySelector("#roadmap-module");
const roadmapNextUnlock = document.querySelector("#roadmap-next-unlock");
const viewRoadmapButton = document.querySelector("#view-roadmap");
const roadmapModal = document.querySelector("#roadmap-modal");
const roadmapModalTitle = document.querySelector("#roadmap-modal-title");
const roadmapModalSummary = document.querySelector("#roadmap-modal-summary");
const roadmapLevelComplete = document.querySelector("#roadmap-level-complete");
const roadmapList = document.querySelector("#roadmap-list");
const closeRoadmapButton = document.querySelector("#close-roadmap");
const needsReviewCard = document.querySelector("#needs-review-card");
const needsReviewCount = document.querySelector("#needs-review-count");
const needsReviewCountCopy = document.querySelector("#needs-review-count-copy");
const needsReviewList = document.querySelector("#needs-review-list");
const needsReviewResume = document.querySelector("#needs-review-resume");
const needsReviewManage = document.querySelector("#needs-review-manage");
const needsReviewModal = document.querySelector("#needs-review-modal");
const needsReviewManagerList = document.querySelector("#needs-review-manager-list");
const closeNeedsReviewButton = document.querySelector("#close-needs-review");
const reviewReminder = document.querySelector("#review-reminder");
const activePlanList = document.querySelector("#active-plan-list");
const planCount = document.querySelector("#plan-count");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const SIDEBAR_COLLAPSE_STORAGE_KEY = "iteriq-sidebar-collapsed";

const ambitionProfiles = {
  ai: {
    label: "AI and data analysis",
    outcome: "turn messy information into useful models, dashboards, and decisions",
    artifact: "analysis notebook or dashboard",
    audience: "a product, research, or operations team",
    tools: ["datasets", "notebooks", "statistics", "model evaluation"],
    relevance: [
      "Use each lesson to make data easier to trust: clean inputs, explain assumptions, and compare results.",
      "Practice writing short findings beside the code so non-technical teammates can act on your work.",
      "The strongest proof is a repeatable analysis that ends with a recommendation, not just a chart."
    ]
  },
  web: {
    label: "Web and app development",
    outcome: "ship interfaces and services people can reliably use",
    artifact: "responsive feature or small app",
    audience: "users moving through a real workflow",
    tools: ["APIs", "state", "forms", "deployment"],
    relevance: [
      "Tie fundamentals to behavior users can see: validation, loading states, navigation, and feedback.",
      "Practice turning vague needs into screens, data flow, and clear failure states.",
      "The strongest proof is a working app feature that handles normal use and edge cases."
    ]
  },
  cybersecurity: {
    label: "cybersecurity",
    outcome: "understand systems well enough to protect, test, and monitor them",
    artifact: "secure service or audit script",
    audience: "security, IT, or engineering reviewers",
    tools: ["input validation", "logs", "networking", "threat models"],
    relevance: [
      "Study every concept through the path data takes into, through, and out of a program.",
      "Connect lessons to failure modes like unsafe parsing, missing validation, weak secrets, and poor logs.",
      "The strongest proof is code with misuse cases tested and the security tradeoffs documented."
    ]
  },
  automation: {
    label: "business automation",
    outcome: "remove repetitive work and make operations easier to trust",
    artifact: "automation script or workflow tool",
    audience: "teammates who need dependable outputs",
    tools: ["files", "spreadsheets", "APIs", "scheduled jobs"],
    relevance: [
      "Prioritize scripts that save time, reduce mistakes, and leave a clear audit trail.",
      "Practice cleaning messy inputs and producing outputs a non-technical teammate can use immediately.",
      "The strongest proof is an automation that documents time saved and errors prevented."
    ]
  },
  games: {
    label: "games and interactive media",
    outcome: "create interactive systems with clear feedback loops",
    artifact: "playable prototype",
    audience: "players testing feel, rules, and feedback",
    tools: ["loops", "events", "physics", "state machines"],
    relevance: [
      "Connect syntax to timing, input, feedback, rules, and player experience.",
      "Practice tiny complete interactions before expanding the game world or mechanics.",
      "The strongest proof is a playable prototype with tuned controls and visible polish."
    ]
  },
  custom: {
    label: "your goal",
    outcome: "turn coding concepts into practical outcomes for that field",
    artifact: "domain-specific project",
    audience: "people in that profession or goal area",
    tools: ["domain data", "workflows", "interfaces", "documentation"],
    relevance: [
      "Map each lesson to a real workflow, decision, or deliverable in the field.",
      "Keep a vocabulary list that translates coding terms into professional outcomes.",
      "The strongest proof is a project that someone in the field would recognize as useful."
    ]
  }
};

const languageProfiles = {
  Python: {
    core: ["data structures", "functions", "modules", "error handling"],
    build: "script, notebook, API, or dashboard",
    quality: "readability, testing, dependency management, and clear outputs"
  },
  JavaScript: {
    core: ["DOM events", "arrays and objects", "async code", "API calls"],
    build: "interactive browser feature",
    quality: "responsive behavior, state clarity, and user feedback"
  },
  TypeScript: {
    core: ["types", "interfaces", "generics", "safe API contracts"],
    build: "typed app feature or service",
    quality: "type safety, refactoring confidence, and maintainable boundaries"
  },
  "HTML and CSS": {
    core: ["semantic HTML", "responsive layout", "forms", "accessibility"],
    build: "responsive page or interface",
    quality: "layout stability, readable hierarchy, and accessible controls"
  },
  Java: {
    core: ["classes", "collections", "exceptions", "interfaces"],
    build: "backend service or desktop utility",
    quality: "object design, tests, and predictable error handling"
  },
  "C#": {
    core: ["classes", "LINQ", "async tasks", "exceptions"],
    build: "desktop, game, or backend feature",
    quality: "clean models, testable services, and clear runtime behavior"
  },
  "C++": {
    core: ["memory", "types", "standard library", "performance"],
    build: "performance-sensitive tool or engine component",
    quality: "resource safety, profiling, and precise control"
  },
  SQL: {
    core: ["selects", "joins", "aggregation", "query design"],
    build: "report, dashboard dataset, or analytics view",
    quality: "correct joins, readable queries, and trustworthy metrics"
  },
  R: {
    core: ["data frames", "tidy transforms", "visualization", "statistical summaries"],
    build: "analysis report or reproducible notebook",
    quality: "clear assumptions, reproducible steps, and explainable charts"
  },
  Go: {
    core: ["structs", "interfaces", "goroutines", "errors"],
    build: "fast service, CLI, or automation tool",
    quality: "simple design, explicit errors, and reliable concurrency"
  },
  Rust: {
    core: ["ownership", "borrowing", "enums", "results"],
    build: "reliable systems tool",
    quality: "memory safety, strong types, and predictable performance"
  },
  Swift: {
    core: ["views", "state", "optionals", "async tasks"],
    build: "mobile feature",
    quality: "clear user flows, safe state, and polished interaction"
  },
  Kotlin: {
    core: ["null safety", "collections", "coroutines", "classes"],
    build: "Android or backend feature",
    quality: "safe models, clean async work, and maintainable screens"
  },
  React: {
    core: ["components", "props", "state", "effects"],
    build: "interactive app screen",
    quality: "component boundaries, accessible UI, and predictable state"
  },
  "Node.js": {
    core: ["modules", "routing", "async I/O", "API design"],
    build: "backend API or automation service",
    quality: "clear endpoints, validation, logs, and reliable errors"
  },
  default: {
    core: ["fundamentals", "program structure", "inputs and outputs", "debugging"],
    build: "practical project",
    quality: "clarity, correctness, and usefulness"
  }
};

const levelProfiles = {
  beginner: {
    label: "Beginner",
    pace: "Start with mental models and small wins.",
    verbs: ["Recognize", "Practice", "Build"],
    depth: "simple examples, guided structure, and short feedback loops"
  },
  intermediate: {
    label: "Intermediate",
    pace: "Build fluency with structure and real project tradeoffs.",
    verbs: ["Organize", "Handle", "Deliver"],
    depth: "project structure, edge cases, and domain-specific decisions"
  },
  advanced: {
    label: "Advanced",
    pace: "Push into design, reliability, performance, and review-ready work.",
    verbs: ["Design", "Harden", "Ship"],
    depth: "architecture choices, reliability checks, and professional polish"
  }
};

let activePlans = loadActivePlans();
let activePlanId = localStorage.getItem("codepath-active-plan-id") || "";
let currentInterviewQuestions = [];
let currentInterviewAnswers = [];
let currentInterviewIndex = 0;
let activeDictation = null;
let currentQuizAnswers = [];
let currentQuizItems = [];
let quizStarted = false;
let currentSubmission = null;
let mentorFlowState = "focus";
let taskMentorMessages = [];
let conceptMentorMessages = [];
let currentPlanState = null;
let currentPlanData = null;
let pyodideReadyPromise = null;
let skillTrackState = { concept: "", level: 1, total: 4, completed: 0 };
let activeLearningPath = null;
let lastMentorFeedback = null;
let learningProgressionMemory = { lastRequirement: "", completedMoves: [] };
let skippedTasks = loadSkippedTasks();
let resumedSkippedTaskId = null;
let resumedSkippedTaskContext = null;
let roadmapState = loadRoadmapState();
let masteryState = loadMasteryState();
let independentSolveState = loadIndependentSolveState();
let currentTaskHelpUsage = createEmptyHelpUsage();
let currentTaskIndependentRecorded = false;
let hintStepCounts = {};
let learningNotes = loadLearningNotes();
let progressState = loadProgressState();
let sidebarCollapsedPreference = localStorage.getItem(SIDEBAR_COLLAPSE_STORAGE_KEY) === "true";

function getState() {
  const formData = new FormData(form);
  const ambitionKey = formData.get("ambition");
  const baseProfile = ambitionProfiles[ambitionKey] || ambitionProfiles.custom;
  const customLabel = customAmbitionInput.value.trim();
  const profile = ambitionKey === "custom" && customLabel
    ? { ...baseProfile, label: customLabel, outcome: `create practical outcomes for ${customLabel}` }
    : baseProfile;

  return {
    language: getLanguageLabel(),
    level: formData.get("level") || "intermediate",
    ambitionKey,
    ambition: profile,
    task: taskInput.value.trim() || "a project connected to your goal",
    hours: Number(hoursInput.value) || 6
  };
}

function getLanguageLabel() {
  if (languageSelect.value === "other") {
    return customLanguageInput.value.trim() || "your chosen language";
  }

  return languageSelect.value;
}

function getLanguageProfile(language) {
  return languageProfiles[language] || languageProfiles.default;
}

function getPaceProfile(hours) {
  if (hours <= 4) {
    return {
      label: "Light pace",
      weeklyFocus: "one compact lesson, one short drill, and one note that connects the work to your goal",
      roadmapCount: 2,
      practiceCount: 3,
      exerciseCount: 2,
      quizCount: 3,
      builderCount: 3,
      weeklyTarget: 3,
      sessionPlan: "2 short study blocks"
    };
  }

  if (hours <= 9) {
    return {
      label: "Steady pace",
      weeklyFocus: "two study blocks, one applied build session, and one review pass",
      roadmapCount: 3,
      practiceCount: 4,
      exerciseCount: 3,
      quizCount: 5,
      builderCount: 4,
      weeklyTarget: 5,
      sessionPlan: "3 to 4 focused sessions"
    };
  }

  if (hours <= 14) {
    return {
      label: "Intensive pace",
      weeklyFocus: "deeper study, two applied builds, a debug pass, and a short explanation for your target audience",
      roadmapCount: 4,
      practiceCount: 5,
      exerciseCount: 4,
      quizCount: 6,
      builderCount: 5,
      weeklyTarget: 6,
      sessionPlan: "4 to 5 focused sessions"
    };
  }

  return {
    label: "Sprint pace",
    weeklyFocus: "daily practice, a project sprint, interview-style review, and a portfolio polish pass",
    roadmapCount: 5,
    practiceCount: 6,
    exerciseCount: 5,
    quizCount: 7,
    builderCount: 6,
    weeklyTarget: 7,
    sessionPlan: "5 to 6 focused sessions"
  };
}

function buildPlan(state) {
  state = normalizePlanState(state);
  const level = levelProfiles[state.level] || levelProfiles.intermediate;
  const language = getLanguageProfile(state.language);
  const pace = getPaceProfile(state.hours);
  const weeklyFocus = pace.weeklyFocus;

  const modules = [
    {
      title: `${level.verbs[0]} the ${state.language} essentials`,
      body: `Focus on ${joinList(language.core.slice(0, 2))}. Use ${level.depth} so the basics connect directly to ${state.task}.`,
      steps: [
        `Study ${language.core[0]} through one example from your task.`,
        `Use ${language.core[1]} to organize the example into a repeatable pattern.`,
        `Write a short note explaining what changed from input to output.`
      ],
      deliverable: `A small ${state.language} example connected to ${state.task}.`,
      check: `You can explain the example without reading line by line.`,
      tags: [state.language, language.core[0], state.level]
    },
    {
      title: `${level.verbs[1]} ${state.ambition.tools[0]} and ${state.ambition.tools[1]}`,
      body: `Apply ${joinList(language.core.slice(2))} to the parts of ${state.ambition.label} work where mistakes usually appear: inputs, assumptions, and handoffs.`,
      steps: [
        `Identify one messy input or unclear requirement in: ${state.task}`,
        `Use ${language.core[2] || language.core[0]} to handle the messy case.`,
        `Add one validation, test, or review note before moving on.`
      ],
      deliverable: `A more reliable workflow slice for ${state.ambition.audience}.`,
      check: `The module handles at least one realistic edge case.`,
      tags: [state.ambition.tools[0], state.ambition.tools[1], "quality"]
    },
    {
      title: `${level.verbs[2]} a ${state.ambition.artifact}`,
      body: `Turn the current task into a small ${language.build}. Finish with ${language.quality} so the result feels useful to ${state.ambition.audience}.`,
      steps: [
        `Define the smallest useful version of the ${state.ambition.artifact}.`,
        `Build one complete path from input to output.`,
        `Add a README-style explanation of who it helps and why.`
      ],
      deliverable: `A portfolio-ready slice of a ${state.ambition.artifact}.`,
      check: `Someone in ${state.ambition.label} can understand the result and why it matters.`,
      tags: [state.ambition.artifact, "portfolio", state.ambition.tools[2]]
    }
  ].slice(0, pace.roadmapCount);

  if (pace.roadmapCount >= 4) {
    modules.push({
      title: `Test and explain the ${state.ambition.artifact}`,
      body: `Use the extra weekly time to make the work easier to trust. Add a check, an edge case, and a plain-language explanation for ${state.ambition.audience}.`,
      steps: [
        `Choose one realistic failure case from ${state.task}.`,
        `Add a test, validation rule, or review checklist for that case.`,
        `Write the short explanation you would give to ${state.ambition.audience}.`
      ],
      deliverable: `A tested and explained version of the ${state.ambition.artifact}.`,
      check: `The work has one visible quality guard and one non-technical explanation.`,
      tags: ["testing", "explanation", pace.label]
    });
  }

  if (pace.roadmapCount >= 5) {
    modules.push({
      title: `Polish a portfolio-ready sprint`,
      body: `Use the sprint pace to turn practice into a finished sample: clearer inputs, documented decisions, and one interview-ready story about the tradeoff you made.`,
      steps: [
        `Package the best version of the project with a clear input and output.`,
        `Document one design choice, one limitation, and one next improvement.`,
        `Practice explaining the project in a two-minute interview answer.`
      ],
      deliverable: `A portfolio-ready ${state.ambition.artifact} with a short project story.`,
      check: `You can show the artifact, explain the tradeoff, and name the next improvement.`,
      tags: ["portfolio", "interview", "sprint"]
    });
  }

  const relevance = [
    {
      title: `Why ${state.language} matters here`,
      body: `${state.language} helps you ${state.ambition.outcome}. In this path, every concept points back to a deliverable: ${state.task}.`,
      details: [
        `Professional context: your audience needs outputs that are clear, reliable, and easy to act on.`,
        `Technical focus: ${joinList(language.core.slice(0, 3))}.`,
        `Avoid: learning syntax without connecting it to a decision, workflow, or artifact.`
      ]
    },
    {
      title: "How to study it",
      body: `Spend the week on ${weeklyFocus}. Keep each study block attached to a visible project outcome.`,
      details: [
        `Pace: ${pace.label} with ${pace.sessionPlan}.`,
        `Before studying: write the part of ${state.task} you want to improve.`,
        `During studying: build one tiny example before reading more theory.`,
        `After studying: explain what changed in plain language for ${state.ambition.audience}.`
      ]
    },
    {
      title: "What to show",
      body: `Create a ${state.ambition.artifact} that a person in ${state.ambition.label} can understand without reading every line of code.`,
      details: [
        `Portfolio proof: include the input, the output, and the reason the result is useful.`,
        `Quality proof: show ${language.quality}.`,
        `Interview proof: describe one tradeoff you made and how you checked the result.`
      ]
    }
  ];

  const practice = buildPracticeActivities(state, level, language, pace);

  const exercises = buildExercises(state, level, language, pace);
  const studyTools = buildStudyTools(state, level, language, pace);
  const interview = buildInterviewQuestions(state, level, language, pace);

  return { level, language, pace, weeklyFocus, modules, relevance, practice, exercises, studyTools, interview };
}

function normalizePlanState(state = {}) {
  const ambition = state.ambition || ambitionProfiles[state.ambitionKey] || ambitionProfiles.ai;
  const level = levelProfiles[state.level] ? state.level : "intermediate";
  const hours = Number.isFinite(Number(state.hours)) ? Number(state.hours) : 6;
  return {
    ...state,
    language: state.language || "Python",
    level,
    ambitionKey: state.ambitionKey || "ai",
    ambition,
    task: state.task || "Build a data dashboard and explain the results to a non-technical team.",
    hours
  };
}

function buildPracticeActivities(state, level, language, pace) {
  const sprintHours = Math.max(2, Math.round(state.hours / 2));
  const firstConcept = language.core[0];
  const secondConcept = language.core[1];
  const thirdConcept = language.core[2] || "debugging";
  const buildOptions = [
    {
      type: "Build",
      title: "Thin-slice prototype",
      body: `Build the smallest usable path for ${state.task}: one input, one ${state.language} transformation, and one useful output for ${state.ambition.audience}.`,
      time: `${sprintHours} hrs`,
      output: `A narrow but working ${state.ambition.artifact}.`,
      hint: `Do not start with the full project. Prove one path with ${firstConcept}, then add ${secondConcept} only where it makes the result clearer.`,
      check: "The prototype has a visible input, transformation, and output."
    },
    {
      type: "Debug",
      title: "Broken workflow repair",
      body: `Start with a messy or failing version of ${state.task}. Find the assumption that breaks, fix it, and document how you knew the fix worked.`,
      time: "35-60 min",
      output: "A before-and-after repair note with the corrected code or plan.",
      hint: `Choose a failure that would actually matter in ${state.ambition.label}: missing values, wrong ordering, unclear state, or a misleading output.`,
      check: "The fixed version handles one realistic failure case."
    },
    {
      type: "Refactor",
      title: "Make it easier to change",
      body: `Take a working piece of ${state.language} and reorganize it around ${secondConcept}. Keep behavior the same while making the next change easier.`,
      time: "30-50 min",
      output: "A cleaner version plus one sentence explaining what became easier.",
      hint: `Look for repeated logic, unclear names, or code that mixes input, transformation, and output in one place.`,
      check: "The refactor keeps the same result but makes the structure easier to explain."
    },
    {
      type: "Demo",
      title: "Explainable demo",
      body: `Create a tiny demo of ${state.task} that a person in ${state.ambition.label} can understand without reading every line of code.`,
      time: "25-45 min",
      output: "A demo plus a plain-language walkthrough.",
      hint: `Add labels, comments, output text, or a README-style note that explains what decision the code supports.`,
      check: `Someone from ${state.ambition.audience} can understand what happened and why it matters.`
    },
    {
      type: "Constraint",
      title: "Real-world constraint drill",
      body: `Add one constraint to the task: incomplete input, time pressure, larger data, unclear requirements, or an audience that needs a short explanation.`,
      time: "30-60 min",
      output: "A revised solution with one documented tradeoff.",
      hint: `Name the constraint first. Then decide whether ${thirdConcept} helps you handle it cleanly.`,
      check: "The solution shows the tradeoff instead of hiding the complexity."
    },
    {
      type: "Review",
      title: "Reviewer simulation",
      body: `Pretend this is someone else's ${state.language} work. Review it for clarity, correctness, ${language.quality}, and fit for ${state.ambition.label}.`,
      time: "20-35 min",
      output: "Three review comments and one improvement you would approve.",
      hint: "Write comments that point to behavior, not taste. Mention the risk, the fix, and why it matters.",
      check: "The review would help a teammate improve the work without guessing what you mean."
    }
  ];

  const warmups = [
    {
      type: "Warm-up",
      title: "Concept snap drill",
      body: `Use ${firstConcept} in a tiny example tied to ${state.task}, then explain the result in one plain sentence.`,
      time: "10-20 min",
      output: "A tiny working example plus one sentence explaining why it works.",
      hint: `Keep it small enough to finish fast. The goal is fluency with ${firstConcept}, not a complete project.`,
      check: `You can explain why ${firstConcept} was the right starting point.`
    },
    {
      type: "Warm-up",
      title: "Input to output sketch",
      body: `Sketch how information should move through ${state.task}: raw input, ${state.language} logic, useful output, and one thing that could go wrong.`,
      time: "10-15 min",
      output: "A four-step sketch before coding.",
      hint: "Use words first, then code. This keeps practice from turning into random typing.",
      check: "The sketch makes the first coding step obvious."
    }
  ];

  const explainers = [
    {
      type: "Explain",
      title: "Career translation",
      body: `Write a short explanation of how your code helps ${state.ambition.audience}. Avoid code jargon unless it clarifies the decision.`,
      time: "10 min",
      output: "A plain-language explanation you could use in a portfolio or interview.",
      hint: "Start with the outcome, then mention the code detail only if it explains the outcome.",
      check: "The explanation would make sense to someone who did not write the code."
    },
    {
      type: "Interview",
      title: "Explain under pressure",
      body: `Turn the week's work into a short answer: what you built, why it matters to ${state.ambition.label}, and how you checked that it works.`,
      time: "20-30 min",
      output: "A concise interview answer connected to your actual project.",
      hint: "Use the structure: problem, approach, tradeoff, check, result.",
      check: "The answer sounds specific to your project, not like a memorized definition."
    }
  ];

  const selectedBuilds = buildOptions.sort(() => Math.random() - 0.5);
  const selectedWarmup = warmups[Math.floor(Math.random() * warmups.length)];
  const selectedExplainer = explainers[Math.floor(Math.random() * explainers.length)];
  const activities = [selectedWarmup, ...selectedBuilds, selectedExplainer];

  return activities.slice(0, pace.practiceCount).map((item) => ({
    ...item,
    prompt: item.body,
    starter: getPracticeStarterCode(state.language, state.ambitionKey, item.type.toLowerCase(), state, language),
    steps: getPracticeSteps(item.type, state, language)
  }));
}

function getPracticeSteps(type, state, language) {
  const concept = language.core[0];
  const quality = language.quality;
  const steps = {
    Build: [
      "Choose one narrow input the user or project would actually have.",
      "Write the smallest transformation that turns it into a useful result.",
      `Add one visible output for ${state.ambition.audience}.`,
      `Add one quality pass: ${quality}.`
    ],
    Debug: [
      "Run or read the starter and identify the broken assumption.",
      "Write the bug in plain language before changing the code.",
      "Fix the smallest piece possible.",
      "Add one check that proves the bug will not come back immediately."
    ],
    Refactor: [
      "Mark what the starter already does correctly.",
      "Separate repeated or tangled logic into a clearer structure.",
      "Keep the same output after the refactor.",
      "Explain what future change is now easier."
    ],
    Demo: [
      "Keep the demo small enough for a two-minute walkthrough.",
      "Add labels, output text, or comments that explain the decision.",
      "Show one realistic input and one useful output.",
      "Write the sentence you would say while presenting it."
    ],
    Constraint: [
      "Pick one constraint and write it above the code.",
      "Change the starter so the constraint is handled directly.",
      "Document the tradeoff you accepted.",
      "Name one case that still needs more work."
    ],
    Review: [
      "Find one correctness risk.",
      "Find one readability or maintainability issue.",
      `Find one way the code could better support ${state.ambition.label}.`,
      "Write three review comments: risk, reason, suggested fix."
    ],
    "Warm-up": [
      "Keep the example tiny.",
      `Use ${concept} directly.`,
      "Print, display, or describe the result.",
      "Explain what changed from input to output."
    ],
    Explain: [
      "Start with the outcome, not the syntax.",
      "Name the user or team who benefits.",
      "Mention one technical detail only if it clarifies the result.",
      "End with the decision this work supports."
    ],
    Interview: [
      "Answer in the structure: problem, approach, tradeoff, check, result.",
      "Use one concrete detail from your task.",
      "Mention testing or validation.",
      "Keep it under two minutes."
    ]
  };

  return steps[type] || [
    `Connect the work to this task: ${state.task}`,
    `Use or mention ${concept} in a way that fits ${state.language}.`,
    `End with a note about how this helps ${state.ambition.audience}.`
  ];
}

function getPracticeStarterCode(language, ambitionKey, practiceType, state, languageProfile) {
  if (language === "Python" && ambitionKey === "ai") {
    const starters = {
      build: `# Build a thin dashboard slice for: ${state.task}
records = [
    {"segment": "trial", "users": 120, "converted": 18},
    {"segment": "paid", "users": 80, "converted": 22},
    {"segment": "enterprise", "users": 15, "converted": 9},
]

def conversion_rate(record):
    return record["converted"] / record["users"]

for record in records:
    rate = conversion_rate(record)
    print(f"{record['segment']}: {rate:.1%} conversion")

# Add: one summary insight a non-technical teammate could use.
`,
      debug: `# This script has a realistic bug: missing values can crash the dashboard.
records = [
    {"segment": "trial", "users": 120, "converted": 18},
    {"segment": "paid", "users": 80, "converted": None},
    {"segment": "enterprise", "users": 0, "converted": 0},
]

def conversion_rate(record):
    return record["converted"] / record["users"]

for record in records:
    print(record["segment"], conversion_rate(record))

# Fix the assumption, then add one check for missing or zero values.
`,
      refactor: `# This works, but it mixes cleaning, analysis, and reporting.
records = [
    {"team": "research", "hours": "5", "impact": "high"},
    {"team": "ops", "hours": "2", "impact": "medium"},
    {"team": "product", "hours": "", "impact": "high"},
]

for record in records:
    if record["hours"] == "":
        record["hours"] = 0
    else:
        record["hours"] = int(record["hours"])
    if record["impact"] == "high" and record["hours"] >= 3:
        print(record["team"], "needs a dashboard callout")

# Refactor into named functions without changing the output.
`,
      demo: `# Turn this into a tiny, explainable demo.
model_runs = [
    {"name": "baseline", "accuracy": 0.78, "notes": "fast"},
    {"name": "experiment_a", "accuracy": 0.83, "notes": "slower but better"},
]

best = max(model_runs, key=lambda run: run["accuracy"])
print("Recommended model:", best["name"])

# Add plain-language output explaining why this recommendation matters.
`,
      constraint: `# Constraint: the input may be incomplete or too messy for a clean dashboard.
rows = [
    {"date": "2026-04-01", "metric": "sales", "value": "42"},
    {"date": "2026-04-02", "metric": "", "value": "not available"},
    {"date": "", "metric": "sales", "value": "51"},
]

clean_rows = []
for row in rows:
    clean_rows.append({
        "date": row["date"],
        "metric": row["metric"],
        "value": float(row["value"]),
    })

print(clean_rows)

# Decide what to keep, fix, flag, or reject.
`,
      review: `# Review this code as if a teammate submitted it for an AI/data dashboard.
data = [
    {"department": "sales", "score": "9", "weight": 3},
    {"department": "support", "score": "bad", "weight": 2},
    {"department": "research", "score": "7", "weight": 0},
]

total = 0
for d in data:
    total = total + int(d["score"]) * d["weight"]

print("priority score:", total / len(data))

# Write review comments about correctness, readability, and trust.
`,
      "warm-up": `records = [
    {"label": "example", "value": 10},
    {"label": "second", "value": 18},
]

for record in records:
    print(record["label"], record["value"])

# Change the labels and values so they match your current task.
`,
      explain: `result = {
    "finding": "Conversion improved for paid users.",
    "evidence": "22 of 80 paid users converted.",
    "next_step": "Review what changed in the paid onboarding path.",
}

print(result["finding"])

# Rewrite this as a plain-language update for ${state.ambition.audience}.
`,
      interview: `# Use this project story structure:
# Problem: ${state.task}
# Approach: I used ${languageProfile.core[0]} and ${languageProfile.core[1]} to...
# Tradeoff: I chose...
# Check: I verified it by...
# Result: This helps ${state.ambition.audience} by...
`
    };

    return starters[practiceType] || getStarterCode(language, ambitionKey, practiceType, state);
  }

  if (language === "SQL") {
    const starters = {
      review: `-- Review this query for correctness and usefulness.
SELECT
  team,
  AVG(score) AS average_score,
  COUNT(*) AS rows_reviewed
FROM project_table
WHERE score IS NOT NULL
GROUP BY team
ORDER BY average_score DESC;

-- Add review comments about filtering, grouping, and whether the output supports ${state.ambition.label}.
`,
      debug: `-- This query may hide important missing data.
SELECT
  category,
  SUM(value) AS total_value
FROM project_table
WHERE value > 0
GROUP BY category;

-- Identify what gets excluded and how you would verify the result.
`
    };

    return starters[practiceType] || getStarterCode(language, ambitionKey, practiceType, state);
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    const starters = {
      review: `const items = [
  { name: "alpha", value: "10", status: "ready" },
  { name: "beta", value: "", status: "blocked" },
  { name: "gamma", value: "30", status: "ready" }
];

const total = items.reduce((sum, item) => sum + Number(item.value), 0);
const message = "Total value: " + total;

// Review for edge cases, naming, and whether this output helps ${state.ambition.audience}.
`,
      debug: `const items = [
  { name: "alpha", value: 10 },
  { name: "beta" },
  { name: "gamma", value: 30 }
];

const average = items.reduce((sum, item) => sum + item.value, 0) / items.length;
const preview = average;

// Fix the missing-value issue and add one check.
`
    };

    return starters[practiceType] || getStarterCode(language, ambitionKey, practiceType, state);
  }

  return getStarterCode(language, ambitionKey, practiceType, state);
}

function buildStudyTools(state, level, language, pace) {
  const concepts = language.core;
  const flashcards = concepts.map((concept, index) => buildFlashcard(concept, index, state, level, language));

  const quiz = buildQuizBank(state, level, language).sort(() => Math.random() - 0.5).slice(0, pace.quizCount);

  const glossary = [
    {
      term: concepts[0],
      definition: `A core ${state.language} idea to represent or organize information for ${state.ambition.label}.`
    },
    {
      term: concepts[1],
      definition: `A practical skill for turning a requirement into reusable logic or structure.`
    },
    {
      term: concepts[2],
      definition: `A tool for handling real project complexity, especially when the input or workflow changes.`
    },
    {
      term: state.ambition.artifact,
      definition: `The concrete thing you are building so the learning turns into proof of skill.`
    }
  ];

  const builder = [
    `Define the smallest useful version of: ${state.task}`,
    `Use ${concepts[0]} and ${concepts[1]} in the first pass.`,
    `Add one quality step: ${language.quality}.`,
    `Write a two-sentence explanation for ${state.ambition.audience}.`,
    `Add one realistic edge case from ${state.ambition.label}.`,
    `Prepare a two-minute demo or interview walkthrough.`
  ].slice(0, pace.builderCount);

  return { flashcards, quiz, glossary, builder };
}

function buildQuizBank(state, level, language) {
  const concepts = language.core;
  const bank = [
    quizQuestion(
      "Concept",
      `You are starting ${state.task}. Which ${state.language} concept gives you the best first structure?`,
      concepts[0],
      [concepts[1], "a larger color palette", "a finished resume bullet"],
      `${concepts[0]} is the best first structure for this path because it helps organize the core information.`
    ),
    quizQuestion(
      "Scenario",
      `A teammate asks why your ${state.ambition.artifact} is useful. What is the strongest answer?`,
      `It helps ${state.ambition.audience} make sense of the work.`,
      ["It uses the longest code possible.", "It avoids explaining assumptions.", "It only proves syntax knowledge."],
      `The app should connect code to usefulness for ${state.ambition.audience}.`
    ),
    quizQuestion(
      "Debugging",
      `Your output looks wrong after changing the input. What should you do first?`,
      "Reproduce the issue with a small example.",
      ["Rewrite everything immediately.", "Ignore the input and style the page.", "Add more features before checking."],
      "A small reproduction makes debugging faster and less random."
    ),
    quizQuestion(
      "Quality",
      `Before calling this ${state.ambition.artifact} portfolio-ready, what should you improve?`,
      language.quality,
      ["Only the title", "The number of tabs", "Unrelated visual decoration"],
      `Portfolio work needs ${language.quality}, not just more surface area.`
    ),
    quizQuestion(
      "Career",
      `What makes ${state.language} relevant to ${state.ambition.label}?`,
      `It can help ${state.ambition.outcome}.`,
      ["It removes the need to understand the domain.", "It only matters for interviews.", "It guarantees correct results automatically."],
      `${state.language} is useful when it supports real ${state.ambition.label} outcomes.`
    ),
    quizQuestion(
      "Level",
      `For a ${level.label.toLowerCase()} learner, what should your answer emphasize?`,
      level.depth,
      ["Only memorized definitions", "Unrelated tools", "Skipping practice until later"],
      `${level.label} study should match the expected depth: ${level.depth}.`
    ),
    quizQuestion(
      "Tradeoff",
      `When using ${concepts[1]} in ${state.language}, what is the most professional habit?`,
      "Explain why it fits this problem and name one tradeoff.",
      ["Use it everywhere automatically.", "Avoid testing it.", "Choose it because it sounds advanced."],
      "Professional answers explain fit and tradeoffs instead of chasing advanced-sounding tools."
    ),
    quizQuestion(
      "Testing",
      `Which test case would best strengthen your current task?`,
      "A realistic edge case from the project workflow.",
      ["Only the easiest happy path", "A random example unrelated to the task", "No test until the end of the course"],
      "Realistic edge cases make the learning transfer to actual project work."
    )
  ];

  return bank;
}

function quizQuestion(type, question, correct, distractors, explanation) {
  const options = [correct, ...distractors].sort(() => Math.random() - 0.5);
  return {
    type,
    question,
    options,
    answer: options.indexOf(correct),
    explanation
  };
}

function buildFlashcard(concept, index, state, level, language) {
  const levelGuidance = {
    beginner: {
      prompt: `What is ${concept} in ${state.language}?`,
      answer: `${concept} is a basic building block for organizing code or information.`,
      mistake: `Trying to memorize the word without using it in a tiny example.`,
      tryThis: `Make a tiny example for ${state.task}.`
    },
    intermediate: {
      prompt: `When should you use ${concept} in a real ${state.language} project?`,
      answer: `Use ${concept} when it makes the code easier to change, test, or explain.`,
      mistake: `Using it everywhere instead of choosing it when it simplifies the workflow.`,
      tryThis: `Refactor one small part and name the tradeoff.`
    },
    advanced: {
      prompt: `What tradeoffs does ${concept} create in ${state.language}?`,
      answer: `${concept} can improve structure, but may add complexity if the problem is too small.`,
      mistake: `Optimizing the pattern before proving it improves the system.`,
      tryThis: `Compare one design with it and one without it.`
    }
  }[state.level];

  return {
    concept,
    badge: `${level.label} card ${index + 1}`,
    prompt: levelGuidance.prompt,
    answer: levelGuidance.answer,
    context: `For ${state.ambition.label}: ${state.ambition.artifact}.`,
    mistake: levelGuidance.mistake,
    tryThis: levelGuidance.tryThis
  };
}

function buildInterviewQuestions(state, level, language, pace) {
  const concepts = language.core;
  const scenario = state.task;
  const roleContext = state.ambition.label;
  const audience = state.ambition.audience;
  const levelAngle = {
    beginner: "explain your thinking clearly and use a small example",
    intermediate: "discuss tradeoffs, edge cases, and how you would test it",
    advanced: "cover design choices, reliability, complexity, and maintainability"
  }[state.level];

  const questionCount = pace.quizCount <= 3 ? 4 : pace.quizCount <= 5 ? 5 : 6;
  const bank = [
    {
      type: "Concept explanation",
      question: `An interviewer asks: "Explain ${concepts[0]} in ${state.language} without using textbook language." How do you answer?`,
      prompt: `Use a simple definition, then connect it to ${scenario}.`,
      rubric: ["definition", "example", concepts[0], roleContext, "clear"],
      expectation: `A strong answer defines ${concepts[0]}, gives a concrete example, and connects it to ${roleContext}.`
    },
    {
      type: "Live coding plan",
      question: `Before writing code, walk through how you would solve this in ${state.language}: ${scenario}`,
      prompt: "Name the input, the output, the main logic, and the first edge case you would test.",
      rubric: ["input", "output", "edge case", "test", concepts[1]],
      expectation: `A strong answer should describe inputs, outputs, edge cases, and at least one way to test the solution.`
    },
    {
      type: "Debugging scenario",
      question: `Your ${state.ambition.artifact} gives a result that looks plausible but is wrong. What do you do first, second, and third?`,
      prompt: `Assume the issue might come from the input, the ${state.language} logic, or an assumption about ${roleContext}.`,
      rubric: ["reproduce", "inspect", "logs", "test", "assumption"],
      expectation: "A strong answer should show a step-by-step debugging process instead of guessing."
    },
    {
      type: "Tool tradeoff",
      question: `Why would you choose ${state.language} for ${roleContext}, and when would you choose something else?`,
      prompt: "Give one strength, one limitation, and one practical decision rule.",
      rubric: ["strength", "limitation", "tradeoff", "audience", state.language],
      expectation: `A strong answer should name strengths, limitations, and a tradeoff for the professional context.`
    },
    {
      type: "Level follow-up",
      question: `Give a ${state.level} answer: ${levelAngle} while discussing ${concepts[2] || concepts[0]} in this project.`,
      prompt: "Answer at the level you selected, not as a generic overview.",
      rubric: [concepts[2] || concepts[0], "example", "tradeoff", "test", "clear"],
      expectation: `A strong answer should match the ${level.label.toLowerCase()} level and include a concrete example.`
    },
    {
      type: "Code review",
      question: `You are reviewing a teammate's ${state.language} solution for ${scenario}. What would you look for before approving it?`,
      prompt: `Think about readability, correctness, ${language.quality}, and whether ${audience} can trust the output.`,
      rubric: ["readability", "correctness", "test", "quality", "explain"],
      expectation: "A strong answer should cover code quality, project fit, and a clear approval standard."
    },
    {
      type: "System design",
      question: `Design a tiny version of this ${state.ambition.artifact}. What parts would you separate, and why?`,
      prompt: `Keep it small: input, transformation, output, and one place where ${concepts[1]} helps.`,
      rubric: ["input", "output", "separate", concepts[1], "why"],
      expectation: "A strong answer should divide the work into understandable parts and explain the design choice."
    },
    {
      type: "Testing strategy",
      question: `What three tests would give you confidence that your ${state.ambition.artifact} works for ${roleContext}?`,
      prompt: "Include one normal case, one edge case, and one case tied to the user's profession or goal.",
      rubric: ["normal", "edge case", "test", roleContext, "confidence"],
      expectation: "A strong answer should show practical testing judgment instead of only mentioning generic tests."
    },
    {
      type: "Communication",
      question: `Explain your solution to ${audience} in plain language. What do you say and what detail do you leave out?`,
      prompt: "Focus on the decision the code supports, not just the syntax.",
      rubric: ["plain language", "audience", "decision", "outcome", "omit"],
      expectation: "A strong answer should translate the technical work into useful professional context."
    },
    {
      type: "Constraint change",
      question: `Halfway through the interview, the requirement changes: the input is messy, incomplete, or larger than expected. How do you adapt?`,
      prompt: `Tie your answer to ${concepts[3] || concepts[0]} and one realistic constraint from ${roleContext}.`,
      rubric: ["adapt", "constraint", "edge case", concepts[3] || concepts[0], "tradeoff"],
      expectation: "A strong answer should adjust the plan without throwing away the whole solution."
    }
  ];

  const opening = bank.slice(0, 2);
  const varied = bank.slice(2).sort(() => Math.random() - 0.5).slice(0, Math.max(0, questionCount - opening.length));
  return [...opening, ...varied].sort((a, b) => {
    if (a.type === "Concept explanation") return -1;
    if (b.type === "Concept explanation") return 1;
    return 0;
  });
}

function buildExercises(state, level, language, pace) {
  const firstConcept = language.core[0];
  const secondConcept = language.core[1];
  const thirdConcept = language.core[2] || "debugging";

  return [
    {
      type: "Warm-up",
      title: `${level.verbs[0]} ${firstConcept}`,
      prompt: `Create a tiny ${state.language} example that uses ${firstConcept} to represent something from this task: ${state.task}`,
      starter: getStarterCode(state.language, state.ambitionKey, "warmup", state),
      hint: `Keep it small. Name the data after something a ${state.ambition.label} project would actually track.`,
      check: `You should be able to explain what each value means and why ${firstConcept} was useful.`
    },
    {
      type: "Applied",
      title: `${level.verbs[1]} a real workflow step`,
      prompt: `Use ${secondConcept} and ${thirdConcept} to turn one messy input into a cleaner output for ${state.ambition.label}.`,
      starter: getStarterCode(state.language, state.ambitionKey, "applied", state),
      hint: `Think input -> rule -> output. Add at least one edge case or missing value.`,
      check: `The result should make ${state.task} easier to complete, explain, or trust.`
    },
    {
      type: "Project",
      title: `${level.verbs[2]} a portfolio slice`,
      prompt: `Build one small piece of a ${state.ambition.artifact}. It should be useful to ${state.ambition.audience} even if it is not a full app yet.`,
      starter: getStarterCode(state.language, state.ambitionKey, "project", state),
      hint: `Write the smallest version that proves the idea. Then add one polish pass: validation, labeling, comments, or a clearer output.`,
      check: `A reviewer should understand the input, the output, and how it connects to ${state.ambition.label}.`
    },
    {
      type: "Debug",
      title: "Find and fix one weak point",
      prompt: `Add one realistic mistake or edge case to your ${state.language} work, then fix it and explain the change.`,
      starter: getStarterCode(state.language, state.ambitionKey, "debug", state),
      hint: `Use the kind of issue that would matter in ${state.ambition.label}: missing data, unclear input, a wrong assumption, or a confusing output.`,
      check: `The before-and-after version should make the project easier to trust.`
    },
    {
      type: "Capstone",
      title: "Ship a small learning artifact",
      prompt: `Combine one concept, one real constraint, and one explanation into a finished mini artifact for ${state.ambition.audience}.`,
      starter: getStarterCode(state.language, state.ambitionKey, "project", state),
      hint: `Keep the scope tight, but make it complete: input, logic, output, quality check, and explanation.`,
      check: `You should be able to show the artifact and explain why it belongs in your ${state.ambition.label} path.`
    }
  ].slice(0, pace.exerciseCount);
}

function getStarterCode(language, ambitionKey, exerciseType, state) {
  const comment = language === "HTML and CSS" ? "<!--" : language === "SQL" ? "--" : "//";
  const closeComment = language === "HTML and CSS" ? " -->" : "";

  if (language === "Python") {
    if (ambitionKey === "ai") {
      return exerciseType === "warmup"
        ? "records = [\n    {\"label\": \"example\", \"value\": 10},\n]\n\nfor record in records:\n    print(record[\"label\"], record[\"value\"])\n"
        : "def clean_record(record):\n    return {\n        \"label\": record.get(\"label\", \"unknown\"),\n        \"value\": float(record.get(\"value\", 0))\n    }\n\nprint(clean_record({\"label\": \"sales\", \"value\": \"42\"}))\n";
    }

    return "def solve_task(item):\n    # Replace this with logic for your project.\n    return item\n\nprint(solve_task(\"first example\"))\n";
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    return "const items = [\n  { name: \"example\", value: 10 }\n];\n\nconst result = items.map((item) => ({\n  ...item,\n  ready: item.value > 0\n}));\n\nconst preview = result;\n";
  }

  if (language === "SQL") {
    return "-- Replace table and column names with your project data.\nSELECT\n  category,\n  COUNT(*) AS total_items\nFROM project_table\nGROUP BY category\nORDER BY total_items DESC;\n";
  }

  if (language === "HTML and CSS") {
    return "<section class=\"result-card\">\n  <h2>Project result</h2>\n  <p>Explain the useful output here.</p>\n</section>\n";
  }

  return `${comment} Starter idea for ${state.language}${closeComment}\n${comment} 1. Define the input.${closeComment}\n${comment} 2. Transform or validate it.${closeComment}\n${comment} 3. Show a useful output for ${state.ambition.label}.${closeComment}\n`;
}

// Stability boundary: secondary/sidebar panels must never prevent the core mentor task from mounting.
function safeRenderSection(label, renderer) {
  try {
    renderer();
  } catch (error) {
    console.warn(`${label} could not render. Keeping the main mentor loop available.`, error);
  }
}

function ensureCoreTaskMounted(plan = currentPlanData, state = currentPlanState) {
  if (!plan || !state || !moduleList) {
    return;
  }

  if (!moduleList.querySelector(".current-task-card")) {
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(plan, state));
  }

  if (currentTaskView && !currentTaskView.dataset.flow) {
    currentTaskView.dataset.flow = mentorFlowState || "focus";
  }
}

function renderPlan(state = getState(), options = {}) {
  state = normalizePlanState(state);
  const previousLanguage = currentPlanState?.language;
  const plan = buildPlan(state);
  activeLearningPath = options.learningPath || null;
  resumedSkippedTaskId = null;
  resumedSkippedTaskContext = null;
  updateSkillTrackForPlan(plan, state, options.progression, previousLanguage);
  currentPlanState = state;
  currentPlanData = plan;
  currentSubmission = null;
  currentTaskHelpUsage = createEmptyHelpUsage();
  currentTaskIndependentRecorded = false;
  if (!options.keepFeedbackContext || options.learningPath?.choice === "understand") {
    conceptMentorMessages = [];
  }
  if (!options.keepFeedbackContext) {
    lastMentorFeedback = null;
  }
  taskAttemptInput.value = options.prefillAttempt || "";
  renderResumeScaffold(null);
  updateAttemptEditorLanguage();
  updateEditorLineNumbers();
  submissionStatus.textContent = options.prefillAttempt
    ? "Your previous attempt is loaded. Revise it, then submit again."
    : "No attempt submitted yet.";
  renderEmptyMentorFeedback();
  nextStepTitle.textContent = "Keep building this skill";
  nextStepCopy.textContent = "Use the mentor feedback to make one focused improvement, then submit the updated attempt.";
  nextStepPanel.hidden = true;
  const savedPlan = options.save === false ? null : saveActivePlan(state, plan);
  if (savedPlan) {
    activePlanId = savedPlan.id;
    localStorage.setItem("codepath-active-plan-id", activePlanId);
    markProgress("plan", `Generated ${savedPlan.name}`);
  }

  hoursOutput.value = state.hours;
  planTitle.textContent = "Today's Task";
  planSubtitle.textContent = `${state.language} / ${plan.level.label} / ${state.ambition.label}`;
  paceChip.textContent = `${state.hours} hrs/week - ${plan.pace.label}`;
  updateSetupSummary(state, plan);
  collapseSetupPanel();
  ensureRoadmapForState(state, plan);

  insightStrip.replaceChildren();
  [
    ["Mentor note", `One focused task. Submit a real attempt, then improve the next small thing.`]
  ].forEach(([title, body]) => insightStrip.append(createInsight(title, body)));

  moduleList.replaceChildren();
  moduleList.append(createCurrentTaskCard(plan, state));
  renderEmptyTaskToolResponse();
  closeHelpPanel(false);
  setMentorFlowState("focus");

  safeRenderSection("Supporting learning panels", () => {
    relevanceCard.replaceChildren();
    plan.relevance.forEach((item) => {
      relevanceCard.append(createTextBlock(item, "relevance-block"));
    });

    practiceGrid.replaceChildren();
    plan.practice.forEach((item) => {
      practiceGrid.append(createPracticeCard(item));
    });
    const exerciseHeader = document.createElement("div");
    const exerciseTitle = document.createElement("h3");
    const exerciseCopy = document.createElement("p");
    exerciseHeader.className = "practice-section-header";
    exerciseTitle.textContent = "Guided exercises";
    exerciseCopy.textContent = "Use these when you are ready to work inside the topic instead of only reading about it.";
    exerciseHeader.append(exerciseTitle, exerciseCopy);
    practiceGrid.append(exerciseHeader);
    plan.exercises.forEach((item, index) => {
      practiceGrid.append(createExerciseCard(item, index));
    });

    renderStudyTools(plan.studyTools);
    renderHelpActions(state, plan);

    currentInterviewQuestions = plan.interview;
    currentInterviewAnswers = currentInterviewQuestions.map(() => "");
    currentInterviewIndex = 0;
    interviewResult.replaceChildren();
    renderCurrentInterviewQuestion();
  });

  if (!options.silent) {
    generateButton.classList.add("generated");
    generateButton.querySelector("span:last-child").textContent = "Task updated";
    window.setTimeout(() => {
      generateButton.classList.remove("generated");
      generateButton.querySelector("span:last-child").textContent = "Update Current Task";
    }, 1200);
  }

  safeRenderSection("Saved plans", renderActivePlans);
  safeRenderSection("Progress tracker", renderProgressTracker);
  safeRenderSection("Needs review", renderNeedsReview);
  ensureCoreTaskMounted(plan, state);
}

function setMentorFlowState(state) {
  mentorFlowState = state;
  currentTaskView.dataset.flow = state;
  startSubmitButton.querySelector("span:last-child").textContent = state === "focus" ? "Start Task" : "Submit Attempt";
  startSubmitRow.hidden = state !== "focus";
  submissionPanel.hidden = state === "focus" || state === "deeper";
  mentorFeedback.hidden = state === "focus" || state === "submit" || state === "deeper";
  nextStepPanel.hidden = state !== "next";

  if (state === "submit") {
    window.setTimeout(() => taskAttemptInput.focus(), 0);
  }

  safeRenderSection("Task progress", renderTaskProgressRail);
  ensureCoreTaskMounted();
}

function renderTaskProgressRail() {
  if (!currentPlanState || !currentPlanData) {
    return;
  }

  const task = buildConcreteCurrentTask(currentPlanData, currentPlanState);
  const concept = currentPlanData.language.core[0];
  todayFocusCopy.textContent = `Practice ${concept} through one focused task: ${task.objective.toLowerCase()}. Submit one attempt, then improve the next small thing.`;
  skillTrack.textContent = `${titleCase(concept)} - Level ${skillTrackState.level} of ${skillTrackState.total}`;
  renderMasteryTrack();
  renderCurrentTaskStatus();
  renderRoadmapSummary();
}

function loadRoadmapState() {
  try {
    return JSON.parse(localStorage.getItem("iteriq-roadmap-state")) || { activeKey: "", paths: {} };
  } catch {
    return { activeKey: "", paths: {} };
  }
}

function persistRoadmapState() {
  localStorage.setItem("iteriq-roadmap-state", JSON.stringify(roadmapState));
}

function getRoadmapKey(state = currentPlanState) {
  if (!state) {
    return "";
  }
  return [state.language, state.level, state.ambition?.label || "goal"]
    .join(":")
    .toLowerCase()
    .replace(/[^a-z0-9:]+/g, "-");
}

function getActiveRoadmap() {
  if (!roadmapState || typeof roadmapState !== "object" || !roadmapState.paths || typeof roadmapState.paths !== "object") {
    roadmapState = { activeKey: "", paths: {} };
  }
  return roadmapState.paths[roadmapState.activeKey] || null;
}

function ensureRoadmapForState(state, plan) {
  const key = getRoadmapKey(state);
  if (!key) {
    return null;
  }
  roadmapState.paths = roadmapState.paths || {};
  if (!roadmapState.paths[key]) {
    roadmapState.paths[key] = createRoadmapForState(state, plan);
  } else {
    syncRoadmapTemplate(roadmapState.paths[key], getRoadmapModulesForSetup(state, plan));
  }
  roadmapState.activeKey = key;
  persistRoadmapState();
  return roadmapState.paths[key];
}

function syncRoadmapTemplate(path, modules) {
  if (!path?.modules?.length) {
    return;
  }
  modules.forEach((template, index) => {
    if (!path.modules[index]) {
      return;
    }
    path.modules[index] = {
      ...path.modules[index],
      section: template.section,
      name: template.name,
      purpose: template.purpose,
      nextUnlock: template.nextUnlock || modules[index + 1]?.name || path.modules[index].nextUnlock
    };
  });
}

function createRoadmapForState(state, plan) {
  const modules = getRoadmapModulesForSetup(state, plan).map((module, index, list) => ({
    ...module,
    id: `${index + 1}-${module.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    status: index === 0 ? "in_progress" : "locked",
    tasksDone: 0,
    tasksRequired: module.tasksRequired || 3,
    checks: {
      independent: 0,
      independentRequired: 2,
      applied: 0,
      appliedRequired: 1,
      explained: 0,
      explainedRequired: 1
    },
    needsReviewCount: 0,
    nextUnlock: module.nextUnlock || list[index + 1]?.name || "Complete this level"
  }));

  return {
    id: getRoadmapKey(state),
    name: `${state.language} / ${titleCase(state.level)} / ${state.ambition.label}`,
    language: state.language,
    level: state.level,
    goal: state.ambition.label,
    currentIndex: 0,
    completed: false,
    modules
  };
}

function getRoadmapModulesForSetup(state, plan) {
  const isPythonAiBeginner = state.language === "Python"
    && state.level === "beginner"
    && /ai|data/i.test(state.ambition?.label || "");

  if (isPythonAiBeginner) {
    return [
      ["Foundations", "Variables and expressions", "Store values and calculate simple results for analysis.", "Lists"],
      ["Foundations", "Lists", "Work with ordered groups of values like scores, prices, or rows.", "Dictionaries"],
      ["Foundations", "Dictionaries", "Connect labels to values so data has meaning.", "Loops and conditionals"],
      ["Foundations", "Loops and conditionals", "Repeat work and make decisions from simple data.", "Functions"],
      ["Foundations", "Functions", "Package repeated logic into reusable steps.", "Reading simple data"],
      ["Data workflow", "Reading simple data", "Bring small datasets into code and inspect what they contain.", "Cleaning missing values"],
      ["Data workflow", "Cleaning missing values", "Handle blanks and invalid entries before calculating.", "Summarizing values"],
      ["Data workflow", "Summarizing values", "Calculate totals, averages, counts, and useful metrics.", "Filtering data"],
      ["Data workflow", "Filtering data", "Keep only the rows or values that match a condition.", "Grouping data"],
      ["Data workflow", "Grouping data", "Summarize values by category, status, or segment.", "Simple visualization"],
      ["Communication", "Simple visualization", "Turn a result into a chart or readable display.", "Beginner mini project"],
      ["Communication", "Beginner mini project", "Combine the basics into a small analysis artifact.", "Intermediate Python"]
    ].map(([section, name, purpose, nextUnlock]) => ({ section, name, purpose, nextUnlock }));
  }

  const language = plan?.language || getLanguageProfile(state.language);
  const core = language.core || ["core syntax", "data flow", "debugging", "structure"];
  const modules = [
    {
      section: "Foundations",
      name: titleCase(core[0]),
      purpose: getRoadmapPurposeCopy(titleCase(core[0]), state),
      nextUnlock: titleCase(core[1] || "Applied practice")
    },
    {
      section: "Foundations",
      name: titleCase(core[1] || "Control flow"),
      purpose: `Use ${state.language} to organize work into repeatable steps.`,
      nextUnlock: getRoadmapModuleName(core[2] || "Handling edge cases", state)
    },
    {
      section: "Applied workflow",
      name: getRoadmapModuleName(core[2] || "Handling edge cases", state),
      purpose: `Handle the places where ${state.ambition.label} work gets messy.`,
      nextUnlock: titleCase(core[3] || "Clean structure")
    },
    {
      section: "Applied workflow",
      name: titleCase(core[3] || "Clean structure"),
      purpose: `Make the solution easier to read, test, and revise.`,
      nextUnlock: `${state.ambition.label} mini project`
    },
    {
      section: "Project",
      name: getRoadmapProjectName(state),
      purpose: `Combine the current level into one useful ${state.ambition.artifact}.`,
      nextUnlock: `Next ${state.language} level`
    }
  ];

  return modules;
}

function getRoadmapModuleName(name, state) {
  if (state.language === "Python" && /^modules$/i.test(name)) {
    return "Libraries + Data Tools";
  }
  return titleCase(name);
}

function getRoadmapProjectName(state) {
  if (state.language === "Python" && /ai|data/i.test(state.ambition?.label || "")) {
    return "Mini Project: Analyze a Small Dataset";
  }
  return `${titleCase(state.level)} ${state.ambition.label} mini project`;
}

function getRoadmapPurposeCopy(moduleName, state) {
  if (state.language === "Python" && /^data structures$/i.test(moduleName)) {
    return "Learn to store related values in lists and dictionaries, then use them in calculations.";
  }
  return `Build the first usable pattern in ${state.language}.`;
}

function getCurrentRoadmapModule(path = getActiveRoadmap()) {
  if (!path?.modules?.length) {
    return null;
  }
  return path.modules[Math.min(path.currentIndex || 0, path.modules.length - 1)];
}

function getRoadmapModuleProgress(module) {
  if (!module) {
    return { complete: 0, total: 4 };
  }
  const checks = module.checks || {};
  const complete = Math.min(checks.independent || 0, checks.independentRequired || 2)
    + Math.min(checks.applied || 0, checks.appliedRequired || 1)
    + Math.min(checks.explained || 0, checks.explainedRequired || 1);
  return { complete, total: 4 };
}

function getRoadmapMasteryGoalText(module) {
  const checks = module?.checks || {};
  return `Complete ${checks.independentRequired || 2} tasks without help, ${checks.appliedRequired || 1} applied task, and ${checks.explainedRequired || 1} explanation.`;
}

function getRoadmapReviewText(module) {
  const count = module?.needsReviewCount || 0;
  return count > 0 ? `${count} task${count === 1 ? "" : "s"} needs review` : "No tasks need review";
}

function getRoadmapCheckLines(module) {
  const progress = getRoadmapModuleProgress(module);
  return [
    `Mastery goal: ${getRoadmapMasteryGoalText(module)}`,
    `Progress: ${progress.complete} / ${progress.total} mastery checks complete`,
    getRoadmapReviewText(module)
  ];
}

function renderRoadmapSummary() {
  const path = getActiveRoadmap();
  const module = getCurrentRoadmapModule(path);
  if (!path || !module) {
    roadmapName.textContent = "Roadmap: Not started";
    skillTrack.textContent = "Generate a task";
    roadmapModule.textContent = "Complete this task";
    roadmapNextUnlock.textContent = "Your path appears after setup.";
    return;
  }
  const nextModule = path.modules[Math.min((path.currentIndex || 0) + 1, path.modules.length - 1)];
  roadmapName.textContent = `${path.language} ${titleCase(path.level)} -> ${getShortGoalLabel(path.goal)}`;
  skillTrack.textContent = module.name;
  roadmapModule.textContent = path.completed ? "Level complete" : nextModule?.name || module.nextUnlock;
  roadmapNextUnlock.textContent = path.completed
    ? `${titleCase(path.level)} ${path.language} path complete.`
    : `Complete ${module.name} to unlock.`;
}

function getShortGoalLabel(goal = "") {
  const lower = String(goal).toLowerCase();
  if (lower.includes("ai") || lower.includes("data")) {
    return "AI/Data";
  }
  if (lower.includes("web") || lower.includes("app")) {
    return "Web/App";
  }
  if (lower.includes("cyber")) {
    return "Cybersecurity";
  }
  if (lower.includes("automation")) {
    return "Automation";
  }
  if (lower.includes("game")) {
    return "Games";
  }
  return String(goal).replace(/\s+and\s+/gi, "/").slice(0, 18) || "Goal";
}

function recordRoadmapTaskOutcome(outcome) {
  const path = getActiveRoadmap();
  const module = getCurrentRoadmapModule(path);
  if (!path || !module) {
    return;
  }

  if (outcome === "correct-independent") {
    module.tasksDone = Math.min(module.tasksRequired || 3, (module.tasksDone || 0) + 1);
    module.checks.independent = Math.min(module.checks.independentRequired, (module.checks.independent || 0) + 1);
    module.checks.applied = Math.min(module.checks.appliedRequired, (module.checks.applied || 0) + 1);
    module.needsReviewCount = Math.max(0, (module.needsReviewCount || 0) - (resumedSkippedTaskId ? 1 : 0));
  } else if (outcome === "correct-helped") {
    module.tasksDone = Math.min(module.tasksRequired || 3, (module.tasksDone || 0) + 1);
    module.needsReviewCount = Math.max(0, (module.needsReviewCount || 0) - (resumedSkippedTaskId ? 1 : 0));
  } else if (outcome === "explained") {
    module.checks.explained = Math.min(module.checks.explainedRequired, (module.checks.explained || 0) + 1);
  } else if (outcome === "incorrect" || outcome === "skipped") {
    module.needsReviewCount = Math.max(1, module.needsReviewCount || 0);
  }

  updateRoadmapStatuses(path);
  persistRoadmapState();
  renderRoadmapSummary();
  renderRoadmapModal();
}

function updateRoadmapStatuses(path = getActiveRoadmap()) {
  if (!path?.modules?.length) {
    return;
  }

  path.modules.forEach((module, index) => {
    const checks = getRoadmapModuleProgress(module);
    if (checks.complete === checks.total && (module.needsReviewCount || 0) === 0) {
      module.status = "completed";
      if (index === path.currentIndex && path.modules[index + 1]) {
        path.currentIndex = index + 1;
      }
      return;
    }
    if ((module.needsReviewCount || 0) > 0) {
      module.status = index === path.currentIndex ? "in_progress" : "needs_review";
      return;
    }
    module.status = index <= path.currentIndex ? (index === path.currentIndex ? "in_progress" : "available") : "locked";
  });

  path.modules.forEach((module, index) => {
    if (index < path.currentIndex && module.status !== "completed" && module.status !== "needs_review") {
      module.status = "available";
    }
    if (index === path.currentIndex && module.status === "locked") {
      module.status = "in_progress";
    }
  });
  path.completed = path.modules.every((module) => module.status === "completed");
}

function openRoadmapModal() {
  renderRoadmapModal();
  roadmapModal.hidden = false;
}

function closeRoadmapModal() {
  roadmapModal.hidden = true;
}

function continueCurrentRoadmapTask() {
  closeRoadmapModal();
  setMentorFlowState(taskAttemptInput.value.trim() ? "submit" : "focus");
  currentTaskView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getReviewTaskForRoadmapModule(module) {
  if (!module || skippedTasks.length === 0) {
    return null;
  }
  return skippedTasks.find((task) => {
    const values = [task.concept, task.taskTitle, task.task?.title, task.instruction, task.task?.instruction]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const moduleTokens = String(module.name || "")
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((token) => token.length > 3);
    return moduleTokens.some((token) => values.includes(token));
  }) || skippedTasks[0];
}

function renderRoadmapModal() {
  if (!roadmapList) {
    return;
  }
  const path = getActiveRoadmap();
  roadmapList.replaceChildren();
  roadmapLevelComplete.hidden = true;
  if (!path) {
    roadmapModalTitle.textContent = "Learning path";
    roadmapModalSummary.textContent = "Generate a task to create a roadmap.";
    return;
  }

  updateRoadmapStatuses(path);
  roadmapModalTitle.textContent = `${path.language} ${titleCase(path.level)} Roadmap`;
  roadmapModalSummary.textContent = `${getShortGoalLabel(path.goal)} path. Open a module to see its goal, progress, and unlock details.`;
  if (path.completed) {
    renderRoadmapCompletion(path);
  }

  path.modules.forEach((module, index) => {
    roadmapList.append(createSimpleRoadmapModuleCard(module, index));
  });
}

function renderRoadmapCompletion(path) {
  roadmapLevelComplete.hidden = false;
  roadmapLevelComplete.replaceChildren();
  const title = document.createElement("strong");
  const copy = document.createElement("p");
  const actions = document.createElement("div");
  title.textContent = `${titleCase(path.level)} ${path.language} path complete.`;
  copy.textContent = "Choose the next direction when you are ready.";
  actions.className = "roadmap-completion-actions";
  const nextLevelLabel = path.level === "beginner"
    ? "Move to Intermediate"
    : path.level === "intermediate" ? "Move to Advanced" : "Start advanced project";
  [
    ["move-level", nextLevelLabel],
    ["project", `Start ${path.level} project`],
    ["review", "Review weak areas"]
  ].forEach(([action, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = action === "move-level" ? "primary-action compact-action" : "secondary-action";
    button.dataset.roadmapAction = action;
    button.textContent = label;
    actions.append(button);
  });
  roadmapLevelComplete.append(title, copy, actions);
}

function createRoadmapModuleCard(module, index) {
  const card = document.createElement("article");
  const icon = document.createElement("span");
  const body = document.createElement("div");
  const titleRow = document.createElement("div");
  const title = document.createElement("h3");
  const status = document.createElement("span");
  const purpose = document.createElement("p");
  const checks = document.createElement("ul");
  const next = document.createElement("p");
  const progress = getRoadmapModuleProgress(module);

  card.className = [
    "roadmap-module-card",
    module.status === "locked" ? "is-locked" : "",
    module.status === "completed" ? "is-completed" : "",
    module.status === "needs_review" ? "needs-review" : "",
    index === getActiveRoadmap()?.currentIndex ? "is-current" : ""
  ].filter(Boolean).join(" ");
  icon.className = "roadmap-module-icon";
  icon.textContent = module.status === "completed" ? "✓" : String(index + 1);
  body.className = "roadmap-module-body";
  titleRow.className = "roadmap-module-title";
  title.textContent = module.name;
  status.className = `roadmap-status ${module.status === "completed" ? "is-completed" : ""} ${module.status === "needs_review" ? "needs-review" : ""}`.trim();
  status.textContent = module.status.replace("_", " ");
  purpose.className = "roadmap-purpose";
  purpose.textContent = module.purpose;
  checks.className = "roadmap-checks";
  getRoadmapCheckLines(module).forEach((line) => {
    const item = document.createElement("li");
    item.textContent = line;
    checks.append(item);
  });
  next.className = "roadmap-next";
  next.textContent = module.status === "completed"
    ? `Unlocked: ${module.nextUnlock}`
    : `Next unlock: ${module.nextUnlock} after ${progress.complete} of ${progress.total} mastery checks.`;
  titleRow.append(title, status);
  body.append(titleRow, purpose, checks, next);
  card.append(icon, body);
  return card;
}

function createSimpleRoadmapModuleCard(module, index) {
  const card = document.createElement("details");
  const summary = document.createElement("summary");
  const icon = document.createElement("span");
  const titleRow = document.createElement("div");
  const title = document.createElement("h3");
  const status = document.createElement("span");
  const body = document.createElement("div");
  const purpose = document.createElement("p");
  const masteryGoal = document.createElement("p");
  const progressLine = document.createElement("p");
  const reviewLine = document.createElement("p");
  const next = document.createElement("p");
  const actions = document.createElement("div");
  const progress = getRoadmapModuleProgress(module);
  const isCurrent = index === getActiveRoadmap()?.currentIndex;
  const reviewTask = getReviewTaskForRoadmapModule(module);

  card.className = [
    "roadmap-module-card",
    module.status === "locked" ? "is-locked" : "",
    module.status === "completed" ? "is-completed" : "",
    module.status === "needs_review" ? "needs-review" : "",
    isCurrent ? "is-current" : ""
  ].filter(Boolean).join(" ");
  card.open = isCurrent;
  summary.className = "roadmap-module-summary";
  icon.className = "roadmap-module-icon";
  icon.textContent = module.status === "completed" ? "OK" : String(index + 1);
  titleRow.className = "roadmap-module-title";
  title.textContent = module.name;
  status.className = `roadmap-status ${module.status === "completed" ? "is-completed" : ""} ${module.status === "needs_review" ? "needs-review" : ""}`.trim();
  status.textContent = getRoadmapStatusLabel(module, index);
  body.className = "roadmap-module-body";
  purpose.className = "roadmap-purpose";
  purpose.textContent = module.purpose;
  masteryGoal.className = "roadmap-detail-line";
  masteryGoal.innerHTML = `<strong>Mastery goal:</strong> ${getRoadmapMasteryGoalText(module)}`;
  progressLine.className = "roadmap-detail-line";
  progressLine.innerHTML = `<strong>Progress:</strong> ${progress.complete} / ${progress.total} mastery checks complete`;
  reviewLine.className = `roadmap-detail-line ${module.needsReviewCount ? "needs-review-note" : ""}`.trim();
  reviewLine.textContent = getRoadmapReviewText(module);
  next.className = "roadmap-next";
  next.textContent = module.status === "completed" ? `Unlocked: ${module.nextUnlock}` : `Next: ${module.nextUnlock}`;
  actions.className = "roadmap-module-actions";
  if (isCurrent) {
    const continueButton = document.createElement("button");
    continueButton.type = "button";
    continueButton.className = "primary-action compact-action";
    continueButton.dataset.roadmapAction = "continue-current";
    continueButton.textContent = `Continue ${module.name}`;
    actions.append(continueButton);
  }
  if ((module.needsReviewCount || 0) > 0 && reviewTask) {
    const reviewButton = document.createElement("button");
    reviewButton.type = "button";
    reviewButton.className = "secondary-action compact-action";
    reviewButton.dataset.roadmapAction = "review-task";
    reviewButton.dataset.reviewTaskId = reviewTask.id;
    reviewButton.textContent = module.needsReviewCount === 1 ? "Review task" : `${module.needsReviewCount} tasks need review`;
    actions.append(reviewButton);
  }
  titleRow.append(title, status);
  summary.append(icon, titleRow);
  body.append(purpose, masteryGoal, progressLine, reviewLine, next);
  if (actions.children.length > 0) {
    body.append(actions);
  }
  card.append(summary, body);
  return card;
}

function getRoadmapStatusLabel(module, index) {
  if (module.status === "completed") {
    return "Completed";
  }
  if (module.status === "needs_review") {
    return "Needs review";
  }
  if (index === getActiveRoadmap()?.currentIndex) {
    return "In progress";
  }
  if (index === (getActiveRoadmap()?.currentIndex || 0) + 1) {
    return "Next";
  }
  return module.status === "locked" ? "Locked" : "In progress";
}

function handleRoadmapAction(action, source = null) {
  if (action === "move-level") {
    const nextLevel = currentPlanState?.level === "beginner"
      ? "intermediate"
      : currentPlanState?.level === "intermediate" ? "advanced" : "advanced";
    const input = document.querySelector(`input[name="level"][value="${nextLevel}"]`);
    if (input) {
      input.checked = true;
    }
    closeRoadmapModal();
    renderPlan(getState());
    return;
  }
  if (action === "project") {
    taskInput.value = `${currentPlanState?.language || "Coding"} ${currentPlanState?.level || "beginner"} mini project for ${currentPlanState?.ambition?.label || "your goal"}`;
    closeRoadmapModal();
    renderPlan(getState());
    return;
  }
  if (action === "review") {
    const path = getActiveRoadmap();
    const reviewIndex = path?.modules?.findIndex((module) => module.status === "needs_review");
    if (path && reviewIndex >= 0) {
      path.currentIndex = reviewIndex;
      persistRoadmapState();
      renderRoadmapSummary();
    }
    closeRoadmapModal();
    return;
  }
  if (action === "continue-current") {
    continueCurrentRoadmapTask();
    return;
  }
  if (action === "review-task") {
    const id = source?.dataset?.reviewTaskId || skippedTasks[0]?.id;
    closeRoadmapModal();
    resumeSkippedTask(id);
    return;
  }
}

function titleCase(value) {
  return String(value)
    .split(" ")
    .map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function getMasteryKey() {
  const concept = currentPlanData?.language?.core?.[0] || "general";
  const language = currentPlanState?.language || "coding";
  return `${language}:${concept}`.toLowerCase();
}

function getCurrentMasteryScore() {
  return Math.max(0, Math.min(100, Number(masteryState[getMasteryKey()] || 0)));
}

function getIndependentSolveCount() {
  return Math.max(0, Number(independentSolveState[getMasteryKey()] || 0));
}

function getProgressToNextLevel() {
  const independentCount = Math.min(2, getIndependentSolveCount());
  return Math.round((independentCount / 2) * 100);
}

function getGoalText() {
  return "solved without help";
}

function renderMasteryTrack() {
  const independentCount = Math.min(2, getIndependentSolveCount());
  const progress = getProgressToNextLevel();
  masteryTrack.textContent = "";
  levelProgressText.textContent = `${independentCount} / 2 solved without help`;
  levelProgressFill.style.width = `${progress}%`;
}

function getCurrentTaskStatus() {
  const currentReview = skippedTasks.find((task) => task.taskTitle === getCurrentTaskPayload()?.title);
  if (currentReview) {
    return currentReview.status?.startsWith("Incomplete") ? "Needs review" : "Skipped (needs review)";
  }
  if (mentorFlowState === "focus" && !currentSubmission?.attempt && !taskAttemptInput.value.trim()) {
    return "Not started";
  }
  if (currentSubmission?.attempt && lastMentorFeedback && isCorrectMentorFeedback(lastMentorFeedback)) {
    return currentSubmission.completedWithHelp ? "Completed with help" : "Completed independently";
  }
  return "In progress";
}

function renderCurrentTaskStatus() {
  const status = getCurrentTaskStatus();
  taskStatusPill.textContent = `Current task: ${status}`;
  taskStatusPill.dataset.status = status.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function increaseMastery(amount) {
  const key = getMasteryKey();
  masteryState[key] = Math.min(100, getCurrentMasteryScore() + amount);
  persistMasteryState();
  renderMasteryTrack();
}

function increaseIndependentSolves() {
  const key = getMasteryKey();
  independentSolveState[key] = Math.min(2, getIndependentSolveCount() + 1);
  persistIndependentSolveState();
  renderMasteryTrack();
}

function createEmptyHelpUsage() {
  return {
    nudge: false,
    hint: false,
    solution: false,
    mentor: false,
    solutionLike: false
  };
}

function markTaskHelpUsed(type) {
  if (type === "guided") {
    currentTaskHelpUsage.hint = true;
    return;
  }
  if (type === "walkthrough") {
    currentTaskHelpUsage.solution = true;
    currentTaskHelpUsage.solutionLike = true;
    return;
  }
  if (type === "mentor") {
    currentTaskHelpUsage.mentor = true;
    return;
  }
  currentTaskHelpUsage.nudge = true;
}

function wasHelpUsed(helpUsage = currentTaskHelpUsage) {
  return Object.values(helpUsage).some(Boolean);
}

function getHintCount(helpUsage = currentTaskHelpUsage) {
  return ["nudge", "hint", "solution", "mentor", "solutionLike"]
    .reduce((total, key) => total + (helpUsage?.[key] ? 1 : 0), 0);
}

function getHintStepKey(task = getCurrentTaskPayload(), scope = "task") {
  const taskId = getTaskStorageId(task, currentPlanState?.language || "");
  const lessonStep = activeLearningPath?.choice === "understand"
    ? `lesson-${activeLearningPath.lessonStep || 1}`
    : mentorFlowState || "task";
  const focus = activeLearningPath?.focusRequirement || task?.title || task?.objective || "";
  return `${scope}:${taskId}:${lessonStep}:${focus}`.toLowerCase();
}

function getStepHintCount(task = getCurrentTaskPayload(), scope = "task") {
  return hintStepCounts[getHintStepKey(task, scope)] || 0;
}

function recordStepHintRequest(task = getCurrentTaskPayload(), scope = "task") {
  const key = getHintStepKey(task, scope);
  hintStepCounts[key] = (hintStepCounts[key] || 0) + 1;
  return hintStepCounts[key];
}

function userExplicitlyAsksForAnswer(text = "") {
  return /\b(show|give|tell|write|provide)\b[\s\S]*\b(answer|solution|exact code|full code|final code|correct code)\b/i.test(text)
    || /\b(full|exact|final|correct)\s+(answer|solution|code)\b/i.test(text)
    || /\b(just tell me|show me|give me)\s+the\s+(answer|solution|code)\b/i.test(text);
}

function submissionMatchesReferenceSolution(attempt, task) {
  return Boolean(
    task?.referenceSolution &&
    normalizeForComparison(attempt) === normalizeForComparison(task.referenceSolution)
  );
}

function updateSkillTrackForPlan(plan, state, progression = null, previousLanguage = currentPlanState?.language) {
  const concept = plan.language.core[0];
  const isSameTrack = skillTrackState.concept === concept && previousLanguage === state.language;
  if (!isSameTrack) {
    skillTrackState = { concept, level: 1, total: 4, completed: 0 };
  }

  if (progression && progression !== "skip-continue") {
    skillTrackState.completed = Math.min(skillTrackState.total, skillTrackState.completed + 1);
  }

  if (progression === "harder") {
    skillTrackState.level = Math.min(skillTrackState.total, skillTrackState.level + 1);
  }

  if (progression === "extend") {
    learningProgressionMemory.lastRequirement = activeLearningPath?.focusRequirement || learningProgressionMemory.lastRequirement;
    learningProgressionMemory.completedMoves = [
      ...new Set([
        ...learningProgressionMemory.completedMoves,
        ...inferCompletedMoves(activeLearningPath?.previousTask, activeLearningPath?.previousAttempt || "")
      ])
    ];
  }
}

function setEditorMode(mode) {
  const isCodeMode = mode === "code";
  editorModeInputs.forEach((input) => {
    input.checked = input.value === mode;
  });
  attemptEditor.classList.toggle("code-mode", isCodeMode);
  runCodeButton.hidden = !isCodeMode;
  formatCodeButton.hidden = !isCodeMode;
  codeOutputPanel.hidden = !isCodeMode;
  taskAttemptInput.placeholder = isCodeMode
    ? "Write or paste your code here."
    : "Paste code, write pseudocode, or explain your approach here.";
  updateRunCodeAvailability();
  updateEditorLineNumbers();
}

function updateAttemptEditorLanguage() {
  const language = currentPlanState?.language || getLanguageLabel();
  editorLanguage.textContent = language;
  attemptEditor.dataset.language = language.toLowerCase().replace(/[^a-z0-9+#]+/g, "-");
  updateRunCodeAvailability();
}

function getRunnableLanguage() {
  const language = (currentPlanState?.language || getLanguageLabel()).toLowerCase();
  if (language.includes("python")) {
    return "python";
  }
  if (["javascript", "typescript", "react", "node.js"].some((item) => language.includes(item))) {
    return "javascript";
  }
  return "unsupported";
}

function updateRunCodeAvailability() {
  if (!runCodeButton || runCodeButton.hidden) {
    return;
  }

  const runnableLanguage = getRunnableLanguage();
  const isSupported = runnableLanguage !== "unsupported";
  runCodeButton.disabled = !isSupported;
  if (!isSupported) {
    codeOutputStatus.textContent = "Unavailable";
    codeOutput.textContent = "Run Code is not available for this language yet.";
  } else if (codeOutput.textContent === "Run Code is not available for this language yet.") {
    codeOutputStatus.textContent = "Ready";
    codeOutput.textContent = "Run code to see output here.";
  }
}

function updateEditorLineNumbers() {
  const lines = Math.max(1, taskAttemptInput.value.split("\n").length);
  editorLineNumbers.textContent = Array.from({ length: lines }, (_, index) => index + 1).join("\n");
}

function syncEditorGutter() {
  editorLineNumbers.scrollTop = taskAttemptInput.scrollTop;
}

function handleAttemptEditorKeydown(event) {
  if (!attemptEditor.classList.contains("code-mode")) {
    return;
  }

  if (event.key === "Tab") {
    handleEditorTab(event);
  }

  if (event.key === "Enter") {
    handleEditorEnter(event);
  }
}

function handleEditorTab(event) {
  event.preventDefault();
  const indent = "  ";
  const start = taskAttemptInput.selectionStart;
  const end = taskAttemptInput.selectionEnd;
  const value = taskAttemptInput.value;

  if (event.shiftKey) {
    const lineStart = value.lastIndexOf("\n", start - 1) + 1;
    const removable = value.slice(lineStart, lineStart + indent.length) === indent ? indent.length : 0;
    if (removable) {
      taskAttemptInput.value = `${value.slice(0, lineStart)}${value.slice(lineStart + removable)}`;
      taskAttemptInput.selectionStart = Math.max(lineStart, start - removable);
      taskAttemptInput.selectionEnd = Math.max(lineStart, end - removable);
    }
    return;
  }

  taskAttemptInput.value = `${value.slice(0, start)}${indent}${value.slice(end)}`;
  taskAttemptInput.selectionStart = start + indent.length;
  taskAttemptInput.selectionEnd = start + indent.length;
  updateEditorLineNumbers();
}

function handleEditorEnter(event) {
  event.preventDefault();
  const start = taskAttemptInput.selectionStart;
  const end = taskAttemptInput.selectionEnd;
  const value = taskAttemptInput.value;
  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  const currentLine = value.slice(lineStart, start);
  const baseIndent = currentLine.match(/^\s*/)?.[0] || "";
  const shouldIndent = currentLine.trimEnd().endsWith(":") && isPythonLikeLanguage();
  const nextIndent = `${baseIndent}${shouldIndent ? "  " : ""}`;
  const insertion = `\n${nextIndent}`;

  taskAttemptInput.value = `${value.slice(0, start)}${insertion}${value.slice(end)}`;
  taskAttemptInput.selectionStart = start + insertion.length;
  taskAttemptInput.selectionEnd = start + insertion.length;
  updateEditorLineNumbers();
}

function isPythonLikeLanguage() {
  return (currentPlanState?.language || getLanguageLabel()).toLowerCase().includes("python");
}

function cleanUpCodeSpacing() {
  if (!attemptEditor.classList.contains("code-mode")) {
    return;
  }

  const cursor = taskAttemptInput.selectionStart;
  taskAttemptInput.value = isPythonLikeLanguage()
    ? cleanPythonSpacing(taskAttemptInput.value)
    : cleanGenericCodeSpacing(taskAttemptInput.value);
  taskAttemptInput.selectionStart = Math.min(cursor, taskAttemptInput.value.length);
  taskAttemptInput.selectionEnd = taskAttemptInput.selectionStart;
  updateEditorLineNumbers();
  taskAttemptInput.focus();
}

function cleanPythonSpacing(code) {
  return code
    .split("\n")
    .map((line) => {
      const indent = line.match(/^\s*/)?.[0] || "";
      const body = line.slice(indent.length)
        .replace(/[ \t]+$/g, "")
        .replace(/\s*([=!<>]=|[<>])\s*/g, " $1 ")
        .replace(/(?<![=!<>])\s*=\s*(?![=])/g, " = ")
        .replace(/\s*,\s*/g, ", ")
        .replace(/\s+([):\]])/g, "$1")
        .replace(/([(\[])\s+/g, "$1")
        .replace(/\s{2,}/g, " ");
      return `${indent}${body}`;
    })
    .join("\n");
}

function cleanGenericCodeSpacing(code) {
  return code
    .split("\n")
    .map((line) => {
      const indent = line.match(/^\s*/)?.[0] || "";
      const body = line.slice(indent.length)
        .replace(/[ \t]+$/g, "")
        .replace(/\s*([=!<>]=|[<>])\s*/g, " $1 ")
        .replace(/(?<![=!<>])\s*=\s*(?![=])/g, " = ")
        .replace(/\s*,\s*/g, ", ")
        .replace(/\s+([);}\]])/g, "$1")
        .replace(/\s{2,}/g, " ");
      return `${indent}${body}`;
    })
    .join("\n");
}

async function runCurrentCode() {
  if (!attemptEditor.classList.contains("code-mode")) {
    return;
  }

  const code = taskAttemptInput.value;
  const runnableLanguage = getRunnableLanguage();
  codeOutputPanel.hidden = false;

  if (!code.trim()) {
    setCodeOutput("Ready", "Write code before running it.");
    taskAttemptInput.focus();
    return;
  }

  if (runnableLanguage === "unsupported") {
    setCodeOutput("Unavailable", "Run Code is not available for this language yet.");
    return;
  }

  runCodeButton.disabled = true;
  setCodeOutput("Running", "Running code...");

  try {
    const output = runnableLanguage === "python"
      ? await runPythonCode(code)
      : await runJavaScriptCode(code);
    setCodeOutput("Success", output || "(No output)");
  } catch (error) {
    setCodeOutput("Error", error.message || String(error));
  } finally {
    runCodeButton.disabled = getRunnableLanguage() === "unsupported";
  }
}

function setCodeOutput(status, output) {
  codeOutputStatus.textContent = status;
  codeOutputPanel.dataset.status = status.toLowerCase();
  codeOutput.textContent = output;
}

async function runPythonCode(code) {
  const pyodide = await loadPyodideRuntime();
  const stdout = [];
  const stderr = [];
  pyodide.setStdout({ batched: (text) => stdout.push(text) });
  pyodide.setStderr({ batched: (text) => stderr.push(text) });
  try {
    const result = await pyodide.runPythonAsync(code);
    if (result !== undefined) {
      stdout.push(String(result));
    }
  } catch (error) {
    stderr.push(error.message || String(error));
  }

  return [...stdout, ...stderr.map((line) => `Error: ${line}`)].join("\n");
}

function loadPyodideRuntime() {
  if (window.pyodide) {
    return Promise.resolve(window.pyodide);
  }

  if (!pyodideReadyPromise) {
    pyodideReadyPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector("script[data-pyodide]");
      const script = existingScript || document.createElement("script");
      script.dataset.pyodide = "true";
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
      script.onload = async () => {
        try {
          window.pyodide = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"
          });
          resolve(window.pyodide);
        } catch (error) {
          reject(error);
        }
      };
      script.onerror = () => reject(new Error("Unable to load Python runtime. Check your internet connection, then try again."));
      if (!existingScript) {
        document.head.append(script);
      }
    });
  }

  return pyodideReadyPromise;
}

function runJavaScriptCode(code) {
  return new Promise((resolve, reject) => {
    const token = `run-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const iframe = document.createElement("iframe");
    const lines = [];
    let finished = false;
    iframe.hidden = true;
    iframe.sandbox = "allow-scripts";

    const cleanup = () => {
      window.removeEventListener("message", onMessage);
      iframe.remove();
    };

    const finish = () => {
      if (finished) {
        return;
      }
      finished = true;
      cleanup();
      resolve(lines.join("\n"));
    };

    const onMessage = (event) => {
      if (event.source !== iframe.contentWindow || event.data?.token !== token) {
        return;
      }
      if (event.data.type === "log") {
        lines.push(event.data.value);
      }
      if (event.data.type === "error") {
        lines.push(`Error: ${event.data.value}`);
      }
      if (event.data.type === "done") {
        finish();
      }
    };

    window.addEventListener("message", onMessage);
    iframe.srcdoc = createJavaScriptRunnerSource(code, token);
    document.body.append(iframe);
    window.setTimeout(() => {
      if (!finished) {
        cleanup();
        reject(new Error("Code timed out after 3 seconds."));
      }
    }, 3000);
  });
}

function createJavaScriptRunnerSource(code, token) {
  const escapedCode = JSON.stringify(code);
  const escapedToken = JSON.stringify(token);
  return `<!doctype html><meta charset="utf-8"><script>
const token = ${escapedToken};
const userCode = ${escapedCode};
const send = (type, value = "") => parent.postMessage({ token, type, value: String(value) }, "*");
const format = (value) => {
  if (typeof value === "string") return value;
  try { return JSON.stringify(value, null, 2); } catch { return String(value); }
};
console.log = (...args) => send("log", args.map(format).join(" "));
console.warn = (...args) => send("log", args.map(format).join(" "));
console.error = (...args) => send("error", args.map(format).join(" "));
(async () => {
  try {
    const result = await (0, eval)(\`(async () => {\\n\${userCode}\\n})()\`);
    if (result !== undefined) console.log(result);
  } catch (error) {
    send("error", error && error.stack ? error.stack : error);
  } finally {
    send("done");
  }
})();
<\/script>`;
}

function updateSetupSummary(state, plan) {
  setupSummaryTitle.textContent = `${state.language} / ${plan.level.label}`;
  setupSummaryMeta.textContent = `${state.ambition.label} / ${state.hours} hrs/week`;
}

function collapseSetupPanel() {
  if (!currentPlanData) {
    return;
  }

  form.classList.add("is-collapsed");
  setupSummary.hidden = false;
  collapseSetupButton.hidden = true;
}

function expandSetupPanel() {
  form.classList.remove("is-collapsed");
  setupSummary.hidden = true;
  collapseSetupButton.hidden = !currentPlanData;
}

function canCollapseSidebar() {
  return window.matchMedia("(min-width: 921px)").matches;
}

function applySidebarCollapsedState() {
  const collapsed = sidebarCollapsedPreference && canCollapseSidebar();
  appShell?.classList.toggle("sidebar-collapsed", collapsed);

  if (sidebarCollapseToggle) {
    sidebarCollapseToggle.textContent = collapsed ? "Expand sidebar" : "Collapse sidebar";
    sidebarCollapseToggle.setAttribute("aria-expanded", String(!collapsed));
    sidebarCollapseToggle.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
  }

  if (sidebarExpandToggle) {
    sidebarExpandToggle.setAttribute("aria-expanded", String(!collapsed));
  }
}

function setSidebarCollapsed(collapsed, options = {}) {
  sidebarCollapsedPreference = Boolean(collapsed);

  if (options.persist !== false) {
    localStorage.setItem(SIDEBAR_COLLAPSE_STORAGE_KEY, String(sidebarCollapsedPreference));
  }

  applySidebarCollapsedState();
}

function updateSidebarRailCounts() {
  if (!sidebarReviewCount) {
    return;
  }

  const count = skippedTasks.length;
  sidebarReviewCount.textContent = String(count);
  sidebarReviewCount.hidden = count === 0;
  const reviewRailItem = document.querySelector("[data-sidebar-rail='review']");
  if (reviewRailItem) {
    reviewRailItem.setAttribute(
      "aria-label",
      count > 0 ? `Review, ${count} task${count === 1 ? "" : "s"} waiting` : "Review"
    );
  }
}

function handleSidebarRailAction(action) {
  setSidebarCollapsed(false);

  window.setTimeout(() => {
    if (action === "setup") {
      expandSetupPanel();
      languageSelect.focus();
    }

    if (action === "roadmap") {
      openRoadmapModal();
    }

    if (action === "review" && skippedTasks.length > 0) {
      needsReviewResume.focus();
    }
  }, 0);
}

function openHelpPanel() {
  currentTaskView.classList.add("help-open");
  taskToolsPanel.classList.add("is-open");
  taskToolsPanel.setAttribute("aria-hidden", "false");
  taskToolsPanel.inert = false;
  openHelpPanelButton.setAttribute("aria-expanded", "true");
  closeHelpPanelButton.focus();
}

function closeHelpPanel(restoreFocus = true) {
  currentTaskView.classList.remove("help-open");
  taskToolsPanel.classList.remove("is-open");
  taskToolsPanel.setAttribute("aria-hidden", "true");
  taskToolsPanel.inert = true;
  openHelpPanelButton.setAttribute("aria-expanded", "false");
  if (restoreFocus) {
    openHelpPanelButton.focus();
  }
}

async function submitCurrentAttempt() {
  const attempt = taskAttemptInput.value.trim();

  if (!attempt) {
    submissionStatus.textContent = "Write an attempt before submitting.";
    taskAttemptInput.focus();
    return;
  }

  const taskPayload = getCurrentTaskPayload() || currentPlanState?.task || taskInput.value.trim();
  const helpUsage = { ...currentTaskHelpUsage };
  if (submissionMatchesReferenceSolution(attempt, taskPayload)) {
    helpUsage.solutionLike = true;
  }

  currentSubmission = {
    attempt,
    task: taskPayload,
    language: currentPlanState?.language || languageSelect.value,
    level: currentPlanState?.level || document.querySelector("input[name='level']:checked")?.value || "beginner",
    helpUsage,
    completedWithHelp: false,
    submittedAt: new Date().toISOString()
  };

  submissionStatus.textContent = "Submitting attempt and getting mentor feedback...";
  submitAttemptButton.disabled = true;
  submitAttemptButton.textContent = "Getting feedback...";
  setMentorFlowState("feedback");
  renderMentorFeedbackLoading();

  try {
    const feedback = applyLocalBehaviorFeedback(await requestMentorFeedback(currentSubmission), currentSubmission);
    lastMentorFeedback = feedback;
    const isCorrect = isCorrectMentorFeedback(feedback);
    if (isCorrect) {
      currentSubmission.completedWithHelp = wasHelpUsed(currentSubmission.helpUsage);
    }
    submissionStatus.textContent = `Attempt submitted at ${new Date(currentSubmission.submittedAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}.`;
    renderMentorFeedback(feedback);
    renderNextStep(feedback.nextStep, feedback);
    if (isCorrect) {
      if (currentSubmission.completedWithHelp) {
        recordRoadmapTaskOutcome("correct-helped");
        renderMasteryTrack();
      } else {
        if (!currentTaskIndependentRecorded) {
          increaseIndependentSolves();
          currentTaskIndependentRecorded = true;
        }
        increaseMastery(resumedSkippedTaskId ? 25 : 15);
        recordRoadmapTaskOutcome("correct-independent");
      }
      removeSkippedTask(resumedSkippedTaskId);
    } else {
      recordRoadmapTaskOutcome("incorrect");
      saveNeedsReviewTask(getSkipReasonFromFeedback(feedback), "Incomplete - needs review");
      renderNeedsReview();
    }
    setMentorFlowState("next");
    focusMentorFeedback();
  } catch (error) {
    submissionStatus.textContent = error.message;
    renderMentorFeedbackError(error.message);
    setMentorFlowState("feedback");
    focusMentorFeedback();
  } finally {
    submitAttemptButton.disabled = false;
    submitAttemptButton.textContent = "Submit Attempt";
  }
}

function applyLocalBehaviorFeedback(feedback, submission) {
  const behavior = assessSubmissionBehavior(submission?.attempt || "", submission?.task, submission?.language);
  if (behavior.result === "Incorrect") {
    return {
      ...feedback,
      result: "Incorrect",
      issueType: behavior.issueType || "LOGIC_ERROR",
      whatIsGood: feedback?.whatIsGood || "You included a task-related pattern, but it is not connected to the result yet.",
      whatIsWrong: behavior.message || feedback?.whatIsWrong || "The required behavior is not applied to the output.",
      whatToFixNext: behavior.nextFix || feedback?.whatToFixNext || "Move the corrected expression into the output line.",
      optionalNote: "",
      nextStep: behavior.nextFix || feedback?.nextStep || "Revise the output line, then submit again."
    };
  }
  if (behavior.result === "Correct (minor note)" && feedback?.result === "Incorrect") {
    return {
      ...feedback,
      result: "Correct (minor note)",
      issueType: "MINOR_SYNTAX",
      whatIsWrong: behavior.message || "The core logic is correct; only a minor syntax or style note remains.",
      optionalNote: behavior.message || feedback?.optionalNote || ""
    };
  }
  return feedback;
}

function renderEmptyMentorFeedback() {
  mentorFeedback.replaceChildren();
  mentorFeedback.classList.remove("loading", "emphasized");
  const eyebrow = document.createElement("p");
  const heading = document.createElement("h3");
  const copy = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Mentor feedback";
  heading.textContent = "Feedback will appear here";
  copy.textContent = "Submit an attempt to receive mentor feedback.";
  mentorFeedback.append(eyebrow, heading, copy);
}

function renderMentorFeedbackLoading() {
  mentorFeedback.replaceChildren();
  mentorFeedback.classList.add("loading");
  mentorFeedback.classList.remove("emphasized");
  const eyebrow = document.createElement("p");
  const heading = document.createElement("h3");
  const copy = document.createElement("p");
  const loader = document.createElement("span");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Mentor feedback";
  heading.textContent = "Reviewing your attempt";
  copy.textContent = "Checking your submission against the task, level, and language.";
  loader.className = "feedback-loader";
  mentorFeedback.append(eyebrow, heading, copy, loader);
}

function renderEmptyTaskToolResponse() {
  taskToolResponse.replaceChildren();
  taskMentorMessages = [];
  taskMentorResponse.replaceChildren();
  taskMentorQuestion.value = "";
  taskToolButtons.forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-pressed", "false");
  });
  const copy = document.createElement("p");
  copy.textContent = "Choose how much help you want for today's task.";
  taskToolResponse.append(copy);
}

async function renderTaskToolResponse(tool) {
  if (!currentPlanState || !currentPlanData) {
    return;
  }
  const state = currentPlanState;
  const plan = currentPlanData;
  const task = buildConcreteCurrentTask(plan, state);
  const hintCountBefore = getStepHintCount(task, "task-tools");
  if (tool === "nudge" || tool === "guided") {
    recordStepHintRequest(task, "task-tools");
  }
  markTaskHelpUsed(tool);

  const responses = getTaskHelpResponses(task, plan, state, hintCountBefore);

  const response = responses[tool] || responses.nudge;
  taskToolButtons.forEach((button) => {
    const isActive = button.dataset.tool === tool;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  taskToolResponse.replaceChildren();
  const heading = document.createElement("h4");
  const body = document.createElement("p");
  heading.textContent = response.title;
  body.textContent = response.body;
  taskToolResponse.append(heading, body);

  if (tool === "guided") {
    body.textContent = "Looking at your attempt so the hint stays focused...";
    try {
      const adaptiveHint = await requestAdaptiveTaskHint({
        task,
        submission: taskAttemptInput.value || currentSubmission?.attempt || "",
        hintCount: hintCountBefore,
        explicitAnswerRequest: false
      });
      body.textContent = adaptiveHint || response.body;
    } catch (error) {
      body.textContent = response.body;
    }
  }

  if (response.code) {
    const codeBlock = document.createElement("pre");
    const code = document.createElement("code");
    codeBlock.className = "task-tool-code";
    code.textContent = response.code;
    codeBlock.append(code);
    taskToolResponse.append(codeBlock);
  }

  if (response.next) {
    const next = document.createElement("p");
    next.className = "task-tool-next";
    next.textContent = response.next;
    taskToolResponse.append(next);
  }
}

function getTaskHelpResponses(task, plan, state, hintCount = 0) {
  const concept = plan.language.core[0];
  const focus = getTaskStepFocus(task);

  return {
    nudge: {
      title: "Nudge",
      body: getTaskNudge(focus)
    },
    guided: {
      title: "Guided hint",
      body: getTaskTechniqueHint(state, focus, concept, task, hintCount),
      next: `Apply it only to the ${focus.label} step, then check whether the output has this shape: ${task.expectedOutput}`
    },
    walkthrough: {
      title: "Walkthrough",
      body: "A minimal working pattern:",
      code: task.referenceSolution,
      next: "Change the names and values before submitting so it becomes your own attempt."
    }
  };
}

function getTaskStepFocus(task) {
  const taskText = `${task.instruction} ${task.steps.join(" ")}`.toLowerCase();
  const attempt = currentSubmission?.attempt?.toLowerCase() || "";
  const needsFunction = taskText.includes("function") || taskText.includes("reusable");
  const needsValidation = taskText.includes("invalid") || taskText.includes("missing") || taskText.includes("skip");
  const needsConditional = taskText.includes("conditional") || taskText.includes("label");
  const needsCalculation = taskText.includes("average") || taskText.includes("count") || taskText.includes("group");

  if (needsValidation && !/\b(valid|invalid|missing|skip|filter|where|isinstance|typeof)\b/.test(attempt)) {
    return { kind: "validation", label: "validation", nudge: "Decide what data should be trusted before you calculate or display anything." };
  }

  if (needsFunction && !/\b(def|function|return|=>)\b/.test(attempt)) {
    return { kind: "function", label: "reusable logic", nudge: "Separate the rule from the sample data so the same logic can run again." };
  }

  if (needsConditional && !/\b(if|else|elif|case|when|\?)\b/.test(attempt)) {
    return { kind: "conditional", label: "decision rule", nudge: "Pick the boundary that decides which label each item gets." };
  }

  if (needsCalculation && !/\b(sum|average|avg|count|length|len|group)\b/.test(attempt)) {
    return { kind: "calculation", label: "calculation", nudge: "Keep the raw values separate from the result you calculate from them." };
  }

  if (!/\b(print|console|return|select|display|show|output)\b/.test(attempt)) {
    return { kind: "output", label: "output", nudge: "Make the result visible so you can tell whether the logic worked." };
  }

  return { kind: "data", label: "sample data", nudge: "Choose a tiny set of realistic sample values before adding logic." };
}

function getTaskNudge(focus) {
  return focus.nudge;
}

function getTaskTechniqueHint(state, focus, concept, task = null, hintCount = 0) {
  const language = state.language;
  const contextualHint = getContextualAttemptHint(language, task);
  if (contextualHint) {
    return contextualHint;
  }

  if (hintCount <= 0) {
    return getFirstGuidedHint(language, focus, concept);
  }

  if (hintCount === 1) {
    return getDirectionalGuidedHint(language, focus, concept);
  }

  if (language === "Python") {
    if (focus.kind === "validation") {
      return "Use `isinstance(value, (int, float))` before including a value in a calculation. This prevents `None` or text from breaking the result.";
    }
    if (focus.kind === "function") {
      return "Use `def name(values):` with a `return` statement. Keep printing outside the function so the reusable logic stays clean.";
    }
    if (focus.kind === "conditional") {
      return "Use a `for name, value in data.items()` loop so you can compare each value to the average and assign a label.";
    }
    if (focus.kind === "calculation") {
      return "Use `sum(data.values()) / len(data)` when every dictionary value is numeric.";
    }
    if (focus.kind === "output") {
      return "Use `print()` with a short label so the result is readable, not just a raw value.";
    }
    return "Use a dictionary literal with names as keys and numbers as values before adding any calculations.";
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    if (focus.kind === "validation") {
      return "Use `.filter()` to keep only items with the fields you need before counting or displaying them.";
    }
    if (focus.kind === "function") {
      return "Use a small function that accepts an array and returns a summary object; keep sample data outside the function.";
    }
    if (focus.kind === "conditional") {
      return "Use a ternary expression or `if` statement to turn each status into a readable label.";
    }
    if (focus.kind === "calculation") {
      return "Use `.filter()` to remove invalid items, then return an object with the summary fields you need.";
    }
    if (focus.kind === "output") {
      return "Use `console.log()` for a quick check, or assign the final string to a variable if the result will go into the UI.";
    }
    return "Use an array of objects so each item can carry both a name and a status.";
  }

  if (language === "SQL") {
    if (focus.kind === "validation") {
      return "Use a CTE with `WITH clean_rows AS (...)` to filter first, then aggregate in the final query.";
    }
    if (focus.kind === "conditional") {
      return "Use `CASE WHEN ... THEN ... ELSE ... END` to create a readable label in the result.";
    }
    if (focus.kind === "calculation") {
      return "Use `GROUP BY` with `COUNT(*)` when you need one row per category.";
    }
    if (focus.kind === "output") {
      return "Use clear aliases with `AS` so each result column explains itself.";
    }
    return "Start by selecting only the columns needed for the final result.";
  }

  if (language === "HTML and CSS") {
    if (focus.kind === "conditional" || focus.kind === "validation") {
      return "Use a state class like `.is-warning` or `.is-ready` so the visual state is separate from the content.";
    }
    if (focus.kind === "output") {
      return "Use one clear heading, one label, and one emphasized value so the result can be scanned quickly.";
    }
    return "Use semantic HTML first, then attach reusable classes for the container, label, value, and state.";
  }

  return `Use ${concept} to keep the input shape clear before transforming or displaying the result.`;
}

function getFirstGuidedHint(language, focus, concept) {
  if (focus.kind === "validation") {
    if (language === "Python") {
      return "Think about which values should be trusted before the output runs. What part of your code decides whether a value is safe to use?";
    }
    if (language === "SQL") {
      return "Decide which rows should be allowed into the summary before aggregation happens. What condition separates usable rows from messy ones?";
    }
    return "Look for the point where unreliable input first enters the result. What should be checked before that value is displayed or calculated?";
  }
  if (focus.kind === "function") {
    return "Find the repeated rule in the task and separate it from the sample data. What single input should that rule receive?";
  }
  if (focus.kind === "conditional") {
    return "Focus on the decision the code needs to make. What question should the program answer for each item before choosing the result?";
  }
  if (focus.kind === "calculation") {
    return "Identify the raw values first, then think about what summary you need from them. Which values should feed the calculation?";
  }
  if (focus.kind === "output") {
    return "The logic only matters if the result is visible. Which final value should be shown to prove the task worked?";
  }
  return `Start with the smallest useful data shape for ${concept}. What names or fields does the task need before any logic runs?`;
}

function getDirectionalGuidedHint(language, focus, concept) {
  if (language === "Python") {
    if (focus.kind === "validation") {
      return "Filter or check each value before it enters the calculation. Keep the check close to the place where values are collected.";
    }
    if (focus.kind === "function") {
      return "Put the reusable rule in a function and return the result instead of printing from inside the reusable logic.";
    }
    if (focus.kind === "conditional") {
      return "Iterate through each key-value pair and apply the decision rule to one item at a time.";
    }
    if (focus.kind === "calculation") {
      return "Use the dictionary's stored values as the input to the calculation, then divide by the number of values you used.";
    }
    if (focus.kind === "output") {
      return "Put the final value inside the output call so the program shows the result of the logic, not an unused expression.";
    }
  }

  if (language === "SQL") {
    if (focus.kind === "validation") {
      return "Filter the rows before the summary step, then aggregate only the cleaned rows.";
    }
    if (focus.kind === "conditional") {
      return "Create the label in the SELECT list with a conditional expression, then make the result easy to read with an alias.";
    }
    if (focus.kind === "calculation") {
      return "Group by the same non-aggregated column you select, then count the rows in each group.";
    }
    if (focus.kind === "output") {
      return "Alias the result columns so the query output explains what each value means.";
    }
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    if (focus.kind === "validation") {
      return "Keep only the items that have the fields you need before you count, format, or display them.";
    }
    if (focus.kind === "function") {
      return "Move the reusable rule into a small function that receives the data and returns a result.";
    }
    if (focus.kind === "conditional") {
      return "Use one decision expression for the label or fallback, then feed that value into the output.";
    }
    if (focus.kind === "calculation") {
      return "Build the summary from the collection after removing invalid items, then return the calculated result.";
    }
  }

  return `Use ${concept} to shape the input before transforming or displaying the result.`;
}

function getContextualAttemptHint(language, task) {
  const attempt = taskAttemptInput?.value || currentSubmission?.attempt || "";
  const criteriaText = getTaskCriteriaText(task);
  if (!attempt.trim()) {
    return "";
  }

  if (language === "Python") {
    const safeLookup = assessPythonSafeLookup(attempt, criteriaText);
    if (safeLookup.result === "Incorrect" && /safe lookup|fallback|unsafe lookup|printed or returned/i.test(`${safeLookup.message} ${safeLookup.nextFix}`)) {
      return "You're still printing the unsafe lookup. Which expression should be inside print so the fallback is actually used?";
    }
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    const fallback = assessJavaScriptSafeFallback(attempt, criteriaText);
    if (fallback.result === "Incorrect") {
      return "The fallback needs to be part of the value you log or return. Which expression should produce the final output?";
    }
  }

  if (language === "SQL") {
    const grouping = assessSqlGrouping(attempt, criteriaText);
    if (grouping.result === "Incorrect") {
      return "Check whether the column after GROUP BY matches the non-aggregated column in SELECT.";
    }
  }

  if (["Java", "Kotlin", "Swift", "C#"].includes(language)) {
    const guarded = assessGuardedObjectAccess(attempt, criteriaText);
    if (guarded.result === "Incorrect") {
      return "The check only helps if the printed or returned value happens after the guard. Where should the output sit relative to the null check?";
    }
  }

  return "";
}

function getTaskWalkthroughCode(language, state) {
  const context = getTaskContext(state);
  const depth = Math.min(5, Math.max(1, Math.ceil((Number(state.hours) || 1) / 4)));

  if (language === "Python") {
    if (depth >= 5) {
      return `def summarize(values):
    clean = {k: v for k, v in values.items() if isinstance(v, (int, float))}
    average = sum(clean.values()) / len(clean)
    high_items = [name for name, value in clean.items() if value > average]
    return {"count": len(clean), "average": average, "high_items": high_items}

print(summarize({"${context.exampleItem}": 18, "baseline": 8, "missing": None}))`;
    }
    if (depth >= 3) {
      return `values = {"${context.exampleItem}": 18, "baseline": 8, "trial": 12}
average = sum(values.values()) / len(values)

for name, value in values.items():
    label = "${context.highLabel}" if value > average else "${context.lowLabel}"
    print(name, label, value)`;
    }
    return `values = {"${context.exampleItem}": 18, "baseline": 8, "trial": 12}
average = sum(values.values()) / len(values)

print("Average ${context.valueSingular}:", average)`;
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    if (depth >= 5) {
      return `function summarizeTasks(tasks) {
  const valid = tasks.filter((task) => typeof task.done === "boolean");
  const done = valid.filter((task) => task.done).length;
  const blocked = valid.filter((task) => !task.done).map((task) => task.name);
  return { total: valid.length, done, blocked };
}`;
    }
    return `const tasks = [
  { name: "${context.exampleAction}", done: true },
  { name: "review output", done: false }
];

console.log("Done tasks:", tasks.filter((task) => task.done).length);`;
  }

  if (language === "SQL") {
    if (depth >= 4) {
      return `WITH clean_rows AS (
  SELECT category, value
  FROM project_items
  WHERE category IS NOT NULL AND value IS NOT NULL
)
SELECT category, COUNT(*) AS item_count
FROM clean_rows
GROUP BY category;`;
    }
    return `SELECT category, COUNT(*) AS item_count
FROM project_items
GROUP BY category;`;
  }

  if (language === "HTML and CSS") {
    return `<section class="result-card">
  <h2>${context.contextLabel}</h2>
  <p>Average ${context.valueSingular}</p>
  <strong>12.50</strong>
</section>`;
  }

  return `values = [3 sample values for ${context.contextLabel}]
clean_values = remove invalid values
result = transform clean_values
show result with a clear label`;
}

function getCurrentTaskPayload() {
  if (!currentPlanState || !currentPlanData) {
    return null;
  }

  const task = buildConcreteCurrentTask(currentPlanData, currentPlanState);
  return {
    title: task.objective,
    instruction: task.instruction,
    steps: task.steps,
    expectedOutput: task.expectedOutput,
    acceptedCriteria: task.acceptedCriteria,
    solutionIntent: task.solutionIntent,
    referenceSolution: task.referenceSolution,
    language: currentPlanState.language,
    level: currentPlanState.level
  };
}

function getTaskMentorEndpoints() {
  return window.location.protocol === "file:"
    ? ["http://localhost:3000/ask-mentor", "http://127.0.0.1:3000/ask-mentor"]
    : ["/ask-mentor"];
}

function getAttemptAnalysisEndpoints() {
  return window.location.protocol === "file:"
    ? ["http://localhost:3000/api/analyze-attempt", "http://127.0.0.1:3000/api/analyze-attempt"]
    : ["/api/analyze-attempt"];
}

function getAdaptiveHintEndpoints() {
  return window.location.protocol === "file:"
    ? ["http://localhost:3000/api/generate-hint", "http://127.0.0.1:3000/api/generate-hint"]
    : ["/api/generate-hint"];
}

function getHintEvaluationEndpoints() {
  return window.location.protocol === "file:"
    ? ["http://localhost:3000/api/evaluate-hint", "http://127.0.0.1:3000/api/evaluate-hint"]
    : ["/api/evaluate-hint"];
}

async function postToFirstAvailableEndpoint(endpoints, payload) {
  let response = null;
  let fetchFailed = false;

  for (const endpoint of endpoints) {
    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      break;
    } catch (error) {
      fetchFailed = true;
    }
  }

  if (!response) {
    throw new Error(fetchFailed ? "The mentor backend is not running." : "Unable to reach the mentor backend.");
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "The mentor backend could not complete the request.");
  }

  return data;
}

async function requestAttemptAnalysis(payload) {
  return postToFirstAvailableEndpoint(getAttemptAnalysisEndpoints(), payload);
}

async function requestAdaptiveHint(payload) {
  return postToFirstAvailableEndpoint(getAdaptiveHintEndpoints(), payload);
}

async function requestHintEvaluation(payload) {
  return postToFirstAvailableEndpoint(getHintEvaluationEndpoints(), payload);
}

async function requestAdaptiveTaskHint({ task, submission, hintCount, explicitAnswerRequest = false }) {
  const analysis = await requestAttemptAnalysis({ task, submission, hintCount });
  const hint = await requestAdaptiveHint({ task, submission, analysis, hintCount, explicitAnswerRequest });
  const hintText = hint.hint || "";
  const evaluation = await requestHintEvaluation({ task, submission, analysis, hint: hintText, hintCount, explicitAnswerRequest });
  if (evaluation.rating === "appropriate") {
    return hintText;
  }

  const revised = await requestAdaptiveHint({
    task,
    submission,
    hintCount,
    explicitAnswerRequest,
    analysis: {
      ...analysis,
      quality_revision_instruction: evaluation.revision_instruction,
      previous_hint_rating: evaluation.rating
    }
  });
  return revised.hint || hintText;
}

async function requestTaskMentorAnswer(payload) {
  let response = null;
  let fetchFailed = false;

  for (const endpoint of getTaskMentorEndpoints()) {
    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      break;
    } catch (error) {
      fetchFailed = true;
    }
  }

  if (!response && fetchFailed) {
    throw new Error("The mentor backend is not running. Start the server, then try Ask Mentor again.");
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Unable to ask the mentor. Make sure the backend server is running.");
  }

  return data;
}

async function askTaskMentor() {
  const question = taskMentorQuestion.value.trim();
  const task = getCurrentTaskPayload();

  if (!task) {
    renderTaskMentorNotice("Generate a task first, then ask the mentor.");
    return;
  }

  if (!question) {
    renderTaskMentorNotice("Ask a specific question about this task.");
    taskMentorQuestion.focus();
    return;
  }

  markTaskHelpUsed("mentor");
  const hintCountBefore = getStepHintCount(task, "ask-mentor");
  const explicitAnswerRequest = userExplicitlyAsksForAnswer(question);
  if (!explicitAnswerRequest) {
    recordStepHintRequest(task, "ask-mentor");
  }
  askTaskMentorButton.disabled = true;
  askTaskMentorButton.textContent = "Asking...";
  taskMentorQuestion.value = "";
  addTaskMentorMessage("user", question);
  addTaskMentorMessage("mentor", "Mentor is thinking about this task...", true);
  renderTaskMentorConversation();

  try {
    const data = await requestTaskMentorAnswer({
      task,
      submission: taskAttemptInput.value || currentSubmission?.attempt || "",
      question,
      hintCount: hintCountBefore,
      explicitAnswerRequest,
      skipContext: getActiveSkipContext(),
      conversation: getRecentTaskMentorMessages()
    });
    replacePendingTaskMentorMessage(data.answer);
  } catch (error) {
    replacePendingTaskMentorMessage(error.message);
  } finally {
    askTaskMentorButton.disabled = false;
    askTaskMentorButton.textContent = "Ask";
    taskMentorQuestion.focus();
  }
}

function renderTaskMentorNotice(message) {
  taskMentorResponse.replaceChildren();
  const notice = document.createElement("p");
  notice.className = "task-mentor-notice";
  notice.textContent = message;
  taskMentorResponse.append(notice);
}

function addTaskMentorMessage(role, text, pending = false) {
  taskMentorMessages.push({ role, text, pending });
  taskMentorMessages = taskMentorMessages.slice(-6);
}

function replacePendingTaskMentorMessage(text) {
  const pendingMessage = [...taskMentorMessages].reverse().find((message) => message.pending);
  if (pendingMessage) {
    pendingMessage.text = text;
    pendingMessage.pending = false;
  } else {
    addTaskMentorMessage("mentor", text);
  }
  renderTaskMentorConversation();
}

function getRecentTaskMentorMessages() {
  return taskMentorMessages
    .filter((message) => !message.pending)
    .slice(-6)
    .map(({ role, text }) => ({ role, text }));
}

function renderTaskMentorConversation() {
  taskMentorResponse.replaceChildren();
  getRecentVisibleTaskMentorMessages().forEach((message) => {
    taskMentorResponse.append(createTaskMentorBubble(
      message.role === "user" ? "You" : "Mentor",
      message.text,
      message.role,
      message.pending
    ));
  });
}

function getRecentVisibleTaskMentorMessages() {
  return taskMentorMessages.slice(-6);
}

function createTaskMentorBubble(label, text, tone, pending = false) {
  const block = document.createElement("article");
  const heading = document.createElement("h4");
  block.className = `task-mentor-bubble ${tone}${pending ? " pending" : ""}`;
  heading.textContent = label;
  block.append(heading, createMentorMessageContent(text));
  return block;
}

function createMentorMessageContent(text) {
  const content = document.createElement("div");
  content.className = "task-mentor-content";
  const parts = String(text).split(/```(\w+)?\n?([\s\S]*?)```/g);

  for (let index = 0; index < parts.length; index += 3) {
    appendMentorParagraphs(content, parts[index]);
    const language = parts[index + 1];
    const codeText = parts[index + 2];
    if (codeText !== undefined) {
      const pre = document.createElement("pre");
      const code = document.createElement("code");
      pre.className = "task-mentor-code";
      if (language) {
        code.dataset.language = language;
      }
      code.textContent = codeText.trim();
      pre.append(code);
      content.append(pre);
    }
  }

  return content;
}

function appendMentorParagraphs(container, text) {
  String(text)
    .split(/\n{2,}|\n/)
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = part;
      container.append(paragraph);
    });
}

function getMentorFeedbackEndpoint() {
  return window.location.protocol === "file:"
    ? "http://localhost:3000/api/mentor-feedback"
    : "/api/mentor-feedback";
}

async function requestMentorFeedback(submission) {
  let response;

  try {
    response = await fetch(getMentorFeedbackEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        task: submission.task,
        submission: submission.attempt,
        language: submission.language,
        level: submission.level,
        skipContext: getActiveSkipContext()
      })
    });
  } catch (error) {
    throw new Error("The mentor backend is not running. Start the server, then try submitting again.");
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Unable to get mentor feedback. Make sure the backend server is running.");
  }

  return data;
}

function renderMentorFeedback(feedback) {
  const isCorrect = isCorrectMentorFeedback(feedback);
  const resultLabel = getMentorFeedbackResultLabel(feedback, isCorrect);
  const correctImprovement = currentSubmission?.completedWithHelp
    ? "Practice a similar task without opening the solution so it can count toward independent progress."
    : getCorrectSubmissionImprovement();
  const sections = isCorrect
    ? getCorrectFeedbackSections(feedback, correctImprovement)
    : [
        ["What is good", feedback.whatIsGood],
        ["What is wrong", feedback.whatIsWrong],
        ["What to fix next", feedback.whatToFixNext]
      ];

  mentorFeedback.replaceChildren();
  mentorFeedback.classList.remove("loading", "correct");
  mentorFeedback.classList.toggle("correct", isCorrect);
  const eyebrow = document.createElement("p");
  const heading = document.createElement("h3");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Mentor feedback";
  heading.textContent = `Result: ${resultLabel}`;
  mentorFeedback.append(eyebrow, heading);
  const submissionBlock = createSubmissionPreview();
  if (submissionBlock) {
    mentorFeedback.append(submissionBlock);
  }

  sections.forEach(([sectionTitle, sectionBody]) => {
    const block = document.createElement("article");
    const title = document.createElement("h4");
    const body = document.createElement("p");
    block.className = "mentor-feedback-item";
    title.textContent = sectionTitle;
    body.textContent = sectionBody;
    block.append(title, body);
    mentorFeedback.append(block);
  });
}

function getMentorFeedbackResultLabel(feedback, isCorrect) {
  if (isCorrect && getLocalMinorSyntaxNote(currentSubmission?.attempt || "")) {
    return "Correct (minor note)";
  }
  if (feedback?.result === "Correct (minor note)" || feedback?.issueType === "MINOR_SYNTAX") {
    return "Correct (minor note)";
  }
  if (feedback?.result === "Correct" || feedback?.issueType === "STYLE_ISSUE" || feedback?.issueType === "NONE") {
    return "Correct";
  }
  return isCorrect ? "Correct" : "Incorrect";
}

function getCorrectFeedbackSections(feedback, correctImprovement) {
  const locallyCorrect = submissionAppearsConceptuallyCorrect(currentSubmission?.attempt || "", currentSubmission?.task);
  const sections = [
    ["What worked", locallyCorrect ? "The required concept and structure are present in your submission." : feedback.whatIsGood || "Your submission meets the task requirements."]
  ];
  const note = getNonBlockingFeedbackNote(feedback) || getLocalMinorSyntaxNote(currentSubmission?.attempt || "");
  if (note) {
    sections.push(["Optional note", note]);
  }
  sections.push(["Next improvement", correctImprovement]);
  return sections;
}

function getLocalMinorSyntaxNote(submission) {
  const text = String(submission || "").trim();
  if (/\bselect\b/i.test(text) && text && !text.endsWith(";")) {
    return "Minor syntax note: add a semicolon (;) at the end. This is optional in many SQL environments but recommended.";
  }
  return "";
}

function getNonBlockingFeedbackNote(feedback) {
  if (feedback?.optionalNote) {
    return feedback.optionalNote;
  }
  if (feedback?.issueType === "MINOR_SYNTAX" || feedback?.issueType === "STYLE_ISSUE") {
    return feedback.whatIsWrong || "";
  }
  const wrongText = String(feedback?.whatIsWrong || "");
  if (/\b(minor|semicolon|format|style|readability|capitalization|whitespace|optional)\b/i.test(wrongText)
    && !/\b(missing required|does not|doesn't|incorrect|wrong|required structure|logic)\b/i.test(wrongText)) {
    return wrongText;
  }
  return "";
}

function isCorrectMentorFeedback(feedback) {
  const localBehavior = assessSubmissionBehavior(
    currentSubmission?.attempt || "",
    currentSubmission?.task,
    currentSubmission?.language || currentPlanState?.language || ""
  );
  if (localBehavior.result === "Incorrect") {
    return false;
  }
  if (localBehavior.result === "Correct" || localBehavior.result === "Correct (minor note)") {
    return true;
  }
  if (submissionAppearsConceptuallyCorrect(currentSubmission?.attempt || "", currentSubmission?.task)) {
    return true;
  }
  if (feedback?.result === "Correct" || feedback?.result === "Correct (minor note)") {
    return true;
  }
  if (feedback?.result === "Incorrect") {
    return false;
  }
  if (["MINOR_SYNTAX", "STYLE_ISSUE", "NONE"].includes(feedback?.issueType)) {
    return true;
  }
  if (["LOGIC_ERROR", "STRUCTURE_ERROR"].includes(feedback?.issueType)) {
    return false;
  }
  const submission = currentSubmission?.attempt || "";
  const referenceSolution = currentSubmission?.task?.referenceSolution || "";
  if (referenceSolution && normalizeForComparison(submission) === normalizeForComparison(referenceSolution)) {
    return true;
  }

  const wrongText = String(feedback.whatIsWrong || "").toLowerCase();
  const nextText = String(feedback.whatToFixNext || "").toLowerCase();
  const positiveCorrectness = [
    "no major correctness issue",
    "nothing required is missing",
    "no required piece is missing",
    "meets the task",
    "satisfies the task",
    "satisfies the criteria",
    "all required",
    "correct"
  ].some((phrase) => wrongText.includes(phrase));
  const stillMissing = /\b(missing|does not|doesn't|incorrect|wrong|needs|required|fix|add|include|replace)\b/.test(wrongText)
    && !/\bno\b.{0,24}\b(missing|required|major correctness issue)\b/.test(wrongText);
  const nextIsPolish = /\b(polish|improve|variation|edge case|challenge|refactor|format|explain)\b/.test(nextText);

  return positiveCorrectness && (!stillMissing || nextIsPolish);
}

function submissionAppearsConceptuallyCorrect(submission, task) {
  const text = String(submission || "");
  const criteria = `${task?.instruction || ""} ${(task?.steps || []).join(" ")} ${(task?.acceptedCriteria || []).join(" ")}`.toLowerCase();
  if (!text.trim() || !criteria.includes("group")) {
    return false;
  }
  if (criteria.includes("team_id") && criteria.includes("status")) {
    return /\bselect\b[\s\S]*\bteam_id\b[\s\S]*\bstatus\b[\s\S]*\bcount\s*\(/i.test(text)
      && /\bfrom\b/i.test(text)
      && /\bgroup\s+by\s+team_id\s*,\s*status\b/i.test(text);
  }
  if (criteria.includes("user_id")) {
    return /\bselect\b[\s\S]*\buser_id\b[\s\S]*\bcount\s*\(/i.test(text)
      && /\bfrom\b/i.test(text)
      && /\bgroup\s+by\s+user_id\b/i.test(text);
  }
  if (criteria.includes("status")) {
    return /\bselect\b[\s\S]*\bstatus\b[\s\S]*\bcount\s*\(/i.test(text)
      && /\bfrom\b/i.test(text)
      && /\bgroup\s+by\s+status\b/i.test(text);
  }
  if (criteria.includes("category")) {
    return /\bselect\b[\s\S]*\bcategory\b[\s\S]*\bcount\s*\(/i.test(text)
      && /\bfrom\b/i.test(text)
      && /\bgroup\s+by\s+category\b/i.test(text);
  }
  return false;
}

function assessSubmissionBehavior(submission, task, language = "") {
  const text = String(submission || "");
  const criteriaText = getTaskCriteriaText(task);
  const normalizedLanguage = String(language || task?.language || "").toLowerCase();
  if (!text.trim()) {
    return { result: "Unknown" };
  }

  if (normalizedLanguage.includes("python")) {
    const safeLookup = assessPythonSafeLookup(text, criteriaText);
    if (safeLookup.result !== "Unknown") {
      return safeLookup;
    }
  }

  if (["javascript", "typescript", "react", "node.js"].some((item) => normalizedLanguage.includes(item))) {
    const safeFallback = assessJavaScriptSafeFallback(text, criteriaText);
    if (safeFallback.result !== "Unknown") {
      return safeFallback;
    }
  }

  if (normalizedLanguage.includes("sql")) {
    const sqlGroup = assessSqlGrouping(text, criteriaText);
    if (sqlGroup.result !== "Unknown") {
      return sqlGroup;
    }
  }

  if (["java", "kotlin", "swift", "c#"].some((item) => normalizedLanguage.includes(item))) {
    const guardedAccess = assessGuardedObjectAccess(text, criteriaText);
    if (guardedAccess.result !== "Unknown") {
      return guardedAccess;
    }
  }

  return { result: "Unknown" };
}

function getTaskCriteriaText(task) {
  if (!task) {
    return "";
  }
  return [
    task.title,
    task.description,
    task.instruction,
    ...(task.steps || []),
    task.expectedOutput,
    ...(task.acceptedCriteria || []),
    task.solutionIntent,
    task.referenceSolution
  ].filter(Boolean).join(" ").toLowerCase();
}

function assessPythonSafeLookup(submission, criteriaText = "") {
  const requiresSafeLookup = /\b(safe|safely|missing|fallback|optional|keyerror|\.get)\b/i.test(criteriaText);
  if (!requiresSafeLookup && !/\.get\s*\(/i.test(submission)) {
    return { result: "Unknown" };
  }

  const unsafeOutput = findPythonUnsafeLookupInOutput(submission);
  if (unsafeOutput) {
    const safeLine = getOutputLines(submission).some((line) => pythonLineUsesSafeLookup(line, unsafeOutput.name, unsafeOutput.key));
    if (!safeLine) {
      return {
        result: "Incorrect",
        issueType: "LOGIC_ERROR",
        message: "You added the safe lookup, but it is not used in the output. The printed or returned line still uses the unsafe lookup.",
        nextFix: "Move the safe lookup into the print or return expression."
      };
    }
  }

  const outputLines = getOutputLines(submission);
  const safeLookupOutputs = outputLines
    .map((line) => extractPythonGetLookup(line))
    .filter(Boolean);
  const expectedFallback = getExpectedSafeLookupFallback(criteriaText);
  const wrongFallback = expectedFallback
    ? safeLookupOutputs.find((lookup) => normalizeFallbackAnswer(lookup.fallback).toLowerCase() !== expectedFallback.toLowerCase())
    : safeLookupOutputs.find((lookup) => lookup.fallback && normalizeFallbackAnswer(lookup.fallback) === lookup.dictionaryName);
  if (requiresSafeLookup && wrongFallback) {
    const analysis = classifySafeLookupFallbackAnswer(
      `${wrongFallback.dictionaryName}.get('${wrongFallback.key}', ${wrongFallback.fallback})`,
      {
        questionType: "choose_fallback",
        snippet: `${wrongFallback.dictionaryName}.get('${wrongFallback.key}', ____)`,
        expectedAnswerLabel: expectedFallback || "a single fallback value"
      }
    );
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: analysis?.message || "The safe lookup is used, but the fallback value does not match what the task should output.",
      nextFix: analysis?.hint || "Keep the safe lookup, but choose a fallback value that matches the output type."
    };
  }

  const hasSafeOutput = safeLookupOutputs.length > 0
    || outputLines.some((line) => /\bif\b[\s\S]+\bin\b[\s\S]+\belse\b/i.test(line));
  const hasUnusedSafeLookup = /\.get\s*\(\s*['"][^'"]+['"]\s*,/i.test(submission) && !hasSafeOutput;
  if (requiresSafeLookup && hasUnusedSafeLookup) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "The fallback lookup appears in the code, but it does not affect the printed or returned value.",
      nextFix: "Use the fallback expression where the output is produced."
    };
  }

  if (requiresSafeLookup && hasSafeOutput) {
    return { result: "Correct", issueType: "NONE" };
  }

  return { result: "Unknown" };
}

function findPythonUnsafeLookupInOutput(submission) {
  const unsafePattern = /\b(?:print\s*\(|return\b)[^\n]*(\b[a-zA-Z_][\w]*)\s*\[\s*(['"])([^'"]+)\2\s*\]/;
  for (const line of getOutputLines(submission)) {
    const match = line.match(unsafePattern);
    if (match) {
      return { name: match[1], key: match[3], line };
    }
  }
  return null;
}

function pythonLineUsesSafeLookup(line, name, key) {
  return new RegExp(`\\b${escapeRegExp(name)}\\.get\\s*\\(\\s*['"]${escapeRegExp(key)}['"]\\s*,`, "i").test(line)
    || new RegExp(`['"]${escapeRegExp(key)}['"]\\s+in\\s+${escapeRegExp(name)}`, "i").test(line);
}

function assessJavaScriptSafeFallback(submission, criteriaText = "") {
  const requiresFallback = /\b(safe|safely|missing|fallback|optional|undefined|nullish|\?\?)\b/i.test(criteriaText);
  if (!requiresFallback && !/\?\?|\|\|/i.test(submission)) {
    return { result: "Unknown" };
  }

  const outputLines = getOutputLines(submission);
  const unsafeOutput = outputLines.find((line) => /\.[a-zA-Z_$][\w$]*\s*\.\s*(toFixed|toString|trim|map|filter|length)\b/.test(line)
    && !/(\?\?|\|\||&&|\?\.)/.test(line));
  if (unsafeOutput) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "The fallback is not part of the output expression; the logged or returned value still uses the unsafe property access.",
      nextFix: "Put the fallback inside the console.log or return expression before using the value."
    };
  }

  const hasFallbackInOutput = outputLines.some((line) => /(\?\?|\|\|)/.test(line));
  const hasFallbackElsewhere = /(\?\?|\|\|)/.test(submission) && !hasFallbackInOutput;
  if (requiresFallback && hasFallbackElsewhere) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "The fallback appears separately, but it does not affect the logged or returned result.",
      nextFix: "Use the fallback in the output expression."
    };
  }
  if (requiresFallback && hasFallbackInOutput) {
    return { result: "Correct", issueType: "NONE" };
  }

  return { result: "Unknown" };
}

function assessSqlGrouping(submission, criteriaText = "") {
  if (!/\bgroup\s+by\b|\bcount\s*\(/i.test(`${submission} ${criteriaText}`)) {
    return { result: "Unknown" };
  }
  if (!/\bselect\b/i.test(submission) || !/\bfrom\b/i.test(submission)) {
    return { result: "Unknown" };
  }

  const query = stripSqlComments(submission);
  const selectColumns = getSqlNonAggregatedSelectColumns(query);
  const groupColumns = getSqlGroupByColumns(query);
  const requiredColumns = getRequiredGroupColumns(criteriaText);
  const columnsToCheck = requiredColumns.length ? requiredColumns : selectColumns;

  if (columnsToCheck.length && !groupColumns.length) {
    return {
      result: "Incorrect",
      issueType: "STRUCTURE_ERROR",
      message: `The query selects ${columnsToCheck.join(", ")} with an aggregate, but it does not group by that column.`,
      nextFix: `Add GROUP BY ${columnsToCheck.join(", ")}.`
    };
  }

  const missing = columnsToCheck.filter((column) => !groupColumns.includes(column));
  if (missing.length) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: `The GROUP BY column does not match the selected non-aggregated column: ${missing.join(", ")}.`,
      nextFix: `Group by ${missing.join(", ")} so the output matches the selected column.`
    };
  }

  if (columnsToCheck.length && /\bcount\s*\(/i.test(query)) {
    return query.trim().endsWith(";")
      ? { result: "Correct", issueType: "NONE" }
      : {
          result: "Correct (minor note)",
          issueType: "MINOR_SYNTAX",
          message: "The grouping logic is correct; a trailing semicolon is a minor SQL style note."
        };
  }

  return { result: "Unknown" };
}

function stripSqlComments(value) {
  return String(value || "").replace(/--.*$/gm, " ");
}

function getSqlNonAggregatedSelectColumns(query) {
  const match = query.match(/\bselect\b([\s\S]*?)\bfrom\b/i);
  if (!match) {
    return [];
  }
  return match[1]
    .split(",")
    .map((part) => part.trim().replace(/\s+as\s+[\w_]+$/i, "").trim())
    .filter((part) => part && !/\b(count|sum|avg|min|max)\s*\(/i.test(part))
    .map((part) => part.match(/\b([a-z_][a-z0-9_]*)\b/i)?.[1]?.toLowerCase())
    .filter(Boolean);
}

function getSqlGroupByColumns(query) {
  const match = query.match(/\bgroup\s+by\b([\s\S]*?)(?:\border\s+by\b|\bhaving\b|\blimit\b|;|$)/i);
  if (!match) {
    return [];
  }
  return match[1]
    .split(",")
    .map((part) => part.trim().match(/\b([a-z_][a-z0-9_]*)\b/i)?.[1]?.toLowerCase())
    .filter(Boolean);
}

function getRequiredGroupColumns(criteriaText) {
  const directMatch = String(criteriaText || "").match(/\bgroup\s+by\s+([a-z_][a-z0-9_]*(?:\s*,\s*[a-z_][a-z0-9_]*)*)/i);
  if (directMatch) {
    return directMatch[1].split(",").map((column) => column.trim().toLowerCase()).filter(Boolean);
  }
  return ["team_id", "user_id", "status", "category", "priority", "owner"]
    .filter((column) => new RegExp(`\\b${column}\\b`, "i").test(criteriaText));
}

function assessGuardedObjectAccess(submission, criteriaText = "") {
  const requiresGuard = /\b(null|missing|optional|safe|safely|fallback)\b/i.test(criteriaText);
  if (!requiresGuard) {
    return { result: "Unknown" };
  }
  const text = String(submission || "");
  const outputLines = getOutputLines(submission);
  const unsafeOutput = outputLines.find((line) => /(!\.|!!|\.title|\.Title|\[[^\]]+\])/.test(line));
  const hasGuard = /\b(if|guard|when|let|HasValue|!=\s*null|is\s+not\s+null|contains|containsKey|getOrDefault|Optional)\b/i.test(submission);
  if (unsafeOutput && !hasGuard) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "The output still reads the possibly missing value without a guard or fallback.",
      nextFix: "Check the value before printing or returning it."
    };
  }
  if (unsafeOutput && hasGuard && !guardProtectsOutput(text)) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "The guard is present, but the output is still not clearly protected by it.",
      nextFix: "Place the print or return inside the guard, or return early before the unsafe access."
    };
  }
  return hasGuard ? { result: "Correct", issueType: "NONE" } : { result: "Unknown" };
}

function guardProtectsOutput(text) {
  return /\bif\s*\([^)]*(task|value|score|result)[^)]*(?:!=\s*null|==\s*null|contains|ok)[^)]*\)\s*\{[\s\S]*?(print|println|Console\.WriteLine|System\.out\.println|return)[\s\S]*?(task|value|score|result)/i.test(text)
    || /\bif\s*\([^)]*(?:==\s*null|!\s*\w+)[^)]*\)\s*return[\s\S]*(print|println|Console\.WriteLine|System\.out\.println|return)/i.test(text)
    || /\bguard\b[\s\S]*\belse\b[\s\S]*\breturn\b[\s\S]*\bprint\s*\(/i.test(text)
    || /\bif\s+let\s+\w+[\s\S]*\bprint\s*\(/i.test(text)
    || /\bwhen\s*\([^)]*\)\s*\{[\s\S]*(println|return)/i.test(text)
    || /\bmatch\b[\s\S]*\b(Some|Ok)\b[\s\S]*(println!|return)/i.test(text);
}

function assessJavaScriptCollectionMethod(submission, criteriaText = "") {
  if (!/filter\(\)|filter|map/i.test(criteriaText)) {
    return { result: "Unknown" };
  }
  const text = String(submission || "");
  const targetMatch = text.match(/\b(?:const|let|var)\s+([a-zA-Z_$][\w$]*)\s*=\s*[^;\n]+/);
  const assignment = targetMatch ? targetMatch[0] : text;
  if (/=\s*[^;\n]*\.filter\s*\(/i.test(assignment) && !/=\s*[^;\n]*\.map\s*\(/i.test(assignment)) {
    return { result: "Correct", issueType: "NONE" };
  }
  if (/\.filter\s*\(/i.test(text) && /\.map\s*\(/i.test(assignment)) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "filter is present, but the assigned result still comes from map.",
      nextFix: "Use filter in the assignment that produces the result."
    };
  }
  return { result: "Unknown" };
}

function assessReactStateFix(submission, criteriaText = "") {
  if (!/usestate|state/i.test(criteriaText)) {
    return { result: "Unknown" };
  }
  const text = String(submission || "");
  if (/useState\s*\(/.test(text) && /set[A-Z]\w*\s*\(/.test(text) && !/\b\w+\s*\+=/.test(text)) {
    return { result: "Correct", issueType: "NONE" };
  }
  if (/useState\s*\(/.test(text) && /\b\w+\s*\+=/.test(text)) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "State is present, but the code still mutates a value directly.",
      nextFix: "Use the state setter for the value that changes."
    };
  }
  return { result: "Unknown" };
}

function assessOutputOrder(submission, criteriaText = "") {
  if (!/create|calculate|process/i.test(criteriaText) || !/show|output|display/i.test(criteriaText)) {
    return { result: "Unknown" };
  }
  const text = String(submission || "").toLowerCase();
  const firstShow = text.search(/\b(show|display|output|print)\b/);
  const firstCreate = text.search(/\b(create|calculate|process|transform)\b/);
  if (firstCreate >= 0 && firstShow >= 0 && firstCreate < firstShow) {
    return { result: "Correct", issueType: "NONE" };
  }
  if (firstShow >= 0 && firstCreate >= 0 && firstShow < firstCreate) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "The output step still happens before the value exists.",
      nextFix: "Move the create, calculate, or process step before the output."
    };
  }
  return { result: "Unknown" };
}

function getOutputLines(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /\b(print|println|console\.log|return|System\.out\.println|Console\.WriteLine|fmt\.Print|std::cout|SELECT)\b/i.test(line));
}

function assessHtmlLabelConnection(submission, criteriaText = "") {
  if (!/for and id|label|input|accessib/i.test(criteriaText)) {
    return { result: "Unknown" };
  }
  const forValue = String(submission || "").match(/\bfor=["']([^"']+)["']/i)?.[1];
  const idValue = String(submission || "").match(/\bid=["']([^"']+)["']/i)?.[1];
  if (forValue && idValue && forValue === idValue) {
    return { result: "Correct", issueType: "NONE" };
  }
  if (forValue || idValue) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "The label and input are both present, but their for and id values do not match.",
      nextFix: "Make the label for value exactly match the input id."
    };
  }
  return { result: "Unknown" };
}

function assessRGrouping(submission, criteriaText = "") {
  if (!/group_by|summari[sz]e/i.test(criteriaText)) {
    return { result: "Unknown" };
  }
  const text = String(submission || "");
  const groupIndex = text.search(/group_by\s*\(\s*([a-z_][a-z0-9_]*)\s*\)/i);
  const summariseIndex = text.search(/summari[sz]e\s*\(/i);
  if (groupIndex >= 0 && summariseIndex >= 0 && groupIndex < summariseIndex) {
    return { result: "Correct", issueType: "NONE" };
  }
  if (groupIndex >= 0 && summariseIndex >= 0) {
    return {
      result: "Incorrect",
      issueType: "LOGIC_ERROR",
      message: "group_by is present, but it must happen before summarise so it affects the result.",
      nextFix: "Move group_by before summarise."
    };
  }
  return { result: "Unknown" };
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeForComparison(value) {
  return String(value)
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getCorrectSubmissionImprovement() {
  const task = currentSubmission?.task || getCurrentTaskPayload();
  const language = currentSubmission?.language || currentPlanState?.language || "";
  const criteriaText = `${task?.instruction || ""} ${(task?.steps || []).join(" ")} ${(task?.acceptedCriteria || []).join(" ")}`.toLowerCase();

  if (language === "Python") {
    if (!criteriaText.includes("average")) {
      return "Extend it by calculating the average of all dictionary values and printing that result.";
    }
    if (!criteriaText.includes("label") && !criteriaText.includes("conditional")) {
      return "Extend it by finding the highest value and printing the matching key.";
    }
    if (!criteriaText.includes("invalid") && !criteriaText.includes("missing")) {
      return "Extend it by adding one missing or non-number value and skipping it safely.";
    }
    if (!criteriaText.includes("function")) {
      return "Extend it by turning the logic into a function that returns the result.";
    }
    return "Extend it by adding one small test case with different input values.";
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    if (!criteriaText.includes("count")) {
      return "Extend it by counting how many items match one status and logging that result.";
    }
    if (!criteriaText.includes("label")) {
      return "Extend it by labeling each item as ready or blocked.";
    }
    if (!criteriaText.includes("invalid") && !criteriaText.includes("missing")) {
      return "Extend it by adding one incomplete item and skipping it before counting.";
    }
    if (!criteriaText.includes("function")) {
      return "Extend it by moving the logic into a small reusable function.";
    }
    return "Extend it by testing the function with a second array of items.";
  }

  if (language === "SQL") {
    if (!criteriaText.includes("group")) {
      return "Extend it by grouping rows by one category and counting each group.";
    }
    if (!criteriaText.includes("missing")) {
      return "Extend it by filtering out rows with missing values before aggregating.";
    }
    return "Extend it by adding one clear alias that makes the result easier to read.";
  }

  if (language === "HTML and CSS") {
    if (!criteriaText.includes("state")) {
      return "Extend it by adding one visual state, such as ready or needs review.";
    }
    return "Extend it by adding one empty-state version for missing data.";
  }

  return "Extend it by adding one realistic edge case and showing how your result handles it.";
}

function createSubmissionPreview() {
  if (!currentSubmission?.attempt) {
    return null;
  }

  const block = document.createElement("article");
  const title = document.createElement("h4");
  const code = document.createElement("pre");
  block.className = "submission-preview";
  title.textContent = "Your submission";
  code.textContent = currentSubmission.attempt;
  block.append(title, code);
  return block;
}

function renderMentorFeedbackError(message) {
  mentorFeedback.replaceChildren();
  mentorFeedback.classList.remove("loading");
  const eyebrow = document.createElement("p");
  const heading = document.createElement("h3");
  const copy = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Mentor feedback";
  heading.textContent = "Feedback unavailable";
  copy.textContent = message;
  mentorFeedback.append(eyebrow, heading);
  const submissionBlock = createSubmissionPreview();
  if (submissionBlock) {
    mentorFeedback.append(submissionBlock);
  }
  mentorFeedback.append(copy);
}

function renderNextStep(nextStep, feedback = null) {
  const isCorrect = feedback && isCorrectMentorFeedback(feedback);
  const completedWithHelp = isCorrect && currentSubmission?.completedWithHelp;
  nextStepTitle.textContent = isCorrect ? "Choose how to continue" : "Choose how to proceed";
  const recommended = isCorrect
    ? completedWithHelp ? "Practice a similar task without opening solution." : "Extend your solution."
    : nextStep;
  nextStepCopy.textContent = isCorrect
    ? `Recommended: ${recommended}`
    : "Fixing this attempt counts as progress. Skipping is a temporary bypass so the task can come back later.";
  renderNextStepOptions(isCorrect, completedWithHelp);
}

function renderNextStepOptions(isCorrect, completedWithHelp = false) {
  nextStepOptionsPanel.replaceChildren();
  if (isCorrect) {
    nextStepOptionsPanel.className = "next-step-options";
    nextStepOptionsPanel.append(
      createNextStepGroup("Continue coding", [
        completedWithHelp
          ? ["similar", "Practice without solution", "Try the same skill with new data and no solution help.", "primary"]
          : ["extend", "Extend your solution", "Add one concrete requirement.", "primary"],
        ["improve", "Improve your solution", "Retry with the feedback in mind."]
      ]),
      createNextStepGroup("Understand better", [
        ["understand", "Learn why this works", "Study the pattern before coding more."]
      ], "understand-group")
    );
    return;
  }

  nextStepOptionsPanel.className = "next-step-options proceed-options";
  nextStepOptionsPanel.append(
    createNextStepGroup("Recommended", [
      ["improve", "Fix your solution", "Recommended. Revise this attempt before moving on.", "primary"]
    ]),
    createNextStepGroup("Other choices", [
      ["understand", "Learn the concept deeper", "Review the concept without writing more code yet."],
      ["skip", "Skip for now", "Temporary bypass. This will be saved to revisit."]
    ], "understand-group")
  );
}

function createNextStepGroup(title, options, extraClass = "") {
  const group = document.createElement("div");
  const heading = document.createElement("p");
  group.className = `next-step-group ${extraClass}`.trim();
  heading.textContent = title;
  group.append(heading);
  options.forEach(([choice, label, description, emphasis]) => {
    const button = document.createElement("button");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    button.className = `next-step-option ${emphasis === "primary" ? "recommended-option" : ""}`.trim();
    button.type = "button";
    button.dataset.nextStep = choice;
    strong.textContent = label;
    span.textContent = description;
    button.append(strong, span);
    group.append(button);
  });
  return group;
}

function chooseNextLearningStep(choice) {
  if (!currentPlanState || !currentPlanData) {
    return;
  }

  const concept = currentPlanData.language.core[0];
  if (choice === "skip") {
    renderSkipReflection(concept);
    return;
  }
  if (choice === "fix-skipped") {
    resumeSkippedTask(skippedTasks[0]?.id);
    return;
  }
  if (choice === "continue-next") {
    continueAfterSkip(concept);
    return;
  }

  const previousAttempt = currentSubmission?.attempt || taskAttemptInput.value;
  const learningPath = createLearningPath(choice, concept);
  const nextState = createProgressionState(choice, concept);
  renderPlan(nextState, {
    save: false,
    silent: true,
    planName: "Next mentor task",
    progression: choice,
    learningPath,
    prefillAttempt: choice === "improve" ? previousAttempt : "",
    keepFeedbackContext: choice === "improve" || choice === "understand"
  });

  if (choice === "understand") {
    recordRoadmapTaskOutcome("explained");
    setMentorFlowState("deeper");
    return;
  }

  setMentorFlowState("submit");
  taskAttemptInput.focus();
}

function renderSkipReflection(concept) {
  nextStepTitle.textContent = "Quick check before moving on";
  nextStepCopy.textContent = "Skipping is temporary. Choose what got in the way so the mentor can resurface this task later.";
  nextStepOptionsPanel.className = "next-step-options skip-reflection-options";
  nextStepOptionsPanel.replaceChildren();
  const group = document.createElement("div");
  const heading = document.createElement("p");
  group.className = "next-step-group skip-reflection-group";
  heading.textContent = "What was the main issue with your solution?";
  group.append(heading);
  [
    ["wrong-approach", "Wrong approach", "Next task becomes simpler and more guided."],
    ["wrong-output", "Wrong output", "Next task emphasizes matching the expected output."],
    ["syntax-issue", "Syntax issue", "Next task prioritizes code correctness and formatting help."],
    ["not-sure", "Not sure", "Next step adds more hints and explanation before coding."]
  ].forEach(([value, label, outcome]) => {
    const button = document.createElement("button");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    button.className = "next-step-option";
    button.type = "button";
    button.dataset.skipReason = value;
    strong.textContent = label;
    span.textContent = outcome;
    button.append(strong, span);
    group.append(button);
  });
  nextStepOptionsPanel.append(group);
}

function handleSkipReflection(reason) {
  saveSkippedTask(reason);
  recordRoadmapTaskOutcome("skipped");
  nextStepTitle.textContent = "Skipped - needs review";
  nextStepCopy.textContent = "Saved to your Needs review list. This does not count toward mastery.";
  nextStepOptionsPanel.className = "next-step-options proceed-options";
  nextStepOptionsPanel.replaceChildren(
    createNextStepGroup("Choose your path", [
      ["continue-next", "Continue with guided review", "Stay on the same skill with extra support.", "primary"],
      ["fix-skipped", "Fix previous attempt", "Return to the skipped task with your code and feedback."],
      ["understand", "Learn the concept deeper", "Open explanation mode without more coding yet."]
    ])
  );
  renderNeedsReview();
  renderTaskProgressRail();
}

function continueAfterSkip(concept) {
  const recent = skippedTasks[0];
  const issue = recent ? formatSkipReason(recent.reason) : "an unfinished part";
  const recovery = getSkipRecoveryPlan(recent?.reason, concept);
  const learningPath = {
    ...createLearningPath(recovery.choice, concept),
    focusRequirement: recovery.focusRequirement,
    progressionLabel: `Building on your previous attempt: you skipped ${issue}.`
  };
  const nextState = createSkipRecoveryState(recovery.choice, concept, recovery);

  if (recovery.mode === "understand") {
    renderPlan(nextState, {
      save: false,
      silent: true,
      planName: "Review before coding",
      progression: "skip-continue",
      learningPath: {
        ...learningPath,
        choice: "understand"
      },
      keepFeedbackContext: true
    });
    setMentorFlowState("deeper");
    return;
  }

  renderPlan(nextState, {
    save: false,
    silent: true,
    planName: "Next mentor task",
    progression: "skip-continue",
    learningPath
  });
  setMentorFlowState("submit");
  taskAttemptInput.focus();
}

function getSkipRecoveryPlan(reason, concept) {
  if (reason === "wrong-approach") {
    return {
      choice: "improve",
      focusRequirement: "Use the simplest version first: create the data, then show one required value.",
      taskSuffix: "Guided retry: use the simplest version before adding extra logic.",
      hoursDelta: -3
    };
  }
  if (reason === "wrong-output") {
    return {
      choice: "improve",
      focusRequirement: "Write the expected output first, then make the code print exactly that shape.",
      taskSuffix: "Output focus: match the expected result before improving the code.",
      hoursDelta: 0
    };
  }
  if (reason === "syntax-issue") {
    return {
      choice: "improve",
      focusRequirement: "Clean up syntax, indentation, and formatting before changing the logic.",
      taskSuffix: "Syntax focus: prioritize code correctness and readable formatting.",
      hoursDelta: -1
    };
  }
  return {
    choice: "understand",
    mode: "understand",
    focusRequirement: `Review the ${concept} pattern with hints before coding again.`,
    taskSuffix: "Explanation first: review the pattern before another coding attempt.",
    hoursDelta: -2
  };
}

function createSkipRecoveryState(choice, concept, recovery) {
  const base = {
    ...currentPlanState,
    ambition: { ...currentPlanState.ambition }
  };
  const cleanTask = currentPlanState.task.replace(/\s+\((Retry|Harder version|Similar practice|Deep dive|Build forward|Guided retry|Output focus|Syntax focus|Explanation first):.*?\)$/i, "");
  return {
    ...base,
    hours: Math.max(1, Math.min(20, Number(base.hours) + (recovery.hoursDelta || 0))),
    task: `${cleanTask} (${recovery.taskSuffix})`
  };
}

function formatSkipReason(reason) {
  const labels = {
    "wrong-approach": "wrong approach",
    "wrong-output": "wrong output",
    "syntax-issue": "syntax issue",
    "not-sure": "not sure"
  };
  return labels[reason] || "not sure";
}

function getResumeReasonCopy(reason) {
  const labels = {
    "wrong-approach": {
      lastTime: "Last time, the approach got off track.",
      guideTitle: "Plan first:",
      guide: "Decide the data shape before coding, then make the output use that shape.",
      nudge: "Nudge: name the first value or structure your code needs before writing the formula."
    },
    "wrong-output": {
      lastTime: "Last time, the output did not match the target.",
      guideTitle: "Check the target:",
      guide: "Compare your print, return, log, or SELECT line to the expected result.",
      nudge: "Nudge: identify the exact value that should appear before changing the rest of the code."
    },
    "syntax-issue": {
      lastTime: "Last time, syntax got in the way.",
      guideTitle: "Syntax pass:",
      guide: "Use editor mode and check brackets, quotes, commas, and function calls before changing the idea.",
      nudge: "Nudge: fix the code shape first, then rerun or reread the output line."
    },
    "not-sure": {
      lastTime: "Last time, you weren't sure where to start.",
      guideTitle: "Plan first:",
      guide: "Break the task into the first small step before writing the full solution.",
      nudge: "Nudge: identify which values belong in the calculation before writing the formula."
    }
  };
  return labels[reason] || labels["not-sure"];
}

function getFriendlyIssueFocus(issue, reason) {
  const text = String(issue || "").toLowerCase();
  if (reason === "not-sure") {
    return "planning";
  }
  if (/syntax_error|syntax|semicolon|comma|quote|bracket|parenth/.test(text) || reason === "syntax-issue") {
    return "syntax";
  }
  if (/output_error|output|expected|print|return|result/.test(text) || reason === "wrong-output") {
    return "expected output";
  }
  if (/structure_error|structure|shape|missing step|missing pattern/.test(text) || reason === "wrong-approach") {
    return "data shape";
  }
  if (/logic_error|logic|calculation|average|sum|formula|condition/.test(text)) {
    return "calculation logic";
  }
  if (/unknown|not sure|no mentor diagnosis/.test(text) || reason === "not-sure") {
    return "planning";
  }
  return "";
}

function getTaskStorageId(task, language = currentPlanState?.language || "") {
  const raw = [
    language,
    task?.title,
    task?.objective,
    task?.instruction,
    task?.expectedOutput
  ].filter(Boolean).join("|");
  return raw.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 96) || `task-${Date.now()}`;
}

function getDetectedMistakeFromFeedback(feedback = lastMentorFeedback) {
  if (!feedback) {
    return "No mentor diagnosis yet.";
  }
  return feedback.issueType
    || feedback.whatIsWrong
    || feedback.whatToFixNext
    || feedback.nextStep
    || "Needs another attempt.";
}

function getSkipReasonFromFeedback(feedback = lastMentorFeedback) {
  const issue = String(feedback?.issueType || feedback?.whatIsWrong || feedback?.whatToFixNext || "").toLowerCase();
  if (/syntax|semicolon|comma|quote|bracket|parenth/.test(issue)) {
    return "syntax-issue";
  }
  if (/output|print|return|result|expected/.test(issue)) {
    return "wrong-output";
  }
  if (/structure|approach|missing|pattern|concept/.test(issue)) {
    return "wrong-approach";
  }
  return "not-sure";
}

function getActiveSkipContext() {
  if (!resumedSkippedTaskContext) {
    return null;
  }
  return {
    taskId: resumedSkippedTaskContext.taskId,
    reason: resumedSkippedTaskContext.reason,
    reasonLabel: formatSkipReason(resumedSkippedTaskContext.reason),
    previousSubmission: resumedSkippedTaskContext.attempt || "",
    detectedMistake: resumedSkippedTaskContext.detectedMistake || "",
    skipCount: resumedSkippedTaskContext.skipCount || 1,
    hintsUsed: Boolean(resumedSkippedTaskContext.hintsUsed),
    solutionShown: Boolean(resumedSkippedTaskContext.solutionShown)
  };
}

function createResumeScaffold(taskRecord) {
  if (!taskRecord) {
    return null;
  }

  const task = taskRecord.task || getCurrentTaskPayload();
  const note = document.createElement("section");
  const eyebrow = document.createElement("p");
  const heading = document.createElement("h4");
  const copy = document.createElement("p");
  const guide = document.createElement("div");
  const reasonCopy = getResumeReasonCopy(taskRecord.reason);
  const focusArea = getFriendlyIssueFocus(taskRecord.detectedMistake || getDetectedMistakeFromFeedback(taskRecord.feedback), taskRecord.reason);

  note.className = `resume-scaffold reason-${taskRecord.reason || "review"}`;
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Resumed task";
  heading.textContent = reasonCopy.lastTime;
  copy.textContent = `This version adds one ${focusArea || "planning"} guide before you code.`;
  guide.className = "resume-guide";
  guide.append(createResumeGuideContent(taskRecord, task));
  note.append(eyebrow, heading, copy, guide);
  return note;
}

function createResumeGuideContent(taskRecord, task) {
  const wrapper = document.createElement("div");
  const reason = taskRecord.reason;
  const reasonCopy = getResumeReasonCopy(reason);
  const guide = document.createElement("p");
  guide.innerHTML = `<strong>${reasonCopy.guideTitle}</strong> ${reasonCopy.guide}`;

  if (reason === "wrong-approach") {
    wrapper.append(guide);
    return wrapper;
  }

  if (reason === "wrong-output") {
    const target = document.createElement("p");
    target.className = "resume-output-target";
    target.textContent = `Target output: ${task?.expectedOutput || "Match the expected output shown in the task."}`;
    wrapper.append(guide, target);
    return wrapper;
  }

  if (reason === "syntax-issue") {
    wrapper.append(guide);
    return wrapper;
  }

  const reminder = document.createElement("p");
  reminder.innerHTML = `<strong>${reasonCopy.guideTitle}</strong> ${getResumeConceptReminder(taskRecord)}`;
  wrapper.append(reminder);
  return wrapper;
}

function getResumeConceptReminder(taskRecord) {
  const language = taskRecord.language || currentPlanState?.language || "coding";
  const concept = taskRecord.concept || currentPlanData?.language?.core?.[0] || "the current concept";
  if (language === "SQL") {
    return "Make the selected fields and grouped fields describe the same result shape.";
  }
  if (language === "Python") {
    return "Decide which values belong in the calculation, then make your code use those values.";
  }
  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    return "Make the value you log, return, or render prove that the task works.";
  }
  return `Use ${concept} in the part of the code that creates the final output.`;
}

function getResumeLevelOneHint(taskRecord, task) {
  const text = `${task?.instruction || ""} ${(task?.steps || []).join(" ")} ${task?.expectedOutput || ""}`.toLowerCase();
  if (text.includes("average")) {
    return "Nudge: identify which values belong in the calculation before writing the formula.";
  }
  if (text.includes("group") || text.includes("count")) {
    return "Nudge: decide what one row of the result should represent.";
  }
  if (text.includes("missing") || text.includes("invalid")) {
    return "Nudge: find the unsafe value before writing the output line.";
  }
  return "Nudge: write the smallest piece that changes the final output.";
}

function renderResumeScaffold(taskRecord = resumedSkippedTaskContext) {
  submissionPanel.querySelector(".resume-scaffold")?.remove();
  if (!taskRecord) {
    return;
  }
  const scaffold = createResumeScaffold(taskRecord);
  const heading = submissionPanel.querySelector("h3");
  if (scaffold && heading) {
    heading.insertAdjacentElement("afterend", scaffold);
  }
}

function createLearningPath(choice, concept) {
  const previousTask = currentSubmission?.task || getCurrentTaskPayload();
  const previousAttempt = currentSubmission?.attempt || taskAttemptInput.value;
  const completedMoves = inferCompletedMoves(previousTask, previousAttempt);
  const snapshot = {
    previousAttempt,
    previousTask,
    feedback: lastMentorFeedback,
    wasCorrect: lastMentorFeedback ? isCorrectMentorFeedback(lastMentorFeedback) : false,
    completedMoves
  };

  if (choice === "improve") {
    return {
      choice,
      ...snapshot,
      focusRequirement: getRetryFocusRequirement(concept)
    };
  }

  if (choice === "extend") {
    return {
      choice,
      ...snapshot,
      focusRequirement: getNextProgressionRequirement(completedMoves, concept, currentPlanState?.language),
      progressionLabel: "Next step: Extend your solution"
    };
  }

  if (choice === "similar") {
    return { choice, ...snapshot };
  }

  return {
    choice: "understand",
    ...snapshot,
    lessonVariantSeed: Date.now(),
    focusRequirement: getNextProgressionRequirement(completedMoves, concept, currentPlanState?.language),
    progressionLabel: "Learn why this works"
  };
}

function getRetryFocusRequirement(concept) {
  const feedbackText = `${lastMentorFeedback?.whatIsWrong || ""} ${lastMentorFeedback?.whatToFixNext || ""}`.toLowerCase();
  const taskText = `${currentSubmission?.task?.instruction || ""} ${(currentSubmission?.task?.steps || []).join(" ")}`.toLowerCase();

  if (taskText.includes("invalid") || taskText.includes("missing")) {
    return "Handle missing or invalid values before producing the output.";
  }
  if (taskText.includes("function") || taskText.includes("return")) {
    return "Move the reusable logic into a small function that returns the result.";
  }
  if ((feedbackText + taskText).includes("average") || (feedbackText + taskText).includes("calculate")) {
    return "Show the calculation result with a clear label.";
  }
  if ((feedbackText + taskText).includes("print") || (feedbackText + taskText).includes("output")) {
    return "Make the required output visible with a clear label.";
  }

  return `Revise one specific part of the ${concept} task based on the mentor feedback.`;
}

function inferCompletedMoves(task, attempt = "") {
  const text = `${task?.instruction || ""} ${(task?.steps || []).join(" ")} ${attempt}`.toLowerCase();
  const moves = [];

  if (/\{|\bdictionary\b|\barray\b|\bobject\b|\bselect\b/.test(text)) {
    moves.push("structure");
  }
  if (/\bprint\b|console\.log|return|select|output|display/.test(text)) {
    moves.push("output");
  }
  if (/\bsum\b|average|avg|count|len|length|calculate/.test(text)) {
    moves.push("calculation");
  }
  if (/\bfor\b|foreach|for each|iterate|loop|\.map|\.filter/.test(text)) {
    moves.push("iteration");
  }
  if (/\bif\b|else|elif|case|when|\?|conditional|label/.test(text)) {
    moves.push("conditional");
  }
  if (/\binvalid\b|missing|none|null|undefined|isinstance|typeof|skip|filter out/.test(text)) {
    moves.push("validation");
  }
  if (/\bdef\b|function|=>|reusable/.test(text)) {
    moves.push("function");
  }

  return [...new Set(moves)];
}

function getNextProgressionRequirement(completedMoves, concept, language = "") {
  const sequence = getProgressionRequirementSequence(language);
  const lastRequirement = learningProgressionMemory.lastRequirement;
  const next = sequence.find(([move, requirement]) => !completedMoves.includes(move) && requirement !== lastRequirement)
    || sequence.find(([, requirement]) => requirement !== lastRequirement)
    || sequence[0];

  return next?.[1] || `Add one new ${concept} requirement without changing the original context.`;
}

function getProgressionRequirementSequence(language) {
  if (language === "Python") {
    return [
      ["output", "Print one key-value pair with a clear label."],
      ["calculation", "Add a new key named \"average\" that stores the average of all numeric values."],
      ["iteration", "Loop through every original item and print each label/value pair."],
      ["conditional", "Add a label for each original item: \"above average\" or \"below average\"."],
      ["validation", "Add one invalid value and skip it before calculating the average."],
      ["function", "Move the logic into a function that returns the updated dictionary."]
    ];
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    return [
      ["output", "Log one item with a clear label."],
      ["calculation", "Add a new property named \"doneCount\" that stores the number of completed items."],
      ["iteration", "Loop through every item and log its name/status pair."],
      ["conditional", "Add a readable label for each item: \"ready\" or \"blocked\"."],
      ["validation", "Add one item with a missing status and skip it before counting."],
      ["function", "Move the logic into a function that returns the summary object."]
    ];
  }

  return [
    ["output", "Show one selected value with a clear label."],
    ["calculation", "Add one computed value based on all entries."],
    ["iteration", "Process every entry instead of only one value."],
    ["conditional", "Add one rule that labels or filters the entries."],
    ["validation", "Handle one missing or invalid entry before producing output."],
    ["function", "Move the logic into a reusable helper."]
  ];
}

function createProgressionState(choice, concept) {
  const base = {
    ...currentPlanState,
    ambition: { ...currentPlanState.ambition }
  };
  const cleanTask = currentPlanState.task.replace(/\s+\((Retry|Harder version|Similar practice|Deep dive|Build forward):.*?\)$/i, "");

  if (choice === "extend") {
    return {
      ...base,
      hours: Number(base.hours),
      task: `${cleanTask} (Build forward: add exactly one new ${concept} requirement.)`
    };
  }

  if (choice === "similar") {
    const alternateContext = getSimilarPracticeContext(cleanTask);
    return {
      ...base,
      task: `${alternateContext} (Similar practice: same difficulty, different data.)`
    };
  }

  if (choice === "understand") {
    return {
      ...base,
      hours: Math.max(2, Number(base.hours) - 1),
      task: cleanTask
    };
  }

  return {
    ...base,
    task: `${cleanTask} (Retry: improve the same solution using mentor feedback.)`
  };
}

function getSimilarPracticeContext(task) {
  const lower = task.toLowerCase();
  if (lower.includes("sales") || lower.includes("product")) {
    return "Practice with support tickets and priority scores";
  }
  if (lower.includes("ticket") || lower.includes("support")) {
    return "Practice with monthly expenses and amounts";
  }
  if (lower.includes("security") || lower.includes("alert")) {
    return "Practice with dashboard metrics and metric values";
  }
  if (lower.includes("dashboard") || lower.includes("analytics") || lower.includes("data")) {
    return "Practice with product sales totals";
  }
  if (lower.includes("expense") || lower.includes("budget")) {
    return "Practice with practice tasks and difficulty scores";
  }
  return "Practice with support tickets and priority scores";
}

function focusMentorFeedback() {
  mentorFeedback.scrollIntoView({ behavior: "smooth", block: "center" });
  mentorFeedback.classList.add("emphasized");
  window.setTimeout(() => {
    mentorFeedback.classList.remove("emphasized");
  }, 1600);
}

function renderHelpActions(state, plan) {
  const actions = [
    ["Start", `I do not know where to begin with ${state.language}.`],
    ["Debug", `My ${state.language} code is not working and I do not know what to check.`],
    ["Concept", `I do not understand ${plan.language.core[0]}.`],
    ["Project", `I need help turning this into a ${state.ambition.artifact}.`],
    ["Explain", `I need help explaining this to ${state.ambition.audience}.`],
    ["Interview", `I need an interview-style explanation for ${state.language}.`]
  ];

  helpActions.replaceChildren();
  actions.forEach(([label, question]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "help-action";
    button.textContent = label;
    button.addEventListener("click", () => renderHelpResponse(question));
    helpActions.append(button);
  });
}

function renderStudyTools(studyTools) {
  flashcardList.replaceChildren();
  studyTools.flashcards.forEach((card) => flashcardList.append(createFlashcard(card)));

  currentQuizItems = studyTools.quiz;
  currentQuizAnswers = studyTools.quiz.map((item) => item.answer);
  quizStarted = false;
  quizResult.replaceChildren();
  renderQuizMode();

  glossaryList.replaceChildren();
  studyTools.glossary.forEach((item) => glossaryList.append(createGlossaryItem(item)));

  builderList.replaceChildren();
  studyTools.builder.forEach((item, index) => builderList.append(createBuilderItem(item, index)));
}

function renderQuizMode() {
  studyToolsGrid.classList.toggle("quiz-active", quizStarted);
  quizList.replaceChildren();
  quizResult.replaceChildren();

  if (!quizStarted) {
    const intro = document.createElement("div");
    intro.className = "quiz-intro";
    intro.textContent = "Start a focused quiz when you are ready. Flashcards and other tools will step aside while you answer.";
    quizList.append(intro);
    startQuizButton.textContent = "Start quiz";
    checkQuizButton.hidden = true;
    return;
  }

  startQuizButton.textContent = "Back to study tools";
  checkQuizButton.hidden = false;
  currentQuizItems.forEach((item, index) => quizList.append(createQuizItem(item, index)));
}

function loadProgressState() {
  try {
    return JSON.parse(localStorage.getItem("codepath-progress")) || createProgressState();
  } catch {
    return createProgressState();
  }
}

function createProgressState() {
  return {
    plan: false,
    note: false,
    practice: false,
    quiz: false,
    interview: false,
    help: false,
    builder: false,
    events: []
  };
}

function persistProgressState() {
  localStorage.setItem("codepath-progress", JSON.stringify(progressState));
}

function markProgress(key, label) {
  progressState[key] = true;
  progressState.events = [
    { label, time: new Date().toISOString() },
    ...(progressState.events || [])
  ].slice(0, 5);
  persistProgressState();
  renderProgressTracker();
}

function renderProgressTracker() {
  const milestones = [
    ["plan", "Plan generated"],
    ["note", "Note saved"],
    ["practice", "Practice answer checked"],
    ["quiz", "Quiz checked"],
    ["interview", "Interview graded"],
    ["help", "Help used"],
    ["builder", "Mini project step completed"]
  ];
  const complete = milestones.filter(([key]) => progressState[key]).length;
  const percent = Math.round((complete / milestones.length) * 100);
  const pace = currentPlanData?.pace || getPaceProfile(currentPlanState?.hours || Number(hoursInput.value));
  const target = Math.min(milestones.length, pace.weeklyTarget);

  progressMeterFill.style.width = `${percent}%`;
  progressSummary.textContent = `${complete}/${milestones.length} learning actions completed. Weekly target for ${pace.label.toLowerCase()}: ${target} actions.`;
  progressStats.replaceChildren();
  progressEvents.replaceChildren();

  milestones.forEach(([key, label]) => {
    const item = document.createElement("div");
    const dot = document.createElement("span");
    const text = document.createElement("strong");
    item.className = "progress-stat";
    item.classList.toggle("complete", Boolean(progressState[key]));
    dot.className = "progress-dot";
    text.textContent = label;
    item.append(dot, text);
    progressStats.append(item);
  });

  const events = progressState.events || [];
  if (events.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-plans";
    empty.textContent = "Your recent learning activity will appear here.";
    progressEvents.append(empty);
    return;
  }

  events.forEach((event) => {
    const item = document.createElement("p");
    item.className = "progress-event";
    item.textContent = event.label;
    progressEvents.append(item);
  });
}

function saveActivePlan(state, plan) {
  const now = new Date().toISOString();
  const planName = `${state.language} / ${plan.level.label} / ${state.ambition.label}`;
  const existingIndex = activePlans.findIndex((item) => item.name === planName && item.task === state.task);
  const savedPlan = {
    id: existingIndex >= 0 ? activePlans[existingIndex].id : `plan-${Date.now()}`,
    name: planName,
    language: state.language,
    level: state.level,
    ambitionKey: state.ambitionKey,
    ambitionLabel: state.ambition.label,
    task: state.task,
    hours: state.hours,
    updatedAt: now
  };

  if (existingIndex >= 0) {
    activePlans[existingIndex] = savedPlan;
  } else {
    activePlans.unshift(savedPlan);
  }

  activePlans = activePlans.slice(0, 8);
  localStorage.setItem("codepath-active-plans", JSON.stringify(activePlans));
  return savedPlan;
}

function loadActivePlans() {
  try {
    const plans = JSON.parse(localStorage.getItem("codepath-active-plans")) || [];
    return Array.isArray(plans) ? plans.filter((plan) => plan && typeof plan === "object") : [];
  } catch {
    return [];
  }
}

function renderActivePlans() {
  activePlanList.replaceChildren();
  planCount.textContent = activePlans.length;

  if (activePlans.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-plans";
    empty.textContent = "Generate a plan to save it here.";
    activePlanList.append(empty);
    return;
  }

  activePlans.forEach((plan) => {
    const row = document.createElement("div");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
    const name = document.createElement("strong");
    const meta = document.createElement("span");
    row.className = "active-plan-row";
    row.classList.toggle("active", plan.id === activePlanId);
    button.className = "active-plan";
    button.type = "button";
    deleteButton.className = "delete-plan";
    deleteButton.type = "button";
    deleteButton.setAttribute("aria-label", `Delete ${plan.name}`);
    deleteButton.textContent = "Delete";
    name.textContent = plan.name;
    meta.textContent = `${plan.hours} hrs/week - ${plan.task}`;
    button.append(name, meta);
    button.addEventListener("click", () => loadPlan(plan));
    deleteButton.addEventListener("click", () => deletePlan(plan.id));
    row.append(button, deleteButton);
    activePlanList.append(row);
  });
}

function loadLearningNotes() {
  try {
    return JSON.parse(localStorage.getItem("codepath-learning-notes")) || [];
  } catch {
    return [];
  }
}

function persistLearningNotes() {
  localStorage.setItem("codepath-learning-notes", JSON.stringify(learningNotes));
}

function loadSkippedTasks() {
  try {
    const tasks = JSON.parse(localStorage.getItem("codepath-skipped-tasks")) || [];
    return Array.isArray(tasks) ? tasks.filter((task) => task && typeof task === "object") : [];
  } catch {
    return [];
  }
}

function loadMasteryState() {
  try {
    return JSON.parse(localStorage.getItem("codepath-mastery")) || {};
  } catch {
    return {};
  }
}

function persistMasteryState() {
  localStorage.setItem("codepath-mastery", JSON.stringify(masteryState));
}

function loadIndependentSolveState() {
  try {
    return JSON.parse(localStorage.getItem("codepath-independent-solves")) || {};
  } catch {
    return {};
  }
}

function persistIndependentSolveState() {
  localStorage.setItem("codepath-independent-solves", JSON.stringify(independentSolveState));
}

function saveSkippedTask(reason) {
  saveNeedsReviewTask(reason, "Skipped (needs review)");
}

function saveNeedsReviewTask(reason, status = "Incomplete - needs review") {
  const task = currentSubmission?.task || getCurrentTaskPayload();
  if (!task) {
    return;
  }

  const language = currentSubmission?.language || currentPlanState?.language || "";
  const taskId = getTaskStorageId(task, language);
  const existingIndex = skippedTasks.findIndex((item) => item.taskId === taskId || item.taskTitle === task.title);
  const existing = existingIndex >= 0 ? skippedTasks[existingIndex] : null;
  const helpUsage = currentSubmission?.helpUsage || { ...currentTaskHelpUsage };
  const skippedTask = {
    id: Date.now(),
    taskId,
    status,
    reason,
    skipReason: reason,
    taskTitle: task.title,
    instruction: task.instruction,
    task,
    feedback: lastMentorFeedback,
    detectedMistake: getDetectedMistakeFromFeedback(lastMentorFeedback),
    planState: currentPlanState,
    planData: currentPlanData,
    learningPath: activeLearningPath,
    language,
    level: currentSubmission?.level || currentPlanState?.level || "",
    concept: currentPlanData?.language?.core?.[0] || "",
    attempt: currentSubmission?.attempt || taskAttemptInput.value.trim(),
    previousSubmission: currentSubmission?.attempt || taskAttemptInput.value.trim(),
    helpUsage,
    hintsUsed: Boolean(helpUsage.nudge || helpUsage.hint || helpUsage.mentor),
    solutionShown: Boolean(helpUsage.solution || helpUsage.solutionLike),
    skipCount: Number(existing?.skipCount || 0) + 1,
    savedAt: new Date().toISOString()
  };
  skippedTasks = existingIndex >= 0
    ? [skippedTask, ...skippedTasks.filter((_, index) => index !== existingIndex)].slice(0, 12)
    : [skippedTask, ...skippedTasks].slice(0, 12);
  localStorage.setItem("codepath-skipped-tasks", JSON.stringify(skippedTasks));
  markProgress("attempted", `${status}: ${task.title}`);
}

function persistSkippedTasks() {
  localStorage.setItem("codepath-skipped-tasks", JSON.stringify(skippedTasks));
}

function renderNeedsReview() {
  const count = skippedTasks.length;
  needsReviewCard.hidden = count === 0;
  reviewReminder.hidden = true;
  needsReviewCount.textContent = String(count);
  needsReviewCountCopy.textContent = `${count} task${count === 1 ? "" : "s"} waiting`;
  updateSidebarRailCounts();
  needsReviewList.replaceChildren();
  renderNeedsReviewManager();

  skippedTasks.slice(0, 4).forEach((task) => {
    const item = document.createElement("article");
    const button = document.createElement("button");
    const deleteButton = document.createElement("button");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    item.className = "needs-review-row";
    button.className = "needs-review-item";
    button.type = "button";
    button.dataset.reviewTaskId = task.id;
    deleteButton.className = "needs-review-delete";
    deleteButton.type = "button";
    deleteButton.dataset.deleteReviewTaskId = task.id;
    deleteButton.setAttribute("aria-label", `Remove ${task.taskTitle || "unfinished task"} from review`);
    deleteButton.textContent = "Remove";
    title.textContent = task.taskTitle || "Unfinished task";
    meta.textContent = `${task.status || "Needs review"} - ${formatSkipReason(task.reason)} - ${task.language || "coding"}${task.skipCount > 1 ? ` - ${task.skipCount}x` : ""}`;
    button.append(title, meta);
    item.append(button, deleteButton);
    needsReviewList.append(item);
  });
}

function openNeedsReviewModal() {
  renderNeedsReviewManager();
  needsReviewModal.hidden = false;
}

function closeNeedsReviewModal() {
  needsReviewModal.hidden = true;
}

function renderNeedsReviewManager() {
  if (!needsReviewManagerList) {
    return;
  }
  needsReviewManagerList.replaceChildren();

  if (skippedTasks.length === 0) {
    const empty = document.createElement("p");
    empty.className = "needs-review-empty";
    empty.textContent = "No tasks waiting.";
    needsReviewManagerList.append(empty);
    return;
  }

  skippedTasks.forEach((task) => {
    needsReviewManagerList.append(createNeedsReviewManagerItem(task));
  });
}

function createNeedsReviewManagerItem(task) {
  const item = document.createElement("article");
  const body = document.createElement("div");
  const title = document.createElement("h3");
  const meta = document.createElement("p");
  const status = document.createElement("p");
  const actions = document.createElement("div");
  const resume = document.createElement("button");
  const remove = document.createElement("button");

  item.className = "needs-review-manager-item";
  body.className = "needs-review-manager-body";
  title.textContent = task.taskTitle || "Unfinished task";
  meta.textContent = [
    task.concept || task.task?.concept || "Current skill",
    task.language || "coding",
    formatSkipReason(task.reason),
    formatReviewDate(task.savedAt)
  ].filter(Boolean).join(" - ");
  status.textContent = task.status || "Incomplete - needs review";
  status.className = "needs-review-manager-status";
  actions.className = "needs-review-manager-actions";
  resume.type = "button";
  resume.className = "primary-action compact-action";
  resume.dataset.managerResumeTaskId = task.id;
  resume.textContent = "Resume";
  remove.type = "button";
  remove.className = "secondary-action";
  remove.dataset.managerConfirmRemoveTaskId = task.id;
  remove.textContent = "Remove from review";
  body.append(title, meta, status);
  actions.append(resume, remove);
  item.append(body, actions);
  return item;
}

function renderNeedsReviewRemoveConfirm(id) {
  const task = skippedTasks.find((item) => String(item.id) === String(id));
  if (!task) {
    return;
  }
  const row = needsReviewManagerList.querySelector(`[data-manager-confirm-remove-task-id="${id}"]`)?.closest(".needs-review-manager-item");
  if (!row) {
    return;
  }
  const confirm = document.createElement("div");
  const copy = document.createElement("p");
  const cancel = document.createElement("button");
  const remove = document.createElement("button");
  confirm.className = "needs-review-confirm";
  copy.textContent = "Remove this unfinished task from review?";
  cancel.type = "button";
  cancel.className = "secondary-action";
  cancel.dataset.managerCancelRemove = id;
  cancel.textContent = "Cancel";
  remove.type = "button";
  remove.className = "danger-action";
  remove.dataset.managerRemoveTaskId = id;
  remove.textContent = "Remove";
  confirm.append(copy, cancel, remove);
  row.append(confirm);
  row.querySelector("[data-manager-confirm-remove-task-id]")?.setAttribute("disabled", "true");
}

function formatReviewDate(value) {
  if (!value) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return `last tried ${date.toLocaleDateString([], { month: "short", day: "numeric" })}`;
}

function resumeSkippedTask(id = skippedTasks[0]?.id) {
  const task = skippedTasks.find((item) => String(item.id) === String(id));
  if (!task) {
    return;
  }

  resumedSkippedTaskId = task.id;
  resumedSkippedTaskContext = task;
  currentPlanState = task.planState || currentPlanState;
  currentPlanData = task.planData || currentPlanData;
  activeLearningPath = task.learningPath || null;
  lastMentorFeedback = task.feedback || lastMentorFeedback;
  currentSubmission = {
    attempt: task.attempt || "",
    task: task.task || getCurrentTaskPayload(),
    language: task.language || currentPlanState?.language || "",
    level: task.level || currentPlanState?.level || "",
    helpUsage: task.helpUsage || createEmptyHelpUsage(),
    completedWithHelp: wasHelpUsed(task.helpUsage || createEmptyHelpUsage()),
    submittedAt: task.savedAt || new Date().toISOString()
  };
  currentTaskHelpUsage = task.helpUsage || createEmptyHelpUsage();
  currentTaskIndependentRecorded = false;
  taskAttemptInput.value = task.attempt || "";
  updateAttemptEditorLanguage();
  if (task.reason === "syntax-issue") {
    setEditorMode("code");
  }
  updateEditorLineNumbers();
  moduleList.replaceChildren();
  moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  renderResumeScaffold(task);
  renderMentorFeedback(task.feedback || {
    whatIsGood: "You made an attempt that is saved for review.",
    whatIsWrong: "This task was skipped before it was mastered.",
    whatToFixNext: "Revise the saved attempt and submit again.",
    nextStep: "Fix the saved attempt."
  });
  renderNextStep(task.feedback?.nextStep || "Fix the saved attempt.", task.feedback || null);
  submissionStatus.textContent = "Previous attempt loaded.";
  setMentorFlowState("submit");
  window.setTimeout(() => taskAttemptInput.focus(), 0);
}

function removeSkippedTask(id) {
  if (!id) {
    return;
  }
  skippedTasks = skippedTasks.filter((task) => String(task.id) !== String(id));
  persistSkippedTasks();
  resumedSkippedTaskId = null;
  resumedSkippedTaskContext = null;
  renderResumeScaffold(null);
  renderNeedsReview();
}

function confirmRemoveSkippedTask(id) {
  if (!id) {
    return;
  }
  if (window.confirm("Remove this unfinished task from review?")) {
    removeSkippedTask(id);
    renderTaskProgressRail();
  }
}

function saveLearningNote() {
  const body = notesInput.value.trim();
  const title = noteTitle.value.trim() || createDefaultNoteTitle();
  if (!body) {
    notesInput.focus();
    return;
  }

  learningNotes.unshift({
    id: `note-${Date.now()}`,
    title,
    body,
    plan: currentPlanState ? `${currentPlanState.language} / ${currentPlanState.ambition.label}` : "General",
    createdAt: new Date().toISOString()
  });
  learningNotes = learningNotes.slice(0, 20);
  persistLearningNotes();
  noteTitle.value = "";
  notesInput.value = "";
  renderLearningNotes();
  markProgress("note", `Saved note: ${title}`);
}

function createDefaultNoteTitle() {
  if (!currentPlanState) {
    return "Learning note";
  }

  return `${currentPlanState.language} note`;
}

function renderLearningNotes() {
  savedNotes.replaceChildren();
  noteCount.textContent = learningNotes.length;

  if (learningNotes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-plans";
    empty.textContent = "Saved notes will appear here.";
    savedNotes.append(empty);
    return;
  }

  learningNotes.forEach((note) => {
    const card = document.createElement("article");
    const header = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    const body = document.createElement("p");
    const actions = document.createElement("div");
    const loadButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    card.className = "saved-note";
    header.className = "saved-note-header";
    title.textContent = note.title;
    meta.textContent = note.plan;
    body.textContent = note.body;
    actions.className = "saved-note-actions";
    loadButton.type = "button";
    loadButton.className = "secondary-action mini-action";
    loadButton.textContent = "Load";
    deleteButton.type = "button";
    deleteButton.className = "delete-plan";
    deleteButton.textContent = "Delete";
    loadButton.addEventListener("click", () => loadLearningNote(note));
    deleteButton.addEventListener("click", () => deleteLearningNote(note.id));

    header.append(title, meta);
    actions.append(loadButton, deleteButton);
    card.append(header, body, actions);
    savedNotes.append(card);
  });
}

function loadLearningNote(note) {
  noteTitle.value = note.title;
  notesInput.value = note.body;
  showNotesPanel();
  notesInput.focus();
}

function deleteLearningNote(noteId) {
  const note = learningNotes.find((item) => item.id === noteId);
  if (!note) {
    return;
  }

  const shouldDelete = window.confirm(`Delete this note?\n\n${note.title}`);
  if (!shouldDelete) {
    return;
  }

  learningNotes = learningNotes.filter((item) => item.id !== noteId);
  persistLearningNotes();
  renderLearningNotes();
}

function showNotesPanel() {
  notesPanel.classList.remove("hidden");
  notesToggle.textContent = "Hide notes";
  notesToggle.setAttribute("aria-expanded", "true");
  localStorage.setItem("codepath-notes-visible", "true");
}

function hideNotesPanel() {
  notesPanel.classList.add("hidden");
  notesToggle.textContent = "Show notes";
  notesToggle.setAttribute("aria-expanded", "false");
  localStorage.setItem("codepath-notes-visible", "false");
}

function applyNotesVisibility() {
  if (localStorage.getItem("codepath-notes-visible") === "false") {
    hideNotesPanel();
  } else {
    showNotesPanel();
  }
}

function deletePlan(planId) {
  const plan = activePlans.find((item) => item.id === planId);
  if (!plan) {
    return;
  }

  const shouldDelete = window.confirm(`Delete this saved roadmap?\n\n${plan.name}`);
  if (!shouldDelete) {
    return;
  }

  activePlans = activePlans.filter((item) => item.id !== planId);
  localStorage.setItem("codepath-active-plans", JSON.stringify(activePlans));

  if (activePlanId === planId) {
    const nextPlan = activePlans[0];
    if (nextPlan) {
      loadPlan(nextPlan);
      return;
    }

    activePlanId = "";
    localStorage.removeItem("codepath-active-plan-id");
    renderPlan(getState(), { save: false, silent: true, planName: "Unsaved draft" });
    return;
  }

  renderActivePlans();
}

function loadPlan(plan) {
  try {
    setFormFromPlan(normalizeSavedPlan(plan));
    activePlanId = plan.id || "";
    localStorage.setItem("codepath-active-plan-id", activePlanId);
    const state = getState();
    renderPlan(state, { save: false, silent: true, planName: plan.name || "Saved plan" });
  } catch (error) {
    console.warn("Saved plan could not be loaded. Restoring default task.", error);
    activePlanId = "";
    localStorage.removeItem("codepath-active-plan-id");
    renderPlan(getState(), { save: false, silent: true, planName: "Recovered task" });
  }
}

function normalizeSavedPlan(plan = {}) {
  return {
    id: plan.id || "",
    name: plan.name || "Saved plan",
    language: plan.language || "Python",
    level: levelProfiles[plan.level] ? plan.level : "intermediate",
    ambitionKey: ambitionProfiles[plan.ambitionKey] ? plan.ambitionKey : "ai",
    ambitionLabel: plan.ambitionLabel || ambitionProfiles.ai.label,
    task: plan.task || "Build a data dashboard and explain the results to a non-technical team.",
    hours: Number.isFinite(Number(plan.hours)) ? Number(plan.hours) : 6
  };
}

function setFormFromPlan(plan) {
  setSelectValue(languageSelect, plan.language, "other");
  customLanguageInput.value = languageSelect.value === "other" ? plan.language : "";
  languageCustomField.classList.toggle("visible", languageSelect.value === "other");

  setSelectValue(ambitionSelect, plan.ambitionKey, "custom");
  customAmbitionInput.value = ambitionSelect.value === "custom" ? plan.ambitionLabel : "";
  ambitionCustomField.classList.toggle("visible", ambitionSelect.value === "custom");

  const levelInput = form.querySelector(`input[name="level"][value="${plan.level}"]`);
  if (levelInput) {
    levelInput.checked = true;
  }

  taskInput.value = plan.task;
  hoursInput.value = plan.hours;
  hoursOutput.value = plan.hours;
}

function setSelectValue(select, value, fallback) {
  const hasOption = [...select.options].some((option) => option.value === value);
  select.value = hasOption ? value : fallback;
}

function createInsight(title, body) {
  const card = document.createElement("article");
  card.className = "insight";
  const heading = document.createElement("strong");
  const copy = document.createElement("span");
  heading.textContent = title;
  copy.textContent = body;
  card.append(heading, copy);
  return card;
}

function createModule(number, module) {
  const card = document.createElement("article");
  card.className = "module-card";
  const numberBadge = document.createElement("div");
  const content = document.createElement("div");
  const heading = document.createElement("h3");
  const copy = document.createElement("p");
  const stepList = document.createElement("ul");
  const deliverable = document.createElement("p");
  const check = document.createElement("p");
  const tagRow = document.createElement("div");

  numberBadge.className = "module-number";
  numberBadge.textContent = number;
  heading.textContent = module.title;
  copy.textContent = module.body;
  stepList.className = "module-steps";
  module.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    stepList.append(item);
  });
  deliverable.className = "module-proof";
  deliverable.textContent = `Deliverable: ${module.deliverable}`;
  check.className = "module-proof";
  check.textContent = `Done when: ${module.check}`;
  tagRow.className = "tag-row";
  module.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.className = "tag";
    tagElement.textContent = tag;
    tagRow.append(tagElement);
  });

  content.append(heading, copy, stepList, deliverable, check, tagRow);
  card.append(numberBadge, content);
  return card;
}

function createCurrentTaskCard(plan, state) {
  if (activeLearningPath?.choice === "understand") {
    return createConceptLearningCard(plan, state);
  }

  const task = buildConcreteCurrentTask(plan, state);
  const card = document.createElement("article");
  const header = document.createElement("div");
  const badge = document.createElement("span");
  const heading = document.createElement("h3");
  const prompt = document.createElement("p");
  const steps = document.createElement("ol");
  const proof = document.createElement("div");
  const deliverable = document.createElement("p");
  const check = document.createElement("p");

  card.className = "current-task-card";
  header.className = "current-task-card-header";
  badge.className = "practice-type";
  badge.textContent = plan.level.label;
  heading.textContent = task.objective;
  prompt.textContent = task.instruction;
  steps.className = "current-task-steps";

  task.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    steps.append(item);
  });

  proof.className = "current-task-proof";
  deliverable.textContent = `Expected output: ${task.expectedOutput}`;
  check.textContent = "Timebox: 5-10 minutes. Submit the code or pseudocode you wrote.";
  proof.append(deliverable, check);
  header.append(badge, heading);
  card.append(header, prompt);

  if (task.focusRequirement) {
    const pathMeta = document.createElement("div");
    const continuity = document.createElement("div");
    const previousBlock = document.createElement("div");
    const extendBlock = document.createElement("div");
    const previousTitle = document.createElement("h4");
    const extendTitle = document.createElement("h4");
    const previousList = document.createElement("ul");
    const extendList = document.createElement("ul");
    const focus = document.createElement("p");
    const label = document.createElement("span");
    const count = document.createElement("span");
    pathMeta.className = "task-path-meta";
    continuity.className = "task-continuity";
    previousTitle.textContent = "From your previous solution:";
    extendTitle.textContent = "Now extend it:";
    getCompletedMoveLabels(activeLearningPath?.completedMoves || []).forEach((move) => {
      const item = document.createElement("li");
      item.textContent = move;
      previousList.append(item);
    });
    [getExtensionSummary(task.focusRequirement)].forEach((move) => {
      const item = document.createElement("li");
      item.textContent = move;
      extendList.append(item);
    });
    previousBlock.append(previousTitle, previousList);
    extendBlock.append(extendTitle, extendList);
    continuity.append(previousBlock, extendBlock);
    label.textContent = task.progressionLabel || "Next step: Extend your solution";
    count.textContent = task.pathChoice === "extend"
      ? `Step ${Math.max(2, Math.min(skillTrackState.completed, skillTrackState.total))} of ${skillTrackState.total}`
      : `Level ${skillTrackState.level}: Extend your data`;
    focus.className = "task-focus-requirement";
    focus.textContent = `Focus requirement: ${task.focusRequirement}`;
    pathMeta.append(label, count);
    card.append(pathMeta, continuity, focus);
  }

  card.append(steps, proof);
  return card;
}

function createConceptLearningCard(plan, state) {
  const task = buildConcreteCurrentTask(plan, state);
  const concept = plan.language.core[0];
  const focus = getTaskStepFocus(task);
  const wasCorrect = Boolean(activeLearningPath?.wasCorrect);
  const level = state.level || "beginner";
  const step = Math.max(1, Math.min(5, Number(activeLearningPath?.lessonStep || 1)));
  const card = document.createElement("article");
  const header = document.createElement("div");
  const badge = document.createElement("span");
  const heading = document.createElement("h3");
  const progress = document.createElement("p");
  const content = document.createElement("div");
  const nav = document.createElement("div");
  const stepBlocked = isConceptLessonStepBlocked(step, state, focus);

  card.className = "current-task-card concept-learning-card";
  header.className = "current-task-card-header";
  badge.className = "practice-type";
  badge.textContent = "Understand";
  heading.textContent = getConceptLessonTitle(step, wasCorrect, level);
  progress.className = "lesson-progress";
  progress.textContent = `Step ${step} of 5`;
  content.className = "concept-lesson-content";
  content.append(createConceptLessonStep(step, state, focus, concept, wasCorrect, level));
  nav.className = "concept-actions lesson-nav";
  header.append(badge, heading);

  if (step > 1) {
    nav.append(createLessonNavButton("Back", () => setConceptLessonStep(step - 1)));
  }

  if (step < 5) {
    nav.append(createLessonNavButton(
      "Next",
      () => setConceptLessonStep(step + 1),
      true,
      stepBlocked
    ));
  } else {
    nav.append(
      createLessonNavButton("Return to task", returnFromConceptLesson, false, stepBlocked),
      createLessonNavButton("Retry previous attempt", retryPreviousAttempt, true, stepBlocked),
      createLessonNavButton("Continue to next task", continueFromConceptLesson, false, stepBlocked)
    );
  }

  card.append(header, progress, content, nav, createConceptMentorCard(step, state, task, concept, wasCorrect));
  return card;
}

function getConceptLessonTitle(step, wasCorrect, level) {
  const titles = [
    getConceptLearningTitle(wasCorrect, level),
    "More examples",
    "Spot the mistake",
    "Fix the code",
    "Light apply"
  ];
  return titles[step - 1] || titles[0];
}

function createLessonNavButton(label, onClick, primary = false, disabled = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = primary ? "secondary-action primary-inline-action" : "secondary-action";
  button.textContent = label;
  button.disabled = disabled;
  button.addEventListener("click", onClick);
  return button;
}

function isConceptLessonStepBlocked(step, state, focus) {
  const hasStep2Checkpoint = Boolean(getConceptLessonVariant(state, focus, state.level || "beginner")?.prediction);
  if (step === 2 && hasStep2Checkpoint && !activeLearningPath?.moreExamplesPredictionAnswered) {
    return true;
  }
  if (step === 3 && !isSpotMistakeStepComplete()) {
    return true;
  }
  if (step === 4 && !activeLearningPath?.fixCodeCorrect) {
    return true;
  }
  if (step === 5 && !activeLearningPath?.lightApplySubmitted) {
    return true;
  }
  return false;
}

function isSpotMistakeStepComplete() {
  if (!activeLearningPath?.spotMistakeAnswered) {
    return false;
  }
  if (activeLearningPath?.spotMistakeContinueAnyway) {
    return true;
  }
  return activeLearningPath?.spotMistakeCorrect === true;
}

function createConceptMentorCard(step, state, task, concept, wasCorrect) {
  const card = document.createElement("div");
  const heading = document.createElement("h4");
  const copy = document.createElement("p");
  const messages = document.createElement("div");
  const row = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const contextPreview = document.createElement("p");
  const stepTitle = getConceptLessonTitle(step, wasCorrect, state.level || "beginner");

  card.className = "concept-mentor-card";
  heading.textContent = "Ask Mentor";
  copy.textContent = "Ask a short question about this learning step.";
  contextPreview.className = "concept-mentor-context";
  contextPreview.textContent = getMentorContextPreview();
  messages.className = "task-mentor-response concept-mentor-response";
  row.className = "ask-mentor-row";
  input.type = "text";
  input.placeholder = "Ask about this concept step...";
  input.setAttribute("aria-label", "Ask the mentor about this concept step");
  button.type = "button";
  button.className = "secondary-action";
  button.textContent = "Ask";

  button.addEventListener("click", () => askConceptMentor(input, button, messages, {
    step,
    stepTitle,
    state,
    task,
    concept,
    wasCorrect
  }));
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      askConceptMentor(input, button, messages, {
        step,
        stepTitle,
        state,
        task,
        concept,
        wasCorrect
      });
    }
  });

  row.append(input, button);
  card.append(heading, copy, contextPreview, messages, row);
  renderConceptMentorConversation(messages);
  return card;
}

async function askConceptMentor(input, button, messagesContainer, context) {
  const question = input.value.trim();
  if (!question) {
    renderConceptMentorNotice(messagesContainer, "Ask a specific question about this concept step.");
    input.focus();
    return;
  }

  markTaskHelpUsed("mentor");
  const hintCountBefore = getStepHintCount(context.task, "learn-deeper");
  const explicitAnswerRequest = userExplicitlyAsksForAnswer(question);
  if (!explicitAnswerRequest) {
    recordStepHintRequest(context.task, "learn-deeper");
  }
  button.disabled = true;
  button.textContent = "Asking...";
  input.value = "";
  addConceptMentorMessage("user", question);
  addConceptMentorMessage("mentor", "Mentor is thinking about this concept...", true);
  renderConceptMentorConversation(messagesContainer);

  try {
    const learningContext = getCurrentLearningStepMentorContext(context);
    const data = await requestTaskMentorAnswer({
      task: context.task,
      submission: activeLearningPath?.previousAttempt || currentSubmission?.attempt || "",
      question,
      hintCount: hintCountBefore,
      explicitAnswerRequest,
      conversation: getRecentConceptMentorMessages(),
      learningContext
    });
    const fixCodeHint = getFixCodeProgressiveMentorHint(learningContext, hintCountBefore, explicitAnswerRequest);
    const mentorAnswer = fixCodeHint || softenEarlyFallbackHint(
      softenShortExplanationHint(
        softenFirstFixCodeHint(data.answer, learningContext, hintCountBefore, explicitAnswerRequest),
        learningContext,
        hintCountBefore,
        explicitAnswerRequest
      ),
      learningContext,
      hintCountBefore,
      explicitAnswerRequest
    );
    replacePendingConceptMentorMessage(
      mentorAnswer,
      messagesContainer
    );
  } catch (error) {
    replacePendingConceptMentorMessage(error.message, messagesContainer);
  } finally {
    button.disabled = false;
    button.textContent = "Ask";
    input.focus();
  }
}

function isDictionaryValueAggregationContext(learningContext = {}) {
  const contextText = [
    learningContext.expectedConcept,
    learningContext.prompt,
    learningContext.codeShown,
    learningContext.originalBrokenCode,
    learningContext.expectedFix,
    learningContext.validationRule,
    learningContext.currentStepInput,
    learningContext.lastValidationResult
  ].filter(Boolean).join(" ").toLowerCase();

  const mentionsValues = /dictionary value aggregation|dictionary values|stored values|stored scores|collection of values|values\s*\(\)|sum\s*\(\s*[a-z_][\w]*\s*\)/.test(contextText);
  const isSafeLookup = /\.get\s*\(|missing key|keyerror|fallback|safe lookup|missing property|optional property|undefined/.test(contextText);
  return mentionsValues && !isSafeLookup;
}

function isSafeLookupFallbackContext(learningContext = {}) {
  const contextText = [
    learningContext.expectedConcept,
    learningContext.prompt,
    learningContext.codeShown,
    learningContext.expectedFix,
    learningContext.validationRule,
    learningContext.currentStepInput,
    learningContext.lastValidationResult
  ].filter(Boolean).join(" ").toLowerCase();

  return /fallback|\.get\s*\(|missing key|safe lookup/.test(contextText)
    && !isDictionaryValueAggregationContext(learningContext);
}

function softenEarlyFallbackHint(answer, learningContext = {}, hintCount = 0, explicitAnswerRequest = false) {
  if (explicitAnswerRequest || hintCount > 0 || !isSafeLookupFallbackContext(learningContext)) {
    return answer;
  }

  const rule = {
    questionType: "choose_fallback",
    question: learningContext.prompt || "",
    snippet: learningContext.codeShown || learningContext.originalBrokenCode || "",
    expectedAnswerLabel: "0",
    validationRule: learningContext.validationRule || ""
  };
  const analysis = classifySafeLookupFallbackAnswer(learningContext.currentStepInput || "", rule);
  if (analysis && !analysis.correct) {
    return analysis.hint || analysis.message;
  }

  return "The blank is the fallback value. Think about what should be printed if the key is missing. Since this lookup returns a score, what kind of value should the fallback be?";
}

function getFixCodeProgressiveMentorHint(learningContext = {}, hintCount = 0, explicitAnswerRequest = false) {
  if (explicitAnswerRequest || hintCount >= 3 || learningContext.step !== 4) {
    return null;
  }

  const contextText = [
    learningContext.language,
    learningContext.expectedConcept,
    learningContext.prompt,
    learningContext.codeShown,
    learningContext.originalBrokenCode,
    learningContext.expectedFix,
    learningContext.validationRule,
    learningContext.currentStepInput,
    learningContext.lastValidationResult
  ].filter(Boolean).join(" ").toLowerCase();

  if (isDictionaryValueAggregationContext(learningContext)) {
    return hintCount === 0
      ? "The issue is still in the calculation line. What collection should go inside sum(...) so Python uses the stored scores instead of the dictionary keys?"
      : hintCount === 1
        ? "Instead of calculating with the dictionary itself, the expression inside sum(...) should use the dictionary's stored values."
        : "Use the dictionary values pattern inside sum(...), then keep the print line focused on the calculated result.";
  }

  if (/\.get\s*\(|missing key|keyerror|safe lookup|fallback|scores\s*\[/.test(contextText)) {
    const unsafe = findPythonUnsafeLookupInOutput(learningContext.currentStepInput || learningContext.originalBrokenCode || "");
    const unsafeExpression = unsafe ? `${unsafe.name}['${unsafe.key}']` : "direct bracket lookup";
    return hintCount === 0
      ? "The issue is still in the print(...) line. What lookup expression inside that line could avoid crashing when the key is missing?"
      : hintCount === 1
        ? `Instead of printing ${unsafeExpression}, the printed expression should use a lookup that includes a fallback value.`
        : "Use the .get(...) pattern inside print(...), with the missing key and a fallback.";
  }

  if (/\bselect\b|\bgroup\s+by\b|\bcount\s*\(|sql/.test(contextText)) {
    return hintCount === 0
      ? "The issue is in the query clause that controls the result shape. Which selected column needs to be matched by the grouping?"
      : hintCount === 1
        ? "Look at the non-aggregated column in SELECT. The GROUP BY clause should use that same column."
        : "Add or adjust the GROUP BY clause so it matches the non-aggregated SELECT column.";
  }

  if (/\?\?|\|\||missing property|undefined|optional|tofixed|javascript|typescript/.test(contextText)) {
    return hintCount === 0
      ? "The issue is still in the output expression. What value should be used before the code tries to use a missing property?"
      : hintCount === 1
        ? "Instead of using the optional property directly, make the logged or returned expression include a fallback first."
        : "Use the fallback pattern in the output expression before calling methods or formatting the value.";
  }

  if (/filter\s*\(|map\s*\(|array|collection|matching/.test(contextText)) {
    return hintCount === 0
      ? "The issue is in the collection step. Should this code keep matching items or transform every item?"
      : hintCount === 1
        ? "Use the collection operation that matches the goal of the output, not just any array method."
        : "Choose the method that keeps only matching items when the task asks for a filtered result.";
  }

  if (/map|list|null|optional|guard|java|kotlin|swift|c#/.test(contextText)) {
    return hintCount === 0
      ? "The issue is where the value is read before it is checked. What guard or fallback should happen before the output uses it?"
      : hintCount === 1
        ? "Move the safety check into the path that produces the printed or returned value."
        : "Use a guarded lookup or fallback before the value reaches the output line.";
  }

  return hintCount === 0
    ? "The issue is in the line that creates the final output. What small change would make that line match the task?"
    : hintCount === 1
      ? "Focus on the expression that is printed, returned, logged, or selected. That expression needs to use the fixed pattern."
      : "Apply the required pattern directly in the output-producing line, without rewriting the whole solution.";
}

function isShortExplanationLearningContext(learningContext = {}) {
  const contextText = [
    learningContext.microStepType,
    learningContext.expectedConcept,
    learningContext.prompt,
    learningContext.validationRule
  ].filter(Boolean).join(" ").toLowerCase();

  return /explain|why|difference|compare|instead of|short explanation|explain_safe_lookup/.test(contextText)
    && !/____|choose_fallback|fallback value|write the fallback|fill[^.]*fallback/.test(contextText);
}

function softenShortExplanationHint(answer, learningContext = {}, hintCount = 0, explicitAnswerRequest = false) {
  if (explicitAnswerRequest || hintCount > 0 || !isShortExplanationLearningContext(learningContext)) {
    return answer;
  }

  const rule = {
    type: "open_reasoning",
    questionType: learningContext.microStepType || "",
    question: learningContext.prompt || "",
    snippet: learningContext.codeShown || "",
    expectedAnswerLabel: learningContext.expectedFix || "",
    validationRule: learningContext.validationRule || "",
    wrongFeedback: learningContext.lastValidationResult || ""
  };

  return getShortExplanationFeedback("mentor", rule, {
    currentAnswer: learningContext.currentStepInput || ""
  }, 1) || answer;
}

function softenFirstFixCodeHint(answer, learningContext = {}, hintCount = 0, explicitAnswerRequest = false) {
  if (explicitAnswerRequest || hintCount > 0 || learningContext.step !== 4) {
    return answer;
  }

  const contextText = [
    learningContext.expectedConcept,
    learningContext.prompt,
    learningContext.codeShown,
    learningContext.originalBrokenCode,
    learningContext.expectedFix,
    learningContext.validationRule,
    learningContext.currentStepInput,
    learningContext.lastValidationResult
  ].filter(Boolean).join(" ").toLowerCase();

  if (isDictionaryValueAggregationContext(learningContext)) {
    return "Your current code uses the dictionary itself in sum(...), so Python is not using the stored scores. You need the collection of values from the dictionary. What dictionary method gives you just the values?";
  }

  if (!/missing key|fallback|safe lookup|\.get\s*\(|undefined|missing property|optional/.test(contextText)) {
    return answer;
  }

  return "The current line still assumes the value is present. Think about a lookup pattern that will not crash when the key or property is missing. What part of the output line needs to change?";
}

function renderConceptMentorNotice(container, message) {
  container.replaceChildren();
  const notice = document.createElement("p");
  notice.className = "task-mentor-notice";
  notice.textContent = message;
  container.append(notice);
}

function getCurrentLearningStepMentorContext(context) {
  const liveStepInput = getLiveConceptStepInput();
  const stepContext = getLearningStepDetails(context, liveStepInput);
  return {
    mode: "learn-deeper",
    contextPriority: [
      "current learning step",
      "current prompt/question",
      "current code shown",
      "current user input",
      "current validation feedback",
      "original task background"
    ],
    language: context.state.language,
    level: context.state.level,
    concept: context.concept,
    step: context.step,
    stepTitle: context.stepTitle,
    taskTitle: context.task?.title || context.task?.objective || "Current task",
    taskInstruction: context.task?.instruction || "",
    taskSteps: context.task?.steps || [],
    expectedOutput: context.task?.expectedOutput || "",
    wasCorrect: context.wasCorrect,
    originalSubmission: activeLearningPath?.previousAttempt || currentSubmission?.attempt || "",
    ...stepContext
  };
}

function getMentorContextPreview() {
  return "Mentor uses your current attempt.";
}

function getLiveConceptStepInput() {
  const editor = document.querySelector(".concept-learning-card .mini-fix-editor");
  return editor ? editor.value : "";
}

function getLearningStepDetails(context, liveStepInput) {
  const state = context.state;
  const step = Number(context.step);
  const focus = getTaskStepFocus(context.task);
  const spec = getConceptLessonVariant(state, focus, state.level || "beginner");
  const prediction = state.language === "SQL" && focus.kind === "calculation"
    ? getSqlGroupByVariant(state.level || "beginner")?.prediction
    : spec?.prediction;

  if (prediction && step === 2) {
    const stepInput = liveStepInput || activeLearningPath?.moreExamplesPrediction || "";
    return {
      microStepType: getStep2QuestionType(prediction),
      prompt: prediction.question || "Answer this checkpoint.",
      codeShown: prediction.snippet || "",
      expectedConcept: getPredictionExpectedConcept(prediction, state.language, focus),
      expectedFix: getExpectedMicroAnswer(prediction) || prediction.feedback || "Answer the current checkpoint.",
      validationRule: prediction.validationPattern
        ? "Current input must match the prediction validation pattern."
        : (prediction.requiredTerms || []).length
          ? `Current input should include: ${prediction.requiredTerms.join(", ")}.`
          : prediction.feedback || "Use the current prediction prompt.",
      currentStepInput: stepInput,
      lastValidationResult: getStep2ValidationMessage(stepInput, prediction),
      mentorInstruction: "Prioritize this Step 2 micro-question over the original task. If this is fill-in-the-blank, refer to the blank and the type of expression that belongs there. Do not restart from the full task."
    };
  }

  if (state.language === "SQL" && focus.kind === "calculation" && step === 4) {
    const spec = getSqlGroupByVariant(state.level || "beginner");
    const stepConcept = getFixStepConcept(spec.fix, state, focus);
    return {
      microStepType: "fix-the-code",
      expectedConcept: stepConcept.label,
      originalBrokenCode: spec.fix.broken,
      expectedFix: spec.fix.expectedFix,
      validationRule: spec.fix.validationRule,
      currentStepInput: liveStepInput || activeLearningPath?.fixCodeAttempt || "",
      lastValidationResult: getSqlFixValidationMessage(liveStepInput || activeLearningPath?.fixCodeAttempt || "", spec),
      mentorInstruction: `Reference the user's current SQL input directly. On the first help request, describe the missing pattern without giving the exact final clause or query. ${stepConcept.avoid} ${spec.fix.mentorInstruction}`
    };
  }

  if (state.language === "SQL" && focus.kind === "calculation" && step === 3) {
    return {
      originalBrokenCode: `SELECT category, COUNT(*)
FROM practice_tasks;`,
      expectedFix: "Identify that the query is missing GROUP BY category.",
      validationRule: "Correct diagnosis is: Missing GROUP BY clause.",
      currentStepInput: activeLearningPath?.spotMistakeAnswer || "",
      lastValidationResult: activeLearningPath?.spotMistakeAnswered
        ? activeLearningPath.spotMistakeCorrect ? "Correct diagnosis selected." : "Incorrect diagnosis selected."
        : "No diagnosis selected yet.",
      mentorInstruction: "Explain the diagnostic choice briefly. Do not solve later steps."
    };
  }

  if (state.language === "SQL" && focus.kind === "calculation" && step === 5) {
    const spec = getSqlGroupByVariant(state.level || "beginner");
    return {
      originalBrokenCode: "",
      expectedFix: spec.apply.expectedFix,
      validationRule: spec.apply.validationRule,
      currentStepInput: liveStepInput || activeLearningPath?.lightApplyAttempt || "",
      lastValidationResult: activeLearningPath?.lightApplySubmitted ? "User submitted an apply attempt." : "No apply attempt submitted yet.",
      mentorInstruction: spec.apply.mentorInstruction
    };
  }

  if (spec?.fix && step === 4) {
    const stepConcept = getFixStepConcept(spec.fix, state, focus);
    return {
      microStepType: "fix-the-code",
      expectedConcept: stepConcept.label,
      originalBrokenCode: spec.fix.broken,
      expectedFix: spec.fix.expectedFix,
      validationRule: spec.fix.validationRule || spec.fix.expectedFix,
      currentStepInput: liveStepInput || activeLearningPath?.fixCodeAttempt || "",
      lastValidationResult: getGenericFixValidationMessage(liveStepInput || activeLearningPath?.fixCodeAttempt || "", spec),
      mentorInstruction: `Reference the user's current ${state.language} input directly. On the first help request, describe the exact concept for this micro-step without borrowing wording from another dictionary pattern. ${stepConcept.avoid} ${spec.fix.mentorInstruction || "Guide one repair at a time."}`
    };
  }

  if (spec?.spot && step === 3) {
    return {
      originalBrokenCode: spec.spot.snippet,
      expectedFix: spec.spot.expectedAnswerLabel || spec.spot.takeaway,
      validationRule: spec.spot.takeaway,
      currentStepInput: activeLearningPath?.spotMistakeAnswer || "",
      lastValidationResult: activeLearningPath?.spotMistakeAnswered
        ? activeLearningPath.spotMistakeCorrect ? "Correct diagnosis selected." : "Incorrect diagnosis selected."
        : "No diagnosis selected yet.",
      mentorInstruction: "Explain the diagnostic choice briefly. Do not solve later steps."
    };
  }

  if (spec?.apply && step === 5) {
    return {
      originalBrokenCode: "",
      expectedFix: spec.apply.expectedFix || spec.apply.requirements?.join(", "),
      validationRule: spec.apply.validationRule || spec.apply.requirements?.join(", "),
      currentStepInput: liveStepInput || activeLearningPath?.lightApplyAttempt || "",
      lastValidationResult: activeLearningPath?.lightApplySubmitted ? "User submitted an apply attempt." : "No apply attempt submitted yet.",
      mentorInstruction: spec.apply.mentorInstruction || "Help the user apply the same concept in the new prompt."
    };
  }

  return {
    originalBrokenCode: "",
    expectedFix: getConceptRepairStep(focus, state.language),
    validationRule: "Use the current lesson step requirements.",
    currentStepInput: liveStepInput,
    lastValidationResult: "",
    mentorInstruction: "Answer only for this lesson step."
  };
}

function getFixStepConcept(rule = {}, state = {}, focus = {}) {
  const text = [
    rule.prompt,
    rule.broken,
    rule.correct,
    rule.expectedFix,
    rule.validationRule,
    rule.successMessage,
    rule.missingMessage,
    rule.explanation,
    rule.changed
  ].filter(Boolean).join(" ").toLowerCase();

  if (/values\s*\(\)|dictionary values|stored values|stored scores|stored numbers|collection of values|sum\s*\(\s*[a-z_][\w]*\s*\)/.test(text)) {
    return {
      key: "dictionary-value-aggregation",
      label: "dictionary value aggregation: use stored values instead of dictionary keys",
      avoid: "Do not mention safe lookup, missing keys, fallback values, or .get() for this concept."
    };
  }

  if (/\.get\s*\(|missing key|keyerror|fallback|safe lookup|reads a key that might be missing/.test(text)) {
    return {
      key: "safe-missing-key-lookup",
      label: "safe missing-key lookup with a fallback",
      avoid: "Do not discuss aggregation or dictionary values unless the prompt asks for a calculation."
    };
  }

  if (state.language === "SQL" || /\bgroup\s+by\b|\bcount\s*\(/.test(text)) {
    return {
      key: "sql-grouping",
      label: "SQL aggregation with GROUP BY",
      avoid: "Do not discuss dictionary lookup patterns."
    };
  }

  if (/\?\?|\|\||missing property|undefined|tofixed|fallback/.test(text)) {
    return {
      key: "object-property-fallback",
      label: "safe object/property fallback before output",
      avoid: "Do not discuss Python dictionary methods unless the language is Python."
    };
  }

  if (/filter\s*\(|map\s*\(|keep matching|completed contains task objects/.test(text)) {
    return {
      key: "collection-filtering",
      label: "choosing the collection method that keeps matching items",
      avoid: "Do not discuss lookup or fallback patterns."
    };
  }

  return {
    key: focus?.kind || "current-step",
    label: focus?.label || "the current micro-step concept",
    avoid: "Do not reuse hints from a different concept."
  };
}

function getPredictionExpectedConcept(prediction = {}, language = "", focus = {}) {
  const text = [
    prediction.question,
    prediction.snippet,
    prediction.feedback,
    prediction.wrongFeedback,
    prediction.expectedAnswer,
    prediction.expectedAnswerLabel,
    ...(prediction.requiredTerms || [])
  ].filter(Boolean).join(" ").toLowerCase();

  if (language === "SQL" && /group\s+by|select|count|aggregation/.test(text)) {
    return "GROUP BY must match the non-aggregated selected column.";
  }
  if (/fallback|missing|optional|safe lookup|\?\?/.test(text)) {
    return "Use a safe lookup or fallback in the expression that produces the output.";
  }
  if (/values\(\)|dictionary values|sum|average|collection of values|stored values|stored scores/.test(text)) {
    return "Use the collection of dictionary values when calculating across every stored number.";
  }
  if (/filter|map|array|collection/.test(text)) {
    return "Choose the collection operation that matches whether you are keeping, transforming, or summarizing items.";
  }
  return focus?.label ? `Apply the ${focus.label} idea in this micro-step.` : "Answer the current micro-step, not the original task.";
}

function getStep2ValidationMessage(value, prediction = {}) {
  const input = String(value || "").trim();
  if (!input) {
    return activeLearningPath?.moreExamplesPredictionAnswered
      ? "No current answer visible."
      : "No micro-step answer typed yet.";
  }
  const fallbackAnalysis = classifySafeLookupFallbackAnswer(input, prediction, { currentAnswer: input });
  if (fallbackAnalysis && !fallbackAnalysis.correct) {
    return fallbackAnalysis.message;
  }
  const hasWrittenRule = Boolean(prediction.validationPattern || (prediction.requiredTerms || []).length);
  const isCorrect = (hasWrittenRule && validateStep2WrittenAnswer(input, prediction))
    || (prediction.answers || []).some((answer) => answer.value === input && answer.correct)
    || (prediction.correctValue && prediction.correctValue === input);
  if (isCorrect) {
    return "Current micro-step answer appears correct.";
  }
  if (prediction.type === "fill_in" || /fill in|blank/i.test(prediction.question || "")) {
    return "Current answer does not fill the blank with the expected expression yet.";
  }
  return "Current answer does not match the expected micro-step concept yet.";
}

function getSqlFixValidationMessage(value, spec = getSqlGroupByVariant(currentPlanState?.level || "beginner")) {
  const input = String(value || "").trim();
  if (!input) {
    return "No fix typed yet.";
  }
  const behavioral = assessLessonRule(input, spec.fix);
  if (behavioral.result === "Correct" || behavioral.result === "Correct (minor note)") {
    return spec.fix.successMessage;
  }
  if (behavioral.result === "Incorrect") {
    return behavioral.nextFix || behavioral.message || spec.fix.missingMessage;
  }
  if (/\bgroup\s+by\b/i.test(input)) {
    return spec.fix.partialMessage;
  }
  return spec.fix.missingMessage;
}

function addConceptMentorMessage(role, text, pending = false) {
  conceptMentorMessages.push({ role, text, pending });
  conceptMentorMessages = conceptMentorMessages.slice(-6);
}

function replacePendingConceptMentorMessage(text, container) {
  const pendingMessage = [...conceptMentorMessages].reverse().find((message) => message.pending);
  if (pendingMessage) {
    pendingMessage.text = text;
    pendingMessage.pending = false;
  } else {
    addConceptMentorMessage("mentor", text);
  }
  renderConceptMentorConversation(container);
}

function getRecentConceptMentorMessages() {
  return conceptMentorMessages
    .filter((message) => !message.pending)
    .slice(-6)
    .map(({ role, text }) => ({ role, text }));
}

function renderConceptMentorConversation(container) {
  container.replaceChildren();
  conceptMentorMessages.slice(-6).forEach((message) => {
    container.append(createTaskMentorBubble(
      message.role === "user" ? "You" : "Mentor",
      message.text,
      message.role,
      message.pending
    ));
  });
}

function setConceptLessonStep(step) {
  activeLearningPath = { ...(activeLearningPath || {}), lessonStep: step };
  moduleList.replaceChildren();
  moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
}

function createConceptLessonStep(step, state, focus, concept, wasCorrect, level) {
  if (step === 1) {
    return createConceptLessonIntro(state, focus, concept, wasCorrect, level);
  }
  if (step === 2) {
    return createMoreExamplesStep(state, focus, level);
  }
  if (step === 3) {
    return createSpotMistakeStepV2(state, focus, level);
  }
  if (step === 4) {
    return createFixCodeStep(state, focus);
  }
  return createLightApplyStep(state, focus);
}

function createConceptLessonIntro(state, focus, concept, wasCorrect, level) {
  const wrap = document.createElement("div");
  const explanation = document.createElement("p");
  const codeReference = document.createElement("div");
  const pattern = document.createElement("div");
  explanation.textContent = getConceptLearningExplanation(state, focus, concept, wasCorrect, level);
  codeReference.className = "concept-learning-block";
  codeReference.append(createMiniHeading("Your code"), createConceptCodeReference());
  pattern.className = "concept-learning-block";
  pattern.append(createMiniHeading("Core pattern"), createPatternText(state, focus, wasCorrect, level));
  wrap.className = "concept-lesson-stack";
  wrap.append(explanation, codeReference, pattern);
  return wrap;
}

function createMoreExamplesStep(state, focus, level) {
  const wrap = document.createElement("div");
  const examples = document.createElement("div");
  const prediction = document.createElement("div");
  const useCase = document.createElement("div");
  examples.className = "concept-learning-block";
  examples.append(createMiniHeading("What changes the result?"), createCauseEffectExamples(state, focus, level));
  if (getConceptLessonVariant(state, focus, level)?.prediction) {
    prediction.className = "concept-learning-block";
    prediction.append(createConceptStep2Prediction(state, focus, level));
  }
  useCase.className = "concept-learning-block";
  useCase.append(createMiniHeading("When to use this"), createUseCaseText(state));
  wrap.className = "concept-lesson-stack";
  wrap.append(examples);
  if (prediction.childElementCount) {
    wrap.append(prediction);
  }
  wrap.append(useCase);
  return wrap;
}

function createSpotMistakeStep(state, focus, level) {
  const block = document.createElement("div");
  const code = document.createElement("pre");
  const prompt = document.createElement("p");
  const options = document.createElement("div");
  const result = document.createElement("p");
  const mistake = getMistakeQuestion(state, focus, level);
  const selected = activeLearningPath?.spotMistakeAnswer || "";
  block.className = "concept-learning-block";
  code.className = "task-tool-code";
  code.textContent = mistake.snippet;
  prompt.textContent = mistake.question;
  options.className = "prediction-options";
  result.className = "prediction-result";
  const answerChoices = getShuffledAnswers(mistake.answers || [], "spot", mistake.type || mistake.question || "");
  answerChoices.forEach((answer) => {
    const button = document.createElement("button");
    const answered = Boolean(activeLearningPath?.spotMistakeAnswered);
    button.type = "button";
    button.className = getPredictionButtonClass({
      answered,
      selected: selected === answer.value,
      correct: answer.correct,
      revealCorrect: shouldRevealMicroAnswer("spot")
    });
    button.textContent = answer.label;
    button.disabled = answered;
    button.addEventListener("click", () => {
      activeLearningPath = {
        ...(activeLearningPath || {}),
        ...getMicroAttemptUpdate("spot", answer.correct),
        spotMistakeAnswer: answer.value,
        spotMistakeAnswered: true,
        spotMistakeCorrect: answer.correct,
        spotMistakeContinueAnyway: false
      };
      rememberSpotQuestionType(mistake.type || "multiple_choice");
      rememberCorrectAnswerPosition("spot", mistake.type || mistake.question || "", answerChoices);
      moduleList.replaceChildren();
      moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
    });
    options.append(button);
  });
  if (activeLearningPath?.spotMistakeAnswered) {
    const explanationList = document.createElement("ul");
    const selectedAnswer = mistake.answers.find((answer) => answer.value === selected);
    const correctAnswer = mistake.answers.find((answer) => answer.correct);
    result.textContent = selectedAnswer?.correct
      ? `Correct — ${correctAnswer.reason.replace(/^Correct\.\s*/i, "")}`
      : getProgressiveMicroFeedback("spot", mistake, { correctAnswer, selectedAnswer });
    answerChoices.forEach((answer) => {
      const item = document.createElement("li");
      item.textContent = `${answer.label}: ${answer.reason}`;
      explanationList.append(item);
    });
    block.append(createMiniHeading("Find the issue"), code, prompt, options, result);
    if (shouldRevealMicroAnswer("spot")) {
      block.append(explanationList);
    }
    if (!selectedAnswer?.correct) {
      block.append(createTryAgainButton("spot"));
    }
    block.append(createTakeaway(mistake.takeaway));
    return block;
  }
  block.append(createMiniHeading("Find the issue"), code, prompt, options, result);
  return block;
}

function createSpotMistakeStepV2(state, focus, level) {
  const mistake = getMistakeQuestion(state, focus, level);
  if (mistake.type && mistake.type !== "multiple_choice" && mistake.type !== "predict") {
    return createSpotMistakeWrittenStep(state, focus, level, mistake);
  }

  const block = document.createElement("div");
  const code = document.createElement("pre");
  const prompt = document.createElement("p");
  const options = document.createElement("div");
  const result = document.createElement("p");
  const selected = activeLearningPath?.spotMistakeAnswer || "";
  const answered = Boolean(activeLearningPath?.spotMistakeAnswered);

  block.className = "concept-learning-block";
  code.className = "task-tool-code";
  code.textContent = mistake.snippet;
  prompt.textContent = mistake.question;
  options.className = "prediction-options";
  result.className = "prediction-result";

  const answerChoices = getShuffledAnswers(mistake.answers || [], "spot", mistake.type || mistake.question || "");
  answerChoices.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = getPredictionButtonClass({
      answered,
      selected: selected === answer.value,
      correct: answer.correct,
      revealCorrect: shouldRevealMicroAnswer("spot")
    });
    button.textContent = answer.label;
    button.disabled = answered;
    button.addEventListener("click", () => {
      activeLearningPath = {
        ...(activeLearningPath || {}),
        ...getMicroAttemptUpdate("spot", answer.correct),
        spotMistakeAnswer: answer.value,
        spotMistakeAnswered: true,
        spotMistakeCorrect: answer.correct,
        spotMistakeContinueAnyway: false
      };
      rememberCorrectAnswerPosition("spot", mistake.type || mistake.question || "", answerChoices);
      moduleList.replaceChildren();
      moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
    });
    options.append(button);
  });

  if (answered) {
    const selectedAnswer = mistake.answers.find((answer) => answer.value === selected);
    const correctAnswer = mistake.answers.find((answer) => answer.correct);
    block.append(
      createMiniHeading("Find the issue"),
      code,
      prompt,
      options,
      createSpotMistakeFeedback(state, focus, level, mistake, selectedAnswer, correctAnswer)
    );
    if (!selectedAnswer?.correct) {
      const actions = document.createElement("div");
      const continueButton = document.createElement("button");
      actions.className = "concept-actions";
      continueButton.type = "button";
      continueButton.className = "secondary-action";
      continueButton.textContent = "Continue anyway";
      continueButton.addEventListener("click", () => {
        activeLearningPath = {
          ...(activeLearningPath || {}),
          spotMistakeContinueAnyway: true
        };
        moduleList.replaceChildren();
        moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
      });
      actions.append(createTryAgainButton("spot"), continueButton);
      block.append(actions);
    }
    return block;
  }

  block.append(createMiniHeading("Find the issue"), code, prompt, options, result);
  return block;
}

function createSpotMistakeWrittenStep(state, focus, level, mistake) {
  const block = document.createElement("div");
  const code = document.createElement("pre");
  const prompt = document.createElement("p");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  const answered = Boolean(activeLearningPath?.spotMistakeAnswered);
  const answer = activeLearningPath?.spotMistakeAnswer || "";

  block.className = "concept-learning-block";
  code.className = "task-tool-code";
  code.textContent = mistake.snippet;
  prompt.textContent = mistake.question;
  textarea.className = "mini-fix-editor";
  textarea.rows = mistake.type === "open_reasoning" ? 5 : 3;
  textarea.spellcheck = false;
  textarea.placeholder = getNeutralPredictionPlaceholder(mistake);
  textarea.value = answer;
  textarea.disabled = answered;
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Check answer";
  submit.disabled = answered;
  submit.addEventListener("click", () => {
    const value = textarea.value.trim();
    if (!value) {
      result.textContent = "Write a short answer first.";
      return;
    }
    const isCorrect = validateSpotWrittenAnswer(value, mistake);
    activeLearningPath = {
      ...(activeLearningPath || {}),
      ...getMicroAttemptUpdate("spot", isCorrect),
      spotMistakeAnswer: value,
      spotMistakeAnswered: true,
      spotMistakeCorrect: isCorrect,
      spotMistakeContinueAnyway: false
    };
    rememberSpotQuestionType(mistake.type || "written");
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  actions.append(submit);
  block.append(createMiniHeading(getSpotPromptHeading(mistake)), code, prompt, textarea, actions);

  if (answered) {
    const correctAnswer = {
      label: mistake.expectedAnswerLabel || mistake.expectedAnswer || "Expected pattern",
      reason: mistake.correctReason || mistake.takeaway,
      correct: true
    };
    block.append(createSpotMistakeFeedback(state, focus, level, mistake, {
      label: answer || "Your written answer",
      correct: activeLearningPath?.spotMistakeCorrect
    }, correctAnswer));
    if (!activeLearningPath?.spotMistakeCorrect) {
      const retryActions = document.createElement("div");
      const continueButton = document.createElement("button");
      retryActions.className = "concept-actions";
      continueButton.type = "button";
      continueButton.className = "secondary-action";
      continueButton.textContent = "Continue anyway";
      continueButton.addEventListener("click", () => {
        activeLearningPath = { ...(activeLearningPath || {}), spotMistakeContinueAnyway: true };
        moduleList.replaceChildren();
        moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
      });
      retryActions.append(createTryAgainButton("spot"), continueButton);
      block.append(retryActions);
    }
  } else {
    result.textContent = "Answer this to unlock the next step.";
    block.append(result);
  }

  return block;
}

function getSpotPromptHeading(mistake) {
  const labels = {
    fill_in: "Fill in the missing code",
    minimal_fix: "Choose the minimal fix",
    compare: "Compare the queries",
    explain_failure: "Explain why it fails",
    map_goal: "Map to the goal",
    open_reasoning: "Reason about the query"
  };
  return labels[mistake.type] || "Find the issue";
}

function validateSpotWrittenAnswer(value, mistake) {
  if (!value) {
    return false;
  }
  if (mistake.validationPattern) {
    return mistake.validationPattern.test(value);
  }
  const lower = value.toLowerCase();
  return (mistake.requiredTerms || []).every((term) => lower.includes(term));
}

function getMicroAttemptCount(scope) {
  return Number(activeLearningPath?.microQuestionAttempts?.[scope] || 0);
}

function getMicroAttemptUpdate(scope, isCorrect) {
  const counts = { ...(activeLearningPath?.microQuestionAttempts || {}) };
  if (!isCorrect) {
    counts[scope] = Number(counts[scope] || 0) + 1;
  }
  return { microQuestionAttempts: counts };
}

function shouldRevealMicroAnswer(scope) {
  return getMicroAttemptCount(scope) >= 3;
}

function stripExpectedPrefix(text) {
  return String(text || "")
    .replace(/^Expected:\s*/i, "")
    .replace(/^Correct answer:\s*/i, "")
    .trim();
}

function getExpectedMicroAnswer(rule = {}, correctAnswer = null) {
  return stripExpectedPrefix(
    correctAnswer?.label
    || rule.expectedAnswerLabel
    || rule.expectedAnswer
    || rule.expectedFix
    || rule.answer
    || rule.correct
    || "the expected pattern"
  );
}

function getCurrentMicroAnswer(scope, options = {}) {
  if (options.currentAnswer !== undefined) {
    return String(options.currentAnswer || "");
  }
  if (scope === "more-examples") {
    return String(activeLearningPath?.moreExamplesPrediction || "");
  }
  if (scope === "fix-code") {
    return String(activeLearningPath?.fixCodeAttempt || "");
  }
  if (scope === "light-apply") {
    return String(activeLearningPath?.lightApplyAttempt || "");
  }
  if (scope === "spot") {
    return String(activeLearningPath?.spotMistakeInput || activeLearningPath?.spotMistakeAnswer || "");
  }
  return "";
}

function getMicroQuestionKind(rule = {}) {
  const type = String(rule.type || "").toLowerCase();
  const questionType = String(rule.questionType || "").toLowerCase();
  const answerKind = String(rule.answerKind || "").toLowerCase();
  const promptText = [
    rule.question,
    rule.prompt,
    rule.placeholder
  ].filter(Boolean).join(" ").toLowerCase();
  const codeText = [
    rule.snippet,
    rule.broken
  ].filter(Boolean).join("\n").toLowerCase();

  if (type === "fill_in" || /fill|blank|missing expression|missing line|choose_fallback|values_collection_blank/.test(questionType)
    || ["value", "expression", "line", "column", "columns"].includes(answerKind)
    || /____/.test(codeText)) {
    return "fill-in-the-blank";
  }
  if (rule.broken && rule.correct) {
    return "fix-the-code";
  }
  if (type === "multiple_choice") {
    return "multiple-choice";
  }
  if (/predict|what prints|what logs|output/.test(questionType) || /what (prints|logs|happens|returns)/.test(promptText)) {
    return "output-prediction";
  }
  if (type === "compare" && /why|explain|because/.test(questionType + " " + promptText)) {
    return "short-explanation";
  }
  if (type === "compare" || /compare|difference|which snippet|which query/.test(questionType + " " + promptText)) {
    return "compare-snippets";
  }
  if (type === "open_reasoning" || /explain|why|reason|tradeoff|because/.test(questionType + " " + promptText)) {
    return "short-explanation";
  }
  if ((rule.answers || []).length) {
    return "multiple-choice";
  }
  return "short-explanation";
}

function isShortExplanationRule(rule = {}) {
  const kind = getMicroQuestionKind(rule);
  return kind === "short-explanation" || kind === "compare-snippets";
}

function getRuleClueText(rule = {}, options = {}) {
  return [
    rule.questionType,
    rule.question,
    rule.prompt,
    rule.snippet,
    rule.broken,
    rule.expectedAnswer,
    rule.expectedAnswerLabel,
    rule.expectedFix,
    rule.validationRule,
    rule.wrongFeedback,
    rule.missingMessage,
    options.correctAnswer?.label,
    options.selectedAnswer?.label
  ].filter(Boolean).join(" ").toLowerCase();
}

function isSafeLookupFallbackRule(rule = {}) {
  const kind = getMicroQuestionKind(rule);
  const text = getRuleClueText(rule);
  const asksForFallbackValue = /choose_fallback/.test(text)
    || (kind === "fill-in-the-blank" && /\.get\s*\([^)]*____|fallback value|write the fallback value/.test(text));
  const fixesFallbackCode = kind === "fix-the-code" && /\.get\s*\(|missing key|keyerror|fallback/.test(text);

  return (asksForFallbackValue || fixesFallbackCode)
    && /(score|missing|stretch|task_c|key|fallback)/.test(text);
}

function getDictionaryNameForFallback(rule = {}) {
  const text = [
    rule.snippet,
    rule.broken,
    rule.correct,
    rule.prompt,
    rule.expectedFix
  ].filter(Boolean).join("\n");
  const getMatch = text.match(/\b([a-zA-Z_][\w]*)\.get\s*\(/);
  if (getMatch) {
    return getMatch[1];
  }
  const assignmentMatch = text.match(/\b([a-zA-Z_][\w]*)\s*=\s*[{[]/);
  return assignmentMatch ? assignmentMatch[1] : "scores";
}

function getFallbackKeyForRule(rule = {}) {
  const text = [
    rule.snippet,
    rule.broken,
    rule.correct,
    rule.prompt,
    rule.expectedFix
  ].filter(Boolean).join("\n");
  const getMatch = text.match(/\.get\s*\(\s*(['"])([^'"]+)\1/);
  if (getMatch) {
    return getMatch[2];
  }
  const bracketMatch = text.match(/\[\s*(['"])([^'"]+)\1\s*\]/);
  return bracketMatch ? bracketMatch[2] : "the key";
}

function extractPythonGetLookup(expression = "") {
  const text = String(expression || "");
  const match = text.match(/\b([a-zA-Z_][\w]*)\.get\s*\(\s*(['"])([^'"]+)\2\s*(?:,\s*([^)]+?))?\s*\)/);
  if (!match) {
    return null;
  }
  return {
    dictionaryName: match[1],
    key: match[3],
    fallback: match[4] === undefined ? "" : match[4].trim()
  };
}

function normalizeFallbackAnswer(value = "") {
  return String(value || "")
    .trim()
    .replace(/[;,\s]+$/g, "")
    .replace(/^\((.*)\)$/s, "$1")
    .trim();
}

function getExpectedSafeLookupFallback(criteriaText = "") {
  const match = String(criteriaText || "").match(/\.get\s*\(\s*['"][^'"]+['"]\s*,\s*([^)]+?)\s*\)/i);
  return match ? normalizeFallbackAnswer(match[1]) : "";
}

function classifySafeLookupFallbackAnswer(value, rule = {}, options = {}) {
  if (!isSafeLookupFallbackRule(rule)) {
    return null;
  }

  const raw = String(value || "").trim();
  const dictionaryName = getDictionaryNameForFallback(rule);
  const fallbackKey = getFallbackKeyForRule(rule);
  const expected = normalizeFallbackAnswer(options.expected || getExpectedMicroAnswer(rule));

  if (!raw) {
    return {
      kind: "missing_fallback",
      correct: false,
      message: "Not quite. This safe lookup still needs a fallback value for when the key is missing.",
      hint: "The blank is the fallback value. Think about what should be printed if the key is missing."
    };
  }

  const unsafeOutput = findPythonUnsafeLookupInOutput(raw);
  if (unsafeOutput && !raw.includes(".get(")) {
    return {
      kind: "unsafe_lookup_still_used",
      correct: false,
      message: "Not quite. This still uses direct bracket lookup, so the missing key can still stop the code.",
      hint: "The issue is still in the print(...) line. What lookup expression inside that line could avoid crashing when the key is missing?"
    };
  }

  const lookup = extractPythonGetLookup(raw);
  let fallback = lookup ? lookup.fallback : raw;
  fallback = normalizeFallbackAnswer(fallback);

  if (!fallback) {
    return {
      kind: "missing_fallback",
      correct: false,
      message: "Not quite. .get() needs a fallback value after the key for this question.",
      hint: "The second part of .get(...) is the value to use when the key is missing."
    };
  }

  if ((rule.validationPattern && rule.validationPattern.test(fallback))
    || (expected && fallback.toLowerCase() === expected.toLowerCase())) {
    return {
      kind: "fallback_correct",
      correct: true,
      message: rule.feedback || "Correct. The fallback matches the value this lookup should return when the key is missing."
    };
  }

  if (fallback === dictionaryName) {
    const keyLabel = lookup?.key || fallbackKey;
    return {
      kind: "fallback_whole_dictionary",
      correct: false,
      message: "Not quite. The fallback is what gets returned when the key is missing. Since this lookup should return a score, the fallback should be a single score value, not the whole dictionary.",
      hint: `The blank is the fallback value. Think about what should be printed if ${keyLabel} is missing. Since scores are numbers, what number should represent a missing score here?`
    };
  }

  if (/^['"`].*['"`]$/.test(fallback) || /^(none|null|undefined|nan|true|false)$/i.test(fallback) || /^[{[]/.test(fallback)) {
    return {
      kind: "wrong_fallback_type",
      correct: false,
      message: "Not quite. This lookup should return a score, so the fallback needs to be a number instead of a different type of value.",
      hint: "Match the fallback to the type of value the dictionary normally stores. What numeric value should represent a missing score?"
    };
  }

  if (/^[a-zA-Z_][\w.]*$/.test(fallback)) {
    return {
      kind: "fallback_another_variable",
      correct: false,
      message: "Not quite. That names another value, but this blank should be the fallback value returned when the key is missing.",
      hint: "Use a concrete fallback that matches the score type, rather than another variable name."
    };
  }

  return {
    kind: "wrong_fallback_value",
    correct: false,
    message: "Not quite. The fallback should match what this task wants to print when the score is missing.",
    hint: "Think about what missing should count as in this score dictionary."
  };
}

function getSafeLookupFallbackProgressiveFeedback(scope, rule = {}, options = {}, attemptCount = 0) {
  const analysis = classifySafeLookupFallbackAnswer(getCurrentMicroAnswer(scope, options), rule, options);
  if (!analysis) {
    return null;
  }
  if (analysis.correct) {
    return `Correct - ${analysis.message}`;
  }
  if (attemptCount >= 3 || options.reveal) {
    const expected = getExpectedMicroAnswer(rule, options.correctAnswer);
    return `Not quite. Expected: ${expected}. The fallback is the value returned when the key is missing.`;
  }
  if (attemptCount >= 2) {
    if (analysis.kind === "fallback_whole_dictionary") {
      return "Not quite. The blank should be one numeric score, not the scores dictionary. What number should represent a missing score?";
    }
    if (analysis.kind === "fallback_another_variable") {
      return "Not quite. The blank should be the actual fallback value, not another variable name. Use a numeric value that matches the missing score case.";
    }
    if (analysis.kind === "wrong_fallback_type") {
      return "Not quite. The fallback needs to be numeric because the lookup returns a score. Choose the number that represents no score found.";
    }
    return analysis.hint;
  }
  return analysis.message;
}

function getShortExplanationConcept(rule = {}, options = {}) {
  const clueText = getRuleClueText(rule, options);
  if (/\.get\s*\(|scores\s*\[|direct lookup|safe lookup|keyerror|missing key|bracket lookup/.test(clueText)) {
    return "safe-lookup-explanation";
  }
  if (/values\s*\(\)|sum\s*\(|dictionary values|keys instead of values|stored numbers|average/.test(clueText)) {
    return "dictionary-values-explanation";
  }
  if (/group\s+by|\bselect\b|\bcount\s*\(|aggregation/.test(clueText)) {
    return "sql-grouping-explanation";
  }
  if (/\?\?|\|\||missing property|undefined|optional property|tofixed/.test(clueText)) {
    return "js-fallback-explanation";
  }
  if (/filter|map|keep|matching|transform/.test(clueText)) {
    return "collection-method-explanation";
  }
  return "general-explanation";
}

function getShortExplanationReveal(rule = {}, concept = getShortExplanationConcept(rule)) {
  const key = getFallbackKeyForRule(rule);
  if (concept === "safe-lookup-explanation") {
    return `.get('${key}', 0) is used because '${key}' might be missing. Bracket lookup can raise an error, while .get() returns the fallback value.`;
  }
  if (concept === "dictionary-values-explanation") {
    return "Using the dictionary directly reads its keys. Use the dictionary values when the calculation should use the stored numbers.";
  }
  if (concept === "sql-grouping-explanation") {
    return "GROUP BY controls the summary rows. Any non-aggregated column in SELECT needs to match the grouping.";
  }
  if (concept === "js-fallback-explanation") {
    return "The fallback handles a missing or undefined property before the value is logged, returned, or used by another method.";
  }
  if (concept === "collection-method-explanation") {
    return "Choose the method based on the goal: filter keeps matching items, while map transforms each item.";
  }
  return stripExpectedPrefix(rule.wrongFeedback || rule.feedback || rule.expectedAnswerLabel || "Explain the behavior shown in the prompt.");
}

function getShortExplanationFeedback(scope, rule = {}, options = {}, attemptCount = 0) {
  if (!isShortExplanationRule(rule)) {
    return null;
  }

  const answer = getCurrentMicroAnswer(scope, options).trim();
  const concept = getShortExplanationConcept(rule, options);

  if (attemptCount >= 3 || options.reveal) {
    return `Not quite. ${getShortExplanationReveal(rule, concept)}`;
  }

  if (concept === "safe-lookup-explanation") {
    return attemptCount >= 2
      ? "Not quite. Direct lookup with brackets can fail if the key is missing. The safer lookup lets you provide a fallback instead."
      : "Not quite. This answer does not explain the difference between direct lookup and safe lookup. Focus on what happens when the key is missing.";
  }

  if (concept === "dictionary-values-explanation") {
    return attemptCount >= 2
      ? "Not quite. Iterating a dictionary directly gives keys. The calculation needs the stored numeric values instead."
      : "Not quite. This does not explain the calculation behavior yet. Focus on whether the code is using dictionary keys or values.";
  }

  if (concept === "sql-grouping-explanation") {
    return attemptCount >= 2
      ? "Not quite. Explain how the selected non-aggregated column relates to the GROUP BY column."
      : "Not quite. This does not explain the grouping behavior yet. Focus on what changes the output rows.";
  }

  if (concept === "js-fallback-explanation") {
    return attemptCount >= 2
      ? "Not quite. Explain what happens when the property is missing and how the fallback affects the output."
      : "Not quite. This does not explain the missing-property behavior yet. Focus on what value exists when the property is absent.";
  }

  if (concept === "collection-method-explanation") {
    return attemptCount >= 2
      ? "Not quite. Explain whether the code is keeping matching items or transforming every item."
      : "Not quite. This does not explain the collection behavior yet. Focus on the goal of the method being used.";
  }

  return answer
    ? "Not quite. This does not answer the question yet. Try explaining the specific behavior shown in the code."
    : "Write a short explanation first.";
}

function getProgressiveMicroFeedback(scope, rule = {}, options = {}) {
  if (options.correct) {
    return options.correctMessage || `Correct - ${rule.feedback || rule.successMessage || rule.explanation || "that matches the pattern."}`;
  }

  const attemptCount = getMicroAttemptCount(scope);
  const fallbackFeedback = getSafeLookupFallbackProgressiveFeedback(scope, rule, options, attemptCount);
  if (fallbackFeedback) {
    return fallbackFeedback;
  }
  const explanationFeedback = getShortExplanationFeedback(scope, rule, options, attemptCount);
  if (explanationFeedback) {
    return explanationFeedback;
  }

  const expected = getExpectedMicroAnswer(rule, options.correctAnswer);
  if (attemptCount >= 3 || options.reveal) {
    return `Not quite. Expected: ${expected}. ${stripExpectedPrefix(rule.wrongFeedback || rule.missingMessage || rule.validationRule || "")}`.trim();
  }

  return attemptCount >= 2
    ? getDirectionalMicroHint(scope, rule, options)
    : getConceptualMicroHint(scope, rule, options);
}

function getConceptualMicroHint(scope, rule = {}, options = {}) {
  const fallbackAnalysis = classifySafeLookupFallbackAnswer(getCurrentMicroAnswer(scope, options), rule, options);
  if (fallbackAnalysis && !fallbackAnalysis.correct) {
    return fallbackAnalysis.hint || fallbackAnalysis.message;
  }

  if (isShortExplanationRule(rule)) {
    const explanationHint = getShortExplanationFeedback(scope, rule, options, 1);
    if (explanationHint) {
      return explanationHint;
    }
  }

  const clueText = getRuleClueText(rule, options);

  if (/values\s*\(\)|dictionary values|collection of values|stored values|stored scores|sum\s*\(/.test(clueText)) {
    return "Not quite. You need the collection of values from the dictionary, not a single variable name. Look at the example above: what expression returns all values?";
  }
  if (/\.get\s*\(|missing key|keyerror|fallback|safe lookup/.test(clueText)) {
    return "Not quite. Think about a lookup pattern that will not crash when the key is missing. What part of the output line still assumes the key exists?";
  }
  if (/group\s+by|\bselect\b|\bcount\s*\(/.test(clueText)) {
    return "Not quite. Look at the column being selected outside the aggregate. The grouping needs to follow that same idea.";
  }
  if (/\?\?|\|\||missing property|undefined|fallback/.test(clueText)) {
    return "Not quite. Think about what value should be used when the property is missing before the output runs.";
  }
  if (/filter|map|keep|matching/.test(clueText)) {
    return "Not quite. Decide whether the code should keep matching items or transform every item.";
  }
  if (/label|for and id|input/.test(clueText)) {
    return "Not quite. Focus on the two attributes that connect the label to the input.";
  }
  if (/validate|null|guard|failure|success/.test(clueText)) {
    return "Not quite. Look for the check that should happen before the value is used.";
  }
  if (/create|calculate|show|output|transform/.test(clueText)) {
    return "Not quite. Focus on the order: the result needs to exist before it can be shown.";
  }
  if (scope === "light-apply") {
    return "Not quite. Reuse the same pattern from the previous step, but apply it to the new prompt.";
  }
  return "Not quite. Compare your answer to the example above and focus on the one part that changes the result.";
}

function getDirectionalMicroHint(scope, rule = {}, options = {}) {
  const fallbackAnalysis = classifySafeLookupFallbackAnswer(getCurrentMicroAnswer(scope, options), rule, options);
  if (fallbackAnalysis && !fallbackAnalysis.correct) {
    if (fallbackAnalysis.kind === "fallback_whole_dictionary") {
      return "The fallback should be one numeric score, not the entire dictionary. Think about the number that should stand in for a missing score.";
    }
    if (fallbackAnalysis.kind === "unsafe_lookup_still_used") {
      return "Instead of printing the direct bracket lookup, the printed expression should use a lookup that includes a fallback value.";
    }
    return fallbackAnalysis.hint || fallbackAnalysis.message;
  }

  if (isShortExplanationRule(rule)) {
    const explanationHint = getShortExplanationFeedback(scope, rule, options, 2);
    if (explanationHint) {
      return explanationHint;
    }
  }

  const clueText = getRuleClueText(rule, options);

  if (/values\s*\(\)|dictionary values|collection of values|stored values|stored scores|sum\s*\(/.test(clueText)) {
    return "The missing expression should call a method on the dictionary and return all stored values.";
  }
  if (/\.get\s*\(|missing key|keyerror|fallback|safe lookup/.test(clueText)) {
    return "Use a safe dictionary lookup pattern where the fallback is part of the expression being printed or returned.";
  }
  if (/group\s+by|\bselect\b|\bcount\s*\(/.test(clueText)) {
    return "Use the grouping clause with the same non-aggregated column that appears in SELECT.";
  }
  if (/\?\?|\|\||missing property|undefined|fallback/.test(clueText)) {
    return "Put the fallback into the expression that is logged or returned, before any method call uses the value.";
  }
  if (/filter|map|keep|matching/.test(clueText)) {
    return "Use the collection method that keeps only items matching a condition, not the one that turns every item into a new value.";
  }
  if (/label|for and id|input/.test(clueText)) {
    return "The label's target and the input's id need to use the same value.";
  }
  if (/validate|null|guard|failure|success/.test(clueText)) {
    return "Add the guard or success check before the line that reads or outputs the value.";
  }
  if (/create|calculate|show|output|transform/.test(clueText)) {
    return "Move the create/calculate/transform step before the show/output step.";
  }
  if (scope === "light-apply") {
    return "Keep the same structure as the lesson example, then swap in the new key, property, or column from this prompt.";
  }
  return "Look for the method, clause, or step that directly changes the output, then use it in the answer.";
}

function createSpotMistakeFeedback(state, focus, level, mistake, selectedAnswer, correctAnswer) {
  const wrap = document.createElement("div");
  const label = document.createElement("p");
  const selectedLine = document.createElement("p");
  const whyTitle = document.createElement("strong");
  const why = document.createElement("p");
  const keyIdea = createTakeaway(mistake.takeaway);
  const details = document.createElement("details");
  const summary = document.createElement("summary");
  const list = document.createElement("ul");
  const selectedCorrect = Boolean(selectedAnswer?.correct);

  wrap.className = `spot-feedback ${selectedCorrect ? "is-correct" : "is-incorrect"}`;
  label.className = "spot-feedback-label";
  label.textContent = selectedCorrect ? "Correct" : "Not quite.";
  selectedLine.className = "spot-feedback-answer";
  selectedLine.textContent = selectedCorrect
    ? `Your answer: ${selectedAnswer.label}`
    : shouldRevealMicroAnswer("spot")
      ? `Your answer: ${selectedAnswer.label}. Correct answer: ${correctAnswer.label}`
      : `Your answer: ${selectedAnswer.label}`;
  whyTitle.textContent = "Why:";
  why.textContent = selectedCorrect
    ? getAdaptiveSpotMistakeExplanation(state, focus, level, true)
    : getProgressiveMicroFeedback("spot", mistake, { correctAnswer, selectedAnswer });
  keyIdea.textContent = `Key idea: ${mistake.takeaway}`;

  summary.textContent = "Why the other options are wrong";
  (mistake.answers || [])
    .filter((answer) => !answer.correct)
    .forEach((answer) => {
      const item = document.createElement("li");
      item.textContent = `${answer.label}: ${answer.reason.replace(/^Correct\.\s*/i, "")}`;
      list.append(item);
    });
  if (list.children.length && shouldRevealMicroAnswer("spot")) {
    details.append(summary, list);
    wrap.append(label, selectedLine, whyTitle, why, keyIdea, details);
  } else {
    wrap.append(label, selectedLine, whyTitle, why, keyIdea);
  }
  return wrap;
}

function getAdaptiveSpotMistakeExplanation(state, focus, level, selectedCorrect) {
  const quality = getAttemptQualityForConceptStep(state, focus);
  if (!(state.language === "SQL" && focus.kind === "calculation")) {
    return selectedCorrect
      ? "You identified the piece that breaks the pattern."
      : "Focus on the part that makes the data access or transformation fail.";
  }
  if (quality.level === 1) {
    return "This does not include the required SQL structure yet. Start with SELECT, FROM, and GROUP BY.";
  }
  if (quality.level === 2) {
    return "You're on the right track, but one key part is missing: GROUP BY tells SQL how to make one row per group.";
  }
  if (quality.level === 3) {
    return "This is very close. Match each non-aggregated SELECT column with the GROUP BY column.";
  }
  return selectedCorrect
    ? "The selected column needs a matching GROUP BY when you also use COUNT."
    : "The issue is the selected column, not COUNT or FROM.";
}

function getAttemptQualityForConceptStep(state, focus) {
  const attempt = String(activeLearningPath?.previousAttempt || currentSubmission?.attempt || "").toLowerCase();
  if (state.language === "SQL" && focus.kind === "calculation") {
    const hasSelect = /\bselect\b/.test(attempt);
    const hasFrom = /\bfrom\b/.test(attempt);
    const hasCount = /\bcount\s*\(/.test(attempt);
    const groupMatch = attempt.match(/\bgroup\s+by\s+([a-z_][a-z0-9_]*)/);
    const selectMatch = attempt.match(/\bselect\s+([a-z_][a-z0-9_]*)/);
    if (!hasSelect || !hasFrom || !hasCount) {
      return { level: 1 };
    }
    if (!groupMatch) {
      return { level: 2 };
    }
    if (selectMatch && groupMatch && selectMatch[1] !== groupMatch[1]) {
      return { level: 3 };
    }
    return { level: 3 };
  }
  return { level: hasMeaningfulTaskStructure(state.language, attempt) ? 2 : 1 };
}

function createFixCodeStep(state, focus) {
  if (state.language === "SQL" && focus.kind === "calculation") {
    return createSqlFixCodeStep();
  }
  const spec = getConceptLessonVariant(state, focus, state.level || "beginner");
  if (spec?.fix) {
    return createGenericFixCodeStep(spec);
  }

  const block = document.createElement("div");
  const prompt = document.createElement("p");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const hint = document.createElement("p");
  block.className = "concept-learning-block";
  prompt.textContent = "Make one small repair. No need to submit this.";
  textarea.className = "mini-fix-editor";
  textarea.rows = 5;
  textarea.spellcheck = false;
  textarea.value = activeLearningPath?.fixCodeAttempt || getFixCodeStarter(state, focus);
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Check fix";
  submit.addEventListener("click", () => {
    activeLearningPath = {
      ...(activeLearningPath || {}),
      fixCodeAttempt: textarea.value,
      fixCodeCorrect: textarea.value.trim().length > 0
    };
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  hint.className = "prediction-result";
  hint.textContent = activeLearningPath?.fixCodeCorrect
    ? "Good. You made a concrete repair, so you can move forward."
    : `Aim for: ${getConceptRepairStep(focus, state.language)}`;
  actions.append(submit);
  block.append(createMiniHeading("Fix the code"), prompt, textarea, actions, hint);
  return block;
}

function createLightApplyStep(state, focus) {
  if (state.language === "SQL" && focus.kind === "calculation") {
    return createSqlLightApplyStep();
  }
  const spec = getConceptLessonVariant(state, focus, state.level || "beginner");
  if (spec?.apply) {
    return createGenericLightApplyStep(spec);
  }

  const block = document.createElement("div");
  const prompt = document.createElement("p");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  block.className = "concept-learning-block";
  prompt.textContent = getLightApplyPrompt(state, focus);
  textarea.className = "mini-fix-editor";
  textarea.rows = 4;
  textarea.placeholder = "Write a tiny answer or plan here.";
  textarea.value = activeLearningPath?.lightApplyAttempt || "";
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Submit";
  submit.addEventListener("click", () => {
    activeLearningPath = {
      ...(activeLearningPath || {}),
      lightApplyAttempt: textarea.value,
      lightApplySubmitted: textarea.value.trim().length > 0
    };
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  result.textContent = activeLearningPath?.lightApplySubmitted ? "Good. Same pattern, new context." : "Submit a small answer to finish this step.";
  actions.append(submit);
  block.append(createMiniHeading("Small apply prompt"), prompt, textarea, actions, result);
  return block;
}

function createGenericFixCodeStep(spec) {
  const block = document.createElement("div");
  const prompt = document.createElement("p");
  const broken = document.createElement("pre");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  const correct = document.createElement("pre");
  const attempt = activeLearningPath?.fixCodeAttempt || spec.fix.broken;

  block.className = "concept-learning-block";
  prompt.textContent = spec.fix.prompt;
  broken.className = "task-tool-code";
  broken.textContent = spec.fix.broken;
  textarea.className = "mini-fix-editor";
  textarea.rows = 5;
  textarea.spellcheck = false;
  textarea.value = attempt;
  textarea.addEventListener("input", () => {
    activeLearningPath = { ...(activeLearningPath || {}), fixCodeAttempt: textarea.value };
  });
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Check fix";
  submit.addEventListener("click", () => {
    const isCorrect = validateLessonText(textarea.value, spec.fix);
    activeLearningPath = {
      ...(activeLearningPath || {}),
      ...getMicroAttemptUpdate("fix-code", isCorrect),
      fixCodeAttempt: textarea.value,
      fixCodeCorrect: isCorrect
    };
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  actions.append(submit);
  block.append(createMiniHeading("Fix the code"), broken, prompt, textarea, actions);

  if (activeLearningPath?.fixCodeCorrect) {
    result.textContent = spec.fix.explanation;
    correct.className = "task-tool-code";
    correct.textContent = spec.fix.correct;
    block.append(result, createMiniHeading("Sample fix"), correct, createTakeaway(spec.fix.changed));
  } else {
    result.textContent = activeLearningPath?.fixCodeAttempt
      ? getProgressiveMicroFeedback("fix-code", spec.fix)
      : "Submit your fix to unlock the final step.";
    block.append(result);
  }
  return block;
}

function createGenericLightApplyStep(spec) {
  const block = document.createElement("div");
  const prompt = document.createElement("p");
  const checklist = document.createElement("ul");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  const answer = document.createElement("pre");

  block.className = "concept-learning-block";
  prompt.textContent = spec.apply.prompt;
  (spec.apply.requirements || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    checklist.append(li);
  });
  textarea.className = "mini-fix-editor";
  textarea.rows = 4;
  textarea.spellcheck = false;
  textarea.placeholder = spec.apply.placeholder || "Write a tiny answer or snippet.";
  textarea.value = activeLearningPath?.lightApplyAttempt || "";
  textarea.addEventListener("input", () => {
    activeLearningPath = { ...(activeLearningPath || {}), lightApplyAttempt: textarea.value };
  });
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Submit";
  submit.addEventListener("click", () => {
    const isCorrect = validateLessonText(textarea.value, spec.apply);
    activeLearningPath = {
      ...(activeLearningPath || {}),
      ...getMicroAttemptUpdate("light-apply", isCorrect),
      lightApplyAttempt: textarea.value,
      lightApplySubmitted: isCorrect
    };
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  actions.append(submit);
  block.append(createMiniHeading("Apply the pattern"), prompt, checklist, textarea, actions);
  if (activeLearningPath?.lightApplySubmitted) {
    result.textContent = spec.apply.explanation;
    answer.className = "task-tool-code";
    answer.textContent = spec.apply.answer;
    block.append(result, createMiniHeading("Sample answer"), answer);
  } else {
    result.textContent = activeLearningPath?.lightApplyAttempt
      ? getProgressiveMicroFeedback("light-apply", spec.apply)
      : "Submit a small answer to finish this step.";
    block.append(result);
  }
  return block;
}

function getGenericFixValidationMessage(value, spec) {
  if (!String(value || "").trim()) {
    return "No fix typed yet.";
  }
  const behavioral = assessLessonRule(value, spec.fix);
  if (behavioral.result === "Correct" || behavioral.result === "Correct (minor note)") {
    return spec.fix.successMessage || "Correct. This matches the intended pattern.";
  }
  if (behavioral.result === "Incorrect") {
    return behavioral.nextFix || behavioral.message || spec.fix.missingMessage || `Aim for: ${spec.fix.expectedFix}`;
  }
  if (validateLessonText(value, spec.fix)) {
    return spec.fix.successMessage || "Correct. This matches the intended pattern.";
  }
  return spec.fix.missingMessage || `Aim for: ${spec.fix.expectedFix}`;
}

function validateLessonText(value, rule = {}) {
  const text = String(value || "").trim();
  if (!text) {
    return false;
  }
  const behavioral = assessLessonRule(text, rule);
  if (behavioral.result === "Incorrect") {
    return false;
  }
  if (behavioral.result === "Correct" || behavioral.result === "Correct (minor note)") {
    return true;
  }
  if (rule.validationPattern) {
    return rule.validationPattern.test(text);
  }
  const lower = text.toLowerCase();
  return (rule.requiredTerms || []).every((term) => lower.includes(String(term).toLowerCase()));
}

function assessLessonRule(value, rule = {}) {
  const criteriaText = [
    rule.prompt,
    rule.broken,
    rule.correct,
    rule.expectedFix,
    rule.validationRule,
    rule.successMessage,
    rule.missingMessage
  ].filter(Boolean).join(" ").toLowerCase();

  if (/\.get\s*\(|dictionary|missing key|fallback/i.test(criteriaText)) {
    return assessPythonSafeLookup(value, criteriaText);
  }
  if (/\?\?|\|\||missing property|fallback|undefined|tofixed/i.test(criteriaText)) {
    return assessJavaScriptSafeFallback(value, criteriaText);
  }
  if (/filter\(\)|map\(\)|completed contains task objects|keep matching/i.test(criteriaText)) {
    return assessJavaScriptCollectionMethod(value, criteriaText);
  }
  if (/usestate|mutating a prop|props should|state-driven/i.test(criteriaText)) {
    return assessReactStateFix(value, criteriaText);
  }
  if (/\bselect\b|\bgroup\s+by\b|\bcount\s*\(/i.test(criteriaText)) {
    return assessSqlGrouping(value, criteriaText);
  }
  if (/for and id|label|input|accessib/i.test(criteriaText)) {
    return assessHtmlLabelConnection(value, criteriaText);
  }
  if (/group_by|summari[sz]e/i.test(criteriaText)) {
    return assessRGrouping(value, criteriaText);
  }
  if (/\b(null|optional|missing-value|failure|success\/error|guard)\b/i.test(criteriaText)) {
    return assessGuardedObjectAccess(value, criteriaText);
  }
  if (/create the result before showing|data flow|show result/i.test(criteriaText)) {
    return assessOutputOrder(value, criteriaText);
  }
  return { result: "Unknown" };
}

function createSqlFixCodeStep() {
  const spec = getSqlGroupByVariant(currentPlanState?.level || "beginner");
  const block = document.createElement("div");
  const prompt = document.createElement("p");
  const broken = document.createElement("pre");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  const correct = document.createElement("pre");
  const attempt = activeLearningPath?.fixCodeAttempt || spec.fix.broken;

  block.className = "concept-learning-block";
  prompt.textContent = spec.fix.prompt;
  broken.className = "task-tool-code";
  broken.textContent = spec.fix.broken;
  textarea.className = "mini-fix-editor";
  textarea.rows = 4;
  textarea.spellcheck = false;
  textarea.value = attempt;
  textarea.addEventListener("input", () => {
    activeLearningPath = { ...(activeLearningPath || {}), fixCodeAttempt: textarea.value };
  });
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Check fix";
  submit.addEventListener("click", () => {
    const behavioral = assessLessonRule(textarea.value, spec.fix);
    const isCorrect = behavioral.result === "Correct" || behavioral.result === "Correct (minor note)";
    activeLearningPath = {
      ...(activeLearningPath || {}),
      ...getMicroAttemptUpdate("fix-code", isCorrect),
      fixCodeAttempt: textarea.value,
      fixCodeCorrect: isCorrect
    };
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  if (activeLearningPath?.fixCodeCorrect) {
    result.textContent = spec.fix.explanation;
    correct.className = "task-tool-code";
    correct.textContent = spec.fix.correct;
    block.append(createMiniHeading("Fix the code"), broken, prompt, textarea, actions, result, createMiniHeading("Correct version"), correct, createTakeaway(spec.fix.changed));
  } else {
    result.textContent = activeLearningPath?.fixCodeAttempt
      ? getProgressiveMicroFeedback("fix-code", spec.fix)
      : "Submit your fix to unlock the final step.";
    block.append(createMiniHeading("Fix the code"), broken, prompt, textarea, actions, result);
  }
  actions.append(submit);
  return block;
}

function createSqlLightApplyStep() {
  const spec = getSqlGroupByVariant(currentPlanState?.level || "beginner");
  const block = document.createElement("div");
  const prompt = document.createElement("p");
  const checklist = document.createElement("ul");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  const answer = document.createElement("pre");

  block.className = "concept-learning-block";
  prompt.textContent = spec.apply.prompt;
  spec.apply.requirements.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    checklist.append(li);
  });
  textarea.className = "mini-fix-editor";
  textarea.rows = 4;
  textarea.spellcheck = false;
  textarea.placeholder = "Write a 1-3 line SQL query.";
  textarea.value = activeLearningPath?.lightApplyAttempt || "";
  textarea.addEventListener("input", () => {
    activeLearningPath = { ...(activeLearningPath || {}), lightApplyAttempt: textarea.value };
  });
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Submit";
  submit.addEventListener("click", () => {
    const isCorrect = validateLessonText(textarea.value, spec.apply);
    activeLearningPath = {
      ...(activeLearningPath || {}),
      ...getMicroAttemptUpdate("light-apply", isCorrect),
      lightApplyAttempt: textarea.value,
      lightApplySubmitted: isCorrect
    };
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  actions.append(submit);
  block.append(createMiniHeading("Apply the pattern"), prompt, checklist, textarea, actions);
  if (activeLearningPath?.lightApplySubmitted) {
    result.textContent = spec.apply.explanation;
    answer.className = "task-tool-code";
    answer.textContent = spec.apply.answer;
    block.append(result, createMiniHeading("Sample answer"), answer);
  } else {
    result.textContent = activeLearningPath?.lightApplyAttempt
      ? getProgressiveMicroFeedback("light-apply", spec.apply)
      : "Submit a short query to unlock the finish options.";
    block.append(result);
  }
  return block;
}

function createTakeaway(text) {
  const takeaway = document.createElement("p");
  takeaway.className = "concept-insight";
  takeaway.textContent = text;
  return takeaway;
}

function getMistakeQuestion(state, focus, level) {
  if (state.language === "SQL" && focus.kind === "calculation") {
    return getSqlGroupByVariant(level).spot;
  }
  const lessonVariant = getConceptLessonVariant(state, focus, level);
  if (lessonVariant?.spot) {
    return lessonVariant.spot;
  }

  if (state.language === "Python") {
    return {
      snippet: `prices = {"notebook": 5, "pen": 2}
print(prices["marker"])`,
      question: level === "advanced" ? "What contract is violated?" : "What is the mistake?",
      feedback: "The lookup asks for a key that is not in the dictionary.",
      takeaway: "Direct lookup only works when the key exists.",
      answers: [
        { value: "missing-key", label: "The key does not exist", correct: true, reason: "Correct. Direct lookup fails when the key is missing." },
        { value: "small-values", label: "The values are too small", correct: false, reason: "The numbers are fine. The problem is the missing key." },
        { value: "print-invalid", label: "print cannot show dictionaries", correct: false, reason: "print works. The lookup fails before print gets a value." }
      ]
    };
  }

  return {
    snippet: `const prices = { notebook: 5, pen: 2 };
console.log(prices.marker.toFixed(2));`,
    question: "What is the mistake?",
    feedback: "The code tries to use a missing property as if it were a number.",
    takeaway: "Check or provide a fallback before calling methods on optional values.",
    answers: [
      { value: "missing-property", label: "marker is missing", correct: true, reason: "Correct. The missing property is undefined, so calling a method on it fails." },
      { value: "console-invalid", label: "console.log is invalid", correct: false, reason: "console.log is fine. The value being logged is the problem." },
      { value: "objects-no-numbers", label: "Objects cannot store numbers", correct: false, reason: "Objects can store numbers. The property name is missing." }
    ]
  };
}

function getFixCodeStarter(state, focus) {
  if (state.language === "Python") {
    return `prices = {"notebook": 5, "pen": 2}
print(prices["marker"])`;
  }
  if (state.language === "JavaScript" || state.language === "TypeScript" || state.language === "React" || state.language === "Node.js") {
    return `const prices = { notebook: 5, pen: 2 };
console.log(prices.marker.toFixed(2));`;
  }
  return "value = missing_lookup\nshow(value)";
}

function getLightApplyPrompt(state, focus) {
  if (state.language === "Python") {
    return "Write one sentence or tiny snippet that safely reads a value that might be missing.";
  }
  if (state.language === "JavaScript" || state.language === "TypeScript" || state.language === "React" || state.language === "Node.js") {
    return "Write one sentence or tiny snippet that handles a missing property before using it.";
  }
  return "Write one tiny plan for checking missing data before using it.";
}

function returnFromConceptLesson() {
  activeLearningPath = null;
  moduleList.replaceChildren();
  moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  renderTaskProgressRail();
  setMentorFlowState("next");
}

function retryPreviousAttempt() {
  const concept = currentPlanData.language.core[0];
  const previousAttempt = activeLearningPath?.previousAttempt || currentSubmission?.attempt || taskAttemptInput.value;
  const retryPath = createLearningPath("improve", concept);
  renderPlan(currentPlanState, {
    save: false,
    silent: true,
    planName: "Retry previous attempt",
    progression: "improve",
    learningPath: retryPath,
    prefillAttempt: previousAttempt,
    keepFeedbackContext: true
  });
  setMentorFlowState("submit");
  taskAttemptInput.focus();
}

function continueFromConceptLesson() {
  const concept = currentPlanData.language.core[0];
  const understandingPath = activeLearningPath || {};
  const continuationPath = {
    ...understandingPath,
    choice: "extend",
    focusRequirement: understandingPath.focusRequirement || getNextProgressionRequirement(understandingPath.completedMoves || [], concept, currentPlanState.language),
    progressionLabel: "Next step: Extend your solution"
  };
  const nextState = createProgressionState("extend", concept);
  renderPlan(nextState, {
    save: false,
    silent: true,
    planName: "Concept extension",
    progression: "extend",
    learningPath: continuationPath
  });
  setMentorFlowState("submit");
  taskAttemptInput.focus();
}

function createMiniHeading(text) {
  const heading = document.createElement("h4");
  heading.textContent = text;
  return heading;
}

function getConceptLearningTitle(wasCorrect, level) {
  if (wasCorrect) {
    return level === "advanced" ? "Why this pattern works" : level === "intermediate" ? "Why your approach was correct" : "Why this worked";
  }
  return level === "advanced" ? "How to fix the pattern" : level === "intermediate" ? "Why this did not work yet" : "What went wrong";
}

function getConceptLearningExplanation(state, focus, concept, wasCorrect, level) {
  const reflection = getUnderstandingReflection(concept, wasCorrect);
  const repair = getConceptRepairStep(focus, state.language);

  if (wasCorrect) {
    if (level === "advanced") {
      return `${reflection} The useful part is the contract: a stable key maps to a predictable value, which makes the code easy to extend, validate, and wrap behind a cleaner abstraction.`;
    }
    if (level === "intermediate") {
      return `${reflection} This worked because the data shape matched the operation: the lookup or calculation used the same keys and values you created. The pattern generalizes to configs, metrics, and records as long as you keep missing data in mind.`;
    }
    return `${reflection} A dictionary is like a labeled box: the label points to the value inside. Your code worked because it used the right label to get the right value.`;
  }

  if (level === "advanced") {
    return `${reflection} The failure is a contract mismatch: the code tried to use the data in a way the current structure did not support. Repair step: ${repair}`;
  }
  if (level === "intermediate") {
    return `${reflection} The issue is not just syntax; the operation did not match the data shape or expected output. Repair step: ${repair}`;
  }
  return `${reflection} Repair step: ${repair}`;
}

function createConceptCodeReference() {
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  const attempt = activeLearningPath?.previousAttempt || currentSubmission?.attempt || "";
  code.textContent = getShortCodeReference(attempt);
  pre.className = "task-tool-code";
  pre.append(code);
  return pre;
}

function getShortCodeReference(attempt) {
  const lines = attempt.split("\n").map((line) => line.trimEnd()).filter(Boolean);
  return lines.slice(0, 6).join("\n") || "Your last attempt will appear here after you submit code.";
}

function getConceptRepairStep(focus, language) {
  if (focus.kind === "validation") {
    return language === "Python" ? "filter with isinstance before calculating." : "filter incomplete records before counting or displaying them.";
  }
  if (focus.kind === "calculation") {
    return language === "Python" ? "calculate from data.values() and print the calculated result." : "calculate from the array/object values you actually created.";
  }
  if (focus.kind === "output") {
    return language === "Python" ? "add one print statement that shows the required value." : "log or return the required value with a clear label.";
  }
  if (focus.kind === "conditional") {
    return "write the rule first, then apply it to each value.";
  }
  if (focus.kind === "function") {
    return "put the working logic in a small function and return the result.";
  }
  return "start by matching the data shape to the required output.";
}

function createPatternText(state, focus, wasCorrect, level) {
  const copy = document.createElement("p");
  if (!wasCorrect) {
    if (level === "advanced") {
      copy.textContent = `Correct pattern: define the data contract first, then access, transform, or validate only through that contract. Repair the mismatch before adding abstraction.`;
      return copy;
    }
    if (level === "intermediate") {
      copy.textContent = `Correct pattern: create the data, access it using the right key/property, then produce the exact output the task asks for. Check missing keys before relying on them.`;
      return copy;
    }
    copy.textContent = `Correct pattern: make data with a name, use that exact name to get the value, then print or show the value. The name has to match.`;
    return copy;
  }

  if (state.language === "Python" && focus.kind === "calculation") {
    copy.textContent = level === "advanced"
      ? "Dictionary pattern: direct lookup is O(1) on average; aggregations should operate on the intended numeric subset, not on derived summary fields mixed into the same mapping."
      : level === "intermediate"
        ? "Dictionary pattern: data[key] gives one value; data.values() supports aggregation, but you need a guard for missing or non-numeric values."
        : "Dictionary pattern: data[key] gets one value. data.values() gives all the values so you can calculate from them.";
    return copy;
  }
  if (state.language === "Python") {
    copy.textContent = level === "advanced"
      ? "Dictionary pattern: use keyed access when names are stable and meaningful; use .get() or validation at boundaries where keys may be absent."
      : level === "intermediate"
        ? "Dictionary pattern: dictionary[key] is clear when the key must exist; dictionary.get(key) is safer when missing keys are possible."
        : "Dictionary pattern: dictionary[key] points to the value for that exact key.";
    return copy;
  }
  if (state.language === "JavaScript" || state.language === "TypeScript" || state.language === "React" || state.language === "Node.js") {
    copy.textContent = "Object/array pattern: item.property reads one value, while array methods let you work across every item.";
    return copy;
  }
  copy.textContent = "Core pattern: store related values together, choose one value by name or position, then transform only what the task asks for.";
  return copy;
}

function createMistakeText(focus, wasCorrect, level) {
  const copy = document.createElement("p");
  if (!wasCorrect) {
    if (focus.kind === "calculation") {
      copy.textContent = level === "beginner"
        ? "Repair step: make sure the values are numbers, then calculate from those values."
        : "Repair step: verify the numeric subset before aggregating, especially if the structure also stores labels or summaries.";
      return copy;
    }
    if (focus.kind === "output") {
      copy.textContent = level === "beginner"
        ? "Repair step: add one visible output, like print(...), so you can check the result."
        : "Repair step: produce the exact required output, then decide whether to format or refactor.";
      return copy;
    }
    copy.textContent = level === "advanced"
      ? "Repair step: align the data contract, transformation, and output before optimizing the structure."
      : "Repair step: compare the task requirement to the value your code actually produces.";
    return copy;
  }

  if (focus.kind === "calculation") {
    copy.textContent = level === "advanced"
      ? "Risk: mixing raw values and derived values in one dictionary can pollute later aggregations unless you separate them or filter intentionally."
      : "Common mistake: calculating from the wrong set of values, especially after adding a summary value back into the same structure.";
    return copy;
  }
  if (focus.kind === "validation") {
    copy.textContent = "Common mistake: filtering invalid values after the calculation, when they need to be skipped before it.";
    return copy;
  }
  copy.textContent = "Common mistake: changing the data shape and then using the old access pattern.";
  return copy;
}

function createCauseEffectExamples(state, focus, level) {
  const wrapper = document.createElement("div");
  const context = getTaskContext(state);
  wrapper.className = "concept-example-list";

  if (state.language === "SQL") {
    getSqlConceptExamples(context, focus, level).forEach((example) => {
      wrapper.append(createConceptExample(example.code, example.note));
    });
    if (focus.kind === "calculation") {
      const insight = document.createElement("p");
      insight.className = "concept-insight";
      insight.textContent = "The GROUP BY column controls how your results are grouped. Changing it changes the shape of the output.";
      wrapper.append(insight);
    }
    return wrapper;
  }

  const lessonVariant = getConceptLessonVariant(state, focus, level);
  if (lessonVariant?.examples?.length) {
    lessonVariant.examples.forEach((example) => {
      wrapper.append(createConceptExample(example.code, example.note));
    });
    if (lessonVariant.insight) {
      wrapper.append(createTakeaway(lessonVariant.insight));
    }
    return wrapper;
  }

  if (state.language === "Python") {
    getPythonDictionaryExamples(context, focus, level).forEach((example) => {
      wrapper.append(createConceptExample(example.code, example.note));
    });
    return wrapper;
  }

  if (state.language === "JavaScript" || state.language === "TypeScript" || state.language === "React" || state.language === "Node.js") {
    getJavaScriptObjectExamples(context, focus, level).forEach((example) => {
      wrapper.append(createConceptExample(example.code, example.note));
    });
    return wrapper;
  }

  wrapper.append(createConceptExample(
    getGenericConceptExample(state, context),
    `This mirrors your ${context.contextLabel} task: create a small input, transform it once, then show one clear output.`
  ));
  return wrapper;
}

function createConceptExample(codeText, noteText) {
  const block = document.createElement("div");
  const code = document.createElement("pre");
  const note = document.createElement("p");
  block.className = "concept-example";
  code.className = "task-tool-code";
  code.textContent = codeText;
  note.textContent = noteText;
  block.append(code, note);
  return block;
}

function getSqlGroupByVariant(level = "beginner") {
  const normalizedLevel = ["beginner", "intermediate", "advanced"].includes(level) ? level : "beginner";
  const banks = {
    beginner: [
      {
        examples: [
          { code: "SELECT category, COUNT(*) AS item_count\nFROM practice_tasks\nGROUP BY category;", note: "Returns one row per category." },
          { code: "SELECT status, COUNT(*) AS status_count\nFROM practice_tasks\nGROUP BY status;", note: "Returns one row per status." }
        ],
        prediction: {
          type: "multiple_choice",
          snippet: "SELECT category, COUNT(*)\nFROM practice_tasks\nGROUP BY status;",
          correctValue: "error",
          feedback: "every non-aggregated SELECT column must appear in GROUP BY.",
          wrongFeedback: "Correct answer: Error — SELECT category does not match GROUP BY status."
        },
        spot: {
          type: "multiple_choice",
          snippet: "SELECT category, COUNT(*)\nFROM practice_tasks;",
          question: "What is the issue?",
          takeaway: "Aggregation queries require GROUP BY when selecting non-aggregated columns.",
          answers: [
            { value: "missing-group-by", label: "Missing GROUP BY clause", correct: true, reason: "Correct. category is not aggregated, so it must appear in GROUP BY." },
            { value: "count-invalid", label: "COUNT is invalid", correct: false, reason: "COUNT(*) is valid SQL. The missing piece is how to group rows." },
            { value: "from-incorrect", label: "FROM is incorrect", correct: false, reason: "FROM practice_tasks is fine for the example. The issue is the missing GROUP BY." }
          ]
        },
        fix: {
          prompt: "Fix this query by adding the missing GROUP BY line.",
          broken: "SELECT category, COUNT(*)\nFROM practice_tasks;",
          correct: "SELECT category, COUNT(*)\nFROM practice_tasks\nGROUP BY category;",
          expectedFix: "Add GROUP BY category.",
          validationRule: "The current input must include GROUP BY category.",
          validationPattern: /\bgroup\s+by\s+category\b/i,
          successMessage: "Correct: GROUP BY category is present.",
          partialMessage: "Not yet. GROUP BY is present, but it must be GROUP BY category.",
          missingMessage: "Not yet. Add GROUP BY category so the selected category column has a matching group.",
          explanation: "You added GROUP BY to match the selected column and enable aggregation.",
          changed: "What changed: GROUP BY category was added.",
          mentorInstruction: "If GROUP BY category is missing, say that exact missing piece."
        },
        apply: {
          prompt: "Now count items per user instead of category.",
          requirements: ["groups by user_id", "counts rows"],
          answer: "SELECT user_id, COUNT(*) AS item_count\nFROM practice_tasks\nGROUP BY user_id;",
          expectedFix: "Write a short query that selects user_id, counts rows, and groups by user_id.",
          validationRule: "The answer should include SELECT user_id, COUNT(*), FROM practice_tasks, and GROUP BY user_id.",
          explanation: "Same structure, different grouping column.",
          mentorInstruction: "Guide the user toward the same GROUP BY structure with user_id. Do not provide the full query unless explicitly asked."
        }
      },
      {
        examples: [
          { code: "SELECT priority, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY priority;", note: "Returns one row per priority." },
          { code: "SELECT user_id, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY user_id;", note: "Returns one row per user." }
        ],
        prediction: {
          type: "multiple_choice",
          snippet: "SELECT priority, COUNT(*)\nFROM practice_tasks\nGROUP BY user_id;",
          correctValue: "error",
          feedback: "priority is selected, so priority must appear in GROUP BY.",
          wrongFeedback: "Correct answer: Error — SELECT priority does not match GROUP BY user_id."
        },
        spot: {
          type: "predict",
          snippet: "SELECT priority, COUNT(*)\nFROM practice_tasks;",
          question: "What is the issue?",
          takeaway: "COUNT can summarize rows, but selected labels still need GROUP BY.",
          answers: [
            { value: "missing-group-by", label: "Missing GROUP BY clause", correct: true, reason: "Correct. priority is selected, so rows need to be grouped by priority." },
            { value: "priority-invalid", label: "priority is invalid", correct: false, reason: "priority can be a valid column. The missing piece is GROUP BY priority." },
            { value: "count-invalid", label: "COUNT is invalid", correct: false, reason: "COUNT(*) is valid SQL. It needs a grouping rule here." }
          ]
        },
        fix: {
          prompt: "Fix this query by grouping by priority.",
          broken: "SELECT priority, COUNT(*)\nFROM practice_tasks;",
          correct: "SELECT priority, COUNT(*)\nFROM practice_tasks\nGROUP BY priority;",
          expectedFix: "Add GROUP BY priority.",
          validationRule: "The current input must include GROUP BY priority.",
          validationPattern: /\bgroup\s+by\s+priority\b/i,
          successMessage: "Correct: GROUP BY priority is present.",
          partialMessage: "Not yet. GROUP BY is present, but it must be GROUP BY priority.",
          missingMessage: "Not yet. Add GROUP BY priority so the selected priority column has a matching group.",
          explanation: "You added GROUP BY to match the selected priority column.",
          changed: "What changed: GROUP BY priority was added.",
          mentorInstruction: "If GROUP BY priority is missing, say that exact missing piece."
        },
        apply: {
          prompt: "Now count tasks per status.",
          requirements: ["groups by status", "counts rows"],
          answer: "SELECT status, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY status;",
          expectedFix: "Write a short query that selects status, counts rows, and groups by status.",
          validationRule: "The answer should include SELECT status, COUNT(*), FROM practice_tasks, and GROUP BY status.",
          explanation: "Same structure, different grouping column.",
          mentorInstruction: "Guide the user toward the same GROUP BY structure with status. Do not provide the full query unless explicitly asked."
        }
      },
      {
        examples: [
          { code: "SELECT status, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY status;", note: "Counts tasks per status." },
          { code: "SELECT category, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY category;", note: "Counts tasks per category." }
        ],
        prediction: {
        type: "fill_in",
        snippet: "SELECT status, COUNT(*)\nFROM practice_tasks\nGROUP BY _______;",
          question: "Complete the grouping clause so it matches the selected label column.",
          answerKind: "column",
          placeholder: "Write the column name.",
          expectedAnswer: "status",
          expectedAnswerLabel: "status",
          validationPattern: /\bstatus\b/i,
          feedback: "status matches the selected non-aggregated column.",
          wrongFeedback: "Expected: status — the selected column is status."
        },
        spot: {
          type: "minimal_fix",
          snippet: "SELECT status, COUNT(*)\nFROM practice_tasks;",
          question: "Add the one missing line.",
          placeholder: "GROUP BY ...",
          expectedAnswer: "GROUP BY status",
          expectedAnswerLabel: "GROUP BY status",
          validationPattern: /\bgroup\s+by\s+status\b/i,
          correctReason: "GROUP BY status matches the selected status column.",
          takeaway: "The minimal fix is to group by the non-aggregated column you selected."
        },
        fix: {
          prompt: "Fix this query by grouping by status.",
          broken: "SELECT status, COUNT(*)\nFROM practice_tasks;",
          correct: "SELECT status, COUNT(*)\nFROM practice_tasks\nGROUP BY status;",
          expectedFix: "Add GROUP BY status.",
          validationRule: "The current input must include GROUP BY status.",
          validationPattern: /\bgroup\s+by\s+status\b/i,
          successMessage: "Correct: GROUP BY status is present.",
          partialMessage: "Not yet. GROUP BY is present, but it must be GROUP BY status.",
          missingMessage: "Not yet. Add GROUP BY status so the selected status column has a matching group.",
          explanation: "You added GROUP BY to match the selected status column.",
          changed: "What changed: GROUP BY status was added.",
          mentorInstruction: "If GROUP BY status is missing, say that exact missing piece."
        },
        apply: {
          prompt: "Now count tasks per category.",
          requirements: ["groups by category", "counts rows"],
          answer: "SELECT category, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY category;",
          expectedFix: "Write a short query that selects category, counts rows, and groups by category.",
          validationRule: "The answer should include SELECT category, COUNT(*), FROM practice_tasks, and GROUP BY category.",
          explanation: "Same structure, different grouping column.",
          mentorInstruction: "Guide the user toward GROUP BY category."
        }
      },
      {
        examples: [
          { code: "SELECT owner, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY owner;", note: "Returns one row per owner." },
          { code: "SELECT category, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY category;", note: "Returns one row per category." }
        ],
        prediction: {
          type: "minimal_fix",
          snippet: "SELECT owner, COUNT(*)\nFROM practice_tasks;",
          question: "What is the smallest fix?",
          placeholder: "Add one SQL line.",
          expectedAnswerLabel: "GROUP BY owner",
          validationPattern: /\bgroup\s+by\s+owner\b/i,
          feedback: "GROUP BY owner is the smallest line that makes the selected owner column valid.",
          wrongFeedback: "Expected: GROUP BY owner - the selected owner column needs a matching GROUP BY."
        },
        spot: {
          type: "minimal_fix",
          snippet: "SELECT owner, COUNT(*)\nFROM practice_tasks;",
          question: "Choose the minimal fix.",
          takeaway: "The minimal fix is to group by the label column you selected.",
          answers: [
            { value: "group-owner", label: "Add GROUP BY owner", correct: true, reason: "Correct. owner is selected, so the groups should be owner-based." },
            { value: "remove-count", label: "Remove COUNT(*)", correct: false, reason: "COUNT(*) is the summary you want. The missing piece is GROUP BY owner." },
            { value: "add-where", label: "Add WHERE owner", correct: false, reason: "WHERE filters rows. It does not create groups." }
          ]
        },
        fix: {
          prompt: "Fix this query by grouping by owner.",
          broken: "SELECT owner, COUNT(*)\nFROM practice_tasks;",
          correct: "SELECT owner, COUNT(*)\nFROM practice_tasks\nGROUP BY owner;",
          expectedFix: "Add GROUP BY owner.",
          validationRule: "The current input must include GROUP BY owner.",
          validationPattern: /\bgroup\s+by\s+owner\b/i,
          successMessage: "Correct: GROUP BY owner is present.",
          partialMessage: "Not yet. GROUP BY is present, but it must be GROUP BY owner.",
          missingMessage: "Not yet. Add GROUP BY owner so owner has matching groups.",
          explanation: "You added GROUP BY to match the selected owner column.",
          changed: "What changed: GROUP BY owner was added.",
          mentorInstruction: "If GROUP BY owner is missing, point to that exact missing line."
        },
        apply: {
          prompt: "Now count tasks per category.",
          requirements: ["groups by category", "counts rows"],
          answer: "SELECT category, COUNT(*) AS task_count\nFROM practice_tasks\nGROUP BY category;",
          expectedFix: "Write a short query that selects category, counts rows, and groups by category.",
          validationRule: "The answer should include SELECT category, COUNT(*), FROM practice_tasks, and GROUP BY category.",
          explanation: "Same structure, different grouping column.",
          mentorInstruction: "Guide the user toward GROUP BY category."
        }
      }
    ],
    intermediate: [
      {
        examples: [
          { code: "SELECT team_id, status, COUNT(*) AS item_count\nFROM project_items\nGROUP BY team_id, status;", note: "Returns one row for each team and status combination." },
          { code: "SELECT status, COUNT(*) AS done_count\nFROM project_items\nWHERE status = 'done'\nGROUP BY status;", note: "WHERE filters rows before the grouping happens." }
        ],
        prediction: {
          type: "multiple_choice",
          snippet: "SELECT team_id, status, COUNT(*)\nFROM project_items\nGROUP BY team_id;",
          correctValue: "error",
          feedback: "team_id and status are both non-aggregated, so both must appear in GROUP BY.",
          wrongFeedback: "Correct answer: Error — status is selected but not grouped."
        },
        spot: {
          type: "multiple_choice",
          snippet: "SELECT team_id, status, COUNT(*)\nFROM project_items\nGROUP BY team_id;",
          question: "What is the issue?",
          takeaway: "Every non-aggregated selected column must be included in GROUP BY.",
          answers: [
            { value: "missing-status", label: "status is missing from GROUP BY", correct: true, reason: "Correct. team_id and status are selected, so both need to be grouped." },
            { value: "where-needed", label: "WHERE is required", correct: false, reason: "WHERE is optional. The mismatch is between SELECT and GROUP BY." },
            { value: "alias-needed", label: "COUNT needs an alias", correct: false, reason: "An alias helps readability but is not the correctness issue." }
          ]
        },
        fix: {
          prompt: "Fix this query by grouping on both selected columns.",
          broken: "SELECT team_id, status, COUNT(*)\nFROM project_items\nGROUP BY team_id;",
          correct: "SELECT team_id, status, COUNT(*)\nFROM project_items\nGROUP BY team_id, status;",
          expectedFix: "Add status to GROUP BY.",
          validationRule: "The current input must include GROUP BY team_id, status.",
          validationPattern: /\bgroup\s+by\s+team_id\s*,\s*status\b/i,
          successMessage: "Correct: GROUP BY team_id, status is present.",
          partialMessage: "Not yet. GROUP BY is present, but it must include both team_id and status.",
          missingMessage: "Not yet. Add GROUP BY team_id, status so both selected columns are grouped.",
          explanation: "You grouped by both selected columns, so SQL can return one count per combination.",
          changed: "What changed: status was added to the GROUP BY list.",
          mentorInstruction: "If only GROUP BY team_id is present, say status is the missing grouped column."
        },
        apply: {
          prompt: "Now count tasks per assignee and status.",
          requirements: ["groups by assignee_id and status", "counts rows", "uses a readable alias"],
          answer: "SELECT assignee_id, status, COUNT(*) AS task_count\nFROM project_items\nGROUP BY assignee_id, status;",
          expectedFix: "Write a grouped query using assignee_id and status.",
          validationRule: "The answer should group by assignee_id and status and count rows.",
          explanation: "Same structure, two grouping columns.",
          mentorInstruction: "Guide toward grouping by both assignee_id and status."
        }
      },
      {
        examples: [
          { code: "SELECT assignee_id, status, COUNT(*) AS task_count\nFROM project_items\nGROUP BY assignee_id, status;", note: "Counts tasks per assignee/status pair." },
          { code: "SELECT status, COUNT(*) AS task_count\nFROM project_items\nWHERE status <> 'archived'\nGROUP BY status;", note: "WHERE filters rows before grouping." }
        ],
        prediction: {
          type: "fill_in",
          snippet: "SELECT assignee_id, status, COUNT(*)\nFROM project_items\nGROUP BY _______;",
          question: "Complete the grouping clause so both selected label columns are valid.",
          answerKind: "columns",
          placeholder: "Write the column names.",
          expectedAnswer: "assignee_id, status",
          expectedAnswerLabel: "assignee_id, status",
          validationPattern: /\bassignee_id\s*,\s*status\b/i,
          feedback: "Both selected non-aggregated columns are grouped.",
          wrongFeedback: "Expected: assignee_id, status — both selected columns need to be grouped."
        },
        spot: {
          type: "fill_in",
          snippet: "SELECT assignee_id, status, COUNT(*)\nFROM project_items\nGROUP BY _______;",
          question: "Complete the GROUP BY clause for both selected label columns.",
          answerKind: "columns",
          placeholder: "Write the column names.",
          expectedAnswer: "assignee_id, status",
          expectedAnswerLabel: "assignee_id, status",
          validationPattern: /\bassignee_id\s*,\s*status\b/i,
          correctReason: "Both selected non-aggregated columns need to be grouped.",
          takeaway: "Multi-column grouping returns one row per combination."
        },
        fix: {
          prompt: "Fix this query by grouping on both selected columns.",
          broken: "SELECT assignee_id, status, COUNT(*)\nFROM project_items\nGROUP BY assignee_id;",
          correct: "SELECT assignee_id, status, COUNT(*)\nFROM project_items\nGROUP BY assignee_id, status;",
          expectedFix: "Add status to GROUP BY.",
          validationRule: "The current input must include GROUP BY assignee_id, status.",
          validationPattern: /\bgroup\s+by\s+assignee_id\s*,\s*status\b/i,
          successMessage: "Correct: GROUP BY assignee_id, status is present.",
          partialMessage: "Not yet. GROUP BY is present, but it must include both assignee_id and status.",
          missingMessage: "Not yet. Add GROUP BY assignee_id, status so both selected columns are grouped.",
          explanation: "You grouped by both selected columns, so SQL can count each combination.",
          changed: "What changed: status was added to GROUP BY.",
          mentorInstruction: "If only assignee_id is grouped, say status is missing."
        },
        apply: {
          prompt: "Now count items per team and priority.",
          requirements: ["groups by team_id and priority", "counts rows", "uses a readable alias"],
          answer: "SELECT team_id, priority, COUNT(*) AS item_count\nFROM project_items\nGROUP BY team_id, priority;",
          expectedFix: "Write a grouped query using team_id and priority.",
          validationRule: "The answer should group by team_id and priority and count rows.",
          explanation: "Same pattern, new pair of grouping columns.",
          mentorInstruction: "Guide toward grouping by team_id and priority."
        }
      },
      {
        examples: [
          { code: "SELECT status, COUNT(*) AS task_count\nFROM project_items\nGROUP BY status;", note: "Groups all rows by status." },
          { code: "SELECT status, COUNT(*) AS task_count\nFROM project_items\nWHERE created_at >= '2026-01-01'\nGROUP BY status;", note: "Filters to recent rows before grouping by status." }
        ],
        prediction: {
          type: "compare",
          snippet: "A) WHERE status = 'done'\nB) HAVING COUNT(*) > 3",
          question: "Which one filters groups after counting?",
          placeholder: "HAVING filters groups after aggregation.",
          expectedAnswerLabel: "HAVING",
          requiredTerms: ["having"],
          feedback: "HAVING filters aggregate groups after GROUP BY.",
          wrongFeedback: "Expected: HAVING — WHERE filters rows before grouping."
        },
        spot: {
          type: "compare",
          snippet: "A)\nSELECT status, COUNT(*)\nFROM project_items\nWHERE status = 'done'\nGROUP BY status;\n\nB)\nSELECT status, COUNT(*)\nFROM project_items\nGROUP BY status\nHAVING COUNT(*) > 3;",
          question: "In one sentence, how are WHERE and HAVING different here?",
          placeholder: "WHERE filters rows before grouping; HAVING filters groups after grouping.",
          expectedAnswerLabel: "WHERE before grouping; HAVING after grouping",
          requiredTerms: ["where", "before", "having", "after"],
          correctReason: "WHERE filters rows before aggregation; HAVING filters grouped results after aggregation.",
          takeaway: "Use WHERE for row filters and HAVING for aggregate group filters."
        },
        fix: {
          prompt: "Fix this aggregate filter by using HAVING.",
          broken: "SELECT status, COUNT(*)\nFROM project_items\nWHERE COUNT(*) > 3\nGROUP BY status;",
          correct: "SELECT status, COUNT(*)\nFROM project_items\nGROUP BY status\nHAVING COUNT(*) > 3;",
          expectedFix: "Move COUNT(*) > 3 into HAVING.",
          validationRule: "The current input must use HAVING COUNT(*) > 3 after GROUP BY status.",
          validationPattern: /\bgroup\s+by\s+status\b[\s\S]*\bhaving\s+count\s*\(\s*\*\s*\)\s*>\s*3\b/i,
          successMessage: "Correct: HAVING filters the grouped counts.",
          partialMessage: "Not yet. Keep GROUP BY status and put COUNT(*) > 3 in HAVING.",
          missingMessage: "Not yet. Use HAVING COUNT(*) > 3 after GROUP BY status.",
          explanation: "You moved the aggregate filter to HAVING, after the grouping step.",
          changed: "What changed: COUNT(*) > 3 moved from WHERE to HAVING.",
          mentorInstruction: "If COUNT(*) is still in WHERE, explain that aggregate filters use HAVING."
        },
        apply: {
          prompt: "Now count statuses and keep only groups with at least 2 rows.",
          requirements: ["groups by status", "counts rows", "uses HAVING"],
          answer: "SELECT status, COUNT(*) AS task_count\nFROM project_items\nGROUP BY status\nHAVING COUNT(*) >= 2;",
          expectedFix: "Write a grouped query using status and HAVING COUNT(*) >= 2.",
          validationRule: "The answer should group by status and filter groups with HAVING.",
          explanation: "Same grouping structure, now with a group-level filter.",
          mentorInstruction: "Guide toward GROUP BY status plus HAVING."
        }
      },
      {
        examples: [
          { code: "SELECT status, COUNT(*) AS task_count\nFROM project_items\nGROUP BY status;", note: "Groups rows by status before counting." },
          { code: "SELECT status, COUNT(*) AS task_count\nFROM project_items\nGROUP BY status\nHAVING COUNT(*) > 5;", note: "Filters grouped counts after aggregation." }
        ],
        prediction: {
          type: "explain_failure",
          snippet: "SELECT status, COUNT(*)\nFROM project_items\nWHERE COUNT(*) > 5\nGROUP BY status;",
          question: "Why does this query fail?",
          placeholder: "COUNT(*) belongs in...",
          expectedAnswerLabel: "COUNT(*) belongs in HAVING",
          requiredTerms: ["having"],
          feedback: "Aggregate filters like COUNT(*) > 5 belong in HAVING, after GROUP BY.",
          wrongFeedback: "Expected: mention HAVING - WHERE filters rows before aggregation."
        },
        spot: {
          type: "explain_failure",
          snippet: "SELECT status, COUNT(*)\nFROM project_items\nWHERE COUNT(*) > 5\nGROUP BY status;",
          question: "Explain the failure in one sentence.",
          placeholder: "COUNT(*) is an aggregate, so...",
          expectedAnswerLabel: "Use HAVING for aggregate filters",
          requiredTerms: ["having"],
          correctReason: "COUNT(*) is calculated after grouping, so it must be filtered with HAVING.",
          takeaway: "WHERE filters raw rows; HAVING filters grouped results."
        },
        fix: {
          prompt: "Fix this aggregate filter by using HAVING.",
          broken: "SELECT status, COUNT(*)\nFROM project_items\nWHERE COUNT(*) > 5\nGROUP BY status;",
          correct: "SELECT status, COUNT(*)\nFROM project_items\nGROUP BY status\nHAVING COUNT(*) > 5;",
          expectedFix: "Move COUNT(*) > 5 into HAVING.",
          validationRule: "The current input must use HAVING COUNT(*) > 5 after GROUP BY status.",
          validationPattern: /\bgroup\s+by\s+status\b[\s\S]*\bhaving\s+count\s*\(\s*\*\s*\)\s*>\s*5\b/i,
          successMessage: "Correct: HAVING filters the grouped counts.",
          partialMessage: "Not yet. Keep GROUP BY status and put COUNT(*) > 5 in HAVING.",
          missingMessage: "Not yet. Use HAVING COUNT(*) > 5 after GROUP BY status.",
          explanation: "You moved the aggregate filter to HAVING, after the grouping step.",
          changed: "What changed: COUNT(*) > 5 moved from WHERE to HAVING.",
          mentorInstruction: "If COUNT(*) is still in WHERE, explain that aggregate filters use HAVING."
        },
        apply: {
          prompt: "Now count priorities and keep only groups with more than 4 rows.",
          requirements: ["groups by priority", "counts rows", "uses HAVING"],
          answer: "SELECT priority, COUNT(*) AS task_count\nFROM project_items\nGROUP BY priority\nHAVING COUNT(*) > 4;",
          expectedFix: "Write a grouped query using priority and HAVING COUNT(*) > 4.",
          validationRule: "The answer should group by priority and filter groups with HAVING.",
          explanation: "Same aggregate-filter pattern, different grouping column.",
          mentorInstruction: "Guide toward GROUP BY priority plus HAVING."
        }
      }
    ],
    advanced: [
      {
        examples: [
          { code: "SELECT category, COUNT(value) AS value_count\nFROM project_items\nGROUP BY category;", note: "COUNT(value) skips NULL values, while COUNT(*) counts rows." },
          { code: "SELECT category, COUNT(*) AS item_count\nFROM project_items\nGROUP BY category\nHAVING COUNT(*) >= 3;", note: "HAVING filters groups after aggregation." }
        ],
        prediction: {
          type: "multiple_choice",
          snippet: "SELECT category, COUNT(value)\nFROM project_items\nHAVING COUNT(value) > 2;",
          correctValue: "error",
          feedback: "category is non-aggregated, so it still needs GROUP BY before HAVING can filter groups.",
          wrongFeedback: "Correct answer: Error — category is selected but not grouped."
        },
        spot: {
          type: "multiple_choice",
          snippet: "SELECT category, COUNT(value)\nFROM project_items\nHAVING COUNT(value) > 2;",
          question: "What is the issue?",
          takeaway: "HAVING filters aggregate groups, but it does not replace GROUP BY.",
          answers: [
            { value: "missing-group-by", label: "GROUP BY category is missing", correct: true, reason: "Correct. category is selected outside an aggregate, so it needs GROUP BY." },
            { value: "having-invalid", label: "HAVING cannot use COUNT", correct: false, reason: "HAVING can use aggregates. The missing piece is GROUP BY category." },
            { value: "count-column-invalid", label: "COUNT(value) is invalid", correct: false, reason: "COUNT(value) is valid; it counts non-NULL values." }
          ]
        },
        fix: {
          prompt: "Fix this query so HAVING filters grouped categories.",
          broken: "SELECT category, COUNT(value)\nFROM project_items\nHAVING COUNT(value) > 2;",
          correct: "SELECT category, COUNT(value)\nFROM project_items\nGROUP BY category\nHAVING COUNT(value) > 2;",
          expectedFix: "Add GROUP BY category before HAVING.",
          validationRule: "The current input must include GROUP BY category before HAVING.",
          validationPattern: /\bgroup\s+by\s+category\b[\s\S]*\bhaving\b/i,
          successMessage: "Correct: GROUP BY category appears before HAVING.",
          partialMessage: "Not yet. GROUP BY is present, but make sure it groups by category before HAVING.",
          missingMessage: "Not yet. Add GROUP BY category before the HAVING clause.",
          explanation: "You grouped categories first, then filtered those aggregate groups with HAVING.",
          changed: "What changed: GROUP BY category was added before HAVING.",
          mentorInstruction: "If HAVING is present without GROUP BY category before it, name that ordering issue."
        },
        apply: {
          prompt: "Now return segments with at least 5 rows.",
          requirements: ["groups by segment", "counts rows", "filters groups with HAVING"],
          answer: "SELECT segment, COUNT(*) AS row_count\nFROM project_items\nGROUP BY segment\nHAVING COUNT(*) >= 5;",
          expectedFix: "Write a grouped query using segment and HAVING COUNT(*) >= 5.",
          validationRule: "The answer should group by segment and filter groups with HAVING.",
          explanation: "Same grouped-query structure, with a post-aggregation filter.",
          mentorInstruction: "Guide toward GROUP BY segment plus HAVING for aggregate filtering."
        }
      },
      {
        examples: [
          { code: "SELECT category, COUNT(*) AS row_count\nFROM project_items\nGROUP BY category;", note: "COUNT(*) counts rows, including rows where value is NULL." },
          { code: "SELECT category, COUNT(value) AS value_count\nFROM project_items\nGROUP BY category;", note: "COUNT(value) counts only non-NULL values." }
        ],
        prediction: {
          type: "open_reasoning",
          snippet: "SELECT category, COUNT(value)\nFROM project_items\nGROUP BY category;",
          question: "What does COUNT(value) count differently from COUNT(*)?",
          placeholder: "COUNT(value) skips NULL values...",
          expectedAnswerLabel: "COUNT(value) skips NULLs",
          requiredTerms: ["null"],
          feedback: "COUNT(value) counts non-NULL values; COUNT(*) counts rows.",
          wrongFeedback: "Expected: mention that COUNT(value) skips NULL values."
        },
        spot: {
          type: "open_reasoning",
          snippet: "SELECT category, COUNT(value) AS value_count\nFROM project_items\nGROUP BY category;",
          question: "What tradeoff does COUNT(value) create compared with COUNT(*)?",
          placeholder: "Explain in 1-2 sentences.",
          expectedAnswerLabel: "COUNT(value) skips NULLs; COUNT(*) counts rows",
          requiredTerms: ["null", "row"],
          correctReason: "COUNT(value) ignores NULL values, while COUNT(*) counts every row.",
          takeaway: "Choose COUNT(*) for row counts and COUNT(column) for non-NULL value counts."
        },
        fix: {
          prompt: "Change this to count rows instead of non-NULL values.",
          broken: "SELECT category, COUNT(value) AS value_count\nFROM project_items\nGROUP BY category;",
          correct: "SELECT category, COUNT(*) AS row_count\nFROM project_items\nGROUP BY category;",
          expectedFix: "Use COUNT(*) instead of COUNT(value).",
          validationRule: "The current input must use COUNT(*) and GROUP BY category.",
          validationPattern: /\bcount\s*\(\s*\*\s*\)[\s\S]*\bgroup\s+by\s+category\b/i,
          successMessage: "Correct: COUNT(*) counts rows per category.",
          partialMessage: "Not yet. GROUP BY is present, but use COUNT(*) for row counts.",
          missingMessage: "Not yet. Replace COUNT(value) with COUNT(*).",
          explanation: "You changed the aggregate from non-NULL value count to row count.",
          changed: "What changed: COUNT(value) became COUNT(*).",
          mentorInstruction: "If the user still has COUNT(value), explain the NULL-counting difference."
        },
        apply: {
          prompt: "Now count rows per segment.",
          requirements: ["groups by segment", "uses COUNT(*)", "keeps the aggregate alias clear"],
          answer: "SELECT segment, COUNT(*) AS row_count\nFROM project_items\nGROUP BY segment;",
          expectedFix: "Write a grouped query using segment and COUNT(*).",
          validationRule: "The answer should group by segment and use COUNT(*).",
          explanation: "Same grouped-query pattern, with row counting.",
          mentorInstruction: "Guide toward COUNT(*) grouped by segment."
        }
      },
      {
        examples: [
          { code: "SELECT category, COUNT(*) AS item_count\nFROM project_items\nGROUP BY category;", note: "A grouped query creates summary rows." },
          { code: "SELECT item_id, category, COUNT(*) OVER (PARTITION BY category) AS category_count\nFROM project_items;", note: "A window function keeps detail rows while adding a grouped-style count." }
        ],
        prediction: {
          type: "map_goal",
          snippet: "Goal: keep every item row visible and also show a category count.",
          question: "Which pattern fits better: GROUP BY or a window function?",
          placeholder: "Use a window function because...",
          expectedAnswerLabel: "Window function",
          requiredTerms: ["window"],
          feedback: "A window function keeps detail rows visible while adding a grouped-style count.",
          wrongFeedback: "Expected: window function — GROUP BY would collapse rows."
        },
        spot: {
          type: "map_goal",
          snippet: "Goal: keep each task row visible, but also show how many tasks are in its category.",
          question: "Should this use GROUP BY or a window function? Explain briefly.",
          placeholder: "Use a window function because...",
          expectedAnswerLabel: "Window function",
          requiredTerms: ["window"],
          correctReason: "A window function preserves detail rows; GROUP BY collapses them into summary rows.",
          takeaway: "Use GROUP BY for summaries; use window functions when detail rows must remain visible."
        },
        fix: {
          prompt: "Choose the structure that keeps detail rows visible.",
          broken: "SELECT item_id, category, COUNT(*)\nFROM project_items\nGROUP BY category;",
          correct: "SELECT item_id, category, COUNT(*) OVER (PARTITION BY category) AS category_count\nFROM project_items;",
          expectedFix: "Use COUNT(*) OVER (PARTITION BY category).",
          validationRule: "The current input should use OVER (PARTITION BY category).",
          validationPattern: /\bover\s*\(\s*partition\s+by\s+category\s*\)/i,
          successMessage: "Correct: the window function keeps detail rows visible.",
          partialMessage: "Not yet. The detail-row version needs OVER (PARTITION BY category).",
          missingMessage: "Not yet. Use a window function instead of GROUP BY for this goal.",
          explanation: "You switched from summary rows to detail rows with a partitioned count.",
          changed: "What changed: GROUP BY became a window function.",
          mentorInstruction: "If the user keeps GROUP BY, explain it collapses rows."
        },
        apply: {
          prompt: "Now keep each row and show a count per status.",
          requirements: ["keeps detail rows", "uses OVER", "partitions by status"],
          answer: "SELECT item_id, status, COUNT(*) OVER (PARTITION BY status) AS status_count\nFROM project_items;",
          expectedFix: "Use a window count partitioned by status.",
          validationRule: "The answer should use COUNT(*) OVER (PARTITION BY status).",
          explanation: "Same idea, but the partition column changed.",
          mentorInstruction: "Guide toward COUNT(*) OVER (PARTITION BY status)."
        }
      }
    ]
  };
  const variants = expandStep2QuestionBank(banks[normalizedLevel], getSqlMoreExamplePredictions(normalizedLevel));
  const lockedVariantIndex = Number(activeLearningPath?.sqlGroupByVariantIndex);
  if (
    activeLearningPath?.sqlGroupByVariantLevel === normalizedLevel
    && Number.isInteger(lockedVariantIndex)
    && variants[lockedVariantIndex]
  ) {
    return normalizeStep4TransferVariant(variants[lockedVariantIndex], "SQL");
  }
  const lastType = localStorage.getItem("codepath-last-spot-question-type") || "";
  const lastStep2Type = localStorage.getItem("codepath-last-step2-question-type") || "";
  const eligible = variants.filter((variant) =>
    (variant.spot?.type || "multiple_choice") !== lastType
    && getStep2QuestionType(variant.prediction) !== lastStep2Type
  );
  const pool = eligible.length ? eligible : variants;
  const seed = Number(activeLearningPath?.lessonVariantSeed || 0);
  const selected = pool[Math.abs(seed) % pool.length];
  const selectedIndex = variants.indexOf(selected);
  if (activeLearningPath && selectedIndex >= 0) {
    activeLearningPath = {
      ...activeLearningPath,
      sqlGroupByVariantIndex: selectedIndex,
      sqlGroupByVariantLevel: normalizedLevel
    };
  }
  return normalizeStep4TransferVariant(selected, "SQL");
}

function rememberSpotQuestionType(type) {
  localStorage.setItem("codepath-last-spot-question-type", type);
}

function rememberStep2QuestionType(type) {
  localStorage.setItem("codepath-last-step2-question-type", type);
}

function getStep2QuestionType(prediction = {}) {
  return prediction.questionType || prediction.type || "multiple_choice";
}

function getConceptLessonVariant(state, focus, level = "beginner") {
  if (!state) return null;
  if (state.language === "SQL" && focus?.kind === "calculation") {
    return getSqlGroupByVariant(level);
  }
  const normalizedLevel = ["beginner", "intermediate", "advanced"].includes(level) ? level : "beginner";
  const family = getConceptFamily(state.language);
  const variants = getUniversalConceptVariants(state.language, family, normalizedLevel);
  if (!variants.length) return null;

  const lockedVariantIndex = Number(activeLearningPath?.conceptVariantIndex);
  if (
    activeLearningPath?.conceptVariantFamily === family
    && activeLearningPath?.conceptVariantLevel === normalizedLevel
    && Number.isInteger(lockedVariantIndex)
    && variants[lockedVariantIndex]
  ) {
    return normalizeStep4TransferVariant(variants[lockedVariantIndex], state.language);
  }

  const lastSpotType = localStorage.getItem("codepath-last-spot-question-type") || "";
  const lastStep2Type = localStorage.getItem("codepath-last-step2-question-type") || "";
  const eligible = variants.filter((variant) =>
    (variant.spot?.type || "multiple_choice") !== lastSpotType
    && getStep2QuestionType(variant.prediction) !== lastStep2Type
  );
  const pool = eligible.length ? eligible : variants;
  const seed = Number(activeLearningPath?.lessonVariantSeed || 0);
  const selected = pool[Math.abs(seed) % pool.length];
  const selectedIndex = variants.indexOf(selected);
  if (activeLearningPath && selectedIndex >= 0) {
    activeLearningPath = {
      ...activeLearningPath,
      conceptVariantIndex: selectedIndex,
      conceptVariantFamily: family,
      conceptVariantLevel: normalizedLevel
    };
  }
  return normalizeStep4TransferVariant(selected, state.language);
}

function getConceptFamily(language) {
  if (language === "Python") return "python";
  if (language === "JavaScript" || language === "Node.js") return "javascript";
  if (language === "TypeScript") return "typescript";
  if (language === "React") return "react";
  if (language === "HTML and CSS") return "htmlcss";
  if (language === "R") return "r";
  if (language === "Java" || language === "C#" || language === "Kotlin" || language === "Swift") return "app-oop";
  if (language === "C++" || language === "Go" || language === "Rust") return "systems";
  return "generic";
}

function normalizeStep4TransferVariant(variant, language) {
  if (!variant?.fix || !variant?.spot?.snippet) return variant;
  if (String(variant.fix.broken || "").trim() !== String(variant.spot.snippet || "").trim()) return variant;
  return { ...variant, fix: createTransferFixForVariant(variant, language) };
}

function createTransferFixForVariant(variant, language) {
  const fix = variant.fix;
  const expected = String(fix.expectedFix || "").toLowerCase();
  const broken = String(fix.broken || "");

  if (language === "SQL") {
    if (expected.includes("group by team_id") || expected.includes("assignee_id, status")) {
      return {
        ...fix,
        prompt: "Apply the same grouping rule to a new pair of columns.",
        broken: "SELECT assignee_id, priority, COUNT(*)\nFROM project_items\nGROUP BY assignee_id;",
        correct: "SELECT assignee_id, priority, COUNT(*)\nFROM project_items\nGROUP BY assignee_id, priority;",
        expectedFix: "Add priority to GROUP BY.",
        validationRule: "The current input must include GROUP BY assignee_id, priority.",
        validationPattern: /\bgroup\s+by\s+assignee_id\s*,\s*priority\b/i,
        successMessage: "Correct: both selected columns are grouped.",
        partialMessage: "Not yet. GROUP BY is present, but it must include assignee_id and priority.",
        missingMessage: "Not yet. Add priority to GROUP BY so both selected columns are grouped.",
        explanation: "You transferred the rule to a different two-column grouping.",
        changed: "What changed: priority was added to the GROUP BY list."
      };
    }
    if (expected.includes("having") || broken.toLowerCase().includes("where count")) {
      return {
        ...fix,
        prompt: "Apply the aggregate-filter rule to a different grouped query.",
        broken: "SELECT priority, COUNT(*)\nFROM project_items\nWHERE COUNT(*) > 4\nGROUP BY priority;",
        correct: "SELECT priority, COUNT(*)\nFROM project_items\nGROUP BY priority\nHAVING COUNT(*) > 4;",
        expectedFix: "Move COUNT(*) > 4 into HAVING.",
        validationRule: "The current input must use HAVING COUNT(*) > 4 after GROUP BY priority.",
        validationPattern: /\bgroup\s+by\s+priority\b[\s\S]*\bhaving\s+count\s*\(\s*\*\s*\)\s*>\s*4\b/i,
        successMessage: "Correct: HAVING filters the grouped counts.",
        partialMessage: "Not yet. Keep GROUP BY priority and put COUNT(*) > 4 in HAVING.",
        missingMessage: "Not yet. Use HAVING COUNT(*) > 4 after GROUP BY priority.",
        explanation: "You moved the aggregate condition to the group-filtering step.",
        changed: "What changed: COUNT(*) > 4 moved from WHERE to HAVING."
      };
    }
    if (expected.includes("count(*)")) {
      return {
        ...fix,
        prompt: "Apply the row-counting choice to a new column.",
        broken: "SELECT segment, COUNT(value) AS value_count\nFROM project_items\nGROUP BY segment;",
        correct: "SELECT segment, COUNT(*) AS row_count\nFROM project_items\nGROUP BY segment;",
        expectedFix: "Use COUNT(*) instead of COUNT(value).",
        validationRule: "The current input must use COUNT(*) and GROUP BY segment.",
        validationPattern: /\bcount\s*\(\s*\*\s*\)[\s\S]*\bgroup\s+by\s+segment\b/i,
        successMessage: "Correct: COUNT(*) counts rows per segment.",
        partialMessage: "Not yet. GROUP BY is present, but use COUNT(*) for row counts.",
        missingMessage: "Not yet. Replace COUNT(value) with COUNT(*).",
        explanation: "You transferred the COUNT(*) choice to a new grouped query.",
        changed: "What changed: COUNT(value) became COUNT(*)."
      };
    }
    if (expected.includes("over") || expected.includes("window")) {
      return {
        ...fix,
        prompt: "Keep detail rows visible for a different grouping column.",
        broken: "SELECT item_id, status, COUNT(*)\nFROM project_items\nGROUP BY status;",
        correct: "SELECT item_id, status, COUNT(*) OVER (PARTITION BY status) AS status_count\nFROM project_items;",
        expectedFix: "Use COUNT(*) OVER (PARTITION BY status).",
        validationRule: "The current input should use OVER (PARTITION BY status).",
        validationPattern: /\bover\s*\(\s*partition\s+by\s+status\s*\)/i,
        successMessage: "Correct: the window function keeps detail rows visible.",
        partialMessage: "Not yet. The detail-row version needs OVER (PARTITION BY status).",
        missingMessage: "Not yet. Use a window function partitioned by status.",
        explanation: "You transferred the detail-row pattern to status.",
        changed: "What changed: GROUP BY became a window function for status."
      };
    }
    const transferColumn = expected.includes("priority") ? "status" : expected.includes("status") ? "category" : "priority";
    return {
      ...fix,
      prompt: `Apply the GROUP BY rule to a new column: ${transferColumn}.`,
      broken: `SELECT ${transferColumn}, COUNT(*)\nFROM practice_tasks;`,
      correct: `SELECT ${transferColumn}, COUNT(*)\nFROM practice_tasks\nGROUP BY ${transferColumn};`,
      expectedFix: `Add GROUP BY ${transferColumn}.`,
      validationRule: `The current input must include GROUP BY ${transferColumn}.`,
      validationPattern: new RegExp(`\\bgroup\\s+by\\s+${transferColumn}\\b`, "i"),
      successMessage: `Correct: GROUP BY ${transferColumn} is present.`,
      partialMessage: `Not yet. GROUP BY is present, but it must be GROUP BY ${transferColumn}.`,
      missingMessage: `Not yet. Add GROUP BY ${transferColumn} so the selected column has a matching group.`,
      explanation: `You transferred the grouping rule to ${transferColumn}.`,
      changed: `What changed: GROUP BY ${transferColumn} was added.`
    };
  }

  if (language === "Python") {
    if (expected.includes("values")) {
      return {
        ...fix,
        prompt: "Transfer the calculation fix to a new dictionary.",
        broken: "points = {'warmup': 2, 'project': 6}\ntotal = sum(points)\nprint(total)",
        correct: "points = {'warmup': 2, 'project': 6}\ntotal = sum(points.values())\nprint(total)",
        expectedFix: "Use points.values() inside sum().",
        validationPattern: /sum\s*\(\s*points\.values\s*\(\s*\)\s*\)/i,
        successMessage: "Correct: the total uses the dictionary values.",
        missingMessage: "Not yet. Put points.values() inside sum().",
        explanation: "You applied the values() pattern to a new dictionary.",
        changed: "What changed: sum(points) became sum(points.values())."
      };
    }
    return {
      ...fix,
      prompt: "Apply the safe lookup pattern to a different missing key.",
      broken: "scores = {'practice': 4, 'review': 2}\nprint(scores['stretch'])",
      correct: "scores = {'practice': 4, 'review': 2}\nprint(scores.get('stretch', 0))",
      expectedFix: "Use .get('stretch', 0) or add the missing key.",
      validationPattern: /\.get\s*\(\s*['"]stretch['"]\s*,/i,
      successMessage: "Correct: the new missing key now has a fallback.",
      missingMessage: "Not yet. Use .get('stretch', fallback) or add stretch before reading it.",
      explanation: "You transferred the safe lookup pattern to a different key.",
      changed: "What changed: scores['stretch'] became a safe lookup."
    };
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "Node.js") {
    if (expected.includes("filter")) {
      return {
        ...fix,
        prompt: "Apply the array-method choice to a new condition.",
        broken: "const urgent = tasks.map((task) => task.priority === 'high');",
        correct: "const urgent = tasks.filter((task) => task.priority === 'high');",
        expectedFix: "Use filter() to keep matching task objects.",
        validationPattern: /\.filter\s*\(/i,
        successMessage: "Correct: filter keeps matching objects.",
        missingMessage: "Not yet. Use .filter() when you want matching items, not booleans.",
        explanation: "You transferred the filter-vs-map decision to a new property.",
        changed: "What changed: map became filter for priority."
      };
    }
    return {
      ...fix,
      prompt: "Apply the fallback pattern to a different optional property.",
      broken: "const task = { name: 'review' };\nconsole.log(task.estimate.toFixed(1));",
      correct: "const task = { name: 'review' };\nconsole.log((task.estimate ?? 0).toFixed(1));",
      expectedFix: "Use a fallback before calling toFixed().",
      validationPattern: /estimate[\s\S]*(\?\?\s*0|\|\|\s*0)|(\?\?\s*0|\|\|\s*0)[\s\S]*estimate/i,
      successMessage: "Correct: the new optional property has a fallback.",
      missingMessage: "Not yet. Add a fallback for task.estimate before using it.",
      explanation: "You transferred the missing-property guard to estimate.",
      changed: "What changed: task.estimate now has a fallback."
    };
  }

  if (language === "React") {
    return {
      ...fix,
      prompt: "Apply the state pattern to a different changing value.",
      broken: "function Toggle({ open }) {\n  open = !open;\n  return <p>{open ? 'Open' : 'Closed'}</p>;\n}",
      correct: "function Toggle() {\n  const [open, setOpen] = useState(false);\n  return <button onClick={() => setOpen(!open)}>{open ? 'Open' : 'Closed'}</button>;\n}",
      expectedFix: "Use useState and setOpen instead of mutating a prop.",
      validationPattern: /useState|setOpen|set[A-Z]/,
      successMessage: "Correct: changing data is now state-driven.",
      missingMessage: "Not yet. Use state for the value the component changes.",
      explanation: "You transferred the prop-vs-state rule to a toggle.",
      changed: "What changed: prop mutation became state update."
    };
  }

  if (language === "HTML and CSS") {
    return {
      ...fix,
      prompt: "Apply the label/input connection rule to a new field.",
      broken: "<label for=\"search\">Search</label>\n<input id=\"site-search\">",
      correct: "<label for=\"search\">Search</label>\n<input id=\"search\" type=\"search\">",
      expectedFix: "Make for and id match.",
      validationPattern: /for=["']search["'][\s\S]*id=["']search["']/i,
      successMessage: "Correct: the new label targets the input.",
      missingMessage: "Not yet. Make the label for value match the input id.",
      explanation: "You transferred the accessible-label pattern to a search field.",
      changed: "What changed: for and id now match on the new field."
    };
  }

  if (language === "R") {
    return {
      ...fix,
      prompt: "Apply the grouped-summary pattern to a different column.",
      broken: "tasks |> summarise(total = n(), status = status)",
      correct: "tasks |> group_by(status) |> summarise(total = n())",
      expectedFix: "Add group_by(status) before summarise().",
      validationPattern: /group_by\s*\(\s*status\s*\)[\s\S]*summari[sz]e/i,
      successMessage: "Correct: status grouping happens before summarise.",
      missingMessage: "Not yet. Add group_by(status) before summarise().",
      explanation: "You transferred the grouped summary to status.",
      changed: "What changed: group_by(status) was added before summarise()."
    };
  }

  return {
    ...fix,
    prompt: "Apply the same idea to a new tiny case.",
    broken: "show summary\ncalculate summary",
    correct: "calculate summary\nshow summary",
    expectedFix: "Calculate the summary before showing it.",
    validationPattern: /calculate[\s\S]*show|create[\s\S]*show|process[\s\S]*show/i,
    successMessage: "Correct: the value is created before it is shown.",
    missingMessage: "Not yet. Put the calculate/create step before output.",
    explanation: "You transferred the data-flow order to a new case.",
    changed: "What changed: the new output now comes after the value exists."
  };
}

function createConceptStep2Prediction(state, focus, level) {
  const spec = getConceptLessonVariant(state, focus, level);
  if (!spec?.prediction) {
    const wrapper = document.createElement("div");
    wrapper.className = "concept-prediction";
    wrapper.append(createTakeaway("Pause and predict what changes before you move on."));
    return wrapper;
  }
  if (state.language === "SQL" && focus.kind === "calculation") {
    return createSqlGroupByPrediction();
  }
  if (shouldRenderCompareAsChoice(spec.prediction, level)) {
    return createMultipleChoiceStep2Prediction({
      ...spec,
      prediction: createCompareChoicePrediction(spec.prediction)
    });
  }
  if (spec.prediction.type && spec.prediction.type !== "multiple_choice") {
    return createWrittenStep2Prediction(spec);
  }
  return createMultipleChoiceStep2Prediction(spec);
}

function shouldRenderCompareAsChoice(prediction = {}, level = "beginner") {
  if (level === "advanced" || prediction.type !== "compare") {
    return false;
  }
  return hasCompareOptions(prediction);
}

function hasCompareOptions(prediction = {}) {
  return /\bA\)|\bA\./i.test(prediction.snippet || "")
    && /\bB\)|\bB\./i.test(prediction.snippet || "");
}

function createCompareChoicePrediction(prediction = {}) {
  const correctValue = inferCompareCorrectValue(prediction);
  const correctLabel = correctValue.toUpperCase();
  const wrongLabel = correctValue === "a" ? "B" : "A";
  const explanation = prediction.feedback || `${correctLabel} is the better match for this pattern.`;
  return {
    ...prediction,
    type: "multiple_choice",
    answers: prediction.answers || [
      {
        value: "a",
        label: "A",
        correct: correctValue === "a",
        reason: correctValue === "a" ? `Correct. ${explanation}` : `${wrongLabel} does not match the safer or more appropriate pattern here.`
      },
      {
        value: "b",
        label: "B",
        correct: correctValue === "b",
        reason: correctValue === "b" ? `Correct. ${explanation}` : `${wrongLabel} does not match the safer or more appropriate pattern here.`
      }
    ],
    feedback: explanation,
    wrongFeedback: prediction.wrongFeedback || `Look for the snippet that actually applies the ${prediction.expectedAnswerLabel || "needed"} pattern.`
  };
}

function inferCompareCorrectValue(prediction = {}) {
  const text = [
    prediction.expectedAnswerLabel,
    prediction.feedback,
    prediction.wrongFeedback,
    ...(prediction.requiredTerms || [])
  ].filter(Boolean).join(" ").toLowerCase();

  if (/\bb\b|snippet b|version b|query b|option b|state|setter|setcount/.test(text)) {
    return "b";
  }
  if (/\ba\b|snippet a|version a|query a|option a|filter|fallback|safer|check|validate|match/.test(text)) {
    return "a";
  }
  return "a";
}

function getShuffledAnswers(answers = [], scope = "choices", questionKey = "") {
  if (!Array.isArray(answers) || answers.length < 2) {
    return answers || [];
  }
  const seedId = String(activeLearningPath?.lessonVariantSeed || "");
  const seed = hashString([
    seedId,
    scope,
    questionKey,
    answers.map((answer) => answer.value || answer.label).join("|")
  ].join(":"));
  const shuffled = seededShuffle(answers, seed);
  let correctIndex = shuffled.findIndex((answer) => answer.correct);
  if (correctIndex < 0) {
    return shuffled;
  }
  const lastPosition = getPreviousCorrectAnswerPosition(scope, questionKey);
  if (lastPosition && lastPosition.seed !== seedId && lastPosition.position === correctIndex) {
    const targetIndex = (correctIndex + 1) % shuffled.length;
    [shuffled[correctIndex], shuffled[targetIndex]] = [shuffled[targetIndex], shuffled[correctIndex]];
    correctIndex = targetIndex;
  }
  return shuffled;
}

function getPreviousCorrectAnswerPosition(scope = "choices", questionKey = "") {
  try {
    return JSON.parse(localStorage.getItem(getCorrectAnswerPositionKey(scope, questionKey)) || "null");
  } catch (error) {
    return null;
  }
}

function rememberCorrectAnswerPosition(scope = "choices", questionKey = "", answers = []) {
  const seed = String(activeLearningPath?.lessonVariantSeed || "");
  const position = answers.findIndex((answer) => answer.correct);
  if (position >= 0) {
    localStorage.setItem(getCorrectAnswerPositionKey(scope, questionKey), JSON.stringify({ seed, position }));
  }
}

function getCorrectAnswerPositionKey(scope = "choices", questionKey = "") {
  return `codepath-correct-position-${scope}-${String(questionKey).replace(/[^a-z0-9_-]+/gi, "-").slice(0, 48)}`;
}

function seededShuffle(items = [], seed = 1) {
  const shuffled = [...items];
  let currentSeed = seed || 1;
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    currentSeed = (currentSeed * 1664525 + 1013904223) >>> 0;
    const swapIndex = currentSeed % (index + 1);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function hashString(value = "") {
  return String(value).split("").reduce((hash, char) => {
    return ((hash << 5) - hash + char.charCodeAt(0)) >>> 0;
  }, 2166136261);
}

function createMultipleChoiceStep2Prediction(spec) {
  const wrapper = document.createElement("div");
  const prompt = document.createElement("p");
  const snippet = document.createElement("pre");
  const choices = document.createElement("div");
  const result = document.createElement("p");
  const selected = activeLearningPath?.moreExamplesPrediction || "";
  const answered = Boolean(activeLearningPath?.moreExamplesPredictionAnswered);
  const answers = getShuffledAnswers(
    spec.prediction.answers || [],
    "more-examples",
    getStep2QuestionType(spec.prediction)
  );
  wrapper.className = "concept-prediction";
  prompt.textContent = spec.prediction.question || "What happens here?";
  snippet.className = "task-tool-code prediction-snippet";
  snippet.textContent = spec.prediction.snippet;
  choices.className = "prediction-options";
  result.className = "prediction-result";

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = getPredictionButtonClass({
      answered,
      selected: selected === answer.value,
      correct: answer.correct,
      revealCorrect: shouldRevealMicroAnswer("more-examples")
    });
    button.textContent = answer.label;
    button.disabled = answered;
    button.addEventListener("click", () => {
      activeLearningPath = {
        ...(activeLearningPath || {}),
        ...getMicroAttemptUpdate("more-examples", answer.correct),
        moreExamplesPrediction: answer.value,
        moreExamplesPredictionAnswered: true,
        moreExamplesPredictionCorrect: answer.correct
      };
      rememberStep2QuestionType(getStep2QuestionType(spec.prediction));
      rememberCorrectAnswerPosition("more-examples", getStep2QuestionType(spec.prediction), answers);
      moduleList.replaceChildren();
      moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
    });
    choices.append(button);
  });

  if (answered) {
    const picked = answers.find((answer) => answer.value === selected);
    const correct = answers.find((answer) => answer.correct);
    result.textContent = picked?.correct
      ? `Correct - ${spec.prediction.feedback || correct?.reason || "that matches the pattern."}`
      : getProgressiveMicroFeedback("more-examples", spec.prediction, { correctAnswer: correct, selectedAnswer: picked });
  } else {
    result.textContent = "Answer this to unlock the next step.";
  }
  wrapper.append(prompt, snippet, choices, result);
  if (answered && !activeLearningPath?.moreExamplesPredictionCorrect) {
    wrapper.append(createTryAgainButton("more-examples"));
  }
  return wrapper;
}

function createWrittenStep2Prediction(spec) {
  const wrapper = document.createElement("div");
  const prompt = document.createElement("p");
  const snippet = document.createElement("pre");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  const answered = Boolean(activeLearningPath?.moreExamplesPredictionAnswered);
  const answer = activeLearningPath?.moreExamplesPrediction || "";
  wrapper.className = "concept-prediction";
  prompt.textContent = spec.prediction.question || "Answer this checkpoint.";
  snippet.className = "task-tool-code prediction-snippet";
  snippet.textContent = spec.prediction.snippet;
  textarea.className = "mini-fix-editor";
  textarea.rows = spec.prediction.type === "open_reasoning" || spec.prediction.type === "compare" ? 5 : 3;
  textarea.spellcheck = false;
  textarea.placeholder = getNeutralPredictionPlaceholder(spec.prediction);
  textarea.value = answer;
  textarea.disabled = answered;
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Check answer";
  submit.disabled = answered;
  submit.addEventListener("click", () => {
    const value = textarea.value.trim();
    if (!value) {
      result.textContent = "Write a short answer first.";
      return;
    }
    const isCorrect = validateLessonText(value, spec.prediction);
    activeLearningPath = {
      ...(activeLearningPath || {}),
      ...getMicroAttemptUpdate("more-examples", isCorrect),
      moreExamplesPrediction: value,
      moreExamplesPredictionAnswered: true,
      moreExamplesPredictionCorrect: isCorrect
    };
    rememberStep2QuestionType(getStep2QuestionType(spec.prediction));
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  actions.append(submit);
  wrapper.append(prompt, snippet, textarea, actions);
  if (answered) {
    result.textContent = activeLearningPath?.moreExamplesPredictionCorrect
      ? `Correct - ${spec.prediction.feedback}`
      : getProgressiveMicroFeedback("more-examples", spec.prediction);
    wrapper.append(result);
    if (!activeLearningPath?.moreExamplesPredictionCorrect) {
      wrapper.append(createTryAgainButton("more-examples"));
    }
  } else {
    result.textContent = "Answer this to unlock the next step.";
    wrapper.append(result);
  }
  return wrapper;
}

function getNeutralPredictionPlaceholder(prediction = {}) {
  if (prediction.answerKind === "value") {
    return "Write the fallback value.";
  }
  if (prediction.answerKind === "expression") {
    return "Write the missing expression.";
  }
  if (prediction.answerKind === "line") {
    return "Write the missing line.";
  }
  if (prediction.answerKind === "column") {
    return "Write the column name.";
  }
  if (prediction.answerKind === "columns") {
    return "Write the column names.";
  }
  if (prediction.type === "fill_in" || /fill in/i.test(prediction.question || "")) {
    return "Write the missing expression here.";
  }
  if (prediction.type === "minimal_fix" || /smallest fix|missing line|one sql line/i.test(prediction.question || "")) {
    return "Write the smallest fix here.";
  }
  if (prediction.type === "compare") {
    return "Explain the difference briefly.";
  }
  if (prediction.type === "open_reasoning" || /why|explain|tradeoff/i.test(prediction.question || "")) {
    return "Explain your reasoning briefly.";
  }
  return "Write a short answer.";
}

function getUniversalConceptVariants(language, family, level) {
  const banks = {
    python: getPythonLessonVariants(level),
    javascript: getJavaScriptLessonVariants("JavaScript", level),
    typescript: getTypeScriptLessonVariants(level),
    react: getReactLessonVariants(level),
    htmlcss: getHtmlCssLessonVariants(level),
    r: getRLessonVariants(level),
    "app-oop": getOopLessonVariants(language, level),
    systems: getSystemsLessonVariants(language, level),
    generic: getGenericLanguageLessonVariants(language, level)
  };
  const variants = banks[family] || banks.generic;
  return expandStep2QuestionBank(variants, getAdditionalMoreExamplePredictions(language, family, level));
}

function expandStep2QuestionBank(variants = [], predictions = []) {
  if (!predictions.length || !variants.length) {
    return variants;
  }
  return [
    ...variants,
    ...predictions.map((prediction, index) => ({
      ...variants[index % variants.length],
      prediction
    }))
  ];
}

function getAdditionalMoreExamplePredictions(language, family, level = "beginner") {
  const advanced = level === "advanced";
  const intermediate = level === "intermediate";

  if (family === "python") {
    return [
      {
        type: "multiple_choice",
        questionType: "choose_safer_line",
        snippet: "scores = {'practice': 4, 'review': 2}\n# 'stretch' may be missing",
        question: "Which line safely handles a missing task?",
        feedback: "The safe lookup returns 0 when stretch is missing, so the program can keep running.",
        wrongFeedback: "Look for the line that handles a missing key and still produces a value.",
        answers: [
          { value: "direct", label: "print(scores['stretch'])", correct: false, reason: "Direct lookup can raise KeyError when stretch is missing." },
          { value: "safe", label: "print(scores.get('stretch', 0))", correct: true, reason: "Correct. It reads stretch if present and uses 0 if it is missing." },
          { value: "unused", label: "scores['stretch'] = 0", correct: false, reason: "That changes the dictionary, but it does not read and print the current value." }
        ]
      },
      {
        type: intermediate || advanced ? "compare" : "multiple_choice",
        questionType: "identify_crash_risk",
        snippet: "A) scores['stretch']\nB) scores.get('stretch', 0)\nC) scores.values()",
        question: intermediate || advanced ? "Which line can crash if stretch is missing, and why?" : "Which line can crash if stretch is missing?",
        placeholder: "Line A can crash because...",
        requiredTerms: ["missing"],
        expectedAnswerLabel: "A can crash because the key may be missing",
        feedback: "Direct bracket lookup can crash when the key does not exist.",
        wrongFeedback: "The risky line is the one that requires the key to already exist.",
        answers: [
          { value: "a", label: "A", correct: true, reason: "Correct. Bracket lookup requires the key to exist." },
          { value: "b", label: "B", correct: false, reason: "B provides a fallback for the missing key." },
          { value: "c", label: "C", correct: false, reason: "C returns the collection of values; it is not reading stretch." }
        ]
      },
      {
        type: advanced ? "open_reasoning" : "fill_in",
        questionType: "choose_fallback",
        snippet: "scores = {'practice': 4, 'review': 2}\nprint(scores.get('stretch', ____))",
        question: advanced ? "When would a numeric fallback be the wrong choice for a missing score?" : "Complete the safe lookup so a missing score does not break the calculation.",
        answerKind: advanced ? "short_answer" : "value",
        placeholder: advanced ? "Explain when missing should stay visible..." : "Write the fallback value.",
        validationPattern: advanced ? null : /^\s*0\s*$/i,
        requiredTerms: advanced ? ["missing"] : ["0"],
        expectedAnswerLabel: advanced ? "It depends on what missing means" : "0",
        feedback: advanced ? "Fallbacks should match the meaning of missing data, not just avoid an error." : "0 makes the missing score count as zero.",
        wrongFeedback: advanced ? "Expected: explain that the fallback depends on the meaning of missing data." : "Expected: 0."
      },
      {
        type: "compare",
        questionType: "compare_snippets",
        snippet: "A) value = scores.get('stretch', 0)\n   print(value)\n\nB) print(scores['stretch'])",
        question: "Which snippet is safer when stretch might be missing?",
        placeholder: "A is safer because...",
        requiredTerms: ["missing"],
        expectedAnswerLabel: "A is safer because it uses a fallback",
        feedback: "A stores the safe lookup result, then prints that result.",
        wrongFeedback: "Expected: A, because it handles the missing key before printing."
      },
      {
        type: "multiple_choice",
        questionType: "when_direct_lookup_is_ok",
        snippet: "scores = {'practice': 4, 'review': 2}",
        question: "When is direct lookup like scores['practice'] acceptable?",
        feedback: "Direct lookup is fine when the key is guaranteed by the data contract.",
        wrongFeedback: "Think about whether the key is guaranteed to exist.",
        answers: [
          { value: "guaranteed", label: "When the key is guaranteed to exist", correct: true, reason: "Correct. Direct lookup is clear when absence would be a real bug." },
          { value: "external", label: "When the key comes from user input", correct: false, reason: "User input can be missing or unexpected, so a safe lookup is better." },
          { value: "unknown", label: "When the dictionary shape is unknown", correct: false, reason: "Unknown shapes need checks or fallbacks." }
        ]
      },
      {
        type: "multiple_choice",
        questionType: "values_expression_choice",
        snippet: "scores = {'practice': 4, 'review': 2}\n# Need all numeric scores",
        question: "Which expression gives all numeric scores?",
        feedback: "scores.values() returns the stored numbers so a calculation can use them.",
        wrongFeedback: "Look for the expression that returns the dictionary values, not the keys or one item.",
        answers: [
          { value: "values", label: "scores.values()", correct: true, reason: "Correct. This returns the collection of stored values." },
          { value: "keys", label: "scores.keys()", correct: false, reason: "That returns labels like practice and review, not the numbers." },
          { value: "dict", label: "scores", correct: false, reason: "Using the dictionary directly usually iterates keys, not values." },
          { value: "string-key", label: "scores['values']", correct: false, reason: "That looks for a key literally named values." }
        ]
      },
      {
        type: "multiple_choice",
        questionType: "safe_lookup_result_used",
        snippet: "A) scores.get('stretch', 0)\n   print(scores['stretch'])\n\nB) print(scores.get('stretch', 0))\n\nC) scores['stretch']\n   print(0)",
        question: "Which snippet uses the safe lookup result correctly?",
        feedback: "B puts the safe lookup directly in the output, so the fallback affects what prints.",
        wrongFeedback: "The safe expression has to be the value that is printed or returned.",
        answers: [
          { value: "a", label: "A", correct: false, reason: "A computes a safe value, then ignores it and prints the risky lookup." },
          { value: "b", label: "B", correct: true, reason: "Correct. The printed expression is the safe lookup." },
          { value: "c", label: "C", correct: false, reason: "C still does a risky lookup before printing 0." }
        ]
      },
      {
        type: "multiple_choice",
        questionType: "key_exists_changes_result",
        snippet: "scores = {'stretch': 7, 'review': 2}\nprint(scores.get('stretch', 0))",
        question: "What changes because stretch exists?",
        feedback: ".get() returns the real value 7 because the key exists; the fallback is ignored.",
        wrongFeedback: "A fallback is only used when the key is missing.",
        answers: [
          { value: "seven", label: "It prints 7", correct: true, reason: "Correct. The existing key wins over the fallback." },
          { value: "zero", label: "It prints 0", correct: false, reason: "0 would be used only if stretch were missing." },
          { value: "none", label: "It prints None", correct: false, reason: "A fallback was provided, and the key exists anyway." },
          { value: "error", label: "It raises KeyError", correct: false, reason: ".get() does not raise KeyError for missing keys." }
        ]
      }
    ];
  }

  if (["javascript", "typescript"].includes(family)) {
    return [
      {
        type: "multiple_choice",
        questionType: "choose_safer_line",
        snippet: "const task = { name: 'review' };\n// points may be missing",
        question: "Which line safely handles missing points?",
        feedback: "The fallback expression produces 0 when points is missing.",
        wrongFeedback: "Look for the line that still produces a value when points is missing.",
        answers: [
          { value: "direct", label: "console.log(task.points.toFixed(1))", correct: false, reason: "points may be undefined, so toFixed can fail." },
          { value: "fallback", label: "console.log((task.points ?? 0).toFixed(1))", correct: true, reason: "Correct. The fallback runs before toFixed." },
          { value: "unused", label: "task.points ?? 0", correct: false, reason: "That expression is safe but unused, so it does not affect the output." }
        ]
      },
      {
        type: intermediate || advanced ? "compare" : "multiple_choice",
        questionType: "detect_unused_fallback",
        snippet: "task.points ?? 0;\nconsole.log(task.points.toFixed(1));",
        question: intermediate || advanced ? "Why does this fallback not fix the output?" : "What is still wrong?",
        placeholder: "The fallback is unused because...",
        requiredTerms: ["unused"],
        expectedAnswerLabel: "The fallback is not used in console.log",
        feedback: "A fallback only helps if the output uses that fallback result.",
        wrongFeedback: "The safe-looking expression is separate from the value being logged.",
        answers: [
          { value: "unused", label: "The fallback is unused", correct: true, reason: "Correct. console.log still reads task.points directly." },
          { value: "console", label: "console.log is invalid", correct: false, reason: "console.log is fine; the value inside it is unsafe." },
          { value: "operator", label: "?? is always invalid", correct: false, reason: "?? is valid. It just needs to affect the output." }
        ]
      },
      {
        type: "compare",
        questionType: "filter_vs_map",
        snippet: "A) tasks.filter((task) => task.done)\nB) tasks.map((task) => task.done)",
        question: "Which keeps only completed task objects?",
        placeholder: "A keeps objects because...",
        requiredTerms: ["filter"],
        expectedAnswerLabel: "A uses filter",
        feedback: "filter keeps matching objects; map turns every item into another value.",
        wrongFeedback: "Expected: filter, because the goal is to keep items rather than transform them."
      }
    ];
  }

  if (family === "react") {
    return [
      {
        type: "multiple_choice",
        questionType: "state_vs_props",
        snippet: "A) props\nB) state",
        question: "Which should hold a value that changes after a click?",
        feedback: "State is owned by the component and can change after interaction.",
        wrongFeedback: "Props come from a parent; changing local interaction values belongs in state.",
        answers: [
          { value: "props", label: "props", correct: false, reason: "Props are inputs from outside the component." },
          { value: "state", label: "state", correct: true, reason: "Correct. State changes through a setter after interaction." },
          { value: "css", label: "CSS class", correct: false, reason: "CSS can style the value, but it does not own changing data." }
        ]
      },
      {
        type: "compare",
        questionType: "compare_update_paths",
        snippet: "A) count += 1\nB) setCount(count + 1)",
        question: "Which update path fits React state?",
        placeholder: "B fits because...",
        requiredTerms: ["set"],
        expectedAnswerLabel: "Use the setter",
        feedback: "React needs the setter so it knows state changed and can re-render.",
        wrongFeedback: "Expected: the setter path, not direct mutation."
      }
    ];
  }

  if (family === "htmlcss") {
    return [
      {
        type: "multiple_choice",
        questionType: "match_attribute",
        snippet: "<label for=\"search\">Search</label>\n<input id=\"site-search\">",
        question: "Which value should the input id use?",
        feedback: "The input id must match the label's for value.",
        wrongFeedback: "Look at the exact value inside the label's for attribute.",
        answers: [
          { value: "search", label: "search", correct: true, reason: "Correct. for=\"search\" needs id=\"search\"." },
          { value: "site-search", label: "site-search", correct: false, reason: "That keeps the mismatch." },
          { value: "input", label: "input", correct: false, reason: "The id should match the label, not the tag name." }
        ]
      },
      {
        type: "compare",
        questionType: "explain_label_connection",
        snippet: "A) <label for=\"email\"><input id=\"email\">\nB) <label for=\"email\"><input id=\"user-email\">",
        question: "Which one connects the label correctly?",
        placeholder: "A connects because...",
        requiredTerms: ["match"],
        expectedAnswerLabel: "A, because for and id match",
        feedback: "Matching for and id lets the label target the input.",
        wrongFeedback: "Expected: the version where for and id match."
      }
    ];
  }

  if (family === "r") {
    return [
      {
        type: "multiple_choice",
        questionType: "choose_group_column",
        snippet: "tasks |> group_by(status) |> summarise(total = n())",
        question: "What does this produce?",
        feedback: "It returns one row per status with a count.",
        wrongFeedback: "The grouping column controls the output rows.",
        answers: [
          { value: "status", label: "One row per status", correct: true, reason: "Correct. group_by(status) creates status groups." },
          { value: "category", label: "One row per category", correct: false, reason: "category is not the grouping column here." },
          { value: "detail", label: "Every original row unchanged", correct: false, reason: "summarise collapses rows into groups." }
        ]
      },
      {
        type: "fill_in",
        questionType: "fill_group_column",
        snippet: "tasks |> group_by(______) |> summarise(total = n())",
        question: "Complete the grouped summary so it counts rows by status.",
        answerKind: "column",
        placeholder: "Write the column name.",
        validationPattern: /\bstatus\b/i,
        expectedAnswerLabel: "status",
        feedback: "status creates one count per status.",
        wrongFeedback: "Expected: status."
      }
    ];
  }

  if (family === "app-oop") {
    return [
      {
        type: "multiple_choice",
        questionType: "identify_null_risk",
        snippet: "task.title",
        question: "What must be true before this access is safe?",
        feedback: "The object must exist before a field is read from it.",
        wrongFeedback: "Focus on whether the object itself can be missing.",
        answers: [
          { value: "present", label: "task is not null/missing", correct: true, reason: "Correct. The field read is safe only after the object exists." },
          { value: "printed", label: "The value is printed", correct: false, reason: "Printing does not make a missing object safe." },
          { value: "renamed", label: "The field is renamed", correct: false, reason: "Naming is not the safety check." }
        ]
      },
      {
        type: "compare",
        questionType: "guard_vs_assume",
        snippet: "A) check task before reading title\nB) read task.title immediately",
        question: "Which pattern is safer for external data?",
        placeholder: "A is safer because...",
        requiredTerms: ["check"],
        expectedAnswerLabel: "Check before reading",
        feedback: "A guard prevents a missing object from crashing the read.",
        wrongFeedback: "Expected: validate or check before reading."
      }
    ];
  }

  if (family === "systems") {
    return [
      {
        type: "multiple_choice",
        questionType: "choose_checked_path",
        snippet: "lookup score -> use score",
        question: "What step is missing before using the score?",
        feedback: "Systems code should check success before using the value.",
        wrongFeedback: "Think about what happens if the lookup fails.",
        answers: [
          { value: "check", label: "Check whether lookup succeeded", correct: true, reason: "Correct. The value should only be used after success is known." },
          { value: "rename", label: "Rename score", correct: false, reason: "Renaming does not handle failure." },
          { value: "print", label: "Print immediately", correct: false, reason: "Printing still uses the unchecked value." }
        ]
      },
      {
        type: "open_reasoning",
        questionType: "edge_case_reasoning",
        snippet: "score = lookup('review')\nprint(score)",
        question: "What edge case needs handling?",
        placeholder: "If review is missing...",
        requiredTerms: ["missing"],
        expectedAnswerLabel: "missing lookup result",
        feedback: "The missing result needs a branch before the value is used.",
        wrongFeedback: "Expected: mention the missing/failure path."
      }
    ];
  }

  return [
    {
      type: "multiple_choice",
      questionType: "match_code_to_behavior",
      snippet: "input -> transform -> output",
      question: "Which step changes the input into the result?",
      feedback: "The transform step is where the result is created.",
      wrongFeedback: "Look for the middle step that changes the data.",
      answers: [
        { value: "input", label: "input", correct: false, reason: "Input is the starting data." },
        { value: "transform", label: "transform", correct: true, reason: "Correct. Transform changes data into the result." },
        { value: "output", label: "output", correct: false, reason: "Output displays the result after it exists." }
      ]
    }
  ];
}

function getSqlMoreExamplePredictions(level = "beginner") {
  const advanced = level === "advanced";
  const intermediate = level === "intermediate";
  return [
    {
      type: "multiple_choice",
      questionType: "choose_group_column",
      snippet: "SELECT status, COUNT(*) AS status_count\nFROM practice_tasks\nGROUP BY status;",
      question: "What changes the result shape here?",
      feedback: "Grouping by status returns one row per status.",
      wrongFeedback: "The GROUP BY column controls the output rows.",
      answers: [
        { value: "status", label: "It groups rows by status", correct: true, reason: "Correct. status is the grouping column." },
        { value: "category", label: "It groups rows by category", correct: false, reason: "category is not used in this query." },
        { value: "all", label: "It keeps every original row", correct: false, reason: "GROUP BY collapses rows into summaries." }
      ]
    },
    {
      type: "fill_in",
      questionType: "fill_group_column",
      snippet: "SELECT priority, COUNT(*)\nFROM practice_tasks\nGROUP BY _______;",
      question: "Complete the grouping clause so it matches the selected label column.",
      answerKind: "column",
      placeholder: "Write the column name.",
      validationPattern: /\bpriority\b/i,
      expectedAnswerLabel: "priority",
      feedback: "priority matches the selected non-aggregated column.",
      wrongFeedback: "Expected: priority, because SELECT uses priority."
    },
    {
      type: intermediate || advanced ? "compare" : "multiple_choice",
      questionType: "compare_two_queries",
      snippet: "A) SELECT category, COUNT(*) FROM practice_tasks GROUP BY category;\nB) SELECT status, COUNT(*) FROM practice_tasks GROUP BY status;",
      question: intermediate || advanced ? "How do these two query results differ?" : "Which query returns one row per status?",
      placeholder: "B returns...",
      requiredTerms: ["status"],
      expectedAnswerLabel: "B returns one row per status",
      feedback: "Changing the GROUP BY column changes the summary rows.",
      wrongFeedback: "Look for the query where status appears in both SELECT and GROUP BY.",
      answers: [
        { value: "a", label: "A", correct: false, reason: "A groups by category." },
        { value: "b", label: "B", correct: true, reason: "Correct. B groups by status." },
        { value: "same", label: "They return the same shape", correct: false, reason: "Different grouping columns create different summary rows." }
      ]
    },
    {
      type: "multiple_choice",
      questionType: "identify_mismatch",
      snippet: "SELECT category, COUNT(*)\nFROM practice_tasks\nGROUP BY status;",
      question: "What is the issue?",
      feedback: "SELECT category and GROUP BY status do not match, so the query is invalid in standard SQL.",
      wrongFeedback: "Check whether every non-aggregated SELECT column appears in GROUP BY.",
      answers: [
        { value: "mismatch", label: "SELECT and GROUP BY use different columns", correct: true, reason: "Correct. category is selected, but status is grouped." },
        { value: "count", label: "COUNT(*) cannot be used", correct: false, reason: "COUNT(*) is valid with grouping." },
        { value: "from", label: "FROM must come after GROUP BY", correct: false, reason: "FROM is in the correct place." }
      ]
    },
    {
      type: advanced ? "open_reasoning" : "multiple_choice",
      questionType: "when_group_by_is_useful",
      snippet: "Goal: summarize a table into counts per category.",
      question: advanced ? "When would GROUP BY be the wrong tool for this goal?" : "When should you use GROUP BY?",
      placeholder: "GROUP BY is wrong when...",
      requiredTerms: advanced ? ["detail"] : ["summarize"],
      expectedAnswerLabel: advanced ? "When detail rows must remain visible" : "When summarizing rows by a category",
      feedback: advanced ? "GROUP BY is for collapsed summaries; window functions keep detail rows." : "GROUP BY is useful when one result row should represent each group.",
      wrongFeedback: advanced ? "Expected: mention preserving detail rows." : "Expected: use GROUP BY when summarizing rows.",
      answers: [
        { value: "summarize", label: "Summarize rows by a category", correct: true, reason: "Correct. GROUP BY creates one row per group." },
        { value: "detail", label: "Keep every detail row visible", correct: false, reason: "A window function fits that goal better." },
        { value: "sort", label: "Sort rows alphabetically", correct: false, reason: "ORDER BY sorts rows; GROUP BY summarizes them." }
      ]
    }
  ];
}

function getPythonLessonVariants(level) {
  const advanced = level === "advanced";
  const intermediate = level === "intermediate";
  return [
    {
      examples: [
        { code: "scores = {'task_a': 3, 'task_b': 5}\nprint(scores['task_a'])", note: "Direct lookup reads one known key." },
        { code: "scores = {'task_a': 3, 'task_b': 5}\nprint(scores.get('task_c', 0))", note: "get() gives a fallback when a key may be missing." }
      ],
      insight: "The key you choose controls which value you get back.",
      prediction: {
        type: intermediate || advanced ? "compare" : "multiple_choice",
        questionType: intermediate || advanced ? "explain_safe_lookup" : "predict_missing_get",
        snippet: "scores = {'task_a': 3, 'task_b': 5}\nprint(scores.get('task_c', 0))",
        question: intermediate || advanced ? "Why use .get() here instead of scores['task_c']?" : "What prints?",
        placeholder: ".get() avoids...",
        requiredTerms: ["missing"],
        feedback: ".get() handles a missing key without crashing.",
        wrongFeedback: "Expected: mention that task_c is missing and .get() uses the fallback.",
        answers: [
          { value: "zero", label: "0", correct: true, reason: "Correct. task_c is missing, so the fallback is printed." },
          { value: "five", label: "5", correct: false, reason: "5 belongs to task_b, not task_c." },
          { value: "none", label: "None", correct: false, reason: ".get() would return None only if no fallback were provided." },
          { value: "error", label: "KeyError", correct: false, reason: ".get() prevents the missing-key error." }
        ]
      },
      spot: {
        type: advanced ? "open_reasoning" : "multiple_choice",
        snippet: "scores = {'task_a': 3, 'task_b': 5}\nprint(scores['task_c'])",
        question: advanced ? "What contract is violated?" : "What is the mistake?",
        placeholder: "The lookup assumes...",
        requiredTerms: ["missing", "key"],
        expectedAnswerLabel: "The key is missing",
        correctReason: "The code assumes task_c exists, but the dictionary does not contain that key.",
        takeaway: "Direct dictionary lookup only works when the key exists.",
        answers: [
          { value: "missing-key", label: "The key does not exist", correct: true, reason: "Correct. Direct lookup fails when the key is missing." },
          { value: "print-invalid", label: "print cannot show values", correct: false, reason: "print is fine. The lookup fails first." },
          { value: "dict-invalid", label: "Dictionaries cannot store numbers", correct: false, reason: "Dictionaries can store numbers. The missing key is the issue." }
        ]
      },
      fix: {
        prompt: "Fix the lookup so a missing key does not crash the code.",
        broken: "scores = {'task_a': 3, 'task_b': 5}\nprint(scores['task_c'])",
        correct: "scores = {'task_a': 3, 'task_b': 5}\nprint(scores.get('task_c', 0))",
        expectedFix: "Use .get('task_c', 0) or add the missing key.",
        validationPattern: /\.get\s*\(\s*['"]task_c['"]\s*,/i,
        successMessage: "Correct: the missing key now has a fallback.",
        missingMessage: "Not yet. Use .get('task_c', fallback) or add task_c before reading it.",
        explanation: "You changed a risky direct lookup into a safe lookup with a fallback.",
        changed: "What changed: scores['task_c'] became a lookup that can handle a missing key."
      },
      apply: {
        prompt: "Now safely read a different optional score.",
        requirements: ["uses a dictionary", "reads a key that might be missing", "provides a fallback"],
        answer: "scores = {'practice': 4, 'review': 2}\nprint(scores.get('stretch', 0))",
        explanation: "Same pattern: choose the key, then decide what should happen if it is missing."
      }
    },
    {
      examples: [
        { code: "scores = {'a': 2, 'b': 4, 'c': 6}\naverage = sum(scores.values()) / len(scores)\nprint(average)", note: "values() lets you calculate across every score." },
        { code: "valid_scores = [value for value in scores.values() if isinstance(value, (int, float))]", note: "Filtering first keeps non-numeric values out of the calculation." }
      ],
      insight: "Aggregation works best when you calculate from the intended numeric values only.",
      prediction: {
        type: advanced ? "open_reasoning" : "fill_in",
        questionType: advanced ? "numeric_edge_case" : "values_collection_blank",
        snippet: "scores = {'a': 2, 'b': 4}\naverage = sum(______) / len(scores)",
        question: advanced ? "What hidden risk remains in this average?" : "Complete the calculation so it uses the stored numbers.",
        answerKind: advanced ? "short_answer" : "expression",
        placeholder: advanced ? "If a value is not numeric..." : "Write the missing expression.",
        requiredTerms: advanced ? ["numeric"] : ["values"],
        validationPattern: advanced ? null : /scores\.values\s*\(\s*\)/i,
        feedback: advanced ? "Non-numeric values should be filtered or rejected before averaging." : "scores.values() gives the numbers to average.",
        wrongFeedback: advanced ? "Expected: mention non-numeric values or validation." : "Expected: scores.values()."
      },
      spot: {
        type: intermediate || advanced ? "explain_failure" : "multiple_choice",
        snippet: "scores = {'a': 2, 'b': 4}\naverage = sum(scores) / len(scores)",
        question: intermediate || advanced ? "Why does this calculation fail?" : "What is the issue?",
        placeholder: "sum(scores) uses...",
        requiredTerms: ["keys"],
        expectedAnswerLabel: "It sums keys instead of values",
        correctReason: "sum(scores) iterates over the dictionary keys, not the numeric values.",
        takeaway: "Use dictionary.values() when the calculation should use values.",
        answers: [
          { value: "keys", label: "It uses keys instead of values", correct: true, reason: "Correct. Iterating a dictionary gives keys by default." },
          { value: "len", label: "len() cannot read dictionaries", correct: false, reason: "len(scores) is valid. The issue is sum(scores)." },
          { value: "division", label: "Division is invalid", correct: false, reason: "Division is fine once the numerator is numeric." }
        ]
      },
      fix: {
        prompt: "Fix the average so it uses the dictionary values.",
        broken: "scores = {'a': 2, 'b': 4}\naverage = sum(scores) / len(scores)\nprint(average)",
        correct: "scores = {'a': 2, 'b': 4}\naverage = sum(scores.values()) / len(scores)\nprint(average)",
        expectedFix: "Use scores.values() inside sum().",
        validationPattern: /sum\s*\(\s*scores\.values\s*\(\s*\)\s*\)/i,
        successMessage: "Correct: the average uses the dictionary values.",
        missingMessage: "Not yet. Put scores.values() inside sum().",
        explanation: "You changed the calculation from dictionary keys to dictionary values.",
        changed: "What changed: sum(scores) became sum(scores.values())."
      },
      apply: {
        prompt: "Now calculate a total or average from a small dictionary.",
        requirements: ["creates a dictionary", "uses .values()", "prints one calculated result"],
        answer: "scores = {'practice': 3, 'review': 5}\nprint(sum(scores.values()))",
        explanation: "Same structure: store labeled numbers, use values(), then calculate."
      }
    }
  ];
}

function getJavaScriptLessonVariants(language, level) {
  const advanced = level === "advanced";
  return [
    {
      examples: [
        { code: "const task = { name: 'review', points: 4 };\nconsole.log(task.points);", note: "Dot access reads one known property." },
        { code: "const task = { name: 'review' };\nconsole.log(task.points ?? 0);", note: "?? gives a fallback when a property is missing." }
      ],
      insight: "The property name controls which value is read.",
      prediction: {
        type: advanced ? "open_reasoning" : "multiple_choice",
        questionType: advanced ? "explain_nullish_fallback" : "predict_missing_property_fallback",
        snippet: "const task = { name: 'review' };\nconsole.log(task.points ?? 0);",
        question: advanced ? "Why is ?? safer than assuming points exists?" : "What logs?",
        placeholder: "It handles...",
        requiredTerms: ["missing"],
        feedback: "The fallback is used because points is missing.",
        wrongFeedback: "Expected: 0, because points is missing.",
        answers: [
          { value: "zero", label: "0", correct: true, reason: "Correct. points is missing, so ?? uses 0." },
          { value: "review", label: "review", correct: false, reason: "review is task.name, not task.points." },
          { value: "undefined", label: "undefined", correct: false, reason: "The fallback replaces undefined with 0." },
          { value: "error", label: "Error", correct: false, reason: "?? prevents this missing-property case from becoming an error." }
        ]
      },
      spot: {
        type: advanced ? "open_reasoning" : "multiple_choice",
        snippet: "const task = { name: 'review' };\nconsole.log(task.points.toFixed(1));",
        question: advanced ? "What assumption makes this unsafe?" : "What is the mistake?",
        placeholder: "The code assumes...",
        requiredTerms: ["missing"],
        expectedAnswerLabel: "points is missing",
        correctReason: "points is undefined, so calling toFixed on it fails.",
        takeaway: "Check optional properties before calling methods on them.",
        answers: [
          { value: "missing-property", label: "points is missing", correct: true, reason: "Correct. undefined does not have toFixed()." },
          { value: "console", label: "console.log is invalid", correct: false, reason: "console.log is fine. The value passed to it fails." },
          { value: "object", label: "Objects cannot store numbers", correct: false, reason: "Objects can store numbers. This object just does not have points." }
        ]
      },
      fix: {
        prompt: "Fix the property access so missing points does not crash.",
        broken: "const task = { name: 'review' };\nconsole.log(task.points.toFixed(1));",
        correct: "const task = { name: 'review' };\nconsole.log((task.points ?? 0).toFixed(1));",
        expectedFix: "Use a fallback before calling toFixed().",
        validationPattern: /\?\?\s*0|points\s*\|\|\s*0/i,
        successMessage: "Correct: the missing property now has a fallback.",
        missingMessage: "Not yet. Add a fallback for task.points before using it.",
        explanation: "You protected the method call by ensuring the value is numeric first.",
        changed: "What changed: task.points now has a fallback."
      },
      apply: {
        prompt: "Now safely read a different optional property.",
        requirements: ["uses an object", "reads a property that might be missing", "uses a fallback"],
        answer: "const task = { name: 'review' };\nconsole.log(task.status ?? 'todo');",
        explanation: "Same pattern: read the property, then decide the fallback."
      }
    },
    {
      examples: [
        { code: "const tasks = [{ done: true }, { done: false }];\nconst completed = tasks.filter((task) => task.done);", note: "filter() keeps only items that match a condition." },
        { code: "const names = tasks.map((task) => task.name);", note: "map() transforms every item into a new value." }
      ],
      insight: "Choose the array method based on whether you are keeping, transforming, or summarizing items.",
      prediction: {
        type: "compare",
        questionType: "filter_vs_map_base",
        snippet: "A) tasks.filter((task) => task.done)\nB) tasks.map((task) => task.done)",
        question: "Which keeps only completed tasks?",
        placeholder: "filter keeps...",
        requiredTerms: ["filter"],
        feedback: "filter keeps matching items; map transforms each item.",
        wrongFeedback: "Expected: filter - map does not remove items."
      },
      spot: {
        type: "compare",
        snippet: "const completed = tasks.map((task) => task.done);",
        question: "Why is this wrong if you need completed task objects?",
        placeholder: "map returns...",
        requiredTerms: ["boolean"],
        expectedAnswerLabel: "map returns booleans instead of task objects",
        correctReason: "map creates a new value for each item, so this returns true/false values.",
        takeaway: "Use filter() to keep items; use map() to transform items."
      },
      fix: {
        prompt: "Fix this so completed contains task objects.",
        broken: "const completed = tasks.map((task) => task.done);",
        correct: "const completed = tasks.filter((task) => task.done);",
        expectedFix: "Use filter() instead of map().",
        validationPattern: /\.filter\s*\(/i,
        successMessage: "Correct: filter keeps matching task objects.",
        missingMessage: "Not yet. Use .filter() when you want to keep matching items.",
        explanation: "You switched from transforming every item to keeping matching items.",
        changed: "What changed: map became filter."
      },
      apply: {
        prompt: "Now keep only high-priority items.",
        requirements: ["uses an array", "uses filter()", "checks one property"],
        answer: "const highPriority = tasks.filter((task) => task.priority === 'high');",
        explanation: "Same structure: filter the array with one condition."
      }
    }
  ];
}

function getTypeScriptLessonVariants(level) {
  const variants = getJavaScriptLessonVariants("TypeScript", level);
  variants[0].examples = [
    { code: "type Task = { name: string; points?: number };\nconst task: Task = { name: 'review' };\nconsole.log(task.points ?? 0);", note: "The ? marks points as optional, so the fallback matters." },
    { code: "type Task = { name: string; points: number };\nconst task: Task = { name: 'review', points: 4 };", note: "Required properties must be present." }
  ];
  variants[0].insight = "Types make missing data visible before runtime.";
  return variants;
}

function getReactLessonVariants(level) {
  return [
    {
      examples: [
        { code: "function Status({ label }) {\n  return <p>{label}</p>;\n}", note: "Props pass data into a component." },
        { code: "const [status, setStatus] = useState('todo');\nsetStatus('done');", note: "State stores data that can change over time." }
      ],
      insight: "Use props for outside data; use state for data the component changes.",
      prediction: {
        type: "compare",
        questionType: "props_vs_state_base",
        snippet: "A) props\nB) state",
        question: "Which one should change when the user clicks a button?",
        placeholder: "State changes...",
        requiredTerms: ["state"],
        feedback: "State changes in response to interaction.",
        wrongFeedback: "Expected: state - props are received from the parent."
      },
      spot: {
        type: "multiple_choice",
        snippet: "function Counter({ count }) {\n  count += 1;\n  return <p>{count}</p>;\n}",
        question: "What is the mistake?",
        takeaway: "Do not mutate props; store changing values in state.",
        answers: [
          { value: "mutates-prop", label: "It mutates a prop", correct: true, reason: "Correct. Props should be treated as read-only." },
          { value: "jsx-invalid", label: "JSX cannot show numbers", correct: false, reason: "JSX can show numbers. The issue is changing a prop." },
          { value: "missing-css", label: "It needs CSS", correct: false, reason: "CSS is unrelated to the state/props issue." }
        ]
      },
      fix: {
        prompt: "Fix the component so count can change as state.",
        broken: "function Counter({ count }) {\n  count += 1;\n  return <p>{count}</p>;\n}",
        correct: "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
        expectedFix: "Use useState and setCount instead of mutating a prop.",
        validationPattern: /useState|set[A-Z]/,
        successMessage: "Correct: changing data is now state-driven.",
        missingMessage: "Not yet. Use state for a value the component changes.",
        explanation: "You moved changing data into state instead of mutating props.",
        changed: "What changed: read-only prop mutation became state update."
      },
      apply: {
        prompt: "Now sketch a tiny component with one piece of state.",
        requirements: ["uses useState", "updates state from an event", "renders the value"],
        answer: "function Toggle() {\n  const [open, setOpen] = useState(false);\n  return <button onClick={() => setOpen(!open)}>{open ? 'Open' : 'Closed'}</button>;\n}",
        explanation: "Same pattern: state value, setter, event, render."
      }
    }
  ];
}

function getHtmlCssLessonVariants(level) {
  return [
    {
      examples: [
        { code: "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">", note: "The label is connected to the input by matching for and id." },
        { code: ".card {\n  display: flex;\n  gap: 1rem;\n}", note: "Flex layout controls how children sit in a row or column." }
      ],
      insight: "Small attribute and layout choices control how usable the page feels.",
      prediction: {
        type: "multiple_choice",
        questionType: "label_input_mismatch_base",
        snippet: "<label for=\"email\">Email</label>\n<input id=\"user-email\">",
        question: "What is the issue?",
        feedback: "The label's for value must match the input id.",
        wrongFeedback: "Expected: the label is not connected to the input.",
        answers: [
          { value: "mismatch", label: "for and id do not match", correct: true, reason: "Correct. email and user-email are different." },
          { value: "input-invalid", label: "input is invalid", correct: false, reason: "The input tag is fine. The connection is wrong." },
          { value: "label-invalid", label: "labels cannot use for", correct: false, reason: "for is exactly how labels connect to inputs." }
        ]
      },
      spot: {
        type: "multiple_choice",
        snippet: "<label for=\"email\">Email</label>\n<input id=\"user-email\">",
        question: "What breaks accessibility here?",
        takeaway: "A label needs a matching input id.",
        answers: [
          { value: "mismatch", label: "The label is not connected", correct: true, reason: "Correct. for=\"email\" needs id=\"email\"." },
          { value: "missing-class", label: "The input needs a class", correct: false, reason: "Classes are for styling, not label connection." },
          { value: "wrong-type", label: "The input cannot be text", correct: false, reason: "Input type is not the issue here." }
        ]
      },
      fix: {
        prompt: "Fix the label/input connection.",
        broken: "<label for=\"email\">Email</label>\n<input id=\"user-email\">",
        correct: "<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\">",
        expectedFix: "Make for and id match.",
        validationPattern: /for=["']email["'][\s\S]*id=["']email["']/i,
        successMessage: "Correct: the label now targets the input.",
        missingMessage: "Not yet. Make the label for value match the input id.",
        explanation: "You connected the label to the input.",
        changed: "What changed: for and id now match."
      },
      apply: {
        prompt: "Now create one accessible field.",
        requirements: ["uses label", "uses input", "matches for and id"],
        answer: "<label for=\"search\">Search</label>\n<input id=\"search\" type=\"search\">",
        explanation: "Same pattern: label text plus a matching input id."
      }
    }
  ];
}

function getRLessonVariants(level) {
  return [
    {
      examples: [
        { code: "tasks |> group_by(category) |> summarise(total = n())", note: "group_by() chooses the grouping column; summarise() creates the result." },
        { code: "tasks |> filter(status == 'done') |> group_by(category) |> summarise(total = n())", note: "filter() narrows rows before summarising." }
      ],
      insight: "The grouping column controls the shape of the summary table.",
      prediction: {
        type: "fill_in",
        questionType: "r_group_by_blank_base",
        snippet: "tasks |> group_by(______) |> summarise(total = n())",
        question: "Complete the grouped summary so it counts rows by category.",
        answerKind: "column",
        placeholder: "Write the column name.",
        validationPattern: /\bcategory\b/i,
        feedback: "category creates one summary row per category.",
        wrongFeedback: "Expected: category."
      },
      spot: {
        type: "multiple_choice",
        snippet: "tasks |> summarise(total = n(), category = category)",
        question: "What is the issue?",
        takeaway: "Group before summarising when you need one result per group.",
        answers: [
          { value: "missing-group", label: "group_by(category) is missing", correct: true, reason: "Correct. summarise needs grouping to return one row per category." },
          { value: "n-invalid", label: "n() is invalid", correct: false, reason: "n() is valid inside summarise." },
          { value: "pipe-invalid", label: "The pipe is invalid", correct: false, reason: "The pipe is fine. The grouping step is missing." }
        ]
      },
      fix: {
        prompt: "Fix the summary so it counts rows per category.",
        broken: "tasks |> summarise(total = n(), category = category)",
        correct: "tasks |> group_by(category) |> summarise(total = n())",
        expectedFix: "Add group_by(category) before summarise().",
        validationPattern: /group_by\s*\(\s*category\s*\)[\s\S]*summari[sz]e/i,
        successMessage: "Correct: grouping happens before summarise.",
        missingMessage: "Not yet. Add group_by(category) before summarise().",
        explanation: "You grouped rows first, then counted each group.",
        changed: "What changed: group_by(category) was added before summarise()."
      },
      apply: {
        prompt: "Now count rows per status.",
        requirements: ["uses group_by(status)", "uses summarise", "counts rows"],
        answer: "tasks |> group_by(status) |> summarise(total = n())",
        explanation: "Same pattern, different grouping column."
      }
    }
  ];
}

function getOopLessonVariants(language, level) {
  return [
    {
      examples: [
        { code: getOopExample(language, "valid"), note: "The object stores related values with clear names." },
        { code: getOopExample(language, "missing"), note: "Missing or null values need a deliberate fallback or validation step." }
      ],
      insight: "Model fields should match how the rest of the code reads the object.",
      prediction: {
        type: "compare",
        questionType: "oop_boundary_safety_base",
        snippet: "A) validate before reading a nullable field\nB) assume every field exists",
        question: "Which is safer at a boundary?",
        placeholder: "Validate...",
        requiredTerms: ["validate"],
        feedback: "Validation protects the code before it relies on the field.",
        wrongFeedback: "Expected: validate before reading."
      },
      spot: {
        type: "multiple_choice",
        snippet: getOopExample(language, "unsafe"),
        question: "What is the mistake?",
        takeaway: "Validate nullable or external values before using them.",
        answers: [
          { value: "null", label: "It assumes a value is present", correct: true, reason: "Correct. The code uses a value that may be null or missing." },
          { value: "class", label: "Classes cannot store data", correct: false, reason: "Classes are designed to store data and behavior." },
          { value: "print", label: "Output is always invalid", correct: false, reason: "Output is fine once the value is safe." }
        ]
      },
      fix: {
        prompt: "Fix the code by checking the value before using it.",
        broken: getOopExample(language, "unsafe"),
        correct: getOopExample(language, "fixed"),
        expectedFix: "Add a null or missing-value check.",
        validationPattern: /if|guard|when|let|HasValue|!=\s*null|is not null/i,
        successMessage: "Correct: the value is checked before use.",
        missingMessage: "Not yet. Add a check before reading the optional value.",
        explanation: "You made the model access safer by validating before use.",
        changed: "What changed: unsafe access now has a guard."
      },
      apply: {
        prompt: "Now sketch one safe read from an object or model.",
        requirements: ["has a model/object", "checks a possibly missing value", "produces one output"],
        answer: getOopExample(language, "fixed"),
        explanation: "Same pattern: model, guard, then use the value."
      }
    }
  ];
}

function getSystemsLessonVariants(language, level) {
  return [
    {
      examples: [
        { code: getSystemsExample(language, "valid"), note: "The code checks the result before using the value." },
        { code: getSystemsExample(language, "unsafe"), note: "Using a value before checking success creates fragile code." }
      ],
      insight: "Systems code usually makes success/failure explicit before using a result.",
      prediction: {
        type: "open_reasoning",
        questionType: "systems_failure_path_base",
        snippet: getSystemsExample(language, "unsafe"),
        question: "What failure path is not handled?",
        placeholder: "If the lookup/parse fails...",
        requiredTerms: ["fail"],
        feedback: "The code needs to handle the failure case before using the value.",
        wrongFeedback: "Expected: mention the missing failure/error path."
      },
      spot: {
        type: "open_reasoning",
        snippet: getSystemsExample(language, "unsafe"),
        question: "Why is this unsafe?",
        placeholder: "It assumes...",
        requiredTerms: ["assume"],
        expectedAnswerLabel: "It assumes success",
        correctReason: "The code uses the result as if the operation always succeeds.",
        takeaway: "Check success before using parsed or borrowed data."
      },
      fix: {
        prompt: "Fix the code by handling the failure case.",
        broken: getSystemsExample(language, "unsafe"),
        correct: getSystemsExample(language, "valid"),
        expectedFix: "Check success/error before using the value.",
        validationPattern: /if|match|Result|Ok|err|return|Option/i,
        successMessage: "Correct: the failure path is handled.",
        missingMessage: "Not yet. Add a success/error check before using the value.",
        explanation: "You made the code safer by handling the failure path first.",
        changed: "What changed: the value is only used after a check."
      },
      apply: {
        prompt: "Now sketch a tiny checked read or parse.",
        requirements: ["attempts one operation", "checks success/failure", "uses the value only after the check"],
        answer: getSystemsExample(language, "valid"),
        explanation: "Same pattern: try, check, then use."
      }
    }
  ];
}

function getGenericLanguageLessonVariants(language, level) {
  return [
    {
      examples: [
        { code: "create value\ncheck value\nshow result", note: "A small program works best when each step has one job." },
        { code: "input -> transform -> output", note: "Most tasks become easier when you name the data flow." }
      ],
      insight: "Clear data flow matters more than memorizing syntax.",
      prediction: {
        type: "fill_in",
        questionType: "generic_transform_blank_base",
        snippet: "input -> ______ -> output",
        question: "Complete the data flow with the step that changes input into a result.",
        answerKind: "expression",
        placeholder: "Write the missing step.",
        validationPattern: /transform|calculate|process/i,
        feedback: "The transform step turns input into the required output.",
        wrongFeedback: "Expected: transform, calculate, or process."
      },
      spot: {
        type: "multiple_choice",
        snippet: "show result before creating it",
        question: "What is the issue?",
        takeaway: "Create or calculate the value before displaying it.",
        answers: [
          { value: "order", label: "The steps are out of order", correct: true, reason: "Correct. The result must exist before it can be shown." },
          { value: "name", label: "The language name is missing", correct: false, reason: "The problem is the order of the steps." },
          { value: "too-short", label: "The program is too short", correct: false, reason: "Small is fine. The sequence is wrong." }
        ]
      },
      fix: {
        prompt: "Fix the order of the steps.",
        broken: "show result\ncreate result",
        correct: "create result\nshow result",
        expectedFix: "Create the result before showing it.",
        validationPattern: /create[\s\S]*show|calculate[\s\S]*show|process[\s\S]*show/i,
        successMessage: "Correct: the result is created before it is shown.",
        missingMessage: "Not yet. Put the create/calculate step before output.",
        explanation: "You put the data flow in the right order.",
        changed: "What changed: output now comes after the value exists."
      },
      apply: {
        prompt: `Now write a tiny ${language} plan with input, transform, and output.`,
        requirements: ["names an input", "transforms or checks it", "shows one output"],
        answer: "input: task scores\ntransform: calculate average\noutput: show average",
        explanation: "Same pattern: name the data flow before adding syntax."
      }
    }
  ];
}

function getOopExample(language, mode) {
  if (language === "Swift") {
    if (mode === "unsafe") return "let task: Task? = nil\nprint(task!.title)";
    if (mode === "fixed") return "if let task = task {\n  print(task.title)\n}";
    if (mode === "missing") return "let task: Task? = nil";
    return "struct Task { let title: String }\nlet task = Task(title: \"Review\")";
  }
  if (language === "Kotlin") {
    if (mode === "unsafe") return "val task: Task? = null\nprintln(task!!.title)";
    if (mode === "fixed") return "val task: Task? = null\nif (task != null) println(task.title)";
    if (mode === "missing") return "val task: Task? = null";
    return "data class Task(val title: String)\nval task = Task(\"Review\")";
  }
  if (language === "C#") {
    if (mode === "unsafe") return "Task? task = null;\nConsole.WriteLine(task.Title);";
    if (mode === "fixed") return "if (task != null) {\n  Console.WriteLine(task.Title);\n}";
    if (mode === "missing") return "Task? task = null;";
    return "var task = new Task { Title = \"Review\" };";
  }
  if (mode === "unsafe") return "Task task = null;\nSystem.out.println(task.title);";
  if (mode === "fixed") return "if (task != null) {\n  System.out.println(task.title);\n}";
  if (mode === "missing") return "Task task = null;";
  return "Task task = new Task(\"Review\");";
}

function getSystemsExample(language, mode) {
  if (language === "Rust") {
    if (mode === "unsafe") return "let score = scores.get(\"review\").unwrap();\nprintln!(\"{}\", score);";
    return "if let Some(score) = scores.get(\"review\") {\n    println!(\"{}\", score);\n}";
  }
  if (language === "Go") {
    if (mode === "unsafe") return "score := scores[\"review\"]\nfmt.Println(score)";
    return "score, ok := scores[\"review\"]\nif ok {\n    fmt.Println(score)\n}";
  }
  if (mode === "unsafe") return "int score = scores[\"review\"];\nstd::cout << score;";
  return "if (scores.contains(\"review\")) {\n  std::cout << scores[\"review\"];\n}";
}

function getSqlConceptExamples(context, focus, level) {
  const variant = getSqlGroupByVariant(level);
  const table = getSqlExampleTableName(context);
  const examples = variant.examples.map((example) => ({
    code: example.code.replaceAll("practice_tasks", table).replaceAll("project_items", table),
    note: example.note
  }));
  return examples;
}

function createSqlGroupByPrediction() {
  const level = currentPlanState?.level || "beginner";
  const spec = getSqlGroupByVariant(level);
  if (shouldRenderCompareAsChoice(spec.prediction, level)) {
    return createMultipleChoiceStep2Prediction({
      ...spec,
      prediction: createCompareChoicePrediction(spec.prediction)
    });
  }
  if (spec.prediction.type && spec.prediction.type !== "multiple_choice") {
    return createSqlGroupByWrittenPrediction(spec);
  }

  const wrapper = document.createElement("div");
  const prompt = document.createElement("p");
  const snippet = document.createElement("pre");
  const choices = document.createElement("div");
  const result = document.createElement("p");
  const selected = activeLearningPath?.moreExamplesPrediction || "";
  const answered = Boolean(activeLearningPath?.moreExamplesPredictionAnswered);
  const feedback = spec.prediction.feedback;
  const answers = getShuffledAnswers(spec.prediction.answers || [
    { value: "valid", label: "Valid query", correct: spec.prediction.correctValue === "valid", reason: "This query satisfies the grouping rule." },
    { value: "error", label: "Error", correct: spec.prediction.correctValue === "error", reason: spec.prediction.feedback || "The query breaks the grouping rule." },
    { value: "wrong-grouping", label: "Wrong grouping", correct: spec.prediction.correctValue === "wrong-grouping", reason: "The grouping column changes the output shape." }
  ], "more-examples-sql", getStep2QuestionType(spec.prediction));

  wrapper.className = "concept-prediction";
  prompt.textContent = spec.prediction.question || "What happens here?";
  snippet.className = "task-tool-code prediction-snippet";
  snippet.textContent = spec.prediction.snippet;
  choices.className = "prediction-options";
  result.className = "prediction-result";
  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = getPredictionButtonClass({
      answered,
      selected: selected === answer.value,
      correct: answer.correct,
      revealCorrect: shouldRevealMicroAnswer("more-examples")
    });
    button.textContent = answer.label;
    button.disabled = answered;
    button.addEventListener("click", () => {
      activeLearningPath = {
        ...(activeLearningPath || {}),
        ...getMicroAttemptUpdate("more-examples", answer.correct),
        moreExamplesPrediction: answer.value,
        moreExamplesPredictionAnswered: true,
        moreExamplesPredictionCorrect: answer.correct
      };
      rememberStep2QuestionType(getStep2QuestionType(spec.prediction));
      rememberCorrectAnswerPosition("more-examples-sql", getStep2QuestionType(spec.prediction), answers);
      moduleList.replaceChildren();
      moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
    });
    choices.append(button);
  });

  if (answered) {
    const correctAnswer = answers.find((answer) => answer.correct) || { label: spec.prediction.expectedAnswerLabel || "" };
    const selectedAnswer = answers.find((answer) => answer.value === selected) || { label: selected };
    result.textContent = selectedAnswer.correct
      ? `Correct - ${feedback || correctAnswer.reason || "that matches the pattern."}`
      : getProgressiveMicroFeedback("more-examples", spec.prediction, { correctAnswer, selectedAnswer });
  } else {
    result.textContent = "Answer this to unlock the next step.";
  }

  wrapper.append(prompt, snippet, choices, result);
  if (answered && !activeLearningPath?.moreExamplesPredictionCorrect) {
    wrapper.append(createTryAgainButton("more-examples"));
  }
  return wrapper;
}

function createSqlGroupByWrittenPrediction(spec) {
  const wrapper = document.createElement("div");
  const prompt = document.createElement("p");
  const snippet = document.createElement("pre");
  const textarea = document.createElement("textarea");
  const actions = document.createElement("div");
  const submit = document.createElement("button");
  const result = document.createElement("p");
  const answered = Boolean(activeLearningPath?.moreExamplesPredictionAnswered);
  const answer = activeLearningPath?.moreExamplesPrediction || "";

  wrapper.className = "concept-prediction";
  prompt.textContent = spec.prediction.question || "Answer this checkpoint.";
  snippet.className = "task-tool-code prediction-snippet";
  snippet.textContent = spec.prediction.snippet;
  textarea.className = "mini-fix-editor";
  textarea.rows = spec.prediction.type === "open_reasoning" || spec.prediction.type === "compare" ? 5 : 3;
  textarea.spellcheck = false;
  textarea.placeholder = getNeutralPredictionPlaceholder(spec.prediction);
  textarea.value = answer;
  textarea.disabled = answered;
  actions.className = "concept-actions";
  submit.type = "button";
  submit.className = "secondary-action primary-inline-action";
  submit.textContent = "Check answer";
  submit.disabled = answered;
  submit.addEventListener("click", () => {
    const value = textarea.value.trim();
    if (!value) {
      result.textContent = "Write a short answer first.";
      return;
    }
    const isCorrect = validateStep2WrittenAnswer(value, spec.prediction);
    activeLearningPath = {
      ...(activeLearningPath || {}),
      ...getMicroAttemptUpdate("more-examples", isCorrect),
      moreExamplesPrediction: value,
      moreExamplesPredictionAnswered: true,
      moreExamplesPredictionCorrect: isCorrect
    };
    rememberStep2QuestionType(getStep2QuestionType(spec.prediction));
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  result.className = "prediction-result";
  actions.append(submit);
  wrapper.append(prompt, snippet, textarea, actions);

  if (answered) {
    result.textContent = activeLearningPath?.moreExamplesPredictionCorrect
      ? `Correct — ${spec.prediction.feedback}`
      : getProgressiveMicroFeedback("more-examples", spec.prediction);
    wrapper.append(result);
    if (!activeLearningPath?.moreExamplesPredictionCorrect) {
      wrapper.append(createTryAgainButton("more-examples"));
    }
  } else {
    result.textContent = "Answer this to unlock the next step.";
    wrapper.append(result);
  }

  return wrapper;
}

function validateStep2WrittenAnswer(value, prediction) {
  if (!value) {
    return false;
  }
  if (prediction.validationPattern) {
    return prediction.validationPattern.test(value);
  }
  const lower = value.toLowerCase();
  return (prediction.requiredTerms || []).every((term) => lower.includes(term));
}

function getPredictionButtonClass({ answered, selected, correct, revealCorrect = false }) {
  const classes = ["secondary-action"];
  if (!answered) {
    return classes.join(" ");
  }
  if (selected) {
    classes.push("is-selected", correct ? "is-correct" : "is-incorrect");
  } else if (correct && revealCorrect) {
    classes.push("is-correct-answer");
  }
  return classes.join(" ");
}

function createTryAgainButton(scope) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-action mini-action concept-try-again";
  button.textContent = "Try again";
  button.addEventListener("click", () => {
    if (scope === "more-examples") {
      activeLearningPath = {
        ...(activeLearningPath || {}),
        moreExamplesPrediction: "",
        moreExamplesPredictionAnswered: false,
        moreExamplesPredictionCorrect: false
      };
    }
    if (scope === "spot") {
      activeLearningPath = {
        ...(activeLearningPath || {}),
        spotMistakeAnswer: "",
        spotMistakeAnswered: false,
        spotMistakeCorrect: false,
        spotMistakeContinueAnyway: false,
        spotMistakeInput: ""
      };
    }
    moduleList.replaceChildren();
    moduleList.append(createCurrentTaskCard(currentPlanData, currentPlanState));
  });
  return button;
}

function getPythonDictionaryExamples(context, focus, level) {
  const dictName = getCodeIdentifier(context.contextLabel);
  const itemA = context.exampleItem || "sample_item";
  const itemB = context.itemSingular.replace(/\s+/g, "_") || "second_item";
  const examples = [
    {
      code: `${dictName} = {
    "${itemA}": 4,
    "${itemB}": 2
}

print(${dictName}["${itemA}"])`,
      note: `This creates ${context.itemPlural} as keys and reads one ${context.valueSingular} by key.`
    }
  ];

  if (level !== "beginner" || focus.kind === "validation") {
    examples.push({
      code: `${dictName} = {"${itemA}": 4, "${itemB}": 2}

print(${dictName}.get("missing_item", 0))`,
      note: "This uses .get() so a missing key returns a fallback instead of stopping with a KeyError."
    });
  }

  if (focus.kind === "calculation" || level === "advanced") {
    examples.push({
      code: `${dictName} = {"${itemA}": 4, "${itemB}": 2}
average = sum(${dictName}.values()) / len(${dictName})

print(average)`,
      note: `This calculates from all ${context.valuePlural}, which is useful when one output should summarize the dictionary.`
    });
  }

  if (level === "advanced") {
    examples.push({
      code: `raw_${dictName} = {"${itemA}": 4, "${itemB}": 2}
summary = {
    "average": sum(raw_${dictName}.values()) / len(raw_${dictName})
}`,
      note: "This keeps raw values separate from derived summary values, which avoids accidentally averaging the summary later."
    });
  }

  return examples.slice(0, level === "beginner" ? 2 : 4);
}

function getJavaScriptObjectExamples(context, focus, level) {
  const objectName = getCodeIdentifier(context.contextLabel);
  const examples = [
    {
      code: `const ${objectName} = {
  ${context.exampleItem}: 4,
  sample_item: 2
};

console.log(${objectName}.${context.exampleItem});`,
      note: `This stores ${context.itemPlural} as properties and reads one ${context.valueSingular} by property name.`
    },
    {
      code: `const ${objectName} = {
  ${context.exampleItem}: 4,
  sample_item: 2
};

const value = ${objectName}.missing_item ?? 0;`,
      note: "This uses a fallback so missing data does not become undefined in the next calculation."
    }
  ];

  if (level === "advanced" || focus.kind === "calculation") {
    examples.push({
      code: `const values = Object.values(${objectName});
const average = values.reduce((total, value) => total + value, 0) / values.length;`,
      note: "This calculates from the object's values while keeping the result separate from the source data."
    });
  }

  return examples;
}

function getGenericConceptExample(state, context) {
  const label = getCodeIdentifier(context.contextLabel);
  if (state.language === "HTML and CSS") {
    return `<section class="${label}">
  <h2>${titleCase(context.contextLabel)}</h2>
  <p>${context.valueSingular}: 4</p>
</section>`;
  }
  return `input: ${context.exampleItem}, ${context.valueSingular}
action: transform or check the value
output: one clear result for ${context.contextLabel}`;
}

function getSqlExampleTableName(context) {
  const label = getCodeIdentifier(context.contextLabel);
  return label.endsWith("s") ? label : `${label}_items`;
}

function getCodeIdentifier(label) {
  return String(label || "project_items")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "") || "project_items";
}

function createPredictionChoices(state, focus, level) {
  const wrapper = document.createElement("div");
  const question = document.createElement("p");
  const snippet = document.createElement("pre");
  const result = document.createElement("p");
  const choices = document.createElement("div");
  const options = getPredictionOptions(state, focus, level);
  question.textContent = options.question;
  snippet.className = "task-tool-code prediction-snippet";
  snippet.textContent = options.snippet;
  choices.className = "prediction-options";
  result.className = "prediction-result";
  options.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "secondary-action";
    button.textContent = answer.label;
    button.addEventListener("click", () => {
      result.textContent = answer.correct ? answer.feedback : answer.feedback;
      choices.querySelectorAll("button").forEach((choice) => choice.classList.remove("active"));
      button.classList.add("active");
    });
    choices.append(button);
  });
  wrapper.append(question, snippet, choices, result);
  return wrapper;
}

function getPredictionOptions(state, focus, level) {
  if (level === "advanced") {
    return {
      question: "Which design choice is most robust?",
      snippet: `metrics = {"clicks": 10, "views": 50}
# Need: average plus future calculations`,
      answers: [
        { label: "Keep raw metrics separate from summary fields", correct: true, feedback: "Correct. It avoids accidentally aggregating derived values later." },
        { label: "Store every result in the same dictionary", correct: false, feedback: "That can work briefly, but it creates ambiguity between raw and derived values." },
        { label: "Skip validation because the sample data works", correct: false, feedback: "Sample data is not a contract. Boundary checks still matter." }
      ]
    };
  }

  if (level === "intermediate") {
    return {
      question: "What happens here?",
      snippet: `prices = {"notebook": 5, "pen": 2}
print(prices.get("marker", 0))`,
      answers: [
        { label: "0", correct: true, feedback: "Correct. .get() returns the fallback because marker is missing." },
        { label: "KeyError", correct: false, feedback: "Direct bracket access would raise KeyError; .get() uses the fallback." },
        { label: "None", correct: false, feedback: "Only if no fallback were provided. Here the fallback is 0." }
      ]
    };
  }

  if (state.language === "Python") {
    return {
      question: "What will this print?",
      snippet: `prices = {"notebook": 5, "pen": 2}
print(prices["notebook"])`,
      answers: [
        { label: "5", correct: true, feedback: "Correct. The key \"notebook\" points to the value 5." },
        { label: "2", correct: false, feedback: "Not quite. That is the value for the key \"pen\", not \"notebook\"." },
        { label: "KeyError", correct: false, feedback: "Not here. \"notebook\" exists, so Python can read its value." }
      ]
    };
  }

  if (state.language === "JavaScript" || state.language === "TypeScript" || state.language === "React" || state.language === "Node.js") {
    return {
      question: "What will this log?",
      snippet: `const prices = { notebook: 5, pen: 2 };
console.log(prices.notebook);`,
      answers: [
        { label: "5", correct: true, feedback: "Correct. The property notebook stores the value 5." },
        { label: "2", correct: false, feedback: "Not quite. That is the value stored under pen." },
        { label: "undefined", correct: false, feedback: "Not here. notebook exists, so JavaScript can read it." }
      ]
    };
  }

  return {
    question: "What does the selected key or property control?",
    snippet: `data item -> selected value`,
    answers: [
      { label: "Which value is read", correct: true, feedback: "Correct. The name you select controls the value you get back." },
      { label: "The language syntax", correct: false, feedback: "Syntax matters, but the selected name controls the value." },
      { label: "The editor mode", correct: false, feedback: "The editor does not change the data lookup behavior." }
    ]
  };
}

function createUseCaseText(state) {
  if (state.language === "SQL") {
    const wrap = document.createElement("div");
    const copy = document.createElement("p");
    const list = document.createElement("ul");
    copy.textContent = "Use GROUP BY when you want to summarize data:";
    [
      "count items per category",
      "count users per group",
      "calculate totals per segment"
    ].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.append(li);
    });
    wrap.append(copy, list);
    return wrap;
  }

  const copy = document.createElement("p");
  if (state.language === "Python") {
    copy.textContent = "Use dictionaries for labeled data: prices by product, metrics by name, config settings, counts, or quick lookups where a meaningful key points to a value.";
    return copy;
  }
  if (state.language === "JavaScript" || state.language === "TypeScript" || state.language === "React" || state.language === "Node.js") {
    copy.textContent = "Use objects for labeled data in app state, API responses, config, form values, and metrics where a property name points to a value.";
    return copy;
  }
  copy.textContent = "Use keyed or labeled structures when names matter: settings, metrics, records, categories, and lookup tables.";
  return copy;
}

function getUnderstandingReflection(concept, wasCorrect = true) {
  const attempt = activeLearningPath?.previousAttempt || currentSubmission?.attempt || "";
  const normalized = attempt.toLowerCase();
  const diagnosis = diagnoseSubmissionPattern(currentPlanState || getState(), attempt, concept);
  if (!wasCorrect) {
    if (!diagnosis.hasStructure) {
      return `${diagnosis.message}`;
    }
    return `${diagnosis.message} It is a meaningful start, but it does not satisfy the task yet.`;
  }
  if (/\{|\bdict\b|dictionary|\bobject\b/.test(normalized) && /\bprint\b|console\.log|select\b|return\b/.test(normalized)) {
    return `You used ${concept} to connect a label to a value, then made one value visible.`;
  }
  if (/\{|\bdict\b|dictionary|\bobject\b/.test(normalized)) {
    return `You used ${concept} to group related values under names.`;
  }
  return `This step explains the pattern behind the code you just wrote.`;
}

function diagnoseSubmissionPattern(state, attempt, concept) {
  const raw = String(attempt || "").trim();
  const language = state?.language || "";
  const normalized = raw.toLowerCase();
  const preview = getSubmissionPreview(raw);

  if (!raw) {
    return {
      hasStructure: false,
      message: "This attempt does not yet show the required pattern. Nothing was submitted yet."
    };
  }

  const hasStructure = hasMeaningfulTaskStructure(language, normalized);
  if (!hasStructure) {
    return {
      hasStructure: false,
      message: `This attempt does not yet show the required pattern. Your submission, ${preview}, does not include task-related ${language || "code"} structure yet.`
    };
  }

  return {
    hasStructure: true,
    message: `Your submission includes task-related ${describeDetectedStructure(language, normalized)}, so it has a real starting point for the ${concept} pattern.`
  };
}

function getSubmissionPreview(value) {
  const collapsed = String(value).replace(/\s+/g, " ").trim();
  const short = collapsed.length > 42 ? `${collapsed.slice(0, 39)}...` : collapsed;
  return `\`${short}\``;
}

function hasMeaningfulTaskStructure(language, normalized) {
  if (language === "SQL") {
    return /\b(select|from|where|group\s+by|order\s+by|having|count|sum|avg|min|max|join)\b/.test(normalized);
  }

  if (language === "Python") {
    return /(^|\n)\s*[a-z_][a-z0-9_]*\s*=/.test(normalized)
      || /\{[^}]*:/.test(normalized)
      || /\b(for|while|if|elif|else|def|return|print|sum|len|isinstance)\b/.test(normalized);
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    return /\b(const|let|var|function|return|if|else|for|while|console\.log|=>)\b/.test(normalized)
      || /\{[^}]*:/.test(normalized);
  }

  if (language === "HTML and CSS") {
    return /<\/?[a-z][\s\S]*>|[.#]?[a-z0-9_-]+\s*\{/.test(normalized);
  }

  return /[=;{}()[\]]|\b(select|from|if|for|while|return|function|def|print|class)\b/.test(normalized);
}

function describeDetectedStructure(language, normalized) {
  if (language === "SQL") {
    const matches = ["select", "from", "where", "group by", "count", "sum", "avg"]
      .filter((term) => new RegExp(`\\b${term.replace(" ", "\\s+")}\\b`).test(normalized));
    return matches.length ? `SQL pattern${matches.length > 1 ? "s" : ""} like ${matches.slice(0, 2).join(" and ")}` : "SQL structure";
  }

  if (language === "Python") {
    if (/\{[^}]*:/.test(normalized)) return "Python dictionary structure";
    if (/\b(for|while)\b/.test(normalized)) return "Python loop structure";
    if (/\bif\b/.test(normalized)) return "Python conditional structure";
    if (/\bdef\b/.test(normalized)) return "Python function structure";
    if (/(^|\n)\s*[a-z_][a-z0-9_]*\s*=/.test(normalized)) return "Python variable assignment";
    return "Python syntax";
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    if (/\{[^}]*:/.test(normalized)) return "object structure";
    if (/\b(const|let|var)\b/.test(normalized)) return "variable assignment";
    if (/\bfunction\b|=>/.test(normalized)) return "function structure";
    return "JavaScript-style syntax";
  }

  return "code structure";
}

function getDeepDiveSubmissionReflection(task, concept) {
  const attempt = activeLearningPath?.previousAttempt || currentSubmission?.attempt || "";
  const normalized = attempt.toLowerCase();
  const actions = [];

  if (/\{|\bdict\b|dictionary|\bobject\b/.test(normalized)) {
    actions.push("structured related values");
  }
  if (/\bprint\b|console\.log|select\b|return\b/.test(normalized)) {
    actions.push("made an output visible");
  }
  if (/\bsum\b|average|avg|count|len|length/.test(normalized)) {
    actions.push("turned raw values into a result");
  }
  if (/\bif\b|else|case|when|\?/.test(normalized)) {
    actions.push("used a decision rule");
  }

  const actionText = actions.length
    ? `You just ${actions.slice(0, 2).join(" and ")}.`
    : `You just worked through a small ${concept} task.`;

  return `${actionText} This view slows down the pattern so you can see the cause and effect behind the code.`;
}

function getCompletedMoveLabels(moves) {
  const labels = {
    structure: "Created structured data",
    output: "Printed or displayed one value",
    calculation: "Calculated a result",
    iteration: "Worked across multiple values",
    conditional: "Added a decision rule",
    validation: "Handled invalid or missing data",
    function: "Moved logic into reusable code"
  };
  const visible = moves.map((move) => labels[move]).filter(Boolean);
  return visible.length ? visible.slice(0, 3) : ["Started the solution"];
}

function getExtensionSummary(requirement) {
  const lower = requirement.toLowerCase();
  if (lower.includes("average")) {
    return "Add one computed value based on all entries";
  }
  if (lower.includes("loop") || lower.includes("every")) {
    return "Apply the idea to every entry";
  }
  if (lower.includes("label") || lower.includes("above") || lower.includes("below")) {
    return "Add one decision rule to make the output more useful";
  }
  if (lower.includes("invalid") || lower.includes("missing") || lower.includes("skip")) {
    return "Make the solution safer with one bad input";
  }
  if (lower.includes("function")) {
    return "Turn the working logic into reusable code";
  }
  return requirement;
}

function getDeepDiveExplanation(state, focus, concept) {
  if (focus.kind === "calculation") {
    return `${concept} helps you keep related values together so one calculation can use the whole set. For this task, separate the sample data from the calculated result before you print anything.`;
  }
  if (focus.kind === "validation") {
    return `${concept} is useful only when the values are trustworthy. The key idea is to remove or ignore bad values before they reach the calculation.`;
  }
  if (focus.kind === "function") {
    return `${concept} becomes easier to reuse when the logic lives in a small function. The function should accept data, do one clear job, and return the result.`;
  }
  if (focus.kind === "conditional") {
    return `${concept} gives you the data; the conditional turns that data into a decision. Decide the rule first, then apply it to each item.`;
  }
  return `Start with the data shape before the code gets clever. For this task, the important move is choosing names and values that make the result easy to check.`;
}

function getDeepDiveExample(state, focus) {
  if (state.language === "Python") {
    if (focus.kind === "calculation") {
      return `scores = {"one": 4, "two": 8}
average = sum(scores.values()) / len(scores)
print(average)`;
    }
    if (focus.kind === "validation") {
      return `scores = {"one": 4, "bad": None}
clean = [value for value in scores.values() if isinstance(value, (int, float))]`;
    }
    if (focus.kind === "function") {
      return `def summarize(scores):
    return {"count": len(scores)}`;
    }
    if (focus.kind === "conditional") {
      return `label = "high" if score > average else "low"`;
    }
  }

  if (state.language === "JavaScript" || state.language === "TypeScript" || state.language === "React" || state.language === "Node.js") {
    return `const items = [{ name: "one", done: true }];
console.log(items[0].name);`;
  }

  return "Create a small input, apply one rule, then show one clear result.";
}

function getDeepDiveQuestion(focus) {
  if (focus.kind === "validation") {
    return "Thinking extension: What value would you refuse to trust in the next version?";
  }
  if (focus.kind === "function") {
    return "Thinking extension: What part of your logic should become reusable next?";
  }
  if (focus.kind === "conditional") {
    return "Thinking extension: What rule would make the next output more useful?";
  }
  if (focus.kind === "calculation") {
    return "Thinking extension: What second result would make the output more informative?";
  }
  return "Thinking extension: What would make the next sample data feel more realistic?";
}

function buildConcreteCurrentTask(plan, state) {
  const concept = plan.language.core[0].toLowerCase();
  const language = state.language;
  const hours = Math.max(1, Math.min(20, Number(state.hours) || 1));
  const depth = Math.min(5, Math.max(1, Math.ceil(hours / 4)));
  const hasCalculation = depth >= 2;
  const hasConditional = depth >= 3;
  const hasValidation = depth >= 4;
  const hasFunction = depth >= 5;
  const context = getTaskContext(state);
  const withContract = (task) => addTaskContract(applyLearningPathToTask(task, language), language, state, {
    context,
    hasCalculation,
    hasConditional,
    hasValidation,
    hasFunction
  });

  if (language === "Python") {
    const steps = [
      `Create a dictionary with 3 ${context.itemPlural} and ${context.valuePlural}.`,
      hasCalculation ? `Calculate the average ${context.valueSingular}.` : `Print one ${context.itemSingular} and its ${context.valueSingular}.`,
      hasConditional ? `Use a conditional to label each ${context.itemSingular} as ${context.lowLabel} or ${context.highLabel}.` : "",
      hasValidation ? `Ignore any missing or non-number ${context.valueSingular} before calculating.` : "",
      hasFunction ? "Wrap the logic in a function that returns a summary dictionary." : ""
    ].filter(Boolean);

    return withContract({
      objective: concept.includes("data")
        ? `Practice using dictionaries with ${context.contextLabel}`
        : `Practice a small ${language} data task`,
      instruction: hasFunction
        ? `Write a function that accepts a dictionary of ${context.itemPlural} and ${context.valuePlural}, skips invalid ${context.valuePlural}, and returns a structured summary.`
        : hasValidation
          ? `Create a dictionary that stores ${context.itemPlural} and ${context.valuePlural}, include one invalid value, skip it, then calculate the average.`
          : hasConditional
            ? `Create a dictionary that stores ${context.itemPlural} and ${context.valuePlural}, calculate the average, and label each ${context.itemSingular} as ${context.lowLabel} or ${context.highLabel}.`
            : hasCalculation
              ? `Create a dictionary with 3 ${context.itemPlural} and their ${context.valuePlural}, then calculate and print the average.`
              : `Create a dictionary with 3 ${context.itemPlural} and ${context.valuePlural}, then print one value from it.`,
      steps,
      expectedOutput: hasFunction
        ? `A dictionary like: {'count': 3, 'average': 12.5, 'high_${context.itemPlural}': ['${context.exampleItem}']}`
        : hasValidation
          ? `A labeled average for ${context.contextLabel} that ignores the invalid value.`
          : hasConditional
            ? `Labeled ${context.itemPlural} plus the average ${context.valueSingular}.`
          : hasCalculation
              ? `A number representing the average ${context.valueSingular}, such as: Average ${context.valueSingular}: 12.50`
              : `One labeled value, such as: ${context.exampleItem} ${context.valueSingular}: 8`
    });
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    const steps = [
      "Create an array with 3 task objects.",
      hasCalculation ? "Count how many tasks are marked done." : "Display the first task name.",
      hasConditional ? "Use a conditional to label each task as ready or blocked." : "",
      hasValidation ? "Skip any task missing a status before counting." : "",
      hasFunction ? "Wrap the logic in a function that returns a summary object." : ""
    ].filter(Boolean);

    return withContract({
      objective: `Practice a small ${context.contextLabel} list in ${language}`,
      instruction: hasFunction
        ? `Write a function that accepts ${context.contextLabel} task objects, skips invalid tasks, and returns a summary object.`
        : hasValidation
          ? `Create ${context.contextLabel} task objects with one missing status, skip invalid tasks, then count completed tasks.`
          : hasConditional
            ? "Create task objects, count completed tasks, and label each task as ready or blocked."
            : hasCalculation
              ? "Create an array of 3 task objects with a name and status, then count how many are done."
              : "Create an array with 3 task names, then display the first task.",
      steps,
      expectedOutput: hasFunction
        ? `An object like: { total: 3, done: 2, blocked: ['${context.exampleAction}'] }`
        : hasValidation
          ? "A done count that ignores the invalid task."
          : hasConditional
            ? "A done count plus ready/blocked labels."
          : hasCalculation
              ? "A short message, such as: Done tasks: 2"
              : `A short message, such as: First task: ${context.exampleAction}`
    });
  }

  if (language === "SQL") {
    const steps = [
      hasCalculation ? "Group rows by category." : "Count all rows in the table.",
      hasCalculation ? "Count rows in each category." : "Give the count a clear alias.",
      hasConditional ? "Use CASE to label each group as small or large." : "",
      hasValidation ? "Filter out rows with missing category or value." : "",
      hasFunction ? "Structure the query with a CTE before the final SELECT." : ""
    ].filter(Boolean);

    return withContract({
      objective: hasCalculation ? "Practice grouping rows in SQL" : "Practice one SQL count",
      instruction: hasFunction
        ? `Write a CTE that filters invalid ${context.contextLabel} rows, then group valid rows by category and return a clean summary.`
        : hasValidation
          ? `Write a query that filters missing category/value rows for ${context.contextLabel}, then groups valid rows by category.`
          : hasConditional
            ? "Write a grouped query that labels each category as small or large using CASE."
            : hasCalculation
              ? "Write a query that groups items by category and counts how many items are in each category."
              : "Write a query that counts all rows in a project table.",
      steps,
      expectedOutput: hasFunction
        ? `Rows from a CTE-based ${context.contextLabel} query with category, item_count, and clean status.`
        : hasValidation
          ? "Grouped rows with missing categories or values excluded."
          : hasConditional
            ? "Rows with category, item_count, and size_label."
          : hasCalculation
              ? "Rows with each category and its item count."
              : "One row with a total count."
    });
  }

  if (language === "HTML and CSS") {
    const steps = [
      "Write the HTML structure for the result card.",
      hasCalculation ? "Add a title, description, and highlighted metric." : "Add a title and one strong result value.",
      hasConditional ? "Add a visual state for good or needs review." : "",
      hasValidation ? "Add an empty or warning state for missing data." : "",
      hasFunction ? "Organize the CSS with reusable class names for card, metric, and state." : ""
    ].filter(Boolean);

    return withContract({
      objective: hasCalculation ? `Practice building one ${context.contextLabel} result card` : "Practice one HTML result line",
      instruction: hasFunction
        ? `Build a reusable ${context.contextLabel} result card with clear class structure, a metric, a state label, and an empty-data state.`
        : hasValidation
          ? `Create a ${context.contextLabel} result card with a metric and a warning state for missing data.`
          : hasConditional
            ? "Create a result card with a metric and a visual status label."
            : hasCalculation
              ? "Create a small card with a title, one sentence of explanation, and one highlighted result value."
              : "Create a small HTML block with a title and one result value.",
      steps,
      expectedOutput: hasFunction
        ? "A reusable card with metric, state label, and empty-state styling."
        : hasValidation
          ? "A styled card with a metric and missing-data warning."
          : hasConditional
            ? "A card with a highlighted metric and status label."
          : hasCalculation
              ? "A visible card showing one result and a short explanation."
              : "A visible title and result value."
    });
  }

  const steps = [
    `Create 3 sample values related to ${context.contextLabel}.`,
    hasCalculation ? "Apply one clear transformation to every value." : "Show the first value with a short label.",
    hasConditional ? "Use a condition to label each result." : "",
    hasValidation ? "Skip or flag one invalid value." : "",
    hasFunction ? "Wrap the logic in a reusable function or named block." : ""
  ].filter(Boolean);

  return withContract({
    objective: hasCalculation ? `Practice one small ${language} input-to-output task` : `Practice one tiny ${language} value`,
    instruction: hasFunction
      ? `Create a reusable ${language} helper for ${context.contextLabel} that transforms, validates, and returns structured output.`
      : hasValidation
        ? `Create sample values for ${context.contextLabel}, skip one invalid value, and show the clean result.`
        : hasConditional
          ? `Create sample values for ${context.contextLabel}, transform them, and label each result with a condition.`
          : hasCalculation
            ? `Create 3 sample values related to ${context.contextLabel}, transform them once, and show the result.`
            : `Create 3 sample values related to ${context.contextLabel} and show the first result.`,
    steps,
    expectedOutput: hasFunction
      ? "A structured output from reusable logic."
      : hasValidation
        ? "A clean result that ignores or flags invalid input."
        : hasConditional
          ? "Labeled results based on a condition."
      : hasCalculation
        ? "A visible result that shows the transformed values."
        : "One labeled sample value."
  });
}

function applyLearningPathToTask(task, language) {
  if (!activeLearningPath || activeLearningPath.choice === "understand") {
    return task;
  }

  const requirement = activeLearningPath.focusRequirement;
  if (!requirement) {
    return task;
  }

  return {
    ...task,
    instruction: activeLearningPath.choice === "improve"
      ? `${task.instruction} This revision should specifically address: ${requirement}.`
      : activeLearningPath.choice === "extend"
        ? `${task.instruction} Build on your previous solution by adding one new requirement: ${requirement}.`
      : task.instruction,
    steps: [...task.steps, requirement],
    expectedOutput: `${task.expectedOutput} Include evidence that you handled: ${requirement}.`,
    focusRequirement: requirement,
    progressionLabel: activeLearningPath.progressionLabel,
    pathChoice: activeLearningPath.choice
  };
}

// Task contract: visible task, help solution, and mentor grading all read from this same criteria bundle.
function addTaskContract(task, language, state, flags) {
  const acceptedCriteria = buildAcceptedCriteria(task, language, flags);
  const referenceSolution = buildReferenceSolution(language, state, flags, task);

  return {
    ...task,
    acceptedCriteria,
    referenceSolution,
    solutionIntent: acceptedCriteria.join(" ")
  };
}

function buildAcceptedCriteria(task, language, flags) {
  const criteria = task.steps.map((step) => step.replace(/\.$/, ""));
  criteria.push(`Expected output must match: ${task.expectedOutput}`);

  if (language === "Python") {
    if (flags.hasFunction) {
      criteria.push("Defines a function, returns a summary dictionary, and uses print only to display the returned result");
    } else if (flags.hasValidation) {
      criteria.push("Skips invalid values before averaging");
    } else if (flags.hasConditional) {
      criteria.push("Calculates an average and labels each item relative to that average");
    } else if (flags.hasCalculation) {
      criteria.push("Calculates and prints the average of the dictionary values");
    } else {
      criteria.push("Prints one dictionary key with its matching value; average calculation is not required");
    }
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    if (flags.hasFunction) {
      criteria.push("Defines reusable logic that returns a summary object");
    } else if (flags.hasValidation) {
      criteria.push("Skips invalid task objects before counting");
    } else if (flags.hasConditional) {
      criteria.push("Counts completed tasks and labels task status");
    } else if (flags.hasCalculation) {
      criteria.push("Counts tasks marked done");
    } else {
      criteria.push("Displays the first task name; done counts are not required");
    }
  }

  if (language === "SQL") {
    criteria.push(flags.hasCalculation ? "Uses the requested aggregation level only" : "Returns one total count with a clear alias");
  }

  return criteria;
}

function buildReferenceSolution(language, state, flags, task = null) {
  const context = flags.context;
  const focusRequirement = task?.focusRequirement || "";

  if (language === "Python") {
    if (focusRequirement.includes("average")) {
      return `values = {"${context.exampleItem}": 8, "baseline": 5, "trial": 6}
values["average"] = sum(values.values()) / len(values)

print("Average ${context.valueSingular}:", values["average"])`;
    }

    if (flags.hasFunction) {
      return `def summarize(values):
    clean = {name: value for name, value in values.items() if isinstance(value, (int, float))}
    average = sum(clean.values()) / len(clean)
    high_items = [name for name, value in clean.items() if value > average]
    return {"count": len(clean), "average": average, "high_${context.itemPlural}": high_items}

print(summarize({"${context.exampleItem}": 18, "baseline": 8, "missing": None}))`;
    }

    if (flags.hasValidation) {
      return `values = {"${context.exampleItem}": 18, "baseline": 8, "missing": None}
clean = {name: value for name, value in values.items() if isinstance(value, (int, float))}
average = sum(clean.values()) / len(clean)

print("Average ${context.valueSingular}:", average)`;
    }

    if (flags.hasConditional) {
      return `values = {"${context.exampleItem}": 18, "baseline": 8, "trial": 12}
average = sum(values.values()) / len(values)

for name, value in values.items():
    label = "${context.highLabel}" if value > average else "${context.lowLabel}"
    print(name, label, value)`;
    }

    if (flags.hasCalculation) {
      return `values = {"${context.exampleItem}": 18, "baseline": 8, "trial": 12}
average = sum(values.values()) / len(values)

print("Average ${context.valueSingular}:", average)`;
    }

    return `values = {"${context.exampleItem}": 8, "baseline": 5, "trial": 6}

print("${context.exampleItem} ${context.valueSingular}:", values["${context.exampleItem}"])`;
  }

  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    if (flags.hasFunction) {
      return `function summarizeTasks(tasks) {
  const valid = tasks.filter((task) => typeof task.done === "boolean");
  const done = valid.filter((task) => task.done).length;
  const blocked = valid.filter((task) => !task.done).map((task) => task.name);
  return { total: valid.length, done, blocked };
}`;
    }

    if (flags.hasCalculation || flags.hasConditional || flags.hasValidation) {
      return `const tasks = [
  { name: "${context.exampleAction}", done: true },
  { name: "review output", done: false },
  { name: "ship draft", done: true }
];

console.log("Done tasks:", tasks.filter((task) => task.done).length);`;
    }

    return `const tasks = ["${context.exampleAction}", "review output", "ship draft"];

console.log("First task:", tasks[0]);`;
  }

  if (language === "SQL") {
    if (flags.hasFunction || flags.hasValidation) {
      return `WITH clean_rows AS (
  SELECT category, value
  FROM project_items
  WHERE category IS NOT NULL AND value IS NOT NULL
)
SELECT category, COUNT(*) AS item_count
FROM clean_rows
GROUP BY category;`;
    }

    if (flags.hasCalculation || flags.hasConditional) {
      return `SELECT category, COUNT(*) AS item_count
FROM project_items
GROUP BY category;`;
    }

    return `SELECT COUNT(*) AS total_items
FROM project_items;`;
  }

  if (language === "HTML and CSS") {
    return `<section class="result-card">
  <h2>${context.contextLabel}</h2>
  <p>Average ${context.valueSingular}</p>
  <strong>12.50</strong>
</section>`;
  }

  return getTaskWalkthroughCode(language, state);
}

function getTaskContext(state) {
  const task = state.task || state.ambition.label;
  const lower = task.toLowerCase();
  const isVaguePractice = /\b(basic|practice|coding task|coding tasks|learn|learning|study|work on)\b/.test(lower);

  if (lower.includes("cyber") || lower.includes("security") || lower.includes("alert")) {
    return {
      contextLabel: "security alerts",
      itemSingular: "alert type",
      itemPlural: "alert types",
      valueSingular: "severity score",
      valuePlural: "severity scores",
      exampleItem: "failed_login",
      exampleAction: "review failed login alerts",
      lowLabel: "low severity",
      highLabel: "high severity"
    };
  }

  if (lower.includes("sales") || lower.includes("revenue")) {
    return {
      contextLabel: "sales data",
      itemSingular: "product",
      itemPlural: "products",
      valueSingular: "sales total",
      valuePlural: "sales totals",
      exampleItem: "starter_plan",
      exampleAction: "review product sales",
      lowLabel: "below target",
      highLabel: "above target"
    };
  }

  if (lower.includes("dashboard") || lower.includes("analytics") || lower.includes("data")) {
    return {
      contextLabel: "dashboard metrics",
      itemSingular: "metric",
      itemPlural: "metrics",
      valueSingular: "metric value",
      valuePlural: "metric values",
      exampleItem: "conversion_rate",
      exampleAction: "clean product metrics",
      lowLabel: "needs review",
      highLabel: "performing well"
    };
  }

  if (lower.includes("expense") || lower.includes("budget") || lower.includes("finance")) {
    return {
      contextLabel: "expenses",
      itemSingular: "expense category",
      itemPlural: "expense categories",
      valueSingular: "amount",
      valuePlural: "amounts",
      exampleItem: "software_tools",
      exampleAction: "review monthly expenses",
      lowLabel: "within budget",
      highLabel: "over budget"
    };
  }

  if (lower.includes("ticket") || lower.includes("support") || lower.includes("bug")) {
    return {
      contextLabel: "support tickets",
      itemSingular: "ticket type",
      itemPlural: "ticket types",
      valueSingular: "priority score",
      valuePlural: "priority scores",
      exampleItem: "login_bug",
      exampleAction: "triage support tickets",
      lowLabel: "low priority",
      highLabel: "high priority"
    };
  }

  if (lower.includes("product")) {
    return {
      contextLabel: "product data",
      itemSingular: "product",
      itemPlural: "products",
      valueSingular: "price",
      valuePlural: "prices",
      exampleItem: "starter_plan",
      exampleAction: "review product metrics",
      lowLabel: "budget",
      highLabel: "premium"
    };
  }

  if (lower.includes("website") || lower.includes("app") || lower.includes("user")) {
    return {
      contextLabel: "feature work",
      itemSingular: "feature",
      itemPlural: "features",
      valueSingular: "status",
      valuePlural: "statuses",
      exampleItem: "signup_form",
      exampleAction: "check signup form",
      lowLabel: "blocked",
      highLabel: "ready"
    };
  }

  if (lower.includes("score") || lower.includes("grade") || lower.includes("quiz")) {
    return {
      contextLabel: "practice scores",
      itemSingular: "exercise",
      itemPlural: "exercises",
      valueSingular: "score",
      valuePlural: "scores",
      exampleItem: "loop_drill",
      exampleAction: "review practice score",
      lowLabel: "needs practice",
      highLabel: "ready"
    };
  }

  if (isVaguePractice) {
    return {
      contextLabel: "practice tasks",
      itemSingular: "practice task",
      itemPlural: "practice tasks",
      valueSingular: "difficulty score",
      valuePlural: "difficulty scores",
      exampleItem: "loop_drill",
      exampleAction: "finish a loop drill",
      lowLabel: "easy",
      highLabel: "challenging"
    };
  }

  return {
    contextLabel: "project items",
    itemSingular: "project item",
    itemPlural: "project items",
    valueSingular: "score",
    valuePlural: "scores",
    exampleItem: "sample_item",
    exampleAction: "review project item",
    lowLabel: "low",
    highLabel: "high"
  };
}

function createTextBlock(item, className) {
  const block = document.createElement("article");
  const heading = document.createElement("h3");
  const copy = document.createElement("p");
  const details = document.createElement("ul");
  block.className = className;
  heading.textContent = item.title;
  copy.textContent = item.body;
  details.className = "relevance-details";
  (item.details || []).forEach((detail) => {
    const detailItem = document.createElement("li");
    detailItem.textContent = detail;
    details.append(detailItem);
  });
  block.append(heading, copy, details);
  return block;
}

function createPracticeCard(item) {
  const card = document.createElement("button");
  card.className = "practice-card";
  card.type = "button";
  const type = document.createElement("span");
  const heading = document.createElement("h3");
  const copy = document.createElement("p");
  const meta = document.createElement("div");
  const time = document.createElement("span");
  const output = document.createElement("span");
  type.className = "practice-type";
  type.textContent = item.type;
  heading.textContent = item.title;
  copy.textContent = item.body;
  meta.className = "practice-meta";
  time.textContent = item.time;
  output.textContent = item.output;
  meta.append(time, output);
  card.append(type, heading, copy, meta);
  card.addEventListener("click", () => openPracticeGuide(item));
  return card;
}

function openPracticeGuide(item) {
  if (!currentPlanState || !currentPlanData) {
    return;
  }

  const guide = {
    type: item.type,
    title: item.title,
    prompt: item.prompt || item.body,
    starter: item.starter || getStarterCode(currentPlanState.language, currentPlanState.ambitionKey, item.type.toLowerCase(), currentPlanState),
    steps: item.steps || [],
    hint: item.hint || `Start with the smallest version. Use ${currentPlanData.language.core[0]} first, then add ${currentPlanData.language.core[1]} only if it makes the work clearer.`,
    check: item.check || `You are done when you can show the output and explain how it helps ${currentPlanState.ambition.audience}.`
  };

  practiceGrid.replaceChildren();
  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "secondary-action practice-back";
  backButton.textContent = "Back to Practice Lab";
  backButton.addEventListener("click", () => renderPlan(currentPlanState, { save: false, silent: true }));
  practiceGrid.append(backButton, createExerciseCard(guide, 0));
}

function createExerciseCard(exercise, index) {
  const card = document.createElement("article");
  const header = document.createElement("div");
  const type = document.createElement("span");
  const heading = document.createElement("h3");
  const prompt = document.createElement("p");
  const stepList = document.createElement("ul");
  const starterLabel = document.createElement("strong");
  const starter = document.createElement("pre");
  const code = document.createElement("code");
  const hint = document.createElement("details");
  const hintSummary = document.createElement("summary");
  const hintText = document.createElement("p");
  const answerLabel = document.createElement("label");
  const answer = document.createElement("textarea");
  const check = document.createElement("p");
  const checkButton = document.createElement("button");
  const feedback = document.createElement("div");

  card.className = "exercise-card";
  header.className = "exercise-header";
  type.className = "exercise-type";
  type.textContent = exercise.type;
  heading.textContent = exercise.title;
  prompt.textContent = exercise.prompt;
  stepList.className = "exercise-steps";
  (exercise.steps || []).forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    stepList.append(item);
  });
  starterLabel.className = "exercise-label";
  starterLabel.textContent = "Starter";
  starter.className = "exercise-code";
  code.textContent = exercise.starter;
  hintSummary.textContent = "Hint";
  hintText.textContent = exercise.hint;
  answerLabel.className = "exercise-label";
  answerLabel.setAttribute("for", `exercise-answer-${index}`);
  answerLabel.textContent = "Your answer";
  answer.id = `exercise-answer-${index}`;
  answer.rows = 5;
  answer.placeholder = "Write code, pseudocode, or your plan here.";
  check.className = "exercise-check";
  check.textContent = `Self-check: ${exercise.check}`;
  checkButton.className = "secondary-action exercise-grade";
  checkButton.type = "button";
  checkButton.textContent = "Check answer";
  feedback.className = "exercise-feedback";
  checkButton.addEventListener("click", () => {
    renderExerciseFeedback(answer.value, exercise, feedback);
  });

  header.append(type, heading);
  starter.append(code);
  hint.append(hintSummary, hintText);
  card.append(header, prompt);
  if (stepList.children.length > 0) {
    card.append(stepList);
  }
  card.append(starterLabel, starter, hint, answerLabel, answer, check, checkButton, feedback);
  return card;
}

function renderExerciseFeedback(answer, exercise, feedbackContainer) {
  const result = scoreExerciseAnswer(answer, exercise);
  feedbackContainer.replaceChildren();
  feedbackContainer.classList.remove("strong", "partial", "empty");
  feedbackContainer.classList.add(result.level);

  const heading = document.createElement("h4");
  const summary = document.createElement("p");
  const list = document.createElement("ul");
  heading.textContent = result.title;
  summary.textContent = result.summary;
  result.notes.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = note;
    list.append(item);
  });
  feedbackContainer.append(heading, summary, list);
  markProgress("practice", `Checked practice: ${exercise.title}`);
}

function scoreExerciseAnswer(answer, exercise) {
  const trimmed = answer.trim();
  if (!trimmed) {
    return {
      level: "empty",
      title: "No answer yet",
      summary: "Write a first attempt before checking. Pseudocode is fine if you are still thinking.",
      notes: ["Start with the input.", "Show one transformation or decision.", "End with the output you expect."]
    };
  }

  const lower = trimmed.toLowerCase();
  const hasExample = trimmed.length >= 80 || /\b(for|if|def|function|select|return|print|const|let|class)\b/i.test(trimmed);
  const hasDomain = currentPlanState && lower.includes(currentPlanState.ambition.label.toLowerCase().split(" ")[0]);
  const hasOutput = /\b(return|print|output|result|display|show|select|console|explain)\b/i.test(trimmed);
  const hasCheck = /\b(test|edge|missing|error|validate|check|debug|assumption)\b/i.test(trimmed);
  const notes = [];

  if (hasExample) {
    notes.push("Good: you included a concrete code or pseudocode attempt.");
  } else {
    notes.push("Add a more concrete code or pseudocode example.");
  }

  if (hasOutput) {
    notes.push("Good: your answer describes or produces an output.");
  } else {
    notes.push("Clarify the output: what should the user or program see at the end?");
  }

  if (hasCheck) {
    notes.push("Good: you considered testing, validation, or edge cases.");
  } else {
    notes.push("Add one edge case, validation rule, or test idea.");
  }

  if (hasDomain) {
    notes.push("Good: you connected the work to the selected profession or goal.");
  } else {
    notes.push("Connect the answer back to the selected profession or project goal.");
  }

  const score = [hasExample, hasOutput, hasCheck, hasDomain].filter(Boolean).length;
  if (score >= 3) {
    return {
      level: "strong",
      title: "Strong answer",
      summary: `This is on track for: ${exercise.title}.`,
      notes
    };
  }

  return {
    level: "partial",
    title: "Good start",
    summary: "You have the beginning of an answer. Strengthen it with the missing pieces below.",
    notes
  };
}

function createFlashcard(card) {
  const button = document.createElement("button");
  const front = document.createElement("div");
  const badge = document.createElement("span");
  const prompt = document.createElement("strong");
  const back = document.createElement("div");
  const answer = document.createElement("strong");
  const context = document.createElement("p");
  const footer = document.createElement("span");

  button.className = "flashcard";
  button.type = "button";
  button.setAttribute("aria-pressed", "false");
  front.className = "flashcard-front";
  badge.className = "flashcard-badge";
  prompt.className = "flashcard-prompt";
  back.className = "flashcard-back";
  badge.textContent = card.badge;
  prompt.textContent = card.prompt;
  answer.textContent = card.answer;
  context.textContent = card.context;
  footer.textContent = `Remember: ${card.mistake}`;
  front.append(badge, prompt);
  back.append(answer, context, footer);

  button.append(front, back);
  button.addEventListener("click", () => {
    const flipped = !button.classList.contains("flipped");
    button.classList.toggle("flipped", flipped);
    button.setAttribute("aria-pressed", String(flipped));
  });

  return button;
}

function createQuizItem(item, index) {
  const card = document.createElement("article");
  const type = document.createElement("span");
  const question = document.createElement("h4");
  const options = document.createElement("div");
  card.className = "quiz-item";
  type.className = "quiz-type";
  type.textContent = item.type;
  question.textContent = item.question;
  options.className = "quiz-options";
  item.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const text = document.createElement("span");
    input.type = "radio";
    input.name = `quiz-${index}`;
    input.value = optionIndex;
    text.textContent = option;
    label.append(input, text);
    options.append(label);
  });
  card.append(type, question, options);
  return card;
}

function createGlossaryItem(item) {
  const card = document.createElement("article");
  const term = document.createElement("strong");
  const definition = document.createElement("p");
  card.className = "glossary-item";
  term.textContent = item.term;
  definition.textContent = item.definition;
  card.append(term, definition);
  return card;
}

function createBuilderItem(item, index) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const text = document.createElement("span");
  label.className = "builder-item";
  input.type = "checkbox";
  input.addEventListener("change", () => {
    if (input.checked) {
      markProgress("builder", "Completed a mini project builder step");
    }
  });
  text.textContent = `${index + 1}. ${item}`;
  label.append(input, text);
  return label;
}

function createInterviewCard(item, index) {
  const card = document.createElement("article");
  const header = document.createElement("div");
  const type = document.createElement("span");
  const heading = document.createElement("h3");
  const question = document.createElement("p");
  const prompt = document.createElement("p");
  const expectation = document.createElement("p");
  const label = document.createElement("label");
  const answer = document.createElement("textarea");
  const dictationBar = document.createElement("div");
  const dictationButton = document.createElement("button");
  const dictationStatus = document.createElement("span");

  card.className = "interview-card";
  header.className = "exercise-header";
  type.className = "exercise-type";
  type.textContent = item.type;
  heading.textContent = `Question ${index + 1}`;
  question.textContent = item.question;
  prompt.className = "interview-prompt";
  prompt.textContent = item.prompt;
  expectation.className = "interview-expectation";
  expectation.textContent = item.expectation;
  label.className = "exercise-label";
  label.setAttribute("for", `interview-answer-${index}`);
  label.textContent = "Your answer";
  answer.id = `interview-answer-${index}`;
  answer.rows = 5;
  answer.value = currentInterviewAnswers[index] || "";
  answer.placeholder = "Answer as if you are speaking to an interviewer.";
  answer.addEventListener("input", () => {
    currentInterviewAnswers[index] = answer.value;
  });

  dictationBar.className = "dictation-bar";
  dictationButton.type = "button";
  dictationButton.className = "dictation-button";
  dictationButton.textContent = "Speak answer";
  dictationStatus.className = "dictation-status";

  if (!SpeechRecognition) {
    dictationButton.disabled = true;
    dictationStatus.textContent = "Voice dictation is not supported in this browser.";
  } else {
    dictationStatus.textContent = "Optional: answer out loud and edit the text after.";
    dictationButton.addEventListener("click", () => {
      toggleInterviewDictation(index, answer, dictationButton, dictationStatus);
    });
  }

  dictationBar.append(dictationButton, dictationStatus);
  header.append(type, heading);
  card.append(header, question, prompt, expectation, label, answer, dictationBar);
  return card;
}

function stopInterviewDictation() {
  if (!activeDictation) {
    return;
  }

  activeDictation.manualStop = true;
  activeDictation.recognition.stop();
  activeDictation.button.textContent = "Speak answer";
  activeDictation.button.classList.remove("listening");
  activeDictation.status.textContent = "Dictation stopped. You can edit the answer before grading.";
  activeDictation = null;
}

function toggleInterviewDictation(index, answer, button, status) {
  if (activeDictation?.index === index) {
    stopInterviewDictation();
    return;
  }

  stopInterviewDictation();

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;
  let committedText = answer.value.trim();

  activeDictation = {
    index,
    recognition,
    button,
    status,
    manualStop: false
  };

  recognition.addEventListener("start", () => {
    button.textContent = "Stop dictation";
    button.classList.add("listening");
    status.textContent = "Listening. Speak naturally, then stop when you are done.";
  });

  recognition.addEventListener("result", (event) => {
    let interimText = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const transcript = event.results[i][0].transcript.trim();
      if (event.results[i].isFinal) {
        committedText = `${committedText} ${transcript}`.trim();
      } else {
        interimText = `${interimText} ${transcript}`.trim();
      }
    }
    answer.value = `${committedText}${interimText ? ` ${interimText}` : ""}`.trim();
    currentInterviewAnswers[index] = answer.value;
  });

  recognition.addEventListener("error", (event) => {
    button.textContent = "Speak answer";
    button.classList.remove("listening");
    status.textContent = event.error === "not-allowed"
      ? "Microphone permission was blocked. You can still type your answer."
      : "Dictation stopped unexpectedly. You can try again or type your answer.";
    activeDictation = null;
  });

  recognition.addEventListener("end", () => {
    if (activeDictation?.recognition !== recognition) {
      return;
    }
    button.textContent = "Speak answer";
    button.classList.remove("listening");
    status.textContent = activeDictation.manualStop
      ? "Dictation stopped. You can edit the answer before grading."
      : "Dictation ended. Press Speak answer to continue.";
    activeDictation = null;
  });

  try {
    recognition.start();
  } catch {
    button.textContent = "Speak answer";
    button.classList.remove("listening");
    status.textContent = "Dictation could not start. Check microphone permission and try again.";
    activeDictation = null;
  }
}

function renderCurrentInterviewQuestion() {
  stopInterviewDictation();
  interviewList.replaceChildren();

  if (currentInterviewQuestions.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-plans";
    empty.textContent = "Generate a plan to start an interview round.";
    interviewList.append(empty);
    return;
  }

  const stage = document.createElement("section");
  const status = document.createElement("div");
  const statusText = document.createElement("p");
  const progress = document.createElement("div");
  const progressFill = document.createElement("span");
  const controls = document.createElement("div");
  const previous = document.createElement("button");
  const next = document.createElement("button");
  const answeredCount = currentInterviewAnswers.filter((answer) => answer.trim().length > 0).length;
  const percent = Math.round(((currentInterviewIndex + 1) / currentInterviewQuestions.length) * 100);

  stage.className = "interview-stage";
  status.className = "interview-status";
  statusText.textContent = `Question ${currentInterviewIndex + 1} of ${currentInterviewQuestions.length} - ${answeredCount} answered`;
  progress.className = "interview-progress";
  progressFill.style.width = `${percent}%`;
  progress.append(progressFill);

  controls.className = "interview-controls";
  previous.type = "button";
  previous.className = "secondary-action";
  previous.textContent = "Previous";
  previous.disabled = currentInterviewIndex === 0;
  previous.addEventListener("click", () => {
    currentInterviewIndex = Math.max(0, currentInterviewIndex - 1);
    renderCurrentInterviewQuestion();
  });

  next.type = "button";
  next.className = "secondary-action";
  next.textContent = currentInterviewIndex === currentInterviewQuestions.length - 1 ? "Last question" : "Next question";
  next.disabled = currentInterviewIndex === currentInterviewQuestions.length - 1;
  next.addEventListener("click", () => {
    currentInterviewIndex = Math.min(currentInterviewQuestions.length - 1, currentInterviewIndex + 1);
    renderCurrentInterviewQuestion();
  });

  status.append(statusText, progress);
  controls.append(previous, next);
  stage.append(status, createInterviewCard(currentInterviewQuestions[currentInterviewIndex], currentInterviewIndex), controls);
  interviewList.append(stage);
}

function gradeInterview() {
  stopInterviewDictation();
  const activeAnswer = document.querySelector(`#interview-answer-${currentInterviewIndex}`);
  if (activeAnswer) {
    currentInterviewAnswers[currentInterviewIndex] = activeAnswer.value;
  }

  const questionScores = currentInterviewQuestions.map((question, index) => {
    const answer = currentInterviewAnswers[index]?.trim() || "";
    return scoreAnswer(answer, question.rubric);
  });
  const total = questionScores.reduce((sum, score) => sum + score.points, 0);
  const max = questionScores.length * 5;
  const percent = max === 0 ? 0 : Math.round((total / max) * 100);

  interviewResult.replaceChildren();
  const heading = document.createElement("h3");
  const summary = document.createElement("p");
  const list = document.createElement("div");
  heading.textContent = `Interview score: ${percent}%`;
  summary.textContent = getInterviewSummary(percent);
  list.className = "score-list";
  questionScores.forEach((score, index) => {
    const item = document.createElement("p");
    item.textContent = `Q${index + 1}: ${score.points}/5 - ${score.feedback}`;
    list.append(item);
  });
  interviewResult.append(heading, summary, list);
  markProgress("interview", `Graded interview prep: ${percent}%`);
}

function checkQuiz() {
  let correct = 0;
  currentQuizAnswers.forEach((answer, index) => {
    const card = quizList.children[index];
    const selected = quizList.querySelector(`input[name="quiz-${index}"]:checked`);
    card?.classList.remove("correct", "incorrect");
    if (selected && Number(selected.value) === answer) {
      correct += 1;
      card?.classList.add("correct");
    } else {
      card?.classList.add("incorrect");
    }
  });

  const review = correct === currentQuizAnswers.length
    ? "Nice. You are tracking the key ideas."
    : "Review the highlighted questions, then use the flashcards to patch the weak spots.";
  quizResult.textContent = `Quiz score: ${correct}/${currentQuizAnswers.length}. ${review}`;
  markProgress("quiz", `Checked quiz: ${correct}/${currentQuizAnswers.length}`);
}

function scoreAnswer(answer, rubric) {
  if (answer.length < 40) {
    return { points: answer.length === 0 ? 0 : 1, feedback: "Needs more detail and a concrete example." };
  }

  const normalized = answer.toLowerCase();
  const matched = rubric.filter((item) => normalized.includes(String(item).toLowerCase()));
  let points = Math.min(5, 2 + matched.length);
  if (/\b(example|for instance|such as)\b/i.test(answer)) {
    points += 1;
  }
  if (/\b(test|edge|tradeoff|because|debug|verify)\b/i.test(answer)) {
    points += 1;
  }
  points = Math.min(5, points);

  return {
    points,
    feedback: matched.length > 0
      ? `Covered ${joinList(matched.slice(0, 3))}. Add clearer examples or tradeoffs to improve.`
      : "Good start. Add more of the expected interview keywords and explain your reasoning."
  };
}

function getInterviewSummary(percent) {
  if (percent >= 85) {
    return "Strong interview readiness. Your answers are specific and connected to the role context.";
  }
  if (percent >= 65) {
    return "Solid base. Add more examples, edge cases, and tradeoffs to sound more interview-ready.";
  }
  return "Keep practicing. Focus on complete answers: define the idea, give an example, explain tradeoffs, and mention testing.";
}

function renderHelpResponse(question) {
  if (!currentPlanState || !currentPlanData) {
    return;
  }

  const lower = question.toLowerCase();
  const state = currentPlanState;
  const plan = currentPlanData;
  const syntaxHelp = getSyntaxHelp(lower, state, plan);
  if (syntaxHelp) {
    renderSyntaxHelp(question, syntaxHelp);
    markProgress("help", "Used help for syntax guidance");
    return;
  }

  const focus = lower.includes("debug")
    ? "debugging"
    : lower.includes("interview")
      ? "interview explanation"
      : lower.includes("project")
        ? "project planning"
        : lower.includes("explain")
          ? "plain-language explanation"
          : "concept clarity";

  helpResponse.replaceChildren();
  const title = document.createElement("h3");
  const summary = document.createElement("p");
  const steps = document.createElement("ol");
  const next = document.createElement("p");
  title.textContent = `Help with ${focus}`;
  summary.textContent = `For your ${state.language} path in ${state.ambition.label}, treat this as a small next step instead of a full-course problem.`;
  [
    `Restate the stuck point in one sentence: ${question}`,
    `Connect it to one concept from your roadmap: ${plan.language.core[0]}.`,
    `Build or write the smallest example related to: ${state.task}`,
    `Check the result by explaining the input, output, and one edge case.`,
    `If it still feels unclear, move to Practice Lab and open the ${plan.practice[0].type} drill.`
  ].forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    steps.append(item);
  });
  next.className = "help-next";
  next.textContent = `Suggested next move: spend 10 minutes on ${plan.language.core[0]}, then write one note about how it supports a ${state.ambition.artifact}.`;
  helpResponse.append(title, summary, steps, next);
  markProgress("help", "Used help for a stuck question");
}

function getSyntaxHelp(lowerQuestion, state, plan) {
  if (/\b(for loop|loop|iterate|iteration|for each|foreach)\b/.test(lowerQuestion)) {
    return {
      title: `For loops in ${state.language}`,
      intro: `A for loop repeats a block of code for each item in a collection or range. In your ${state.ambition.label} path, use it when you need to process multiple records, rows, events, files, or examples.`,
      syntax: getLoopSyntax(state.language),
      tips: [
        "Name the loop variable after one item, not the whole collection.",
        "Keep the indented or nested block small at first.",
        `Use the loop to process something from your project: ${state.task}`,
        "Add a print, display, or result variable so you can see what changed each pass."
      ],
      practice: `Try this now: make a list of 3 items related to ${state.ambition.label}, loop through them, and output one useful sentence for each item.`
    };
  }

  if (/\b(function|functions|method|methods)\b/.test(lowerQuestion)) {
    return {
      title: `Functions in ${state.language}`,
      intro: "A function packages repeatable logic so you can name it, reuse it, test it, and explain it.",
      syntax: getFunctionSyntax(state.language),
      tips: [
        "Use a verb in the function name.",
        "Give the function one clear job.",
        "Return a result when another part of the program needs to use it.",
        `Connect it to one concept from your roadmap: ${plan.language.core[1]}.`
      ],
      practice: `Try this now: write a function that accepts one input from ${state.task} and returns a cleaned or improved version.`
    };
  }

  if (/\b(if statement|condition|conditional|if else|else)\b/.test(lowerQuestion)) {
    return {
      title: `Conditionals in ${state.language}`,
      intro: "A conditional lets your program choose what to do based on a rule.",
      syntax: getConditionalSyntax(state.language),
      tips: [
        "Write the rule in plain English first.",
        "Handle the normal case and at least one edge case.",
        "Keep each branch short while learning.",
        "Test with values that should go down different branches."
      ],
      practice: `Try this now: write a rule that labels part of ${state.task} as ready, missing, or needs review.`
    };
  }

  return null;
}

function renderSyntaxHelp(question, help) {
  helpResponse.replaceChildren();
  const title = document.createElement("h3");
  const intro = document.createElement("p");
  const questionEcho = document.createElement("p");
  const codeBlock = document.createElement("pre");
  const code = document.createElement("code");
  const tipsTitle = document.createElement("h4");
  const tips = document.createElement("ul");
  const practice = document.createElement("p");

  title.textContent = help.title;
  questionEcho.className = "help-question-echo";
  questionEcho.textContent = `Your question: ${question}`;
  intro.textContent = help.intro;
  code.textContent = help.syntax;
  codeBlock.className = "help-code";
  codeBlock.append(code);
  tipsTitle.textContent = "Use it well";
  help.tips.forEach((tip) => {
    const item = document.createElement("li");
    item.textContent = tip;
    tips.append(item);
  });
  practice.className = "help-next";
  practice.textContent = help.practice;
  helpResponse.append(title, questionEcho, intro, codeBlock, tipsTitle, tips, practice);
}

function getLoopSyntax(language) {
  if (language === "Python") {
    return "items = [\"sales\", \"support\", \"traffic\"]\n\nfor item in items:\n    print(item)\n\nfor number in range(3):\n    print(number)";
  }
  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    return "const items = [\"sales\", \"support\", \"traffic\"];\n\nfor (const item of items) {\n  // Use item here\n}\n\nfor (let i = 0; i < items.length; i += 1) {\n  // Use items[i] here\n}";
  }
  if (language === "SQL") {
    return "-- SQL usually processes rows with queries instead of for loops.\nSELECT category, COUNT(*) AS total\nFROM project_table\nGROUP BY category;";
  }
  if (language === "HTML and CSS") {
    return "<!-- HTML/CSS do not have for loops by themselves.\nUse JavaScript or a template engine to repeat elements. -->";
  }
  return "for each item in collection:\n  do one small action with item\n  store or show the result";
}

function getFunctionSyntax(language) {
  if (language === "Python") {
    return "def clean_value(value):\n    return str(value).strip()\n\nresult = clean_value(\" example \")";
  }
  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    return "function cleanValue(value) {\n  return String(value).trim();\n}\n\nconst result = cleanValue(\" example \");";
  }
  if (language === "SQL") {
    return "-- In SQL, reusable logic is often a view or stored function.\nCREATE VIEW cleaned_data AS\nSELECT TRIM(name) AS name\nFROM raw_data;";
  }
  return "define function cleanValue(value):\n  return cleaned value";
}

function getConditionalSyntax(language) {
  if (language === "Python") {
    return "score = 82\n\nif score >= 90:\n    label = \"excellent\"\nelif score >= 70:\n    label = \"ready\"\nelse:\n    label = \"needs review\"";
  }
  if (language === "JavaScript" || language === "TypeScript" || language === "React" || language === "Node.js") {
    return "const score = 82;\nlet label;\n\nif (score >= 90) {\n  label = \"excellent\";\n} else if (score >= 70) {\n  label = \"ready\";\n} else {\n  label = \"needs review\";\n}";
  }
  if (language === "SQL") {
    return "SELECT\n  score,\n  CASE\n    WHEN score >= 90 THEN 'excellent'\n    WHEN score >= 70 THEN 'ready'\n    ELSE 'needs review'\n  END AS label\nFROM project_table;";
  }
  return "if condition is true:\n  do this\nelse:\n  do that";
}

function joinList(items) {
  if (items.length <= 1) {
    return items[0] || "";
  }

  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  themeIcon.textContent = isDark ? "L" : "D";
}

function markPlanReadyToGenerate() {
  generateButton.querySelector("span:last-child").textContent = "Update Current Task";
  expandSetupPanel();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPlan();
});

editSetupButton.addEventListener("click", () => {
  expandSetupPanel();
});

collapseSetupButton.addEventListener("click", () => {
  collapseSetupPanel();
});

sidebarCollapseToggle?.addEventListener("click", () => {
  setSidebarCollapsed(!sidebarCollapsedPreference);
});

sidebarExpandToggle?.addEventListener("click", () => {
  setSidebarCollapsed(false);
});

sidebarRailItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleSidebarRailAction(item.dataset.sidebarRail);
  });
});

window.addEventListener("resize", applySidebarCollapsedState);

form.addEventListener("input", () => {
  hoursOutput.value = hoursInput.value;
  updateAttemptEditorLanguage();
  markPlanReadyToGenerate();
});

ambitionSelect.addEventListener("change", () => {
  ambitionCustomField.classList.toggle("visible", ambitionSelect.value === "custom");
  markPlanReadyToGenerate();
});

languageSelect.addEventListener("change", () => {
  languageCustomField.classList.toggle("visible", languageSelect.value === "other");
  updateAttemptEditorLanguage();
  markPlanReadyToGenerate();
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("codepath-theme", nextTheme);
  applyTheme(nextTheme);
});

taskToolButtons.forEach((button) => {
  button.addEventListener("click", () => renderTaskToolResponse(button.dataset.tool));
});
openHelpPanelButton.addEventListener("click", openHelpPanel);
closeHelpPanelButton.addEventListener("click", closeHelpPanel);
askTaskMentorButton.addEventListener("click", askTaskMentor);
editorModeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      setEditorMode(input.value);
    }
  });
});
taskAttemptInput.addEventListener("input", () => {
  updateEditorLineNumbers();
  renderCurrentTaskStatus();
});
taskAttemptInput.addEventListener("scroll", syncEditorGutter);
taskAttemptInput.addEventListener("keydown", handleAttemptEditorKeydown);
runCodeButton.addEventListener("click", runCurrentCode);
formatCodeButton.addEventListener("click", cleanUpCodeSpacing);
taskMentorQuestion.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    askTaskMentor();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && taskToolsPanel.classList.contains("is-open")) {
    closeHelpPanel();
  }
  if (event.key === "Escape" && roadmapModal && !roadmapModal.hidden) {
    closeRoadmapModal();
  }
  if (event.key === "Escape" && needsReviewModal && !needsReviewModal.hidden) {
    closeNeedsReviewModal();
  }
});
startSubmitButton.addEventListener("click", () => setMentorFlowState("submit"));
submitAttemptButton.addEventListener("click", submitCurrentAttempt);
nextStepOptionsPanel.addEventListener("click", (event) => {
  const skipButton = event.target.closest("[data-skip-reason]");
  if (skipButton) {
    handleSkipReflection(skipButton.dataset.skipReason);
    return;
  }

  const button = event.target.closest("[data-next-step]");
  if (button) {
    chooseNextLearningStep(button.dataset.nextStep);
  }
});
needsReviewList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-review-task-id]");
  if (deleteButton) {
    confirmRemoveSkippedTask(deleteButton.dataset.deleteReviewTaskId);
    return;
  }

  const button = event.target.closest("[data-review-task-id]");
  if (button) {
    resumeSkippedTask(button.dataset.reviewTaskId);
  }
});
needsReviewResume.addEventListener("click", () => resumeSkippedTask());
needsReviewManage.addEventListener("click", openNeedsReviewModal);
closeNeedsReviewButton.addEventListener("click", closeNeedsReviewModal);
needsReviewModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-needs-review]")) {
    closeNeedsReviewModal();
    return;
  }
  const resumeButton = event.target.closest("[data-manager-resume-task-id]");
  if (resumeButton) {
    closeNeedsReviewModal();
    resumeSkippedTask(resumeButton.dataset.managerResumeTaskId);
    return;
  }
  const confirmButton = event.target.closest("[data-manager-confirm-remove-task-id]");
  if (confirmButton) {
    renderNeedsReviewRemoveConfirm(confirmButton.dataset.managerConfirmRemoveTaskId);
    return;
  }
  const cancelButton = event.target.closest("[data-manager-cancel-remove]");
  if (cancelButton) {
    renderNeedsReviewManager();
    return;
  }
  const removeButton = event.target.closest("[data-manager-remove-task-id]");
  if (removeButton) {
    removeSkippedTask(removeButton.dataset.managerRemoveTaskId);
    renderNeedsReviewManager();
  }
});
reviewReminder.addEventListener("click", () => resumeSkippedTask());
taskStatusPill.addEventListener("click", () => {
  const status = getCurrentTaskStatus();
  if (status === "Skipped (needs review)" || status === "Needs review") {
    resumeSkippedTask();
  }
});
viewRoadmapButton.addEventListener("click", openRoadmapModal);
closeRoadmapButton.addEventListener("click", closeRoadmapModal);
roadmapModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-roadmap]")) {
    closeRoadmapModal();
    return;
  }
  const actionButton = event.target.closest("[data-roadmap-action]");
  if (actionButton) {
    handleRoadmapAction(actionButton.dataset.roadmapAction, actionButton);
  }
});
gradeInterviewButton.addEventListener("click", gradeInterview);
startQuizButton.addEventListener("click", () => {
  quizStarted = !quizStarted;
  renderQuizMode();
});
checkQuizButton.addEventListener("click", checkQuiz);
askHelpButton.addEventListener("click", () => {
  renderHelpResponse(helpQuestion.value.trim() || "I am stuck and need help choosing the next step.");
});
saveNoteButton.addEventListener("click", saveLearningNote);
clearNoteButton.addEventListener("click", () => {
  noteTitle.value = "";
  notesInput.value = "";
  notesInput.focus();
});
notesToggle.addEventListener("click", () => {
  if (notesPanel.classList.contains("hidden")) {
    showNotesPanel();
  } else {
    hideNotesPanel();
  }
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => {
      item.classList.toggle("active", item === tab);
      item.setAttribute("aria-selected", String(item === tab));
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === tab.dataset.tab);
    });
  });
});

applyTheme(localStorage.getItem("codepath-theme") || "light");
applySidebarCollapsedState();
applyNotesVisibility();
renderLearningNotes();
renderProgressTracker();
restoreInitialLayout();

function restoreInitialLayout() {
  try {
    if (activePlans.length > 0) {
      const initialPlan = activePlans.find((plan) => plan.id === activePlanId) || activePlans[0];
      loadPlan(initialPlan);
    } else {
      renderPlan(getState(), { save: false, silent: true, planName: "Unsaved draft" });
    }
  } catch (error) {
    console.warn("Startup state could not be restored. Loading default Iteriq task.", error);
    activePlans = [];
    activePlanId = "";
    renderPlan(normalizePlanState(getState()), { save: false, silent: true, planName: "Recovered task" });
  }

  window.setTimeout(() => {
    ensureCoreTaskMounted();
    safeRenderSection("Post-startup progress", renderTaskProgressRail);
    safeRenderSection("Post-startup needs review", renderNeedsReview);
  }, 0);
}
