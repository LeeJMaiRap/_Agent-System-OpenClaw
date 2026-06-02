# PM Agent Integration into Agent-System

Approved by Doanh: 2026-05-29 06:41 UTC

## Current Rule

OpenClaw remains the workspace core.

PM Agent is an agent inside Agent-System:

```text
agent-system/agents/software/pm-agent/
```

There is one active PM Agent in this workspace. Only this PM Agent is part of the current model.

## Migration Source

This PM Agent was copied from the validated old workspace source:

```text
/data/.openclaw/workspace/agent-system/agents/software/pm-agent/
```

The backup source remains untouched and can be used for rollback/reference.

## Preservation Rule

Do not weaken or overwrite validated PM Agent behavior, workflow, policies, templates, verification levels, approval gates, or reporting rules.

Agent-System may integrate PM Agent with other agents, but integration must preserve PM Agent's project-management nature:

- scope control
- requirements/planning workflow
- task board discipline
- evidence review
- verification levels
- approval gates
- reporting and closure

## Workspace Core Boundary

PM Agent is not workspace core. It is an agent/framework inside Agent-System.

OpenClaw runtime and workspace operating rules remain above all agents.
