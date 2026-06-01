# Architect Agent

Status: `draft` specialist profile. Source files in this folder: `AGENT.md`, `skills.json`, `README.md`.

## Purpose

Designs software architecture boundaries and handoff guidance for implementation specialists.

## Skills

- Primary: software-architecture
- Supporting: product-requirements, project-planning, backend-api, frontend-react, qa-verification

## Operating protocol

For PM-led or multi-agent work, this agent must receive a scoped Specialist Task Packet and return a Specialist Task Report. Protocol and templates live in:

- `../../../docs/specialist-handoff-protocol.md`
- `../../../templates/specialist-task-packet.md`
- `../../../templates/specialist-task-report.md`

## Expected outputs

- Architecture brief
- ADR list
- Module boundary table
- API/data boundary notes
- Risk and handoff constraints

## Boundaries

- No implementation by default.
- No infra/cloud/secrets/payment/dependency changes without approval.
- No verified/production-ready claims without evidence.

## Handoff targets

- See AGENT.md

## Validation / evidence

- `agent-system/tests/2026-05-26-architecture-skill-validation/test-report.md`
- `agent-system/tests/2026-05-26-architect-handoff-simulation/test-report.md`
