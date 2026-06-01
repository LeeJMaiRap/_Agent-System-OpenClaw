# Specialist Task Packet

Derived from canonical PM Agent template:

```text
agent-system/agents/software/pm-agent/templates/task-packet-template.md
```

## Task Identity

- **Task ID:**
- **Title:**
- **Project:**
- **Phase:**
- **Assigned by:** agent:main / human:Doanh / unknown
- **Assigned to:** Product Agent / Frontend Agent / Backend Agent / QA Agent / Content Copy Agent / Performance Analyst Agent / other
- **Requested by:**
- **Date:**

## Canonical PM References

- **PM Source:** `agent-system/agents/software/pm-agent/`
- **Workflow:** `agent-system/agents/software/pm-agent/architecture/WORKFLOW.md`
- **Verification Policy:** `agent-system/agents/software/pm-agent/runtime/policies/verification-level-policy.md`
- **Approval Policy:** `agent-system/agents/software/pm-agent/runtime/policies/approval-policy.md`
- **Actor Policy:** `agent-system/agents/software/pm-agent/runtime/policies/actor-tracking-policy.md`

## Objective

What must specialist accomplish?

## Context

Relevant files, decisions, constraints, prior work, assumptions, and upstream handoff notes.

## Role Boundary

Specialist must do:

```text
- ...
```

Specialist must not do:

```text
- ...
```

## Work Mode Gate

Declare before execution:

- **Mode:** Validation / Campaign Preparation / Publish
- **External action:** none / planned / approved
- **Publish status:** not for publish / pending approval / approved
- **Evidence level:** direct public fetch / manual evidence / mixed / synthetic
- **Mode approval source:** Doanh / Business PM / not required for Validation

Rules:

- Validation stops when test objective is proven and final report can be written.
- Campaign Preparation needs explicit Business PM approval and stops before publish.
- Publish needs separate approval with exact channel, copy, link/product, assets, timing, and represented actor.

## Scope

### Allowed files/folders

```text
- path/to/allowed
```

### Forbidden actions

```text
- no production deploy
- no secret exposure
- no destructive migration
- no dependency install without approval
- no external posting/messaging/ads/payment/API write without approval
```

## Requirements

- Functional requirements:
- Non-functional requirements:
- Acceptance criteria:

## Verification

- **Verification Level:** Paper / Simulated / Local / Integration / Production
- **Evidence Required:** command output / test result / screenshot / API output / log path / checklist / blocker
- **Preflight Required:** yes/no
- **Preflight Checks:**
  - required tools/commands:
  - dependencies:
  - network/install policy:
  - credentials/secrets policy:

## Rollback / Recovery

- **Rollback point:**
- **Recovery steps:**
- **Files to restore if failed:**

## Stop Conditions

Stop and escalate if:

- scope expands;
- work mode is missing or no longer matches actual task;
- forbidden action becomes necessary;
- Validation starts becoming Campaign Preparation or Publish;
- Campaign Preparation reaches publish point;
- required tool/dependency is missing and no fallback is approved;
- evidence cannot meet requested Verification Level;
- role boundary conflict appears;
- PM source-of-truth conflict appears.

## Expected Output

- Files changed:
- Report required:
- Evidence location:
- Next recommended action:
