# Phase 1 Agent Skill Mapping

## Purpose

Map first Phase 1 agent profiles to reviewed skills after validation run, while preserving the active PM Agent in `agent-system/agents/software/pm-agent/` as canonical PM source of truth.

Validation evidence:

`agent-system/tests/2026-05-26-skill-validation/test-report.md`

PM Agent audit evidence:

`agent-system/audits/existing-pm-agent.md`

## Canonical PM Agent Rule

The PM Agent is **not newly created** in `agent-system`.

Canonical PM Agent remains:

```text
agent-system/agents/software/pm-agent/
```

Active PM framework:

```text
agent-system/agents/software/pm-agent/
```

Meaning:

- `agent-system/agents/software/pm-agent` is source of truth for PM identity, workflow, policies, templates, verification levels, approvals, and project lifecycle.
- `agent-system/agents/software/pm-agent` is the integrated canonical PM Agent, the only PM Agent source of truth.
- Specialist handoff is proposed extension only until approved.
- Do not modify `agent-system/agents/software/pm-agent` from this mapping without explicit approval.

## Software Flow

Current safe interpretation:

```text
Human request
  -> PM Agent (agent-system/agents/software/pm-agent)
  -> PM Agent maps possible specialist handoff
  -> Product Agent when requirements/PRD support is approved
  -> Frontend Agent / Backend Agent when implementation delegation is approved
  -> QA Agent for verification/review
  -> PM Agent acceptance/evidence handoff
```

Important:

```text
PM Agent core workflow remains agent-system/agents/software/pm-agent workflow.
Specialist delegation is not canonical active workflow yet.
```

## Business / Affiliate Flow

```text
Human campaign idea
  -> Content Copy Agent
  -> Performance Analyst Agent after metrics exist
  -> Human approval before external action
```

Affiliate agents remain draft/report-only:

```text
no auto-post
no customer messaging
no ads
no payment/API-key usage
```

## Mapping Table

| Agent/Profile | Canonical Source | Primary Skill / Extension | Supporting Skills | External Action Policy |
|---|---|---|---|---|
| PM Agent | `agent-system/agents/software/pm-agent/` | `software/project-planning` as extension aid | `product-requirements`, `qa-verification` | Follow `agent-system/agents/software/pm-agent` approval + verification policies |
| Product Agent | `agent-system/agents/software/product-agent/` | `software/product-requirements` | `project-planning` | No external action |
| Architect Agent | `agent-system/agents/software/architect-agent/` | `software/software-architecture` | `product-requirements`, `project-planning`, `backend-api`, `frontend-react`, `qa-verification` | No infrastructure/dependency/deploy without approval |
| Frontend Agent | `agent-system/agents/software/frontend-agent/` | `software/frontend-react` | `product-requirements`, `qa-verification` | No dependency install/deploy without approval |
| Backend Agent | `agent-system/agents/software/backend-agent/` | `software/backend-api` | `product-requirements`, `qa-verification` | No API key/payment/external write without approval |
| QA Agent | `agent-system/agents/software/qa-agent/` | `software/qa-verification` | `product-requirements`, `project-planning` | No release approval bypass; can block acceptance |
| Business PM Agent | `agent-system/agents/business/business-pm-agent/` | `affiliate/affiliate-strategy` | `content-copywriting`, `performance-analysis`, `market-research`, `product-hunting` | Draft/plan/report only; no external action without approval |
| Content Copy Agent | `agent-system/agents/business/content-copy-agent/` | `affiliate/content-copywriting` | `affiliate-strategy`, `market-research` | Draft only; no posting/messaging/ads |
| Performance Analyst Agent | `agent-system/agents/business/performance-analyst-agent/` | `affiliate/performance-analysis` | `content-copywriting`, `affiliate-strategy` | Analysis only; no campaign changes/ads |

## PM Agent Guardrails

The PM Agent must:

1. Reference `agent-system/agents/software/pm-agent/architecture/SYSTEM-PROMPT.md` for PM identity/behavior.
2. Reference `agent-system/agents/software/pm-agent/architecture/WORKFLOW.md` for canonical workflow.
3. Reference `agent-system/agents/software/pm-agent/runtime/policies/verification-level-policy.md` before accepting claims.
4. Reference `agent-system/agents/software/pm-agent/runtime/policies/approval-policy.md` before approvals or high-risk actions.
5. Use `agent-system/agents/software/pm-agent/templates/task-packet-template.md` for broad/technical/risky/delegated work.
6. Use `agent-system/agents/software/pm-agent/templates/task-report-template.md` for completion/blocker review.
7. Mark team/specialist handoff as proposed extension until Doanh approves active delegation design.

## Next Validation Needed

1. Run updated software handoff simulation with Architect Agent included:
   `PM Agent -> Product -> Architect -> Frontend/Backend -> QA`.
3. Add `market-research-agent` after market research skill is reviewed.
4. Add `product-hunter-agent` after product hunting skill is reviewed.
