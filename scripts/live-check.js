"use strict";
// OPTIONAL one-request live check, run only by the repository owner on their machine.
// Requires an OpenAI API key in .env or OPENAI_API_KEY. Never prints the key.
// Makes one real OpenAI API request and may incur an API charge.
const assert = require("node:assert/strict");
const net = require("node:net");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { setTimeout: sleep } = require("node:timers/promises");
const ROOT = path.resolve(__dirname, "..");

function hasLocalKey() {
  if (process.env.OPENAI_API_KEY?.trim()) return true;
  const filepath = path.join(ROOT, ".env");
  if (!fs.existsSync(filepath)) return false;
  return fs.readFileSync(filepath, "utf8").split(/\r?\n/).some(line =>
    /^\s*OPENAI_API_KEY\s*=\s*["']?\S+/.test(line) &&
    !line.includes("replace_with_your_api_key")
  );
}
async function freePort() {
  const probe = net.createServer();
  await new Promise((resolve, reject) => probe.once("error", reject).listen(0, "127.0.0.1", resolve));
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  return port;
}
async function main() {
  if (!hasLocalKey()) {
    console.error("No real API key configured. Add OPENAI_API_KEY to your local, untracked .env file first.");
    process.exitCode = 1;
    return;
  }
  const port = await freePort();
  const base = `http://127.0.0.1:${port}`;
  const child = spawn(process.execPath, ["server.js"], {
    cwd: ROOT, env: { ...process.env, PORT: String(port), HOST: "127.0.0.1", NODE_OPTIONS: "" },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let errors = "";
  child.stderr.on("data", c => { errors += String(c); });
  try {
    let ready = false;
    for (let i = 0; i < 80; i++) {
      if (child.exitCode !== null) throw new Error(`Server failed to start: ${errors}`);
      try {
        const response = await fetch(base + "/", { signal: AbortSignal.timeout(300) });
        if (response.status === 200) { ready = true; break; }
      } catch { /* starting */ }
      await sleep(50);
    }
    assert(ready, `Server failed to start: ${errors}`);
    console.log("Sending ONE real feedback request to the OpenAI Responses API...");
    const response = await fetch(base + "/api/mentor-feedback", {
      method: "POST", headers: { "content-type": "application/json", Origin: base },
      body: JSON.stringify({
        task: {
          title: "Print a greeting in Python",
          instruction: "Write a Python statement that prints Hello, world!",
          acceptedCriteria: ["Print Hello, world! to standard output"],
          referenceSolution: "print('Hello, world!')"
        },
        submission: "print('Hello, world!')", language: "Python", level: "beginner"
      }),
      signal: AbortSignal.timeout(45000)
    });
    const data = await response.json();
    assert.equal(response.status, 200, `Feedback route returned ${response.status}: ${data.error || "unknown error"}`);
    for (const field of ["result", "issueType", "whatIsGood", "whatIsWrong", "whatToFixNext", "optionalNote", "nextStep"]) {
      assert.equal(typeof data[field], "string", `Missing or invalid ${field} in OpenAI feedback response`);
    }
    assert(["Correct", "Correct (minor note)", "Incorrect"].includes(data.result));
    console.log(`PASS real OpenAI request → backend JSON → structured feedback (${data.result}).`);
    console.log("This checks basic live connectivity and schema, not the correctness of AI grading or all browser interactions.");
  } finally {
    child.kill("SIGTERM");
  }
}
main().catch(error => { console.error("Live integration check FAILED:", error.message); process.exitCode = 1; });
