# Agent Profiles

This directory contains Agent-System specialist profiles. Each profile folder is expected to contain:

- `AGENT.md` — role/system instructions.
- `skills.json` — mapped skills, handoff targets, safety metadata.
- `README.md` — human-readable summary for that profile.

## Software agents

- `software/pm-agent/` — canonical integrated PM Agent.
- `software/pm-agent-adapter-legacy/` — archived historical PM adapter only.
- `software/product-agent/` — product requirements/MVP/user stories.
- `software/architect-agent/` — architecture boundaries/ADRs/API-data notes.
- `software/frontend-agent/` — frontend React/Next.js UI work.
- `software/backend-agent/` — backend API/data/service work.
- `software/qa-agent/` — QA verification and acceptance evidence.

## Business / affiliate agents

- `business/business-pm-agent/` — affiliate/business PM orchestration.
- `business/market-research-agent/` — market/niche/audience research.
- `business/product-hunter-agent/` — product shortlist and claim boundaries.
- `business/content-copy-agent/` — affiliate copy drafts.
- `business/performance-analyst-agent/` — metrics review and iteration recommendations.

## Boundary

Specialists do not independently post, purchase, deploy, spend money, change secrets, or take external state-changing actions. PM-led work uses Specialist Task Packet/Report discipline.

## Validation

Validation artifacts live under `../tests/`. Most profiles are draft/Paper-level or read-only validated, not production execution agents.
