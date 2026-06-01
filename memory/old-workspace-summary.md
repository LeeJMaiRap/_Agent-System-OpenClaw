# Old Workspace Summary - /data/.openclaw/workspace

Generated after Doanh asked to fully scan backup workspace in new fullpower container.

## Scan artifacts

- Inventory: `memory/old-workspace-scan/inventory.md`
- Content map: `memory/old-workspace-scan/content-map.md`
- Top-level counts: `memory/old-workspace-scan/top-level-counts.txt`

## Scope scanned

Path: `/data/.openclaw/workspace`

Excluded from operational scan: `.git/` internals, because it creates huge object listing and is not current source tree context.

Counts excluding `.git/`:

- Files: 380
- Directories: 194
- Readable/source-like files indexed: 357

Top-level file counts / bytes:

```text
.claude        files=1    bytes=247
.gitignore     files=1    bytes=1097
.openclaw      files=1    bytes=69
AGENTS.md      files=1    bytes=8474
BEHAVIOR.md    files=1    bytes=4031
HEARTBEAT.md   files=1    bytes=193
IDENTITY.md    files=1    bytes=636
README.md      files=1    bytes=3147
SOUL.md        files=1    bytes=2627
TOOLS.md       files=1    bytes=860
USER.md        files=1    bytes=1588
agent-system   files=149  bytes=466175
memory         files=6    bytes=47030
ops            files=15   bytes=131029
projects       files=6    bytes=5892
shared         files=1    bytes=715
state          files=1    bytes=380
systems        files=189  bytes=737735
tmp            files=2    bytes=439
```

## Workspace operating model

Old workspace was cleaned up on 2026-05-26 into a compact structure:

```text
systems/       agent systems; PM Agent is core
projects/      portfolio/project skeleton, no active project code
ops/           scripts, exports, tmp, logs, state
shared/        assets/templates/schemas/utilities
memory/        daily/operational memory notes
state/         small workspace runtime state
tmp/           scratch only
```

Rules from old workspace:

1. Do not delete PM Agent.
2. PM Agent framework source of truth: `systems/pm-agent/`.
3. Project source of truth: `projects/` when active project exists.
4. Runtime/export/tooling: `ops/`.
5. Scratch: `tmp/`.
6. Do not store runtime output in `systems/` unless intentional framework artifact.
7. Do not commit cache/dependency/build output.
8. Use trash before permanent delete.

Rollback/snapshot references from README:

- Baseline before update: `300527a`
- Cleanup PM Agent skeleton: `c33a17d`
- Snapshot before cleanup: `1217b2d`

Agent-system STATUS later lists:

- Baseline commit: `d2fb0de Add agent-system specialist teams and validation flows`
- Latest committed workspace snapshot: `7538f39 Commit workspace snapshot`

## PM Agent canonical context

Canonical PM Agent is:

```text
/data/.openclaw/workspace/systems/pm-agent/
```

Do not treat this as canonical:

```text
/data/.openclaw/workspace/agent-system/agents/software/pm-agent/
```

That path is PM Adapter only.

Current PM Agent phase from `systems/pm-agent/STATUS.md`:

```text
Framework hardening after workspace cleanup
```

PM Agent completed:

- identity/bootstrap
- workflow, prompts, templates
- initial real project verification in prior phase
- workspace restructuring/runtime foundation
- governance layers: actor tracking, acceptance verification, stale detection, rollback/recovery
- reporting layers: framework vs project reporting, source conflict detection, portfolio dashboards
- cleanup workspace, keeping PM Agent core
- removed old team/specialist-agent branch from active workflow
- added verification level policy

Current state:

- PM Agent framework core readiness: about 85-90%
- Controlled pilot readiness: about 80-85%
- Production-grade readiness: not complete
- No active project folder under `projects/active/`
- Old team/specialist-agent branch removed from active workflow; rebuilt delegation/team system is future design

Important response rule:

- If asked about PM Agent, answer in 2 layers when relevant:
  1. PM Agent framework state
  2. Project managed by PM Agent state

Standard answer:

> PM Agent đang ở giai đoạn hardening framework core sau cleanup workspace. Branch team/specialist-agent cũ đã được loại khỏi active workflow và sẽ được thiết kế lại sau.

If asked active project:

> Hiện workspace chính chưa có project active trong `projects/active/`. Khi có project mới, PM Agent sẽ tạo cấu trúc project chuẩn và quản lý theo workflow hiện tại.

## PM Agent workflow

Main flow:

```text
User request
→ PM Agent analyzes
→ Create charter + requirements
→ Ask clarifying questions
→ Create planning docs
→ Create task-board
→ Execute tasks in loop
→ Monitor project state
→ Close project
→ Final report + lessons learned
```

Operating gates:

- Requirements Ready
- Planning Ready
- Execution Ready
- Verification Ready
- Release/Handoff Ready

Stop/ask user when:

- production deploy requested
- cloud/DNS/billing action needed
- secret exposed/requested
- destructive migration/action needed
- high-risk scope change appears
- unresolved ownership/scope conflict exists
- Critical/High security/QA blocker exists
- required approval/evidence missing but result would be marked done

Verification policy:

- Every evidence-based task needs Verification Level.
- Paper/Simulated only validate planning/artifacts, not real implementation.
- Real implementation needs Local or Integration evidence before completion claim.
- Production verification requires explicit user approval before deploy/cloud/DNS/billing.

Files PM Agent updates during execution:

1. `task-board.md`
2. `issue-log.md`
3. `change-log.md`
4. `status-dashboard.md`
5. `memory/pm-agent-observations.md`
6. `ops/state/pm-agent/`

Project source of truth remains inside project folder.

## Agent-system specialist layer

Path:

```text
/data/.openclaw/workspace/agent-system/
```

Role:

- Adapter/specialist layer only.
- Extends canonical PM Agent.
- Not production-ready.
- Ready for internal planning, Paper simulations, controlled read-only validation.

Current health from `agent-system/STATUS.md`:

- 11 agents have `AGENT.md`, `README.md`, `skills.json`
- skills mappings pass consistency checks
- handoff protocol exists
- validation artifacts exist
- consistency checker expected PASS: failures=0, warnings=0
- live read-only validation PASS WITH LIMITATIONS
- external campaign execution BLOCKED unless Doanh/Business PM approves exact publish/buy/message action

Agents:

Software team:

- PM Agent Adapter — bridges canonical PM to specialist layer
- Product Agent — requirements/PRD/acceptance
- Architect Agent — architecture/ADR/boundaries
- Frontend Agent — UI/client/frontend verification
- Backend Agent — API/data/backend verification
- QA Agent — review/verification/blockers

Business/Affiliate team:

- Business PM Agent — campaign orchestration/approval gates
- Market Research Agent — market/audience/keyword/angle research
- Product Hunter Agent — product shortlist/scoring/risk screen
- Content Copy Agent — hooks/captions/CTAs/compliance notes
- Performance Analyst Agent — metrics/experiments/limitations

Key docs:

- `agent-system/INDEX.md`
- `agent-system/STATUS.md`
- `agent-system/docs/activation-guide.md`
- `agent-system/docs/specialist-handoff-protocol.md`
- `agent-system/docs/agent-role-matrix.md`
- `agent-system/docs/safety-policy.md`
- `agent-system/docs/live-validation-lessons.md`

Known limitations:

- Not production-ready.
- Marketplace access limited by bot walls/dynamic pages.
- Shopee evidence depended on Doanh-provided screenshots/manual facts, not direct fetch.
- Marketplace facts are time-sensitive and need same-day recheck before public use.
- No product testing/purchase.
- No campaign posting/messaging/ads/payment/API/affiliate-link change approved.
- External publish mode off by default.

Current blockers:

- External campaign actions require exact Doanh/Business PM approval.
- Shopee direct fetch limited; use manual-evidence mode or improve tooling.
- Keep validation/campaign-prep/publish modes explicit.
- Current validation artifacts may be uncommitted; ask before commit.

Recommended next steps from old status:

1. Review and commit live-validation artifacts/docs if Doanh approves.
2. Keep Shopee/tripod case closed as validation case unless Business PM explicitly switches to campaign preparation.
3. Apply `docs/live-validation-lessons.md` to future validation runs:
   - declare mode: Validation / Campaign Preparation / Publish
   - label manual evidence
   - use stop gates
   - explain next steps in Vietnamese with purpose, reason, impact, expected result
4. If system hardening continues, update templates/checklists for shorter artifact structure.

## Historical memory from old workspace

Key memory points:

- Doanh approved auditing `awesome-llm-apps` first, then adapting 6 foundation skills before agent profiles.
- Doanh wanted temp/test artifacts in dedicated folders.
- Doanh noted existing PM Agent in `workspace/systems` was fairly complete; do not treat `agent-system/agents/software/pm-agent/` as canonical.
- Doanh wanted original PM Agent in `systems` unchanged; compare/merge/adapt controlled way without modifying source.
- Multiple handoff simulations and Paper validations were completed.
- Phase 5 hardening produced `agent-system/INDEX.md`, hardening reports, consistency checker, activation guide, status dashboard, schema hardening, live read-only validation plan.
- 2026-05-29 memory: every future next-step proposal must explain clearly in Vietnamese what the next step does and why, because too many English terms make meaning hard. Apply especially during agent-system work.

## Fullpower Docker context

Path:

```text
/data/.openclaw/workspace/ops/openclaw-fullpower/
```

Purpose:

- Creates second OpenClaw Docker container with Docker socket mounted.

Security:

- `/var/run/docker.sock:/var/run/docker.sock` gives root-equivalent control over Docker host.
- Can create containers, mount host folders, delete containers/images/volumes, publish ports.
- Use only for trusted experiments.

Ports:

- Web UI: `http://127.0.0.1:18790/`
- Extra backend/API: `127.0.0.1:18791` → container `8787`

Verify inside new OpenClaw:

```bash
docker ps
docker compose version
ls -la /vault
```

## Current new-container implications

For current fullpower container:

- Active workspace is `/data/workspace`.
- Old backup workspace is `/data/.openclaw/workspace`.
- Do not modify old backup unless Doanh explicitly asks.
- Use old backup as continuity/source context.
- If migrating, prefer selective copy/merge with clear rollback.
- Current container lacks `python3`; old checker commands using `python3` will fail unless Python installed or rewritten/run elsewhere.

## Communication preference

Doanh prefers Vietnamese.

When proposing next steps, explain:

- bước này làm gì
- vì sao cần
- ảnh hưởng gì
- kết quả mong đợi

Keep practical, evidence-based, and avoid unnecessary English terms.
