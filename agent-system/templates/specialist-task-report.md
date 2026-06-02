# Specialist Task Report

Derived from canonical PM Agent template:

```text
agent-system/agents/software/pm-agent/templates/task-report-template.md
```

## Task Identity

- **Task ID:**
- **Title:**
- **Project:**
- **Assigned by:**
- **Assigned to:**
- **Result returned by:** human:... / agent:main / subagent:... / unknown
- **Date:**
- **Status:** Done / Needs Review / Rework / Blocked / Cancelled

## Runtime Result

- **Runtime:** subagent / current session / manual simulation
- **Session mode:** isolated / fork / current
- **OpenClaw action used:** sessions_spawn / sessions_send / none
- **taskName:** product_requirements / architecture_review / frontend_work / backend_work / qa_review / business_pm_plan / market_research / product_hunting / content_copy / performance_analysis
- **Evidence path:** `agent-system/tests/runtime/<YYYY-MM-DD>-<task-id>/`

## Summary

Short result summary.

## Work Mode Gate Result

- **Mode declared:** Validation / Campaign Preparation / Publish
- **External action:** none / planned / approved
- **Publish status:** not for publish / pending approval / approved
- **Evidence level:** direct public fetch / manual evidence / mixed / synthetic
- **Mode drift observed:** yes/no
- **Stop gate triggered:** yes/no

## Scope Performed

- What was done:
- What was not done:
- Scope changes observed:

## Role Boundary Check

- Stayed inside assigned role: yes/no
- Boundary issue observed:
- Escalation needed:

## Files Changed

```text
- path/to/file — added/modified/deleted
```

## Commands / Checks Run

```text
command
result summary
```

## Verification

- **Requested Verification Level:** Paper / Simulated / Local / Integration / Production
- **Verification Level Achieved:** Paper / Simulated / Local / Integration / Production / Not achieved
- **Preflight Result:** required for Local/Integration/Production
- **Evidence Provided:**
  - command output:
  - test result:
  - screenshot/log/API output:
  - checklist:

## Evidence Routing

Required evidence artifacts completed:

```text
packet.md
report.md
evidence.md
```

Additional evidence:

```text
logs.txt / commands.txt / screenshots/ / outputs/
```

## Acceptance Gate Result

- **Acceptance owner:** PM Agent / Business PM Agent
- **QA review required:** yes/no
- **QA result:** PASS / FAIL / BLOCKED / not required
- **Human approval required:** yes/no
- **Human approval status:** approved / missing / not required
- **Recommended state:** Accept / Needs Review / Rework / Blocked / Cancelled

## Claim Control

Volatile marketplace facts checked same day or removed from publish-facing copy:

```text
- price / voucher / stock / shipping / rating / review count / sold count / variants
```

Unsupported claims removed/downgraded:

```text
- tested / working / secure / performant / accessible / integrated / deployed / production-ready
```

## Blockers

- Blocking issues:
- Missing tools/dependencies:
- User decisions needed:

## Risks / Caveats

- Residual risks:
- Known limitations:
- Claims not supported by evidence:

## Rollback / Recovery Notes

- Rollback point used:
- Recovery steps if needed:

## Handoff Back to PM Agent

- Acceptance recommendation: Accept / Needs Review / Rework / Blocked
- Next owner:
- Next recommended action:
