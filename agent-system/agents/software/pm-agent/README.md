# PM Agent - Hướng dẫn sử dụng

PM Agent (Lệ) là PM framework chính trong Agent-System. Vai trò: quản lý dự án bằng tài liệu, task board, policy, evidence, approval gate, lifecycle state, và báo cáo.

## Vị trí hiện tại

```text
agent-system/agents/software/pm-agent/
```

Sau migration 2026-05-29, đây là PM Agent chủ động và source of truth trong Agent-System.

## Cấu trúc thư mục

- `AGENT-SYSTEM-INTEGRATION.md` — ghi chú tích hợp với Agent-System.
- `README.md`, `STATUS.md` — hướng dẫn và trạng thái.
- `architecture/` — system prompt, workflow, state schema, storage rules.
- `changelog/` — vùng changelog hiện có, chưa chứa file trong snapshot này.
- `eval/` — checklist, scenarios, regression/production-readiness reports.
- `prompts/` — prompt theo phase: initiate, planning, task board, execute, monitor, closure.
- `reports/` — daily reports, plans, portfolio dashboards.
- `runtime/` — adapters, config, policies, registries, runbooks.
- `scripts/` — helper script hiện có: `backup-and-recreate-docker.ps1`.
- `skills/` — PM skills: document generation, input normalization, project operations, markdown-to-pdf, voice.
- `templates/` — artifact/task/report templates.

## Runtime policies hiện có

- `acceptance-verification-policy.md`
- `actor-tracking-policy.md`
- `approval-policy.md`
- `daily-reporting-structure-policy.md`
- `decision-policy.md`
- `project-lifecycle-path-policy.md`
- `stale-project-detection-policy.md`
- `verification-level-policy.md`

## Cách dùng

1. Đọc `architecture/SYSTEM-PROMPT.md` và `architecture/WORKFLOW.md`.
2. Nhận yêu cầu dự án.
3. Chuẩn hóa yêu cầu, hỏi rõ khi thiếu.
4. Tạo charter/requirements/plan/task board khi scope được duyệt.
5. Theo dõi execution bằng evidence, issue, risk, change, approval.
6. Chỉ claim trạng thái theo Verification Level có bằng chứng.
7. Tạo final report và lessons learned khi đóng dự án.

## Project folders

Cấu trúc `projects/active/[project-name]/` chỉ được tạo khi có active project mới. Root workspace hiện tại chưa có `projects/`.

## Verification rule

Không claim `tested`, `working`, `deployed`, `secure`, `performant`, `accessible`, `integrated`, hoặc `production-ready` nếu thiếu evidence tương ứng.
