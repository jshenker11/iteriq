"use strict";

// Offline HTTP smoke tests for the local development server.
// No OpenAI API calls or real credentials are needed.
const assert = require("node:assert/strict");
const net = require("node:net");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { setTimeout: sleep } = require("node:timers/promises");

const ROOT = path.resolve(__dirname, "..");

async function reserveEphemeralPort() {
  const probe = net.createServer();
  await new Promise((resolve, reject) => {
    probe.once("error", reject);
    probe.listen(0, "127.0.0.1", resolve);
  });
  const port = probe.address().port;
  await new Promise((resolve) => probe.close(resolve));
  return port;
}

async function main() {
  const port = await reserveEphemeralPort();
  const base = `http://127.0.0.1:${port}`;
  const child = spawn(process.execPath, ["server.js"], {
    cwd: ROOT,
    env: { ...process.env, PORT: String(port), HOST: "127.0.0.1", OPENAI_API_KEY: "" },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let stderr = "";
  child.stderr.on("data", (chunk) => { stderr += chunk.toString("utf8"); });
  try {
    let ready = false;
    for (let attempt = 0; attempt < 60; attempt++) {
      if (child.exitCode !== null) throw new Error(`Server exited unexpectedly: ${stderr}`);
      try {
        const response = await fetch(base + "/", { signal: AbortSignal.timeout(200) });
        if (response.status === 200) { ready = true; break; }
      } catch { /* Server still starting. */ }
      await sleep(50);
    }
    assert(ready, `Local server did not start: ${stderr}`);

    let count = 0;
    async function check(name, url, options, expected) {
      const response = await fetch(base + url, { signal: AbortSignal.timeout(3000), ...options });
      assert.equal(response.status, expected, `${name}: HTTP ${response.status}, expected ${expected}`);
      count++;
      console.log(`PASS ${name}`);
      return response;
    }
    const homepage = await check("homepage served", "/", {}, 200);
    assert.match(await homepage.text(), /Iteriq/i);
    await check("frontend JavaScript served", "/app.js", {}, 200);
    await check("frontend stylesheet served", "/styles.css", {}, 200);
    await check("server-side source inaccessible", "/server.js", {}, 404);
    await check("API key file inaccessible", "/.env", {}, 404);
    await check("package config inaccessible", "/package.json", {}, 404);
    await check("repository metadata inaccessible", "/.git/config", {}, 404);
    await check("path traversal inaccessible", "/..%2Fserver.js", {}, 404);

    const jsonHeaders = { "content-type": "application/json" };
    const post = (body, headers = jsonHeaders) => ({ method: "POST", headers, body });
    await check("cross-origin POST rejected", "/api/mentor-feedback", post("{}", { ...jsonHeaders, Origin: "https://untrusted.example" }), 403);
    await check("wrong content type rejected", "/api/mentor-feedback", post("{}", { "content-type": "text/plain" }), 415);
    await check("invalid JSON rejected", "/api/mentor-feedback", post("{invalid"), 400);
    await check("missing required fields rejected", "/api/mentor-feedback", post("{}"), 400);
    await check("oversized JSON rejected", "/api/mentor-feedback", post(JSON.stringify({ text: "x".repeat(40_000) })), 413);

    let limited = false;
    for (let i = 0; i < 20; i++) {
      const response = await fetch(base + "/api/mentor-feedback", { ...post("{}"), signal: AbortSignal.timeout(3000) });
      if (response.status === 429) { limited = true; break; }
      assert.equal(response.status, 400, `Unexpected status during rate-limit check: ${response.status}`);
    }
    assert(limited, "Server should rate limit repeated POST requests");
    count++;
    console.log("PASS repeated POST rate limiting");
    console.log(`\n${count} local smoke checks passed; live OpenAI integration not tested.`);
  } finally {
    child.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
