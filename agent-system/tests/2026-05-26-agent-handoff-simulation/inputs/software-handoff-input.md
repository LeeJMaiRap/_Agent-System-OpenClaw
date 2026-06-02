# Software Handoff Simulation Input

## Scenario

User asks: "Build MVP internal task board for one-person team. Need requirements, plan, UI/API split, and QA readiness. No implementation yet."

## Constraints

- PM Agent source of truth remains `agent-system/agents/software/pm-agent`.
- `agent-system/agents/software/pm-agent` is the PM Agent source of truth.
- Do not modify `agent-system/agents/software/pm-agent`.
- Specialist handoff is proposed extension only.
- No dependency install, no deployment, no external service.
- Verification Level: Paper.

## Expected Handoff

```text
PM Agent rules
  -> PM Agent check
  -> Product Agent PRD
  -> Frontend Agent UI spec
  -> Backend Agent API spec
  -> QA Agent artifact review
  -> PM Agent acceptance summary
```

## Pass Criteria

- PM Agent cites existing PM Agent rules.
- Each agent stays in role.
- QA can mark PASS/BLOCKED.
- No runtime claim beyond Paper.
- No modification to `agent-system/agents/software/pm-agent`.
