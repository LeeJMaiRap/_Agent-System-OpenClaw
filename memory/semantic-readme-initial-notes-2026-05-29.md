# Semantic README Initial Review Notes - 2026-05-29

## README.md

- Heading: # Agent System
- Files in folder: INDEX.md, README.md, STATUS.md, agents, audits, docs, reports, schemas, skills-library, sources, templates, tests, tools
- Suspects: production-ready
- First lines:

```text
# Agent System

> Current integration rule (2026-05-29): OpenClaw remains workspace core. The one active PM Agent now lives inside Agent-System at `agent-system/agents/software/pm-agent/`. The previous PM Adapter is archived at `agent-system/agents/software/pm-agent-adapter-legacy/`. Old backup path references are historical only; see `memory/rollback-source.md`.
Workspace for building OpenClaw-compatible agent teams, adapted skills, and controlled specialist handoff protocols.

## Important Source-of-Truth Rule

`agent-system/` is an **extension layer**, not a replacement for existing systems.

Canonical PM Agent inside Agent-System:

```text
agent-system/agents/software/pm-agent/
```

PM adapter profile lives at:

```text
```

## agents/README.md

- Heading: # Agent Profiles
- Files in folder: README.md, business, software
- Suspects: none
- First lines:

```text
# Agent Profiles

Phase 1 agent profiles for `agent-system`.

## Profile Structure

Each agent folder contains:

- `AGENT.md` — role, boundaries, inputs, outputs, handoffs.
- `skills.json` — mapped primary/supporting skills.
- `README.md` — short purpose and lifecycle note.

## Phase 1 Agents

### Software Delivery

| Agent | Folder | Primary Skill |
|---|---|---|
```

## agents/business/business-pm-agent/README.md

- Heading: # Business PM Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Business PM Agent; slug=business-pm-agent; status=draft; domain=business
- Suspects: none
- First lines:

```text
# Business PM Agent

Status: draft profile

## Purpose

Coordinates affiliate campaign strategy and specialist handoffs while keeping all external actions behind human approval.

## Primary Skill

```text
../../../skills-library/adapted/affiliate/affiliate-strategy/SKILL.md
```

## Validation

Created after Paper-level validation:

```

## agents/business/content-copy-agent/README.md

- Heading: # Content Copy Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Content Copy Agent; slug=content-copy-agent; status=draft; domain=business
- Suspects: none
- First lines:

```text
# Content Copy Agent

Status: draft profile

This profile belongs to Phase 1 agent-system mapping.

## Purpose

Creates affiliate draft copy packs: hooks, captions, CTAs, short-video text, compliance notes, and test variants.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive input from human, PM, or upstream agent.
2. Load primary skill instructions.
```

## agents/business/market-research-agent/README.md

- Heading: # Market Research Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Market Research Agent; slug=market-research-agent; status=draft; domain=business
- Suspects: none
- First lines:

```text
# Market Research Agent

Status: draft profile

This profile belongs to Phase 4 affiliate/business agent-system mapping.

## Purpose

Researches affiliate niches, audience pain points, trends, competitor/content patterns, keywords, and evidence quality for campaign planning.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive Specialist Task Packet from Business PM Agent or human-approved workflow.
2. Load primary skill instructions.
```

## agents/business/performance-analyst-agent/README.md

- Heading: # Performance Analyst Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Performance Analyst Agent; slug=performance-analyst-agent; status=draft; domain=business
- Suspects: none
- First lines:

```text
# Performance Analyst Agent

Status: draft profile

This profile belongs to Phase 1 agent-system mapping.

## Purpose

Analyzes affiliate metrics, content experiments, CTR, conversion, commission, and recommends next tests/actions.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive input from human, PM, or upstream agent.
2. Load primary skill instructions.
```

## agents/business/product-hunter-agent/README.md

- Heading: # Product Hunter Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Product Hunter Agent; slug=product-hunter-agent; status=draft; domain=business
- Suspects: none
- First lines:

```text
# Product Hunter Agent

Status: draft profile

This profile belongs to Phase 4 affiliate/business agent-system mapping.

## Purpose

Finds, compares, and scores affiliate product candidates/SKUs for campaign planning using evidence-labeled criteria, risk checks, and safe handoff recommendations.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive Specialist Task Packet from Business PM Agent or human-approved workflow.
2. Load primary skill instructions.
```

## agents/software/architect-agent/README.md

- Heading: # Architect Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Architect Agent; slug=architect-agent; status=draft; domain=software
- Suspects: none
- First lines:

```text
# Architect Agent

Status: draft profile

## Purpose

Architect Agent owns architecture briefs, ADRs, module boundaries, API/data boundary notes, and technical risk/handoff guidance.

## Primary Skill

```text
../../../skills-library/adapted/software/software-architecture/SKILL.md
```

## Validation

Created after Paper-level validation:

```

## agents/software/backend-agent/README.md

- Heading: # Backend Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Backend Agent; slug=backend-agent; status=draft; domain=software
- Suspects: none
- First lines:

```text
# Backend Agent

Status: draft profile

This profile belongs to Phase 1 agent-system mapping.

## Purpose

Owns API contracts, validation, service logic, auth/permission boundaries, data model implications, and backend tests.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive input from human, PM, or upstream agent.
2. Load primary skill instructions.
```

## agents/software/frontend-agent/README.md

- Heading: # Frontend Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Frontend Agent; slug=frontend-agent; status=draft; domain=software
- Suspects: none
- First lines:

```text
# Frontend Agent

Status: draft profile

This profile belongs to Phase 1 agent-system mapping.

## Purpose

Owns React/Next.js UI implementation/specification, components, state, forms, client integration, responsive UI, and frontend verification.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive input from human, PM, or upstream agent.
2. Load primary skill instructions.
```

## agents/software/pm-agent-adapter-legacy/README.md

- Heading: # PM Agent Adapter Profile
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=PM Agent Adapter Profile; slug=undefined; status=adapter-draft; domain=software
- Suspects: systems/pm-agent
- First lines:

```text
# PM Agent Adapter Profile

Status: adapter-draft

## Important

Canonical PM Agent already exists and remains unchanged:

```text
systems/pm-agent/
```

This folder is only an adapter/profile inside `agent-system` so future team/delegation design can reference PM Agent safely.

## What changed here

Original draft profile was narrowed from “new PM Agent” to “adapter profile”.

```

## agents/software/pm-agent/README.md

- Heading: # PM Agent - Hướng dẫn sử dụng
- Files in folder: AGENT-SYSTEM-INTEGRATION.md, README.md, STATUS.md, architecture, changelog, eval, prompts, reports, runtime, scripts, skills, templates
- Suspects: production-ready
- First lines:

```text
# PM Agent - Hướng dẫn sử dụng

## Giới thiệu

PM Agent (Lệ) là PM framework chạy trên OpenClaw. Vai trò chính: quản lý dự án bằng tài liệu, task board, policy, evidence, và báo cáo.

Sau cleanup 2026-05-26, PM Agent v1 được giữ như **core framework sạch**. Các mô hình team/specialist-agent cũ đã được bỏ khỏi workflow hiện tại để thiết kế lại sau.

## Mục tiêu

PM Agent có khả năng:
- nhận yêu cầu dự án;
- phân tích và chuẩn hóa yêu cầu;
- tạo bộ tài liệu PM;
- chia task và theo dõi task board;
- kiểm tra evidence trước khi nhận task done;
- theo dõi tiến độ, issue, risk, change;
- tạo báo cáo tổng kết và lessons learned.
```

## agents/software/pm-agent/reports/portfolio/README.md

- Heading: # Portfolio Dashboard Foundation
- Files in folder: README.md, active-projects-dashboard.md, archived-projects-dashboard.md, on-hold-projects-dashboard.md, portfolio-summary.md, stopped-projects-dashboard.md
- Suspects: systems/pm-agent
- First lines:

```text
# Portfolio Dashboard Foundation

## Mục đích
Cung cấp visibility tổng thể về tất cả projects được PM Agent quản lý, không chỉ active projects.

## Phạm vi
- Active projects
- On-hold projects
- Stopped projects
- Archived projects

## Dashboard Structure

### 1. Active Projects
Path: `projects/active/`

**Metrics:**
- Số lượng projects active
```

## agents/software/pm-agent/skills/README.md

- Heading: # PM Agent Skills
- Files in folder: README.md, document-generation, infrastructure, input-normalization, project-operations, voice
- Suspects: production-ready
- First lines:

```text
# PM Agent Skills

Bộ skill lõi cho PM Agent, chia thành 4 nhóm chức năng.

## Cấu trúc

- `input-normalization/` — chuẩn hóa đầu vào thô.
- `document-generation/` — sinh tài liệu PM chuẩn.
- `project-operations/` — vận hành và cập nhật dự án.
- `infrastructure/` — hạ tầng và xuất bản.

## Skill boundary / Ranh giới skill

PM Agent skills trong folder này phục vụ PM/core operations:
- intake and clarification;
- document generation;
- task board and project operation updates;
- reporting and export support;
```

## agents/software/product-agent/README.md

- Heading: # Product Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=Product Agent; slug=product-agent; status=draft; domain=software
- Suspects: none
- First lines:

```text
# Product Agent

Status: draft profile

This profile belongs to Phase 1 agent-system mapping.

## Purpose

Turns ideas into PRD, MVP scope, user stories, acceptance criteria, non-goals, and open questions.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive input from human, PM, or upstream agent.
2. Load primary skill instructions.
```

## agents/software/qa-agent/README.md

- Heading: # QA Agent
- Files in folder: AGENT.md, README.md, skills.json
- Has AGENT.md: yes
- skills.json: agent=QA Agent; slug=qa-agent; status=draft; domain=software
- Suspects: none
- First lines:

```text
# QA Agent

Status: draft profile

This profile belongs to Phase 1 agent-system mapping.

## Purpose

Owns review, debugging support, test planning, acceptance verification, regression risk, and PASS/FAIL/BLOCKED reporting.

## Skill Map

See `skills.json`.

## Typical Flow

1. Receive input from human, PM, or upstream agent.
2. Load primary skill instructions.
```

## tests/2026-05-26-affiliate-strategy-validation/README.md

- Heading: # Affiliate Strategy Validation: 2026-05-26
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: none
- First lines:

```text
# Affiliate Strategy Validation: 2026-05-26

Validate reviewed `affiliate/affiliate-strategy` skill before creating Business PM Agent. Verification Level: Paper.

```

## tests/2026-05-26-agent-handoff-simulation/README.md

- Heading: # Agent Handoff Simulation: 2026-05-26
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: systems/pm-agent
- First lines:

```text
# Agent Handoff Simulation: 2026-05-26

Purpose: validate Phase 1 agent profiles and `skills.json` mapping after PM Agent draft profile was converted into adapter profile.

Canonical PM Agent source:

```text
systems/pm-agent/
```

PM Adapter profile:

```text
agent-system/agents/software/pm-agent/
```

Simulation rule:

```

## tests/2026-05-26-architect-handoff-simulation/README.md

- Heading: # Architect Handoff Simulation: 2026-05-26
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: systems/pm-agent
- First lines:

```text
# Architect Handoff Simulation: 2026-05-26

Purpose: validate Phase 4 Architect Agent integration into software delivery handoff.

Flow:

```text
PM Adapter -> Product Agent -> Architect Agent -> Frontend/Backend Agents -> QA Agent -> PM Adapter
```

Verification Level: Paper.

Rules:

- `systems/pm-agent` remains canonical PM Agent source.
- No code implementation.
- No dependency install.
- No deployment/cloud/secrets/destructive action.
```

## tests/2026-05-26-architecture-skill-validation/README.md

- Heading: # Architecture Skill Validation: 2026-05-26
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: none
- First lines:

```text
# Architecture Skill Validation: 2026-05-26

Purpose: validate reviewed `software/software-architecture` skill before creating Architect Agent profile.

Verification Level: Paper.

No code implementation, dependency install, deployment, cloud, secrets, or external action.

```

## tests/2026-05-26-business-handoff-simulation/README.md

- Heading: # Business Handoff Simulation: 2026-05-26
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: none
- First lines:

```text
# Business Handoff Simulation: 2026-05-26

Purpose: validate Business PM Agent integration with current affiliate specialists.

Flow:

```text
Business PM Agent -> Content Copy Agent -> Performance Analyst Agent -> Human approval gate
```

Verification Level: Paper.

No posting, messaging, ads, payment/API key use, purchases, or external platform writes.

```

## tests/2026-05-26-skill-validation/README.md

- Heading: # Skill Validation Run: 2026-05-26
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: none
- First lines:

```text
# Skill Validation Run: 2026-05-26

Purpose: validate 7 reviewed skills adapted from `awesome-llm-apps` before creating agent profiles and `skills.json` mapping.

Scope:

- Software mini flow:
  - product-requirements
  - project-planning
  - frontend-react
  - backend-api
  - qa-verification
- Affiliate mini flow:
  - content-copywriting
  - performance-analysis

Folder policy:

```

## tests/2026-05-27-full-affiliate-team-simulation/README.md

- Heading: # Full Affiliate Team Simulation: 2026-05-27
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: none
- First lines:

```text
# Full Affiliate Team Simulation: 2026-05-27

Purpose: validate full affiliate/business agent flow at Paper level after adding Market Research Agent and Product Hunter Agent.

Flow:

```text
Business PM Agent
  -> Market Research Agent
  -> Product Hunter Agent
  -> Content Copy Agent
  -> Performance Analyst Agent
  -> Human approval gate
```

Verification Level: Paper.

No posting, messaging, ads, payment/API key use, purchases, add-to-cart, affiliate link changes, scraping behind login, or external platform writes.
```

## tests/2026-05-27-live-readonly-validation-plan/README.md

- Heading: # Live Read-Only Validation Plan: 2026-05-27
- Files in folder: README.md, inputs, outputs, test-report-final.md, test-report.md
- Suspects: none
- First lines:

```text
# Live Read-Only Validation Plan: 2026-05-27

Purpose: define safe scope for moving affiliate campaign validation beyond Paper level without performing external writes or state-changing marketplace/platform actions.

Status: planning only. No live web/marketplace research performed in this folder.

Target flow after approval:

```text
Business PM Agent
  -> Market Research Agent live read-only source check
  -> Product Hunter Agent live read-only product/SKU check
  -> Content Copy Agent claim-limited copy update
  -> Performance Analyst Agent evidence review if metrics available
  -> Human approval gate
```

Verification Level target: Read-only evidence review, still not production/execution ready.
```

## tests/2026-05-27-market-research-validation/README.md

- Heading: # Market Research Agent Validation: 2026-05-27
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: none
- First lines:

```text
# Market Research Agent Validation: 2026-05-27

Purpose: validate Market Research Agent can receive controlled handoff from Business PM Agent and produce Paper-level affiliate market research without external actions.

Flow:

```text
Business PM Agent -> Market Research Agent -> Business PM review -> next handoff recommendation
```

Verification Level: Paper.

No posting, messaging, ads, payment/API key use, purchases, scraping behind login, or external platform writes.

```

## tests/2026-05-27-product-hunter-validation/README.md

- Heading: # Product Hunter Agent Validation: 2026-05-27
- Files in folder: README.md, inputs, outputs, test-report.md
- Suspects: none
- First lines:

```text
# Product Hunter Agent Validation: 2026-05-27

Purpose: validate Product Hunter Agent can receive controlled handoff from Business PM Agent and produce Paper-level affiliate product hunting output using Market Research Agent findings as upstream input.

Flow:

```text
Business PM Agent -> Product Hunter Agent -> Business PM review -> Content Copy / Human approval gate
```

Verification Level: Paper.

No posting, messaging, ads, payment/API key use, purchases, add-to-cart, affiliate link changes, or external platform writes.

```

