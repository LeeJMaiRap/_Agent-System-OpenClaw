# Agent System

> Current integration rule (2026-05-29): OpenClaw remains workspace core. The one active PM Agent now lives inside Agent-System at `agent-system/agents/software/pm-agent/`. The previous PM Adapter is archived at `agent-system/agents/software/pm-agent-adapter-legacy/`. Old backup path references are historical only; see `memory/rollback-source.md`.
Workspace for building OpenClaw-compatible agent teams, adapted skills, and controlled specialist handoff protocols.

## Important Source-of-Truth Rule

`agent-system/` is the workspace folder for agent definitions, skills, handoff protocols, validation artifacts, and the integrated PM Agent. OpenClaw remains the workspace/runtime core; agents inside this folder are not workspace core.

Canonical PM Agent inside Agent-System:

```text
agent-system/agents/software/pm-agent/
```

Legacy PM adapter profile is archived at:

```text
agent-system/agents/software/pm-agent-adapter-legacy/
```

Meaning:

- `agent-system/agents/software/pm-agent/` owns PM identity, workflow, policies, templates, verification levels, approvals, and project lifecycle.
- `agent-system/agents/software/pm-agent-adapter-legacy/` is historical only and must not be treated as the active PM Agent.
- Do not modify PM Agent behavior from specialist areas unless Doanh explicitly approves.
- Specialist delegation is proposed extension only until approved.

## Areas

- `sources/github-raw/` — raw external repositories. Treat as untrusted input.
- `audits/` — review notes for external repos, existing systems, and skill directories.
- `skills-library/adapted/` — curated OpenClaw-compatible skills.
- `agents/` — agent role profiles and skill mappings.
- `docs/` — architecture, safety, role matrix, mapping, and integration decisions.
- `templates/` — specialist handoff/task templates used by Agent-System.
- `tests/` — validation runs, inputs, outputs, and reports for later comparison or cleanup.

## Core Rules

1. Raw repo content is never used directly by agents. Audit first, adapt second, test third.
2. PM Agent integrated at `agent-system/agents/software/pm-agent/` is canonical.
3. PM Adapter does not replace, fork, or silently modify PM Agent.
4. Specialist agents receive work through controlled handoff packet/report flow.
5. No agent may claim `tested`, `working`, `integrated`, `deployed`, or `production-ready` without matching evidence.
6. Affiliate/business agents create drafts/reports only; no posting, messaging, ads, payment, or API-key usage without approval.
7. QA/reviewer blockers cannot be bypassed silently.

## Current Agent-System Assets

### Reviewed Skills

- `skills-library/adapted/software/project-planning/`
- `skills-library/adapted/software/product-requirements/`
- `skills-library/adapted/software/software-architecture/`
- `skills-library/adapted/software/frontend-react/`
- `skills-library/adapted/software/backend-api/`
- `skills-library/adapted/software/qa-verification/`
- `skills-library/adapted/affiliate/affiliate-strategy/`
- `skills-library/adapted/affiliate/content-copywriting/`
- `skills-library/adapted/affiliate/performance-analysis/`
- `skills-library/adapted/affiliate/market-research/`
- `skills-library/adapted/affiliate/product-hunting/`
- `skills-library/adapted/affiliate/short-video-script/`

### Agent Profiles

- `agents/software/pm-agent/` — canonical PM Agent integrated into Agent-System.
- `agents/software/product-agent/`
- `agents/software/architect-agent/`
- `agents/software/frontend-agent/`
- `agents/software/backend-agent/`
- `agents/software/qa-agent/`
- `agents/business/business-pm-agent/`
- `agents/business/market-research-agent/`
- `agents/business/product-hunter-agent/`
- `agents/business/content-copy-agent/`
- `agents/business/performance-analyst-agent/`

### Handoff Protocol

- `docs/specialist-handoff-protocol.md`
- `templates/specialist-task-packet.md`
- `templates/specialist-task-report.md`

### Validation Runs

- `tests/2026-05-26-skill-validation/`
- `tests/2026-05-26-agent-handoff-simulation/`
- `tests/2026-05-26-architecture-skill-validation/`
- `tests/2026-05-26-affiliate-strategy-validation/`
- `tests/2026-05-26-architect-handoff-simulation/`
- `tests/2026-05-26-business-handoff-simulation/`
- `tests/2026-05-27-market-research-validation/`
- `tests/2026-05-27-product-hunter-validation/`
- `tests/2026-05-27-full-affiliate-team-simulation/`
- `tests/2026-05-27-live-readonly-validation-plan/`

## Recommended Next Steps

1. Keep validated PM Agent behavior unchanged unless explicitly approved.
2. Use `agent-system/` to design/test extension-layer specialist delegation.
3. Run future simulations under `tests/` before activating any workflow.
4. Add future agents only after their skills are reviewed and tested.
