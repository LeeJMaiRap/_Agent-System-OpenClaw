# Agent Profiles

Agent profiles for `agent-system`. PM Agent is the active validated PM Agent integrated into Agent-System; the legacy PM adapter is archived under `software/pm-agent-adapter-legacy/`.

## Profile Structure

Each agent folder contains:

- `AGENT.md` — role, boundaries, inputs, outputs, handoffs.
- `skills.json` — mapped primary/supporting skills.
- `README.md` — short purpose and lifecycle note.

## Active Agents

### Software Delivery

| Agent | Folder | Primary Skill |
|---|---|---|
| PM Agent | `software/pm-agent/` | PM framework, project-planning, verification policies |
| Product Agent | `software/product-agent/` | `software/product-requirements` |
| Architect Agent | `software/architect-agent/` | `software/software-architecture` |
| Frontend Agent | `software/frontend-agent/` | `software/frontend-react` |
| Backend Agent | `software/backend-agent/` | `software/backend-api` |
| QA Agent | `software/qa-agent/` | `software/qa-verification` |

### Business / Affiliate

| Agent | Folder | Primary Skill |
|---|---|---|
| Business PM Agent | `business/business-pm-agent/` | `affiliate/affiliate-strategy` |
| Market Research Agent | `business/market-research-agent/` | `affiliate/market-research` |
| Product Hunter Agent | `business/product-hunter-agent/` | `affiliate/product-hunting` |
| Content Copy Agent | `business/content-copy-agent/` | `affiliate/content-copywriting` |
| Performance Analyst Agent | `business/performance-analyst-agent/` | `affiliate/performance-analysis` |

## Role Boundary

- PM Agent orchestrates; does not become frontend/backend/QA implementer.
- Product Agent defines what/why; specialist agents define how.
- QA Agent can block acceptance.
- Affiliate agents create drafts/reports only; external actions need approval.

## Validation

Validation artifacts live under `../tests/`, including skill validation, handoff simulations, affiliate/business simulations, and live read-only validation planning.
