# Iteriq

**Learn by fixing your own code.**

Iteriq is an **in-development AI-powered coding practice application** organized around a feedback loop: **Attempt → Feedback → Fix → Understand**. Its goal is to help learners debug and improve their own solutions rather than immediately reveal the answer.

> **Status: Active development · Portfolio project**  
> The app has a working browser interface and a Node.js backend integrated with the OpenAI Responses API. It is not a production-ready service. AI feedback is advisory and may be incorrect; it does not establish that submitted code is functionally correct.

## What it does

- Offers practice setup based on programming language, experience, and learning goals
- Presents coding challenges in a browser-based interface
- Sends student attempts and task context to an AI mentor for structured feedback
- Supports contextual hints, follow-up questions, and revisions
- Includes practice and progress-oriented UI features

## Stack

| Component | Implementation |
| --- | --- |
| Frontend | HTML, CSS, vanilla JavaScript |
| Backend | Node.js built-in HTTP server (no Express dependency) |
| AI integration | OpenAI Responses API with server-side API key; default model `gpt-4.1-mini` |
| Dependencies | No third-party npm runtime packages in this version |

The current implementation calls OpenAI directly. **It does not currently integrate LangChain, LangGraph, or LangSmith.**

## Getting started (local development)

**Prerequisites:** Node.js 18+ and an OpenAI API key authorized to use the configured model.

1. Clone this repository using the URL from GitHub's **Code** menu, then open the repository directory in a terminal.
2. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env` instead.
3. Open `.env` and replace `replace_with_your_api_key` with your own key. The included `OPENAI_MODEL`, `PORT`, and `HOST` settings are optional and can be changed here or overridden by your shell environment. Do not commit this file.
4. Start the application:

   ```bash
   npm start
   ```

5. Open **http://127.0.0.1:3000/**.

The app serves its frontend locally. AI-powered feedback and hints require an API key, network access, and may incur OpenAI API charges. Keep the local server private; it is not designed for public deployment.

### Checks

```bash
npm run check  # JavaScript syntax
npm test                  # Local HTTP/security smoke tests; no API key needed
npm run test:integration  # Mocked OpenAI round-trip tests; no API key or charges
```

The integration tests exercise the real backend routes, OpenAI request construction, response parsing, and error handling using **mocked OpenAI responses**, not a live provider call. The browser feedback/mentor/hint flow was also checked once with a simulated browser-to-backend transport; these checks do not establish AI-feedback accuracy or replace a real-provider manual test.

For an **optional** live API connectivity and structured-feedback check, configure your real key in the untracked `.env` file and run:

```bash
npm run test:live
```

This sends **one actual API request**, which may incur a charge. The command checks the response format, not grading accuracy. To manually check the full browser flow, open the app via `npm start`, generate a task, submit an attempt, review feedback, and try Ask Mentor and hints. No real key or `.env` file should ever be committed. See [TESTING.md](TESTING.md).

## How it works

1. The learner selects a language, skill level, and practice goals.
2. The browser presents a task and accepts a code attempt.
3. `app.js` sends the attempt and task context to `server.js` over HTTP.
4. The backend requests feedback from the OpenAI Responses API using the server-side API key.
5. The interface shows feedback or hints and lets the learner revise the attempt.

```text
Browser
  index.html · styles.css · app.js
        |
        | HTTP / JSON
        v
Node.js server (server.js)
        |
        | OpenAI Responses API
        | API key stays on server
        v
Structured AI feedback / hints
        |
        v
Browser: review → revise → retry
```

### Current API routes

| Route | Purpose |
| --- | --- |
| `POST /api/mentor-feedback` | Assess a coding attempt |
| `POST /ask-mentor`, `POST /api/task-mentor` | Answer task-specific questions |
| `POST /api/analyze-attempt` | Analyze an attempt |
| `POST /api/generate-hint` | Generate a hint |
| `POST /api/evaluate-hint` | Evaluate the quality of a hint |

## Repository structure

```text
iteriq/
├── index.html                # Browser interface
├── styles.css                # UI styles
├── app.js                    # Frontend practice and state logic
├── server.js                 # Static server and OpenAI integration
├── scripts/smoke-test.js     # Offline local HTTP tests
├── scripts/integration-test.js # Offline mocked AI request/response tests
├── scripts/mock-openai.cjs   # Test-only mock, not used by npm start
├── scripts/live-check.js     # Optional one-request live API verification
├── TESTING.md                # Verification scope and manual browser checklist
├── .github/workflows/ci.yml # JavaScript and smoke-test CI
├── package.json              # npm scripts and Node requirement
├── .env.example              # Safe environment variable template
├── .gitignore                # Excludes secrets and local artifacts
├── README.md                 # Overview and setup
├── SECURITY.md               # Security policy and known limitations
├── CONTRIBUTING.md           # Contribution guidance
└── LICENSE                   # MIT license
```

## Security and current limitations

This project is intended to be **run locally**, not as a publicly accessible hosted service.

- The HTTP server binds to `127.0.0.1` by default and uses a static-file allowlist; server files, `.env`, and repository metadata are not served to the browser.
- AI routes have a **basic in-memory, IP-based rate limit of 12 POST requests per minute**, a 32 KiB request-body limit, and structural input bounds. They also check the request origin when supplied. These are development safeguards, **not** authentication or comprehensive abuse prevention.
- **There is no user authentication, per-user quota, or production-grade distributed rate limiting.** Public hosting would require these controls, plus billing safeguards, monitoring, HTTPS, and further security review.
- The AI mentor does not run submitted student code in a sandbox; feedback may be wrong and should be evaluated independently.
- Never commit your `.env` file. If a real key was previously committed to *any* Git history, revoke/rotate it before publishing.

See [SECURITY.md](SECURITY.md) for the detailed security policy and review limitations.

## Development roadmap

- Build regression examples and evaluations for AI feedback quality
- Test correct, incorrect, and alternative valid student solutions systematically
- Improve the consistency of progressive hints and responses
- Expand adaptive practice and progress tracking
- Add production authentication, per-user quotas, monitoring, and stronger abuse protections before any public hosting

## License

This project is licensed under the MIT License.
See [LICENSE](LICENSE) for details.
