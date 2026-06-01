# Rollback Source - PM Agent into Agent-System Migration

Approved by Doanh: 2026-05-29 06:41 UTC

## Backup source kept untouched

```text
/data/.openclaw/workspace
```

## Sources used

Old Agent-System source:

```text
/data/.openclaw/workspace/agent-system/
```

Validated PM Agent source:

```text
/data/.openclaw/workspace/systems/pm-agent/
```

## Workspace destination

Integrated Agent-System:

```text
/data/workspace/agent-system/
```

Active PM Agent after migration:

```text
/data/workspace/agent-system/agents/software/pm-agent/
```

Archived previous adapter:

```text
/data/workspace/agent-system/agents/software/pm-agent-adapter-legacy/
```

## Core rule

OpenClaw remains workspace core. PM Agent is an agent inside Agent-System, not workspace core.

## Rollback rule

If migration must be rolled back, use `/data/.openclaw/workspace` as read-only source. Do not modify backup. Use `memory/pre-migration-git-status.txt` to inspect pre-migration workspace state.
