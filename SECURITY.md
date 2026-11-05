# Security policy

Iteriq is an **in-development portfolio project** for local use, not a production-hardened service.

## Safe local setup

- Start with `npm start`; by default the server binds to `127.0.0.1`.
- Put your OpenAI API key in an untracked `.env` file or a server-side environment variable. Never place it in browser-side code or commit it to Git.
- If a secret was previously committed to Git history, revoke/rotate it. Removing it from the current files does not remove it from Git history.
- Consider provider-side usage and spending limits before making API requests.

## Implemented development safeguards

- Static-file allowlist exposes only `index.html`, `styles.css`, and `app.js`.
- API POST requests are limited to **12 per IP address per minute** by an in-memory counter. The counter resets on restart and cannot reliably distinguish users behind a proxy.
- JSON request bodies are limited to **32 KiB**, with additional bounds on nested input structures.
- Cross-origin POST requests with a mismatched `Origin` header are rejected. This is **not** an authentication boundary.
- Backend errors are returned without disclosing raw upstream error details; outbound OpenAI requests have a timeout.

## Known limitations

- No authentication or user-level authorization
- No per-user quotas, durable/distributed rate limiting, or automated abuse mitigation
- No comprehensive route-specific schema validation
- No complete audit of dynamic browser-rendered content, or penetration test
- No production monitoring, HTTPS termination, deployment hardening, or billing enforcement
- AI-generated guidance may be inaccurate; the server does not execute or sandbox submitted student code

**Do not deploy this repository as an unrestricted public service.** A production deployment would require authentication, trusted proxy configuration, per-user quotas, monitoring, budget controls, HTTPS, stronger request validation, and a dedicated security review.

## Review and testing scope

`npm run check` validates JavaScript syntax; `npm test` runs local HTTP smoke tests; `npm run test:integration` exercises every AI endpoint using a **test-only mocked OpenAI response**. None of these send real API requests. An optional `npm run test:live` command performs one real feedback request using the owner's local untracked key and may incur a charge. These checks do **not** comprehensively test the browser UI, evaluate AI grading accuracy, rule out XSS, or establish the absence of vulnerabilities.

If you find a security issue, please report it privately to the project owner rather than opening a public issue containing exploit details.
