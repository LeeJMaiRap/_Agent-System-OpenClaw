# Integration Roadmap

> Current integration rule (2026-05-29): OpenClaw remains workspace core. The one active PM Agent lives inside Agent-System at `agent-system/agents/software/pm-agent/`. Only this PM Agent is part of the current model.
## Direction

`agent-system/` is an extension layer for skills, agent profiles, and specialist handoff design.

Canonical PM Agent inside Agent-System:

```text
agent-system/agents/software/pm-agent/
```

PM Agent lives at:

```text
agent-system/agents/software/pm-agent/
```

Do not modify or replace validated PM Agent behavior unless Doanh explicitly approves.

## Phase 0 — Foundation Skeleton

Status: done

Completed:

- Created `agent-system/` skeleton.
- Added audit templates for external sources.
- Added docs:
  - `README.md`
  - `docs/safety-policy.md`
  - `docs/agent-role-matrix.md`
  - `docs/skill-selection-matrix.md`
  - `docs/integration-roadmap.md`
- Added first 12 skill stubs.

Evidence:

```text
agent-system/
```

## Phase 1 — Source Audit + Skill Adaptation

Status: done for first set

Completed:

- Audited `awesome-llm-apps` skills:
  - project-planner
  - fullstack-developer
  - code-reviewer
  - debugger
  - content-creator
  - data-analyst
- Updated:
  - `audits/awesome-llm-apps.md`
- Promoted 7 skills to reviewed:
  - `software/project-planning`
  - `software/product-requirements`
  - `software/frontend-react`
  - `software/backend-api`
  - `software/qa-verification`
  - `affiliate/content-copywriting`
  - `affiliate/performance-analysis`

Validation:

```text
tests/2026-05-26-skill-validation/
```

Result:

```text
PASS: Paper-level skill artifact validation.
```

## Phase 2 — Agent Profiles + PM Agent Alignment

Status: done for Phase 1 profiles

Completed:

- Created 7 profiles:
  - PM Agent
  - Product Agent
  - Frontend Agent
  - Backend Agent
  - QA Agent
  - Content Copy Agent
  - Performance Analyst Agent
- Preserved PM Agent as active integrated PM framework.
- Audited existing PM Agent:
  - `audits/existing-pm-agent.md`
- Updated mapping docs:
  - `docs/phase-1-agent-skill-mapping.md`
  - `docs/agent-role-matrix.md`
- Preserved existing PM Agent unchanged:
  - `agent-system/agents/software/pm-agent/`

Result:

```text
PASS: PM source-of-truth clarified.
PASS: single PM Agent source-of-truth is clarified.
```

## Phase 3 — Specialist Handoff Protocol

Status: done for first version

Completed:

- Added controlled handoff protocol:
  - `docs/specialist-handoff-protocol.md`
- Added specialist handoff templates:
  - `templates/specialist-task-packet.md`
  - `templates/specialist-task-report.md`
- Updated specialist agent profiles to reference packet/report flow.
- Ran handoff simulation:
  - `tests/2026-05-26-agent-handoff-simulation/`

Result:

```text
PASS: Paper-level agent handoff simulation.
BLOCKED: implementation activation until controlled pilot task packet + preflight.
```

## Phase 4 — Add Missing Core Agents

Status: in progress

Completed:

1. Reviewed/adapted `software-architecture` skill.
2. Created Architect Agent profile.
3. Validated architecture skill at Paper level.

Remaining recommended order:
1. Review/adapt `affiliate-strategy` skill.
2. Create Business PM Agent profile.
3. Review/adapt `market-research` skill.
4. Create Market Research Agent profile.
5. Review/adapt `product-hunting` skill.
6. Create Product Hunter Agent profile.

Rule:

```text
skill reviewed + tested before agent becomes active in mapping
```

## Phase 5 — Controlled Pilot with PM Agent

Status: future, requires approval

Goal:

Run a small PM-led project using existing PM Agent plus specialist handoff.

Pilot constraints:

- Integrated PM Agent remains source of truth.
- PM Agent creates Specialist Task Packet.
- Specialist returns Specialist Task Report.
- Verification Level starts at Paper or Local depending task.
- Preflight required for Local/Integration/Production.
- No deploy/cloud/DNS/billing/secrets/destructive action without approval.

Candidate pilot:

```text
Tiny internal task board planning -> one small local implementation task -> QA verification
```

Required before pilot:

1. Doanh approves pilot scope.
2. PM Agent creates task packet.
3. Persistence decision made.
4. Preflight completed if Local verification requested.

## Phase 6 — Promote Active Workflows

Status: future

Promote only when evidence exists:

- skills have validation results;
- agent profiles have handoff tests;
- pilot succeeds or blockers are resolved;
- role boundaries stay intact;
- PM source-of-truth remains clean;
- QA acceptance rules hold.

Possible promotions:

```text
status: draft -> reviewed -> pilot-ready -> active
```

## Ongoing Rules

- Audit first, adapt second, test third.
- Keep raw external sources untrusted.
- Keep test artifacts under `agent-system/tests/` for comparison/cleanup.
- Do not copy raw skills blindly.
- Do not modify validated PM Agent behavior without explicit approval.
- Do not activate specialist delegation without controlled pilot evidence.
