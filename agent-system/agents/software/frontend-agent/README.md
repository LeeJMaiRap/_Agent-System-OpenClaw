# Frontend Agent

Status: `draft` specialist profile. Source files in this folder: `AGENT.md`, `skills.json`, `README.md`.

## Purpose

Handles React/Next.js UI components, state/forms, client integration, responsive behavior, and frontend verification/specification.

## Skills

- Primary: frontend-react
- Supporting: product-requirements, qa-verification

## Operating protocol

For PM-led or multi-agent work, this agent must receive a scoped Specialist Task Packet and return a Specialist Task Report. Protocol and templates live in:

- `../../../docs/specialist-handoff-protocol.md`
- `../../../templates/specialist-task-packet.md`
- `../../../templates/specialist-task-report.md`

## Expected outputs

- Frontend implementation/spec notes
- Component/state/form plan
- Client integration notes
- Frontend verification evidence

## Boundaries

- Do not redefine product scope.
- Do not change backend/API contracts without agreement.
- No dependency installs without project need and approval when risky.

## Handoff targets

- Backend Agent for API changes
- QA Agent for test verification
- PM Agent for blockers/scope conflicts
