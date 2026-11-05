"use strict";
// Offline integration tests of every AI endpoint, using a mocked OpenAI Responses API.
// The server goes through its real parsing, validation, prompt, response and error code.
const assert = require("node:assert/strict");
const net = require("node:net");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { setTimeout: sleep } = require("node:timers/promises");
const ROOT = path.resolve(__dirname, "..");

async function port() {
  const probe = net.createServer();
  await new Promise((resolve, reject) => probe.once("error", reject).listen(0, "127.0.0.1", resolve));
  const value = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  return value;
}

async function main() {
  const testPort = await port();
  const base = `http://127.0.0.1:${testPort}`;
  const server = spawn(process.execPath, ["--require", path.join(__dirname, "mock-openai.cjs"), "server.js"], {
    cwd: ROOT, env: { ...process.env, PORT: String(testPort), HOST: "127.0.0.1", OPENAI_API_KEY: "offline-mock-not-a-real-key" },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  server.stderr.on("data", buffer => stderr += String(buffer));
  let checks = 0;
  try {
    let ready = false;
    for (let i = 0; i < 80; i++) {
      if (server.exitCode !== null) throw new Error(`Server exited: ${stderr}`);
      try {
        const res = await fetch(base + "/", { signal: AbortSignal.timeout(250) });
        if (res.ok) { ready = true; break; }
      } catch { /* waiting */ }
      await sleep(50);
    }
    assert(ready, `Server did not start: ${stderr}`);
    async function post(label, route, payload, expected, test) {
      const response = await fetch(base + route, {
        method: "POST", headers: { "content-type": "application/json", Origin: base },
        body: JSON.stringify(payload), signal: AbortSignal.timeout(5000)
      });
      const data = await response.json();
      assert.equal(response.status, expected, `${label}: ${JSON.stringify(data)}`);
      test(data);
      console.log(`PASS ${label}`);
      checks++;
    }
    const task = { title: "Print a greeting", language: "Python", acceptedCriteria: ["Print a greeting"] };
    await post("AI feedback JSON schema", "/api/mentor-feedback", {
      task, submission: "print('hello')", language: "Python", level: "beginner"
    }, 200, d => {
      assert.equal(d.result, "Correct"); assert.equal(d.issueType, "NONE");
      assert.match(d.whatIsGood, /variable/); assert.ok(d.nextStep);
    });
    await post("Ask Mentor", "/ask-mentor", { task, question: "How do I start?", submission: "print('hello')" }, 200,
      d => assert.match(d.answer, /Start with the values/));
    await post("Task mentor alias", "/api/task-mentor", { task, question: "What next?" }, 200,
      d => assert.match(d.answer, /Which variable/));
    const analysis = { mistake_type: "partial_understanding", is_close: true, missing_concept: "loop", hint_level: 1, notes: "Test" };
    await post("Analyze attempt", "/api/analyze-attempt", { task, submission: "for x in []" }, 200,
      d => { assert.equal(d.mistake_type, "partial_understanding"); assert.equal(d.hint_level, 1); });
    await post("Generate adaptive hint", "/api/generate-hint", { task, submission: "for x in []", analysis }, 200,
      d => assert.match(d.hint, /Consider how/));
    await post("Evaluate hint", "/api/evaluate-hint", { task, analysis, hint: "Check your loop." }, 200,
      d => assert.equal(d.rating, "appropriate"));
    await post("Upstream failure sanitizes API errors", "/api/mentor-feedback", {
      task, submission: "[[MOCK_API_ERROR]]", language: "Python", level: "beginner"
    }, 502, d => { assert.match(d.error, /Unable to complete/); assert.doesNotMatch(d.error, /Simulated upstream/); });
    await post("Malformed request rejected without upstream", "/api/mentor-feedback", { task }, 400,
      d => assert.match(d.error, /required/));
    console.log(`\n${checks} mocked-OpenAI integration checks passed. No real OpenAI calls performed.`);
  } finally {
    server.kill("SIGTERM");
  }
}
main().catch(e => { console.error(e); process.exitCode = 1; });
