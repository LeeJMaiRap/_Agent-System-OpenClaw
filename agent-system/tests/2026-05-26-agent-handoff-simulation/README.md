# Agent Handoff Simulation: 2026-05-26

> Historical migration note (2026-05-29): this README describes the validation context at the time it was created. Active PM Agent now lives at `agent-system/agents/software/pm-agent/`; old PM Adapter references are historical.

Purpose: validate Phase 1 agent profiles and `skills.json` mapping after PM Agent draft profile was converted into adapter profile.

Canonical PM Agent source:

```text
systems/pm-agent/
```

PM Adapter profile:

```text
agent-system/agents/software/pm-agent/
```

Simulation rule:

- Do not modify `systems/pm-agent`.
- PM Agent Adapter must respect existing PM Agent workflow, approval policy, verification-level policy, task packet/report rules.
- Specialist handoff is proposed extension only.
- All outputs here are Paper-level artifacts.

Folders:

- `inputs/` fixed scenario prompts.
- `outputs/` simulated handoff transcripts/reports.
