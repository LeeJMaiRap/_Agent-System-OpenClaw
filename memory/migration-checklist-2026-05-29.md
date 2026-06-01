# Migration Checklist - Integrate PM Agent into Agent-System

Approved by Doanh: 2026-05-29 06:41 UTC

## Rules

- [x] OpenClaw is workspace core.
- [x] PM Agent is an agent inside Agent-System.
- [x] Do not keep two active PM Agents.
- [x] Do not damage validated PM Agent behavior/docs.
- [x] Do not modify backup `/data/.openclaw/workspace`.
- [x] Do not copy `.git`, `.trash`, cache, dependency, or build output.

## Steps

- [x] Kiểm tra git status workspace mới.
- [x] Tạo baseline commit hoặc ghi rollback state.
- [x] Xác nhận `memory/old-workspace-summary.md` tồn tại.
- [x] Xác nhận backup source tồn tại:
  - `/data/.openclaw/workspace/agent-system/`
  - `/data/.openclaw/workspace/systems/pm-agent/`
- [x] Copy chọn lọc old `agent-system/` sang `/data/workspace/agent-system/`.
- [x] Archive PM Adapter cũ:
  - từ `agent-system/agents/software/pm-agent/`
  - sang `agent-system/agents/software/pm-agent-adapter-legacy/`
- [x] Replace active `agent-system/agents/software/pm-agent/` bằng PM Agent chuẩn từ old `systems/pm-agent/`.
- [x] Tạo `agent-system/agents/software/pm-agent/AGENT-SYSTEM-INTEGRATION.md`.
- [x] Update `agent-system/README.md`.
- [x] Update `agent-system/STATUS.md`.
- [x] Update `agent-system/INDEX.md`.
- [x] Update `agent-system/docs/activation-guide.md`.
- [x] Update `agent-system/docs/agent-role-matrix.md`.
- [x] Update `agent-system/docs/integration-roadmap.md`.
- [x] Tạo `memory/rollback-source.md`.
- [x] Verify key PM Agent files tồn tại:
  - `agent-system/agents/software/pm-agent/README.md`
  - `agent-system/agents/software/pm-agent/STATUS.md`
  - `agent-system/agents/software/pm-agent/architecture/WORKFLOW.md`
- [x] Verify PM Adapter legacy tồn tại:
  - `agent-system/agents/software/pm-agent-adapter-legacy/AGENT.md`
  - `agent-system/agents/software/pm-agent-adapter-legacy/README.md`
  - `agent-system/agents/software/pm-agent-adapter-legacy/skills.json`
- [x] Verify không có `/data/workspace/systems/pm-agent/`.
- [x] Verify docs active không còn gọi `systems/pm-agent` là canonical hiện tại.
- [x] Verify không copy cache/deps/build output.
- [x] Ghi kết quả vào `memory/2026-05-29.md`.
- [x] Báo cáo cuối cho anh.
