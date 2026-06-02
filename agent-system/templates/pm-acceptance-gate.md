# PM Acceptance Gate

## Task Identity

- **Task ID:**
- **Project:**
- **Verification Level:** Paper / Simulated / Local / Integration / Production
- **Acceptance Owner:** PM Agent
- **Date:**

## Gate Inputs

- **Task packet:** `agent-system/tests/runtime/<task-id>/packet.md`
- **Coverage matrix:** `agent-system/tests/runtime/<task-id>/coverage-matrix.md`
- **QA report:** `agent-system/tests/runtime/<task-id>/qa/qa-report.md`
- **Architecture conformance:** `agent-system/tests/runtime/<task-id>/architecture/conformance-report.md`
- **Evidence report:** `agent-system/tests/runtime/<task-id>/evidence/evidence.md`

## Evidence Citations

Every acceptance claim must cite a file path and, when available, command/output.

| Claim | Evidence Citation | Status |
|---|---|---|
| Runtime validation passed | `path` | PASS / FAIL / BLOCKED |

## Must Requirement Gate

- **Must PASS count:**
- **Must FAIL count:**
- **Must BLOCKED count:**
- **Must WAIVED count:**
- **Any Must FAIL/BLOCKED unresolved:** yes/no

## Specialist Gate

| Agent | Report | Result | Evidence cited | PM decision |
|---|---|---|---|---|
| Product Agent | `path` | PASS / FAIL / BLOCKED | yes/no | Accept / Rework / Blocked |
| Architect Agent | `path` | PASS / FAIL / BLOCKED | yes/no | Accept / Rework / Blocked |
| Frontend Agent | `path` | PASS / FAIL / BLOCKED | yes/no | Accept / Rework / Blocked |
| Backend Agent | `path` | PASS / FAIL / BLOCKED | yes/no | Accept / Rework / Blocked |
| QA Agent | `path` | PASS / FAIL / BLOCKED | yes/no | Accept / Rework / Blocked |

## PM Decision

- **Decision:** Accept / Needs Review / Rework / Blocked / Cancelled
- **Reason:**
- **Residual risks:**
- **Follow-up required:**
