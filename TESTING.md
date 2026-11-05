# Testing and verification

Iteriq is an active-development portfolio project. These checks are intended to catch regressions, not certify the application as production-ready.

## Automated offline checks

```bash
npm run check
npm test
npm run test:integration
```

- **Syntax:** Checks `server.js` and `app.js` parse.
- **Smoke:** Checks local asset serving, private-file isolation, path traversal rejection, request validation, cross-origin rejection, and rate limiting.
- **Mocked integration:** Starts the real Node.js server with a test-only OpenAI interception module. Exercises all five AI functions (including both Ask Mentor route aliases), outgoing prompt construction, response parsing, and sanitized upstream failures. **No real model, API key, or API charge is involved.**

The mocked integration test validates response contracts and wiring. It cannot determine whether a real model gives good educational feedback.

## Optional real API connectivity check

Create an **untracked** `.env` file from `.env.example`, add your real key locally, and run:

```bash
npm run test:live
```

This sends **one real OpenAI API request** and may incur a charge. It verifies that a response reaches the Node.js server and includes the fields the interface expects. It **does not** test the real browser UI or judge model response quality. Do not publish `.env`, paste your API key into an issue, or attach it to a pull request.

## Manual browser checklist

After `npm start`, open `http://127.0.0.1:3000/` in your browser, then:

1. Check the page loads with its styling and without console JavaScript errors.
2. Select a language, level, and goal and generate a practice task.
3. Start the attempt, type or paste an example, and submit it. Confirm the feedback renders and the page is still interactive.
4. Revise and resubmit, checking the updated feedback.
5. Open **Need help?**, ask a question via **Ask Mentor**, and generate a hint. Confirm each response appears.
6. Refresh and check that any saved local progress behaves as expected.
7. Check that an unavailable key/network produces a helpful failure instead of crashing the interface.

### Limits of the review

The packaging environment blocked standard Chromium navigation to local URLs. As a workaround, the real `index.html`, `styles.css`, and `app.js` were injected into Chromium and browser `fetch` calls were bridged to a real local Node.js server with mocked OpenAI responses. This exercised **Start Task → Ask Mentor → Guided Hint (analysis/generation/evaluation) → Submit Attempt → Render Feedback** without browser JavaScript errors. It is **not** identical to an ordinary network-based page load and does not verify a live provider call. The owner should still perform the manual steps above with their own local API key before calling the real-provider browser flow verified.
