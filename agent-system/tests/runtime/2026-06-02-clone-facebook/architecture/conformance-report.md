# Architecture Conformance Report: clone-facebook

## Task Identity

- **Task ID:** 2026-06-02-clone-facebook
- **Project:** clone-facebook
- **Architect Agent Report:** `agent-system/tests/runtime/2026-06-02-clone-facebook/architecture/architecture.md`
- **Actual Implementation:** `clone-facebook/`
- **Date:** 2026-06-02 UTC

## Planned Architecture

Architect report proposed simple local social network architecture with Node.js, static frontend, API routes for auth/users/posts/comments/reactions/relationships/feed, local persistence, cookie auth, and local tests.

It recommended Express + SQLite, with simpler follow/unfollow allowed if schedule was tight.

## Actual Implementation

Actual implementation uses dependency-free Node.js HTTP server, static HTML/CSS/JS frontend, JSON file persistence, cookie or bearer session auth, and direct Node API tests.

Actual files:

- `clone-facebook/src/server.js`
- `clone-facebook/src/db.js`
- `clone-facebook/public/index.html`
- `clone-facebook/public/app.js`
- `clone-facebook/public/styles.css`
- `clone-facebook/tests/api.test.js`

## Conformance Matrix

| Area | Planned | Actual | Status | Evidence |
|---|---|---|---|---|
| Stack | Node.js + Express | Node.js built-in HTTP | DEVIATION | `clone-facebook/src/server.js`, `clone-facebook/README.md` |
| Data model | SQLite users/posts/comments/reactions/relationships | JSON DB with users/sessions/posts/comments/likes/follows | DEVIATION | `clone-facebook/src/db.js`, `clone-facebook/README.md` |
| API routes | Auth/users/posts/comments/reactions/relationships/feed | Auth/users/posts/comments/likes/follow/feed | PASS | `clone-facebook/src/server.js`, `backend/backend-report.md` |
| Auth/session | Cookie session auth | HttpOnly SameSite cookie plus bearer token for tests | PASS | `clone-facebook/src/server.js` |
| Frontend | Static vanilla JS UI | Static vanilla JS UI | PASS | `clone-facebook/public/` |
| Tests | Local API tests | Direct Node API test and smoke checks | PASS | `clone-facebook/tests/api.test.js`, `qa/qa-report.md` |
| Branding | Avoid Facebook/Meta branding | FriendSpace UI, no app-facing Facebook/Meta branding | PASS | `qa/qa-report.md`, `evidence/evidence.md` |

## Accepted Deviations

| Deviation | Reason | Risk | PM Acceptance |
|---|---|---|---|
| Express -> built-in Node HTTP | Avoid dependency install; keep runtime local and runnable in npm-missing environment | Less conventional routing, more manual code | yes |
| SQLite -> JSON DB | Avoid dependency install/native module risk; enough for runtime MVP | Not production-grade persistence/concurrency | yes |
| Friend requests/search omitted | Runtime MVP chose follow model and core feed flow | Less full social-network scope | yes |

## Result

- **Architecture conformance:** PASS_WITH_DEVIATIONS
- **Blocking deviations:** no
- **Required follow-up:** if moving beyond runtime MVP, add DB isolation, route modules, and stronger UI/e2e tests.
