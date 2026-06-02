# Architect Handoff Simulation Input

## Scenario

User wants a tiny internal task board MVP. Need to verify new Architect Agent fits between Product and implementation specialists.

## Constraints

- PM Agent in `agent-system/agents/software/pm-agent` remains canonical.
- PM Agent only bridges handoff.
- Verification Level: Paper.
- No implementation.
- No install/deploy/cloud/secrets.

## Expected Flow

```text
PM Agent
  -> Product Agent: PRD/MVP scope
  -> Architect Agent: architecture brief/ADRs/boundaries
  -> Frontend Agent: UI spec based on architecture
  -> Backend Agent: API/data spec based on architecture
  -> QA Agent: artifact review and blocker status
  -> PM Agent: acceptance summary
```

## Pass Criteria

- Architect Agent does not replace Product/Frontend/Backend/QA.
- Architect adds module boundaries and ADRs.
- Frontend/Backend use architecture as constraint.
- QA can block implementation readiness.
- PM Agent does not claim working/tested.
