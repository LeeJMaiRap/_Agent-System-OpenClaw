# Agent-System Post-Migration Audit Checklist - 2026-05-29

Approved by Doanh: 2026-05-29 06:56 UTC

## Rules

- [x] OpenClaw remains workspace core.
- [x] PM Agent is an agent inside Agent-System.
- [x] Preserve validated PM Agent nature.
- [x] Do not modify backup `/data/.openclaw/workspace`.
- [x] Do not install packages/tools.
- [x] Do not change PM Agent core workflow/policies unless clearly path-only.

## Steps

- [x] Create README inventory.
- [x] Create path/reference audit.
- [x] Scan all README.md files.
- [x] Scan all AGENT.md files.
- [x] Scan all skills.json files.
- [x] Scan markdown local links in active docs.
- [x] Scan PM Agent internal docs for migrated path issues.
- [x] Fix safe docs/path issues.
- [x] Verify PM Agent key files.
- [x] Verify skills.json parse and paths.
- [x] Verify no duplicate active PM Agent.
- [x] Verify no cache/deps/build output.
- [x] Create audit report.
- [x] Update memory.
- [x] Report result to Doanh.
