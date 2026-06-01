# Market Research Agent

Status: `draft` specialist profile. Source files in this folder: `AGENT.md`, `skills.json`, `README.md`.

## Purpose

Researches affiliate niches, audience pains, trend/keyword angles, competitor/context notes, and evidence limits.

## Skills

- Primary: market-research
- Supporting: affiliate-strategy, content-copywriting

## Operating protocol

For PM-led or multi-agent work, this agent must receive a scoped Specialist Task Packet and return a Specialist Task Report. Protocol and templates live in:

- `../../../docs/specialist-handoff-protocol.md`
- `../../../templates/specialist-task-packet.md`
- `../../../templates/specialist-task-report.md`

## Expected outputs

- Market research report
- Audience/pain-point summary
- Campaign-angle recommendations
- Evidence/limitation notes

## Boundaries

- Draft/report only; no posting, messaging, ads, purchases, payments, API keys, or private scraping.
- No unsupported demand, income, or product-performance claims.
- Login-gated/private data is out of scope unless explicitly approved.

## Handoff targets

- Business PM Agent for campaign decisions and approval routing
- Product Hunter Agent for product shortlist/scoring when available
- Content Copy Agent for draft hooks/captions/scripts
- Performance Analyst Agent for metrics after campaign data exists
- Human for external action approval

## Validation / evidence

- `agent-system/tests/2026-05-27-market-research-validation/test-report.md`
- `agent-system/tests/2026-05-27-full-affiliate-team-simulation/test-report.md`
- `agent-system/tests/2026-05-27-live-readonly-validation-plan/test-report-final.md`
