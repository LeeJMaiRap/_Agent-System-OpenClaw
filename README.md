# OpenClaw Workspace

Current workspace for OpenClaw agent-system work. Root is intentionally small; active project assets live under `agent-system/`, continuity/audit notes under `memory/`.

## Current root structure

- `agent-system/` — active agent definitions, adapted skills, docs, schemas, reports, tests, and utility tools.
- `memory/` — continuity notes, migration/audit records, rollback context, and workspace-review artifacts.
- `.openclaw/` — OpenClaw workspace state.
- Root operating docs:
  - `AGENTS.md` — workspace operating guide.
  - `BEHAVIOR.md` — working discipline and safety rules.
  - `HEARTBEAT.md` — optional periodic-check checklist.
  - `IDENTITY.md` — assistant identity metadata.
  - `SOUL.md` — persona/tone.
  - `TOOLS.md` — local setup notes.
  - `USER.md` — user/project context.

## Active system

Canonical PM Agent path:

```text
agent-system/agents/software/pm-agent/
```

Agent-System contains software and business/affiliate specialist profiles plus shared handoff protocol and skill library.

## Not present in current workspace root

Older README content referenced `systems/`, `projects/`, `ops/`, `shared/`, `state/`, `tmp/`, and `.trash/`. Those directories are not present in the current root snapshot. Do not treat old paths as current source of truth.

## Git baseline

Current repository snapshot was initialized and pushed to GitHub as commit `dd67b5f` (`Initial workspace snapshot`) on branch `master`.
