# OpenClaw Runtime Activation Spec

Status: quality-gated workflow
Scope: Agent-System specialist activation inside OpenClaw workspace

## Purpose

Define how PM Agent routes work to specialist agents through OpenClaw sessions/subagents while preserving one PM source of truth:

```text
agent-system/agents/software/pm-agent/
```

This spec enables quality-gated runnable workflow discipline. It does not authorize production deploys, external posting, purchases, payments, ads, or API writes.

## Runtime Actors

- **PM Agent:** orchestrates, creates packet, reviews report, owns acceptance gate.
- **Specialist Agent:** executes bounded task from packet, returns report with evidence.
- **QA Agent:** reviews evidence and can block acceptance.
- **Human / Doanh:** approves scope changes, destructive actions, installs, secrets, deploys, external writes.

## Spawn Decision Rules

Spawn a specialist only when all are true:

- task belongs to one specialist role;
- objective is clear;
- allowed files/folders are explicit;
- forbidden actions are explicit;
- verification level and evidence requirement are explicit;
- work mode is declared: Validation / Campaign Preparation / Publish;
- stop conditions are explicit;
- Specialist Task Packet is filled.

Do not spawn when task needs PM decision, unclear ownership, secret access, destructive action, external write, or approval that has not been granted.

## Session / Subagent Mapping

Use isolated subagent sessions for specialist execution unless Doanh explicitly asks for current-session execution.

```text
PM Agent main session
  -> sessions_spawn(runtime=subagent, context=isolated, taskName=<taskName>)
  -> Specialist Task Report
  -> PM acceptance gate
  -> optional QA review
```

Rules:

- `context=isolated` by default.
- `context=fork` only when specialist needs current transcript.
- One specialist per task packet.
- Use stable lowercase `taskName` values from Role Runtime Mapping.
- Specialist output must include report content or path.

## Input Format

PM Agent sends one specialist task containing:

```text
[Specialist Task Packet]
- Task Identity
- Runtime Activation
- Canonical PM References
- Objective
- Context
- Role Boundary
- Work Mode Gate
- Scope
- Requirements
- Verification
- Evidence Routing
- Acceptance Gate
- Rollback / Recovery
- Stop Conditions
- Expected Output
```

Packet source:

```text
agent-system/templates/specialist-task-packet.md
```

## Output Format

Specialist returns:

```text
[Specialist Task Report]
- Task Identity
- Runtime Result
- Summary
- Work Mode Gate Result
- Scope Performed
- Role Boundary Check
- Files Changed
- Commands / Checks Run
- Verification
- Evidence Routing
- Acceptance Gate Result
- Claim Control
- Blockers
- Risks / Caveats
- Rollback / Recovery Notes
- Handoff Back to PM Agent
```

Report source:

```text
agent-system/templates/specialist-task-report.md
```

## Evidence Path

Default evidence path:

```text
agent-system/tests/runtime/<YYYY-MM-DD>-<task-id>/
```

Required files when a runnable workflow test is performed:

```text
packet.md
report.md
test-report.md
coverage-matrix.md
pm-acceptance-gate.md
evidence/evidence.md
```

Required when code or project implementation exists:

```text
qa/qa-report.md
architecture/conformance-report.md
```

Optional files:

```text
logs.txt
commands.txt
screenshots/
outputs/
```

Evidence rules:

- Paper: checklist/spec/report evidence is enough.
- Simulated: transcript or dry-run evidence required.
- Local: command output required.
- Integration: integration logs/API output required.
- Production: requires explicit approval before action.
- Every Must requirement must map to owner agent, implementation file, test/evidence, and PASS/FAIL/BLOCKED/WAIVED status.
- WAIVED Must requirements require rationale and PM/human acceptance citation.

## Acceptance Gate

PM Agent may accept specialist result only when:

- report exists;
- role boundary was respected;
- evidence matches requested verification level;
- coverage matrix exists for runtime tests;
- every Must requirement has PASS or WAIVED status with cited evidence;
- PM acceptance gate cites evidence for each acceptance claim;
- architecture conformance report exists when implementation exists;
- QA report includes PASS/FAIL/BLOCKED status for each Must requirement when code/project implementation exists;
- unsupported claims are removed or downgraded;
- no unresolved blocker exists;
- QA reviewed when task involves code, security, release, or high risk;
- human approval exists for external or high-risk action.

Acceptance states:

```text
Accept
Needs Review
Rework
Blocked
Cancelled
```

Quality gate states:

```text
PASS
FAIL
BLOCKED
WAIVED
```

## Role Runtime Mapping

| Role | Spawn when | taskName | Output | Evidence |
|---|---|---|---|---|
| Product Agent | requirements, PRD, user stories, acceptance criteria needed | `product_requirements` | PRD/spec/open questions | `agent-system/tests/runtime/<task-id>/product-report.md` |
| Architect Agent | architecture, boundaries, ADR, API/data split needed | `architecture_review` | architecture brief/ADR/risk notes | `agent-system/tests/runtime/<task-id>/architecture-report.md` |
| Frontend Agent | UI/component/state/frontend verification needed | `frontend_work` | frontend plan/spec/file changes/evidence | `agent-system/tests/runtime/<task-id>/frontend-report.md` |
| Backend Agent | API/data/service/auth/backend verification needed | `backend_work` | backend plan/spec/file changes/evidence | `agent-system/tests/runtime/<task-id>/backend-report.md` |
| QA Agent | acceptance, regression, blocker, evidence review needed | `qa_review` | PASS/FAIL/BLOCKED review | `agent-system/tests/runtime/<task-id>/qa-report.md` |
| Business PM Agent | affiliate/business routing or campaign coordination needed | `business_pm_plan` | campaign/routing/approval plan | `agent-system/tests/runtime/<task-id>/business-pm-report.md` |
| Market Research Agent | niche/audience/keyword/evidence quality research needed | `market_research` | research report/limitations | `agent-system/tests/runtime/<task-id>/market-research-report.md` |
| Product Hunter Agent | SKU/product shortlist/scoring/claim limits needed | `product_hunting` | shortlist/scoring/risk limits | `agent-system/tests/runtime/<task-id>/product-hunter-report.md` |
| Content Copy Agent | hooks/captions/scripts/draft copy needed | `content_copy` | draft copy/compliance notes | `agent-system/tests/runtime/<task-id>/content-copy-report.md` |
| Performance Analyst Agent | metrics/experiment interpretation needed | `performance_analysis` | metric analysis/next actions | `agent-system/tests/runtime/<task-id>/performance-report.md` |

## Runtime Command Pattern

Use OpenClaw session spawning, not shell wrappers, for specialist work.

Required spawn parameters:

```text
runtime: subagent
context: isolated by default
taskName: from Role Runtime Mapping
task: Specialist Task Packet content
```

## Stop Conditions

Stop and return to PM Agent if:

- task scope expands;
- needed file/folder is outside allowed scope;
- install, deploy, secret, billing, destructive action, or external write is needed;
- verification level cannot be met;
- role boundary conflict appears;
- PM source-of-truth conflict appears;
- QA blocks acceptance.

## Completion Criteria

Runnable workflow is complete when:

- packet exists;
- specialist spawned or simulated with declared runtime mapping;
- report exists;
- evidence path exists;
- coverage matrix exists;
- every Must requirement has PASS/FAIL/BLOCKED/WAIVED status;
- PM acceptance gate records final state and cites evidence;
- QA report records Must requirement results when implementation exists;
- architecture conformance report records planned vs actual implementation when implementation exists;
- consistency checker passes.
