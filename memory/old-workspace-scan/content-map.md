# Old workspace content map

Readable files: 357

## ./.claude/settings.local.json

- Size: 247 bytes
- Lines: 13
- JSON top keys: permissions

## ./.openclaw/workspace-state.json

- Size: 69 bytes
- Lines: 5
- JSON top keys: version, setupCompletedAt

## ./AGENTS.md

- Size: 8474 bytes
- Lines: 234
- Headings:
  - # AGENTS.md - Your Workspace
  - ## First Run
  - ## Session Startup
  - ## Memory
  - ### 🧠 MEMORY.md - Your Long-Term Memory
  - ### 📝 Write It Down - No "Mental Notes"!
  - ## Red Lines
  - ## Work Discipline
  - ## External vs Internal
  - ## Group Chats
  - ### 💬 Know When to Speak!
  - ### 😊 React Like a Human!
  - ## Tools
  - ## 💓 Heartbeats - Be Proactive!
  - ### Heartbeat vs Cron: When to Use Each
  - ### 🔄 Memory Maintenance (During Heartbeats)
  - ## Make It Yours
- First content: This folder is home. Treat it that way. / If `BOOTSTRAP.md` exists, that's your birth certificate. Follow it, figure out who you are, then delete it. You won't need it again. / Use runtime-provided startup context first.

## ./BEHAVIOR.md

- Size: 4031 bytes
- Lines: 136
- Headings:
  - # BEHAVIOR.md - Operating Discipline
  - ## Core Rules
  - ## Workspace Changes
  - ## Git Safety
  - ## Assumption Handling
  - ## Simplicity Rules
  - ## Surgical Change Rules
  - ## Goal-Driven Execution
  - ## Agent-Teams Work
  - ## Communication Style
- First content: This file defines how the assistant should act when working inside this OpenClaw workspace. / Inspired by Andrej Karpathy-style LLM coding guardrails: / - think before acting

## ./HEARTBEAT.md

- Size: 193 bytes
- Lines: 8
- Headings:
  - # HEARTBEAT.md Template
  - # Keep this file empty (or with only comments) to skip heartbeat API calls.
  - # Add tasks below when you want the agent to check something periodically.
- First content: ```markdown / ```

## ./IDENTITY.md

- Size: 636 bytes
- Lines: 24
- Headings:
  - # IDENTITY.md - Who Am I?
- First content: _Fill this in during your first conversation. Make it yours._ / - **Name:** /   _(pick something you like)_

## ./README.md

- Size: 3147 bytes
- Lines: 75
- Headings:
  - # OpenClaw Workspace
  - ## Cấu trúc hiện tại
  - ## Quick Navigation
  - ### PM Agent
  - ### Projects
  - ### Ops
  - ### Shared / Memory / State / Tmp
  - ## Quy tắc vận hành
  - ## Git Hygiene
  - ## Current Cleanup Notes
- First content: Workspace gọn sau cleanup lớn ngày 2026-05-26. Mục tiêu hiện tại: giữ khung sườn PM Agent hoạt động tốt, loại bỏ project/app/cache cũ khỏi cây chính. / ```text / workspace/

## ./SOUL.md

- Size: 2627 bytes
- Lines: 53
- Headings:
  - # SOUL.md - Who You Are
  - ## Core Truths
  - ## Boundaries
  - ## Vibe
  - ## Engineering Behavior
  - ## Continuity
- First content: _You're not a chatbot. You're becoming someone._ / Want a sharper version? See [SOUL.md Personality Guide](/concepts/soul). / **Be genuinely helpful, not performatively helpful.** Skip the "Great question!" and "I'd be happy to help!" — just help. Actions speak louder than filler words.

## ./TOOLS.md

- Size: 860 bytes
- Lines: 41
- Headings:
  - # TOOLS.md - Local Notes
  - ## What Goes Here
  - ## Examples
  - ### Cameras
  - ### SSH
  - ### TTS
  - ## Why Separate?
- First content: Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup. / Things like: / - Camera names and locations

## ./USER.md

- Size: 1588 bytes
- Lines: 45
- Headings:
  - # USER.md - About Your Human
  - ## Contact
  - ## Context
- First content: - **Name:** Nguyễn Thành Doanh / - **What to call them:** Anh / Doanh / - **Pronouns:** anh/ông (Vietnamese)

## ./agent-system/INDEX.md

- Size: 4901 bytes
- Lines: 101
- Headings:
  - # Agent System Index
  - ## Source-of-Truth Rule
  - ## Shared Protocol
  - ## Agents
  - ### Software Team
  - ### Business / Affiliate Team
  - ## Adapted Skills
  - ### Software
  - ### Affiliate
  - ## Validation Runs
  - ## Current Known Limitations
  - ## Next Options
- First content: Status: Phase 5 hardening snapshot 2026-05-27 UTC. / Canonical PM Agent remains: / ```text

## ./agent-system/README.md

- Size: 3591 bytes
- Lines: 93
- Headings:
  - # Agent System
  - ## Important Source-of-Truth Rule
  - ## Areas
  - ## Core Rules
  - ## Current Phase 1 Assets
  - ### Reviewed Skills
  - ### Agent Profiles
  - ### Handoff Protocol
  - ### Validation Runs
  - ## Recommended Next Steps
- First content: Workspace for building OpenClaw-compatible agent teams, adapted skills, and controlled specialist handoff protocols. / `agent-system/` is an **extension layer**, not a replacement for existing systems. / Canonical PM Agent remains:

## ./agent-system/STATUS.md

- Size: 7840 bytes
- Lines: 160
- Headings:
  - # Agent System Status
  - ## Overall Status
  - ## Source-of-Truth Rule
  - ## Current Health
  - ## Agents
  - ### Software Team
  - ### Business / Affiliate Team
  - ## Skills
  - ### Software Skills
  - ### Affiliate Skills
  - ## Validation Runs
  - ## Tooling
  - ## Key Docs
  - ## Known Limitations
  - ## Current Blockers
  - ## Recommended Next Steps
- First content: Last updated: 2026-05-29 UTC / Baseline commit: `d2fb0de Add agent-system specialist teams and validation flows` / Latest committed workspace snapshot: `7538f39 Commit workspace snapshot`

## ./agent-system/agents/README.md

- Size: 1366 bytes
- Lines: 44
- Headings:
  - # Agent Profiles
  - ## Profile Structure
  - ## Phase 1 Agents
  - ### Software Delivery
  - ### Business / Affiliate
  - ## Role Boundary
  - ## Validation
- First content: Phase 1 agent profiles for `agent-system`. / Each agent folder contains: / - `AGENT.md` — role, boundaries, inputs, outputs, handoffs.

## ./agent-system/agents/business/business-pm-agent/AGENT.md

- Size: 2179 bytes
- Lines: 78
- Headings:
  - # Business PM Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Specialist Handoff Protocol
  - ## Operating Rules
- First content: Owns affiliate campaign coordination: strategy brief, weekly plan, approval gates, specialist routing, metric review loop, and safe execution tracking. / - `../../../skills-library/adapted/affiliate/affiliate-strategy/SKILL.md` / - `../../../skills-library/adapted/affiliate/content-copywriting/SKILL

## ./agent-system/agents/business/business-pm-agent/README.md

- Size: 421 bytes
- Lines: 22
- Headings:
  - # Business PM Agent
  - ## Purpose
  - ## Primary Skill
  - ## Validation
- First content: Status: draft profile / Coordinates affiliate campaign strategy and specialist handoffs while keeping all external actions behind human approval. / ```text

## ./agent-system/agents/business/business-pm-agent/skills.json

- Size: 1216 bytes
- Lines: 35
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_protocol, safety

## ./agent-system/agents/business/content-copy-agent/AGENT.md

- Size: 2006 bytes
- Lines: 71
- Headings:
  - # Content Copy Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Creates affiliate draft copy packs: hooks, captions, CTAs, short-video text, compliance notes, and test variants. / - ../../../skills-library/adapted/affiliate/content-copywriting/SKILL.md / - ../../../skills-library/adapted/affiliate/affiliate-strategy/SKILL.md

## ./agent-system/agents/business/content-copy-agent/README.md

- Size: 557 bytes
- Lines: 25
- Headings:
  - # Content Copy Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 1 agent-system mapping. / Creates affiliate draft copy packs: hooks, captions, CTAs, short-video text, compliance notes, and test variants.

## ./agent-system/agents/business/content-copy-agent/skills.json

- Size: 1147 bytes
- Lines: 34
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/agents/business/market-research-agent/AGENT.md

- Size: 2637 bytes
- Lines: 78
- Headings:
  - # Market Research Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Researches affiliate niches, audience pain points, trends, competitor/content patterns, keywords, and evidence quality for campaign planning. / - ../../../skills-library/adapted/affiliate/market-research/SKILL.md / - ../../../skills-library/adapted/affiliate/affiliate-strategy/SKILL.md

## ./agent-system/agents/business/market-research-agent/README.md

- Size: 717 bytes
- Lines: 26
- Headings:
  - # Market Research Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 4 affiliate/business agent-system mapping. / Researches affiliate niches, audience pain points, trends, competitor/content patterns, keywords, and evidence quality for campaign planning.

## ./agent-system/agents/business/market-research-agent/skills.json

- Size: 1490 bytes
- Lines: 42
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/agents/business/performance-analyst-agent/AGENT.md

- Size: 2040 bytes
- Lines: 69
- Headings:
  - # Performance Analyst Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Analyzes affiliate metrics, content experiments, CTR, conversion, commission, and recommends next tests/actions. / - ../../../skills-library/adapted/affiliate/performance-analysis/SKILL.md / - ../../../skills-library/adapted/affiliate/content-copywriting/SKILL.md

## ./agent-system/agents/business/performance-analyst-agent/README.md

- Size: 563 bytes
- Lines: 25
- Headings:
  - # Performance Analyst Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 1 agent-system mapping. / Analyzes affiliate metrics, content experiments, CTR, conversion, commission, and recommends next tests/actions.

## ./agent-system/agents/business/performance-analyst-agent/skills.json

- Size: 1167 bytes
- Lines: 34
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/agents/business/product-hunter-agent/AGENT.md

- Size: 3016 bytes
- Lines: 84
- Headings:
  - # Product Hunter Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Finds, compares, and scores affiliate product candidates/SKUs for campaign planning using evidence-labeled criteria, risk checks, and safe handoff recommendations. / - ../../../skills-library/adapted/affiliate/product-hunting/SKILL.md / - ../../../skills-library/adapted/affiliate/market-research/SKI

## ./agent-system/agents/business/product-hunter-agent/README.md

- Size: 759 bytes
- Lines: 26
- Headings:
  - # Product Hunter Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 4 affiliate/business agent-system mapping. / Finds, compares, and scores affiliate product candidates/SKUs for campaign planning using evidence-labeled criteria, risk checks, and safe handoff recommendations.

## ./agent-system/agents/business/product-hunter-agent/skills.json

- Size: 1699 bytes
- Lines: 45
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/agents/software/architect-agent/AGENT.md

- Size: 2497 bytes
- Lines: 77
- Headings:
  - # Architect Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Specialist Handoff Protocol
  - ## Operating Rules
- First content: Owns software architecture decisions for PM-led delivery: system context, stack choices, module boundaries, API/data boundaries, quality attributes, ADRs, risks, and specialist handoff notes. / - `../../../skills-library/adapted/software/software-architecture/SKILL.md` / - `../../../skills-library/a

## ./agent-system/agents/software/architect-agent/README.md

- Size: 611 bytes
- Lines: 32
- Headings:
  - # Architect Agent
  - ## Purpose
  - ## Primary Skill
  - ## Validation
  - ## Handoff
- First content: Status: draft profile / Architect Agent owns architecture briefs, ADRs, module boundaries, API/data boundary notes, and technical risk/handoff guidance. / ```text

## ./agent-system/agents/software/architect-agent/skills.json

- Size: 1246 bytes
- Lines: 33
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_protocol, safety

## ./agent-system/agents/software/backend-agent/AGENT.md

- Size: 1998 bytes
- Lines: 67
- Headings:
  - # Backend Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Owns API contracts, validation, service logic, auth/permission boundaries, data model implications, and backend tests. / - ../../../skills-library/adapted/software/backend-api/SKILL.md / - ../../../skills-library/adapted/software/product-requirements/SKILL.md

## ./agent-system/agents/software/backend-agent/README.md

- Size: 557 bytes
- Lines: 25
- Headings:
  - # Backend Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 1 agent-system mapping. / Owns API contracts, validation, service logic, auth/permission boundaries, data model implications, and backend tests.

## ./agent-system/agents/software/backend-agent/skills.json

- Size: 1126 bytes
- Lines: 34
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/agents/software/frontend-agent/AGENT.md

- Size: 1978 bytes
- Lines: 67
- Headings:
  - # Frontend Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Owns React/Next.js UI implementation/specification, components, state, forms, client integration, responsive UI, and frontend verification. / - ../../../skills-library/adapted/software/frontend-react/SKILL.md / - ../../../skills-library/adapted/software/product-requirements/SKILL.md

## ./agent-system/agents/software/frontend-agent/README.md

- Size: 579 bytes
- Lines: 25
- Headings:
  - # Frontend Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 1 agent-system mapping. / Owns React/Next.js UI implementation/specification, components, state, forms, client integration, responsive UI, and frontend verification.

## ./agent-system/agents/software/frontend-agent/skills.json

- Size: 1117 bytes
- Lines: 34
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/agents/software/pm-agent/AGENT.md

- Size: 3511 bytes
- Lines: 114
- Headings:
  - # PM Agent Adapter Profile
  - ## Canonical Source of Truth
  - ## Canonical Identity
  - ## Adapter Role
  - ## Existing PM Agent Responsibilities
  - ## Extension Skills
  - ## Proposed Future Handoffs
  - ## Mandatory Policies
  - ## Verification Rules
  - ## Task Packet / Report Rules
  - ## Boundaries
  - ## Operating Rules
- First content: The real PM Agent is the existing framework: / ```text / systems/pm-agent/

## ./agent-system/agents/software/pm-agent/README.md

- Size: 887 bytes
- Lines: 40
- Headings:
  - # PM Agent Adapter Profile
  - ## Important
  - ## What changed here
  - ## Audit
  - ## Do Not
- First content: Status: adapter-draft / Canonical PM Agent already exists and remains unchanged: / ```text

## ./agent-system/agents/software/pm-agent/skills.json

- Size: 1377 bytes
- Lines: 38
- JSON top keys: agent, canonical_agent, canonical_identity, status, domain, source_of_truth, extension_skills, proposed_handoff_targets, safety

## ./agent-system/agents/software/product-agent/AGENT.md

- Size: 1890 bytes
- Lines: 68
- Headings:
  - # Product Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Turns ideas into PRD, MVP scope, user stories, acceptance criteria, non-goals, and open questions. / - ../../../skills-library/adapted/software/product-requirements/SKILL.md / - ../../../skills-library/adapted/software/project-planning/SKILL.md

## ./agent-system/agents/software/product-agent/README.md

- Size: 537 bytes
- Lines: 25
- Headings:
  - # Product Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 1 agent-system mapping. / Turns ideas into PRD, MVP scope, user stories, acceptance criteria, non-goals, and open questions.

## ./agent-system/agents/software/product-agent/skills.json

- Size: 1073 bytes
- Lines: 34
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/agents/software/qa-agent/AGENT.md

- Size: 1966 bytes
- Lines: 68
- Headings:
  - # QA Agent
  - ## Role
  - ## Primary Skills
  - ## Supporting Skills
  - ## Inputs
  - ## Outputs
  - ## Boundaries
  - ## Handoffs
  - ## Operating Rules
  - ## Specialist Handoff Protocol
- First content: Owns review, debugging support, test planning, acceptance verification, regression risk, and PASS/FAIL/BLOCKED reporting. / - ../../../skills-library/adapted/software/qa-verification/SKILL.md / - ../../../skills-library/adapted/software/product-requirements/SKILL.md

## ./agent-system/agents/software/qa-agent/README.md

- Size: 555 bytes
- Lines: 25
- Headings:
  - # QA Agent
  - ## Purpose
  - ## Skill Map
  - ## Typical Flow
  - ## Cleanup / Evolution
- First content: Status: draft profile / This profile belongs to Phase 1 agent-system mapping. / Owns review, debugging support, test planning, acceptance verification, regression risk, and PASS/FAIL/BLOCKED reporting.

## ./agent-system/agents/software/qa-agent/skills.json

- Size: 1123 bytes
- Lines: 34
- JSON top keys: agent, slug, status, domain, primary_skills, supporting_skills, handoff_targets, safety, handoff_protocol

## ./agent-system/audits/affaan-ecc.md

- Size: 2160 bytes
- Lines: 87
- Headings:
  - # Audit: affaan-ecc
  - ## Source
  - ## Purpose
  - ## Useful Candidates
  - ## Candidate Agents
  - ## Keep
  - ## Reject or Modify
  - ## Dependencies
  - ## License
  - ## Risk
  - ## Decision
  - ## Notes
  - ## Phase 4 Architecture Skill Notes — 2026-05-26
  - ## Phase 4 Affiliate Strategy Notes
- First content: https://github.com/affaan-m/ecc / Large engineering/agent-harness skill collection covering architecture, audits, testing, automation, and agent systems. / - TBD

## ./agent-system/audits/awesome-llm-apps.md

- Size: 2873 bytes
- Lines: 88
- Headings:
  - # Audit: awesome-llm-apps
  - ## Source
  - ## Purpose
  - ## Inspected Skills
  - ## Useful Candidates
  - ## Candidate Agents
  - ## Keep
  - ## Reject or Modify
  - ## Dependencies
  - ## License
  - ## Risk
  - ## Decision
  - ## Next Step
  - ## Phase 4 Affiliate Strategy Notes
- First content: https://github.com/Shubhamsaboo/awesome-llm-apps / LLM app templates plus `awesome_agent_skills` with general-purpose roles: planner, researcher, coder, writer, analyst. / - `project-planner/SKILL.md`

## ./agent-system/audits/existing-pm-agent.md

- Size: 5929 bytes
- Lines: 154
- Headings:
  - # Audit: Existing PM Agent in `systems/pm-agent`
  - ## Source of Truth
  - ## Existing PM Agent Summary
  - ## Current Status
  - ## Non-negotiable Rules from Existing PM Agent
  - ## Existing Workflow
  - ## Comparison: Existing PM Agent vs Draft Profile
  - ## Keep from Existing PM Agent
  - ## Keep from Draft Profile
  - ## Conflicts
  - ## Controlled Merge / Adapt Plan
  - ## Recommendation
- First content: `systems/pm-agent/` is the canonical PM Agent framework. It must remain unchanged unless Doanh explicitly approves. / Primary files inspected: / - `systems/pm-agent/README.md`

## ./agent-system/audits/gethomepage-homepage.md

- Size: 658 bytes
- Lines: 49
- Headings:
  - # Audit: gethomepage-homepage
  - ## Source
  - ## Purpose
  - ## Useful Candidates
  - ## Candidate Agents
  - ## Keep
  - ## Reject or Modify
  - ## Dependencies
  - ## License
  - ## Risk
  - ## Decision
  - ## Notes
- First content: https://github.com/gethomepage/homepage / Customizable homepage/dashboard app with service integrations. / - TBD

## ./agent-system/audits/greensock-gsap-skills.md

- Size: 712 bytes
- Lines: 49
- Headings:
  - # Audit: greensock-gsap-skills
  - ## Source
  - ## Purpose
  - ## Useful Candidates
  - ## Candidate Agents
  - ## Keep
  - ## Reject or Modify
  - ## Dependencies
  - ## License
  - ## Risk
  - ## Decision
  - ## Notes
- First content: https://github.com/greensock/gsap-skills / Official GSAP skills for animation, React integration, ScrollTrigger, timelines, and performance. / - TBD

## ./agent-system/audits/nexu-open-design.md

- Size: 704 bytes
- Lines: 49
- Headings:
  - # Audit: nexu-open-design
  - ## Source
  - ## Purpose
  - ## Useful Candidates
  - ## Candidate Agents
  - ## Keep
  - ## Reject or Modify
  - ## Dependencies
  - ## License
  - ## Risk
  - ## Decision
  - ## Notes
- First content: https://github.com/nexu-io/open-design / Design/prototype/content skill collection with many visual, creative, report, and ad skills. / - TBD

## ./agent-system/audits/skills-sh.md

- Size: 633 bytes
- Lines: 49
- Headings:
  - # Audit: skills-sh
  - ## Source
  - ## Purpose
  - ## Useful Candidates
  - ## Candidate Agents
  - ## Keep
  - ## Reject or Modify
  - ## Dependencies
  - ## License
  - ## Risk
  - ## Decision
  - ## Notes
- First content: https://www.skills.sh/ / Public Agent Skills directory and leaderboard. / - TBD

## ./agent-system/docs/activation-guide.md

- Size: 8382 bytes
- Lines: 396
- Headings:
  - # Agent System Activation Guide
  - ## Purpose
  - ## Source-of-Truth Rule
  - ## Required Handoff Artifacts
  - ## Universal Activation Checklist
  - ## Verification Levels
  - ## Software Team Activation
  - ### Product Agent
  - ### Architect Agent
  - ### Frontend Agent
  - ### Backend Agent
  - ### QA Agent
  - ## Business / Affiliate Team Activation
  - ### Business PM Agent
  - ### Market Research Agent
  - ### Product Hunter Agent
  - ### Content Copy Agent
  - ### Performance Analyst Agent
  - ## Decision Tree
  - ## Approval Gates
- First content: Status: draft guide / Date: 2026-05-27 UTC / Define when PM Agent / Business PM Agent should activate specialist agents in `agent-system/`, what packet is required, and which approval gates block external or high-risk actions.

## ./agent-system/docs/agent-role-matrix.md

- Size: 5230 bytes
- Lines: 77
- Headings:
  - # Agent Role Matrix
  - ## Purpose
  - ## PM Source-of-Truth Rule
  - ## Software Team
  - ## Affiliate Team
  - ## Shared Handoff Protocol
  - ## Hard Boundaries
- First content: Define role ownership for Phase 1 `agent-system` while preserving existing PM Agent in `systems/pm-agent` as canonical source of truth. / Canonical PM Agent: / ```text

## ./agent-system/docs/integration-roadmap.md

- Size: 4754 bytes
- Lines: 212
- Headings:
  - # Integration Roadmap
  - ## Direction
  - ## Phase 0 — Foundation Skeleton
  - ## Phase 1 — Source Audit + Skill Adaptation
  - ## Phase 2 — Agent Profiles + PM Adapter Alignment
  - ## Phase 3 — Specialist Handoff Protocol
  - ## Phase 4 — Add Missing Core Agents
  - ## Phase 5 — Controlled Pilot with Existing PM Agent
  - ## Phase 6 — Promote Active Workflows
  - ## Ongoing Rules
- First content: `agent-system/` is an extension layer for skills, agent profiles, and specialist handoff design. / Canonical PM Agent remains: / ```text

## ./agent-system/docs/live-validation-lessons.md

- Size: 8323 bytes
- Lines: 389
- Headings:
  - # Live Validation Lessons
  - ## Purpose
  - ## Three Work Modes
  - ### 1. Validation Mode
  - ### 2. Campaign Preparation Mode
  - ### 3. Publish Mode
  - ## Mode Labels Required in Future Artifacts
  - ## Manual Evidence Rules
  - ### Required fields
  - ### Required wording
  - ## Marketplace Evidence Rules
  - ## Claim Safety Rules
  - ## Recommended Future Test Artifact Structure
  - ## Stop Gates
  - ### Stop Gate A: Validation Complete
  - ### Stop Gate B: Marketplace Blocked
  - ### Stop Gate C: Publish Boundary
  - ## Vietnamese Next-Step Proposal Format
  - ## Decision Rule: When to Stop a Product Case
  - ## Lessons from Shopee Case
- First content: Date: 2026-05-29 UTC / Scope: Agent-system process guidance / Source case: `agent-system/tests/2026-05-27-live-readonly-validation-plan/`

## ./agent-system/docs/phase-1-agent-skill-mapping.md

- Size: 4828 bytes
- Lines: 109
- Headings:
  - # Phase 1 Agent Skill Mapping
  - ## Purpose
  - ## Canonical PM Agent Rule
  - ## Software Flow
  - ## Business / Affiliate Flow
  - ## Mapping Table
  - ## PM Adapter Guardrails
  - ## Next Validation Needed
- First content: Map first Phase 1 agent profiles to reviewed skills after validation run, while preserving existing PM Agent in `systems/pm-agent` as canonical source of truth. / Validation evidence: / `agent-system/tests/2026-05-26-skill-validation/test-report.md`

## ./agent-system/docs/safety-policy.md

- Size: 745 bytes
- Lines: 23
- Headings:
  - # Safety Policy
  - ## External Sources
  - ## Agent Actions
  - ## Skill Lifecycle
  - ## Required Evidence
- First content: - Treat all GitHub repos, skill files, scripts, prompts, and docs as untrusted. / - Do not run install scripts or helper scripts before audit. / - Do not copy raw instructions directly into active agents.

## ./agent-system/docs/skill-selection-matrix.md

- Size: 1058 bytes
- Lines: 17
- Headings:
  - # Skill Selection Matrix
- First content: | Domain | Skill | Priority | Candidate Agents | Source Ideas | / |---|---|---:|---|---| / | software | project-planning | P0 | PM Agent | awesome-llm-apps, skills.sh |

## ./agent-system/docs/skills-json-schema.md

- Size: 3185 bytes
- Lines: 161
- Headings:
  - # Agent Skills JSON Schema
  - ## Purpose
  - ## Normal Specialist Profile
  - ## PM Adapter Profile
  - ## Path Rules
  - ## Safety Rules
  - ## Validation
  - ## Notes
- First content: Status: draft / Date: 2026-05-27 UTC / Define expected shape for each agent profile's `skills.json` mapping.

## ./agent-system/docs/specialist-handoff-protocol.md

- Size: 3856 bytes
- Lines: 156
- Headings:
  - # Specialist Handoff Protocol
  - ## Purpose
  - ## Source of Truth
  - ## When to Use
  - ## Required Gate Before Handoff
  - ## Verification Levels
  - ## Handoff Flow
  - ## Role Rules
  - ### PM Agent Adapter
  - ### Product Agent
  - ### Frontend Agent
  - ### Backend Agent
  - ### QA Agent
  - ### Market Research Agent
  - ### Product Hunter Agent
  - ### Business/Affiliate Agents
  - ## Required Artifacts
  - ## Stop Conditions
  - ## Acceptance
- First content: Define controlled way for PM Agent Adapter to hand work to specialist agents while preserving canonical PM Agent in `systems/pm-agent`. / Canonical PM Agent remains: / ```text

## ./agent-system/reports/2026-05-27-consistency-check-report.md

- Size: 1758 bytes
- Lines: 71
- Headings:
  - # Consistency Check Report
  - ## Result
  - ## Tool
  - ## Command
  - ## Output
  - ## Checks Covered
  - ## Notes
  - ## Recommended Next Step
- First content: Date: 2026-05-27 UTC / PASS. / ```text

## ./agent-system/reports/2026-05-27-phase-5-hardening-report.md

- Size: 2248 bytes
- Lines: 99
- Headings:
  - # Phase 5 Hardening Report
  - ## Result
  - ## Scope
  - ## Checks Performed
  - ### JSON validation
  - ### Relative path validation
  - ### Required file validation
  - ### Stale marker scan
  - ## Files Added
  - ## Non-blocking Notes
  - ## Remaining Limitations
  - ## Recommended Next Step
- First content: Date: 2026-05-27 UTC / PASS with non-blocking repository status notes. / Checked `agent-system/` agent profiles, skills mappings, handoff references, Phase 4 test artifacts, and created summary index.

## ./agent-system/reports/2026-05-27-schema-hardening-report.md

- Size: 2031 bytes
- Lines: 86
- Headings:
  - # Schema Hardening Report
  - ## Result
  - ## Files Added / Updated
  - ## Purpose
  - ## Schema Coverage
  - ## Checker Updates
  - ## Command
  - ## Output
  - ## Notes
  - ## Recommended Next Step
- First content: Date: 2026-05-27 UTC / PASS. / ```text

## ./agent-system/schemas/agent-skills.schema.json

- Size: 2435 bytes
- Lines: 75
- JSON top keys: $schema, $id, title, type, required, properties, oneOf, additionalProperties

## ./agent-system/skills-library/adapted/affiliate/affiliate-strategy/SKILL.md

- Size: 4570 bytes
- Lines: 152
- Headings:
  - # Affiliate Strategy
  - ## Purpose
  - ## When to Use
  - ## Do Not Use When
  - ## Required Tools
  - ## Workflow
  - ## Decision Matrix Criteria
  - ## Output Format
  - # Affiliate Strategy Brief: <campaign/niche>
  - ## Strategic Question
  - ## Current State
  - ## Goal
  - ## Constraints / Non-goals
  - ## Audience
  - ## Options
  - ## Decision Matrix
  - ## Recommendation
  - ## Positioning
  - ## Content Pillars
  - ## Campaign Roadmap
- First content: --- / name: affiliate-strategy / description: Use when defining affiliate niche, channel strategy, positioning, content pillars, campaign goals, decision criteria, and safe execution roadmap.

## ./agent-system/skills-library/adapted/affiliate/content-copywriting/SKILL.md

- Size: 1980 bytes
- Lines: 74
- Headings:
  - # Content Copywriting
  - ## Purpose
  - ## Workflow
  - ## Output Format
  - # Affiliate Copy Pack
  - ## Audience
  - ## Product / Offer
  - ## Angle
  - ## Hooks
  - ## Caption Variants
  - ## CTA Variants
  - ## Risk / Compliance Notes
  - ## Recommended Test
  - ## Platform Notes
  - ## Safety
  - ## Verification
- First content: --- / name: content-copywriting / description: Use when writing affiliate hooks, captions, product descriptions, CTAs, post variants, email/message drafts, or marketing content.

## ./agent-system/skills-library/adapted/affiliate/market-research/SKILL.md

- Size: 5015 bytes
- Lines: 158
- Headings:
  - # market-research
  - ## Purpose
  - ## When to Use
  - ## Do Not Use When
  - ## Required Inputs
  - ## Allowed Sources
  - ## Workflow
  - ## Output Format
  - # Market Research Report: <niche/category>
  - ## Research Question
  - ## Inputs / Assumptions
  - ## Sources Checked
  - ## Audience Pain Points
  - ## Keywords / Phrases
  - ## Competitor & Content Patterns
  - ## Opportunity Angles
  - ## Opportunity Scorecard
  - ## Risks / Compliance Notes
  - ## Open Questions
  - ## Recommended Handoff
- First content: --- / name: market-research / description: Research affiliate niches, trends, competitors, customer pain points, keywords, channels, and evidence quality before campaign planning.

## ./agent-system/skills-library/adapted/affiliate/performance-analysis/SKILL.md

- Size: 2048 bytes
- Lines: 87
- Headings:
  - # Performance Analysis
  - ## Purpose
  - ## Metrics
  - ## Workflow
  - ## Output Format
  - # Affiliate Performance Report
  - ## Date Range
  - ## Data Quality Notes
  - ## Top Metrics
  - ## Winners
  - ## Underperformers
  - ## Insights
  - ## Next Experiments
  - ## Actions
  - ## Data Handling
  - ## Safety
  - ## Verification
- First content: --- / name: performance-analysis / description: Use when analyzing affiliate metrics, content experiments, CTR, conversion, orders, commission, and next optimization actions.

## ./agent-system/skills-library/adapted/affiliate/product-hunting/SKILL.md

- Size: 5719 bytes
- Lines: 156
- Headings:
  - # product-hunting
  - ## Purpose
  - ## When to Use
  - ## Do Not Use When
  - ## Required Inputs
  - ## Allowed Sources
  - ## Workflow
  - ## Output Format
  - # Product Hunting Report: <category/campaign>
  - ## Decision Needed
  - ## Inputs / Assumptions
  - ## Product Criteria
  - ## Candidates Reviewed
  - ## Risk Screen
  - ## Scorecard
  - ## Shortlist
  - ## Claims Allowed / Not Allowed
  - ## Open Questions
  - ## Recommended Handoff
  - ## Safety Rules
- First content: --- / name: product-hunting / description: Find, compare, and score affiliate product candidates by fit, evidence, offer quality, commission, reviews, risk, and content potential.

## ./agent-system/skills-library/adapted/affiliate/short-video-script/SKILL.md

- Size: 2107 bytes
- Lines: 72
- Headings:
  - # short-video-script
  - ## Purpose
  - ## When to Use
  - ## Do Not Use When
  - ## Required Tools
  - ## Workflow
  - ## Safety
  - ## Expected Output
  - ## Verification
  - ## Adaptation Notes
- First content: --- / name: short-video-script / description: Create TikTok/Reels/Shorts scripts with hook, demo flow, voiceover, shot list, caption, and hashtags.

## ./agent-system/skills-library/adapted/software/backend-api/SKILL.md

- Size: 1742 bytes
- Lines: 64
- Headings:
  - # Backend API
  - ## Purpose
  - ## Workflow
  - ## API Contract Format
  - ## Endpoint
  - ## Request
  - ## Response
  - ## Errors
  - ## Auth / Permissions
  - ## Data / Side Effects
  - ## Tests
  - ## Safety
  - ## Verification
- First content: --- / name: backend-api / description: Use when designing or implementing backend API endpoints, validation, service logic, auth boundaries, error contracts, and integration tests.

## ./agent-system/skills-library/adapted/software/frontend-react/SKILL.md

- Size: 2171 bytes
- Lines: 63
- Headings:
  - # Frontend React
  - ## Purpose
  - ## Workflow
  - ## Preferred Patterns
  - ## Output Format
  - ## Frontend Change Summary
  - ## Safety
  - ## Verification
- First content: --- / name: frontend-react / description: Use when implementing React/Next.js frontend UI, components, state, forms, client API integration, responsive layout, and frontend verification.

## ./agent-system/skills-library/adapted/software/product-requirements/SKILL.md

- Size: 2603 bytes
- Lines: 115
- Headings:
  - # Product Requirements
  - ## Purpose
  - ## When to Use
  - ## Do Not Use When
  - ## Required Tools
  - ## Workflow
  - ## Output Format
  - # PRD: <feature/product>
  - ## Summary
  - ## Problem
  - ## Target Users
  - ## Goals
  - ## Non-goals
  - ## Success Metrics
  - ## Scope
  - ### MVP
  - ### Should Have
  - ### Later
  - ## User Stories
  - ## Functional Requirements
- First content: --- / name: product-requirements / description: Use when turning product ideas into PRD, user stories, acceptance criteria, MVP scope, constraints, risks, and handoff-ready requirements.

## ./agent-system/skills-library/adapted/software/project-planning/SKILL.md

- Size: 2066 bytes
- Lines: 78
- Headings:
  - # Project Planning
  - ## Purpose
  - ## When to Use
  - ## Workflow
  - ## Output Format
  - # Project Plan: <name>
  - ## Goal
  - ## Success Criteria
  - ## Constraints / Non-goals
  - ## Milestones
  - ## Phases and Tasks
  - ## Dependency Map
  - ## Risks and Mitigations
  - ## Open Questions
  - ## Next Actions
  - ## Safety
  - ## Verification
- First content: --- / name: project-planning / description: Use when planning software work, breaking a project into milestones/tasks, mapping dependencies, estimating effort, or defining verification steps.

## ./agent-system/skills-library/adapted/software/qa-verification/SKILL.md

- Size: 2091 bytes
- Lines: 78
- Headings:
  - # QA Verification
  - ## Purpose
  - ## Review Priority
  - ## Debugging Workflow
  - ## Output Format
  - # QA / Review Report
  - ## Scope
  - ## Critical Issues
  - ## High Priority Issues
  - ## Medium Priority Issues
  - ## Test Plan
  - ## Debug Notes / Root Cause
  - ## Acceptance Status
  - ## Evidence
  - ## Recommendations
  - ## Safety
  - ## Verification
- First content: --- / name: qa-verification / description: Use when reviewing code, debugging failures, creating test plans, verifying acceptance criteria, or producing regression/quality reports.

## ./agent-system/skills-library/adapted/software/software-architecture/SKILL.md

- Size: 4711 bytes
- Lines: 150
- Headings:
  - # Software Architecture
  - ## Purpose
  - ## When to Use
  - ## Do Not Use When
  - ## Required Tools
  - ## Workflow
  - ## Architecture Decision Rules
  - ## Output Format
  - # Architecture Brief: <project/feature>
  - ## Context
  - ## Goals
  - ## Non-goals
  - ## Assumptions
  - ## Constraints
  - ## Recommended Architecture
  - ## System Context
  - ## Module Boundaries
  - ## Data Model
  - ## API / Contract Notes
  - ## Quality Attributes
- First content: --- / name: software-architecture / description: Use when designing web app architecture, stack choices, module boundaries, API/data boundaries, ADRs, technical risks, and specialist handoff specs.

## ./agent-system/templates/specialist-task-packet.md

- Size: 2320 bytes
- Lines: 108
- Headings:
  - # Specialist Task Packet
  - ## Task Identity
  - ## Canonical PM References
  - ## Objective
  - ## Context
  - ## Role Boundary
  - ## Scope
  - ### Allowed files/folders
  - ### Forbidden actions
  - ## Requirements
  - ## Verification
  - ## Rollback / Recovery
  - ## Stop Conditions
  - ## Expected Output
- First content: Derived from canonical PM Agent template: / ```text / systems/pm-agent/templates/task-packet-template.md

## ./agent-system/templates/specialist-task-report.md

- Size: 1710 bytes
- Lines: 90
- Headings:
  - # Specialist Task Report
  - ## Task Identity
  - ## Summary
  - ## Scope Performed
  - ## Role Boundary Check
  - ## Files Changed
  - ## Commands / Checks Run
  - ## Verification
  - ## Claim Control
  - ## Blockers
  - ## Risks / Caveats
  - ## Rollback / Recovery Notes
  - ## Handoff Back to PM Adapter
- First content: Derived from canonical PM Agent template: / ```text / systems/pm-agent/templates/task-report-template.md

## ./agent-system/tests/2026-05-26-affiliate-strategy-validation/README.md

- Size: 162 bytes
- Lines: 4
- Headings:
  - # Affiliate Strategy Validation: 2026-05-26
- First content: Validate reviewed `affiliate/affiliate-strategy` skill before creating Business PM Agent. Verification Level: Paper.

## ./agent-system/tests/2026-05-26-affiliate-strategy-validation/inputs/strategy-input.md

- Size: 574 bytes
- Lines: 25
- Headings:
  - # Affiliate Strategy Test Input
  - ## Scenario
  - ## Context
  - ## Expected
- First content: Create a 2-week draft affiliate campaign strategy for budget phone tripod. / - Audience: Vietnamese beginner content creators. / - Channels: TikTok, Facebook, Shopee affiliate.

## ./agent-system/tests/2026-05-26-affiliate-strategy-validation/outputs/strategy-brief.md

- Size: 3823 bytes
- Lines: 126
- Headings:
  - # Affiliate Strategy Brief: Budget Phone Tripod Campaign
  - ## Strategic Question
  - ## Current State
  - ## Goal
  - ## Constraints / Non-goals
  - ## Audience
  - ## Options
  - ## Decision Matrix
  - ## Recommendation
  - ## Positioning
  - ## Content Pillars
  - ## Campaign Roadmap
  - ## Experiment Backlog
  - ## Metrics Plan
  - ## Risks / Compliance Notes
  - ## Approval Gates
  - ## Handoffs
  - ## Open Questions
- First content: Which channel/angle should a one-person affiliate operator test first for budget phone tripod promotion? / - Product category: budget phone tripod. / - Audience: Vietnamese beginner content creators.

## ./agent-system/tests/2026-05-26-affiliate-strategy-validation/test-report.md

- Size: 764 bytes
- Lines: 35
- Headings:
  - # Test Report: Affiliate Strategy Skill
  - ## Skill
  - ## Result
  - ## Evidence
  - ## Checks
  - ## Recommendation
- First content: Date: 2026-05-26 UTC / `agent-system/skills-library/adapted/affiliate/affiliate-strategy/SKILL.md` / PASS: Paper-level strategy artifact validation.

## ./agent-system/tests/2026-05-26-agent-handoff-simulation/README.md

- Size: 683 bytes
- Lines: 28
- Headings:
  - # Agent Handoff Simulation: 2026-05-26
- First content: Purpose: validate Phase 1 agent profiles and `skills.json` mapping after PM Agent draft profile was converted into adapter profile. / Canonical PM Agent source: / ```text

## ./agent-system/tests/2026-05-26-agent-handoff-simulation/inputs/affiliate-handoff-input.md

- Size: 959 bytes
- Lines: 38
- Headings:
  - # Affiliate Handoff Simulation Input
  - ## Scenario
  - ## Constraints
  - ## Expected Handoff
  - ## Sample Metrics
  - ## Pass Criteria
- First content: User asks: "Prepare draft affiliate campaign for budget phone tripod, then analyze small sample metrics. Draft only, no posting." / - No auto-post. / - No customer messaging.

## ./agent-system/tests/2026-05-26-agent-handoff-simulation/inputs/software-handoff-input.md

- Size: 917 bytes
- Lines: 35
- Headings:
  - # Software Handoff Simulation Input
  - ## Scenario
  - ## Constraints
  - ## Expected Handoff
  - ## Pass Criteria
- First content: User asks: "Build MVP internal task board for one-person team. Need requirements, plan, UI/API split, and QA readiness. No implementation yet." / - PM Agent source of truth remains `systems/pm-agent`. / - `agent-system/agents/software/pm-agent` is adapter only.

## ./agent-system/tests/2026-05-26-agent-handoff-simulation/outputs/affiliate-handoff-transcript.md

- Size: 3302 bytes
- Lines: 116
- Headings:
  - # Affiliate Handoff Transcript Simulation
  - ## 1. Content Copy Agent Output Summary
  - ## 2. Performance Analyst Output Summary
  - ## 3. Human Approval Gate
- First content: Verification Level: Paper / No external posting, messaging, ads, payment, API key usage, or platform write. / ---

## ./agent-system/tests/2026-05-26-agent-handoff-simulation/outputs/handoff-issues.md

- Size: 1090 bytes
- Lines: 23
- Headings:
  - # Handoff Issues
  - ## Software Flow
  - ## Affiliate Flow
  - ## Cross-flow Issue
- First content: | Issue | Severity | Owner | Resolution | / |---|---|---|---| / | Persistence decision missing | High for implementation | PM Adapter / Doanh | Ask decision before task packet |

## ./agent-system/tests/2026-05-26-agent-handoff-simulation/outputs/software-handoff-transcript.md

- Size: 5422 bytes
- Lines: 257
- Headings:
  - # Software Handoff Transcript Simulation
  - ## 1. Existing PM Agent Rule Check
  - ## 2. PM Agent Adapter Intake
  - ## 3. Product Agent Output Summary
  - ## 4. PM Agent Adapter Planning Summary
  - ## 5. Frontend Agent Output Summary
  - ## 6. Backend Agent Output Summary
  - ## 7. QA Agent Review
  - ## Critical Issues
  - ## High Priority Issues
  - ## Acceptance Status
  - ## 8. PM Adapter Acceptance Summary
- First content: Verification Level: Paper / No runtime commands, installs, deployment, or edits to `systems/pm-agent`. / ---

## ./agent-system/tests/2026-05-26-agent-handoff-simulation/test-report.md

- Size: 2801 bytes
- Lines: 114
- Headings:
  - # Test Report: Agent Handoff Simulation
  - ## Purpose
  - ## Scope
  - ## Files
  - ## Results
  - ## Software Flow Decision
  - ## Affiliate Flow Decision
  - ## Issues
  - ## Recommendation
- First content: Date: 2026-05-26 UTC / Validate Phase 1 agent profiles and mapping after PM profile was corrected into adapter profile that preserves existing PM Agent in `systems/pm-agent`. / Tested flows:

## ./agent-system/tests/2026-05-26-architect-handoff-simulation/README.md

- Size: 510 bytes
- Lines: 20
- Headings:
  - # Architect Handoff Simulation: 2026-05-26
- First content: Purpose: validate Phase 4 Architect Agent integration into software delivery handoff. / Flow: / ```text

## ./agent-system/tests/2026-05-26-architect-handoff-simulation/inputs/architect-handoff-input.md

- Size: 970 bytes
- Lines: 34
- Headings:
  - # Architect Handoff Simulation Input
  - ## Scenario
  - ## Constraints
  - ## Expected Flow
  - ## Pass Criteria
- First content: User wants a tiny internal task board MVP. Need to verify new Architect Agent fits between Product and implementation specialists. / - Existing PM Agent in `systems/pm-agent` remains canonical. / - PM Adapter only bridges handoff.

## ./agent-system/tests/2026-05-26-architect-handoff-simulation/outputs/architect-handoff-transcript.md

- Size: 4255 bytes
- Lines: 229
- Headings:
  - # Architect Handoff Transcript Simulation
  - ## 1. PM Adapter Intake
  - ## 2. Product Agent Result
  - ## 3. Architect Agent Result
  - ## 4. Frontend Agent Result
  - ## 5. Backend Agent Result
  - ## 6. QA Agent Result
  - ## 7. PM Adapter Acceptance Summary
- First content: Verification Level: Paper / No code implementation, dependency install, deployment, cloud, secrets, or destructive action. / ---

## ./agent-system/tests/2026-05-26-architect-handoff-simulation/outputs/handoff-issues.md

- Size: 693 bytes
- Lines: 13
- Headings:
  - # Architect Handoff Issues
  - ## Decision
- First content: | Issue | Severity | Owner | Resolution | / |---|---|---|---| / | Persistence decision unresolved | High for implementation | PM Adapter / Doanh | decide local state vs localStorage vs API/DB |

## ./agent-system/tests/2026-05-26-architect-handoff-simulation/test-report.md

- Size: 1137 bytes
- Lines: 42
- Headings:
  - # Test Report: Architect Handoff Simulation
  - ## Result
  - ## Flow Tested
  - ## Checks
  - ## Blocked For Implementation
  - ## Recommendation
- First content: Date: 2026-05-26 UTC / PASS: Paper-level handoff simulation with Architect Agent included. / ```text

## ./agent-system/tests/2026-05-26-architecture-skill-validation/README.md

- Size: 273 bytes
- Lines: 8
- Headings:
  - # Architecture Skill Validation: 2026-05-26
- First content: Purpose: validate reviewed `software/software-architecture` skill before creating Architect Agent profile. / Verification Level: Paper. / No code implementation, dependency install, deployment, cloud, secrets, or external action.

## ./agent-system/tests/2026-05-26-architecture-skill-validation/inputs/architecture-input.md

- Size: 640 bytes
- Lines: 33
- Headings:
  - # Architecture Skill Test Input
  - ## Scenario
  - ## Product requirements
  - ## Constraints
  - ## Expected output
- First content: Design architecture for tiny internal task board MVP. / - create task with title, description, status, priority / - list tasks

## ./agent-system/tests/2026-05-26-architecture-skill-validation/outputs/architecture-brief.md

- Size: 5366 bytes
- Lines: 182
- Headings:
  - # Architecture Brief: Tiny Internal Task Board MVP
  - ## Context
  - ## Goals
  - ## Non-goals
  - ## Assumptions
  - ## Constraints
  - ## Recommended Architecture
  - ## System Context
  - ## Module Boundaries
  - ## Data Model
  - ## API / Contract Notes
  - ## Quality Attributes
  - ## ADRs
  - ### ADR-001: Use modular monolith / single app shape
  - ### ADR-002: Defer durable backend persistence
  - ## Risks and Mitigations
  - ## Specialist Handoff
  - ### Frontend Agent
  - ### Backend Agent
  - ### QA Agent
- First content: A one-person internal task board needs local/demo-ready planning for create/list/update/filter tasks. Implementation not requested yet. / - Keep architecture small and reversible. / - Separate UI, task domain model, API contract, and storage decision.

## ./agent-system/tests/2026-05-26-architecture-skill-validation/test-report.md

- Size: 919 bytes
- Lines: 42
- Headings:
  - # Test Report: Software Architecture Skill
  - ## Skill
  - ## Result
  - ## Evidence
  - ## Checks
  - ## Blockers
  - ## Recommendation
- First content: Date: 2026-05-26 UTC / `agent-system/skills-library/adapted/software/software-architecture/SKILL.md` / PASS: Paper-level architecture artifact validation.

## ./agent-system/tests/2026-05-26-business-handoff-simulation/README.md

- Size: 357 bytes
- Lines: 14
- Headings:
  - # Business Handoff Simulation: 2026-05-26
- First content: Purpose: validate Business PM Agent integration with current affiliate specialists. / Flow: / ```text

## ./agent-system/tests/2026-05-26-business-handoff-simulation/inputs/business-handoff-input.md

- Size: 1053 bytes
- Lines: 41
- Headings:
  - # Business Handoff Simulation Input
  - ## Scenario
  - ## Team Available
  - ## Constraints
  - ## Sample Metrics
  - ## Pass Criteria
- First content: Plan a safe draft affiliate campaign for budget phone tripod. / - Business PM Agent / - Content Copy Agent

## ./agent-system/tests/2026-05-26-business-handoff-simulation/outputs/business-handoff-transcript.md

- Size: 4338 bytes
- Lines: 168
- Headings:
  - # Business Handoff Transcript Simulation
  - ## 1. Business PM Agent Strategy
  - ## 2. Content Copy Agent Draft
  - ## 3. Performance Analyst Report
  - ## 4. Human Approval Gate
- First content: Verification Level: Paper / No external actions performed. / ---

## ./agent-system/tests/2026-05-26-business-handoff-simulation/outputs/handoff-issues.md

- Size: 810 bytes
- Lines: 14
- Headings:
  - # Business Handoff Issues
  - ## Decision
- First content: | Issue | Severity | Owner | Resolution | / |---|---|---|---| / | Market Research Agent not created yet | Medium | Future Phase 4 | Create after market-research skill review |

## ./agent-system/tests/2026-05-26-business-handoff-simulation/test-report.md

- Size: 909 bytes
- Lines: 40
- Headings:
  - # Test Report: Business Handoff Simulation
  - ## Result
  - ## Flow Tested
  - ## Checks
  - ## Gaps
  - ## Recommendation
- First content: Date: 2026-05-26 UTC / PASS: Paper-level business handoff simulation. / ```text

## ./agent-system/tests/2026-05-26-skill-validation/README.md

- Size: 585 bytes
- Lines: 23
- Headings:
  - # Skill Validation Run: 2026-05-26
- First content: Purpose: validate 7 reviewed skills adapted from `awesome-llm-apps` before creating agent profiles and `skills.json` mapping. / Scope: / - Software mini flow:

## ./agent-system/tests/2026-05-26-skill-validation/inputs/affiliate-mini-flow-input.md

- Size: 929 bytes
- Lines: 34
- Headings:
  - # Affiliate Mini Flow Input
  - ## Scenario
  - ## Audience
  - ## Constraints
  - ## Metrics Sample
  - ## Acceptance
- First content: Promote a budget phone tripod for TikTok/Shopee affiliate. / - Vietnamese beginner content creators. / - Wants cheap gear for stable video.

## ./agent-system/tests/2026-05-26-skill-validation/inputs/software-mini-flow-input.md

- Size: 753 bytes
- Lines: 30
- Headings:
  - # Software Mini Flow Input
  - ## Scenario
  - ## Requirements
  - ## Constraints
  - ## Acceptance
- First content: Build a tiny internal task board for a 1-person team. / - User can create task with title, description, status, priority. / - User can list tasks.

## ./agent-system/tests/2026-05-26-skill-validation/outputs/affiliate-mini-flow.md

- Size: 5195 bytes
- Lines: 155
- Headings:
  - # Affiliate Mini Flow Output
  - # Affiliate Copy Pack
  - ## Audience
  - ## Product / Offer
  - ## Angle
  - ## Hooks
  - ## Caption Variants
  - ### Variant A — Problem/Solution
  - ### Variant B — Beginner Setup
  - ### Variant C — Honest Review Style Draft
  - ## CTA Variants
  - ## Risk / Compliance Notes
  - ## Recommended Test
  - # Affiliate Performance Report
  - ## Date Range
  - ## Data Quality Notes
  - ## Top Metrics
  - ## Winners
  - ## Underperformers
  - ## Insights
- First content: Validated skills: / - content-copywriting / - performance-analysis

## ./agent-system/tests/2026-05-26-skill-validation/outputs/software-mini-flow.md

- Size: 8448 bytes
- Lines: 375
- Headings:
  - # Software Mini Flow Output
  - # PRD: Tiny Internal Task Board
  - ## Summary
  - ## Problem
  - ## Target Users
  - ## Goals
  - ## Non-goals
  - ## Success Metrics
  - ## Scope
  - ### MVP
  - ### Should Have
  - ### Later
  - ## User Stories
  - ## Functional Requirements
  - ## Non-functional Requirements
  - ## UX Notes
  - ## Data / API Notes
  - ## Risks and Assumptions
  - ## QA Acceptance Checklist
  - ## Handoff Recommendation
- First content: Validated skills: / - product-requirements / - project-planning

## ./agent-system/tests/2026-05-26-skill-validation/test-report.md

- Size: 3091 bytes
- Lines: 103
- Headings:
  - # Test Report: Reviewed Skill Validation
  - ## Purpose
  - ## Folder
  - ## Skills Tested
  - ## Software Mini Flow Result
  - ## Affiliate Mini Flow Result
  - ## Observations
  - ## Issues Found
  - ## Decision
  - ## Next Step
- First content: Date: 2026-05-26 UTC / Validate 7 reviewed adapted skills before creating agent profiles and `skills.json` mapping. / `agent-system/tests/2026-05-26-skill-validation/`

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/README.md

- Size: 524 bytes
- Lines: 19
- Headings:
  - # Full Affiliate Team Simulation: 2026-05-27
- First content: Purpose: validate full affiliate/business agent flow at Paper level after adding Market Research Agent and Product Hunter Agent. / Flow: / ```text

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/inputs/full-affiliate-team-input.md

- Size: 2234 bytes
- Lines: 81
- Headings:
  - # Full Affiliate Team Simulation Input
  - ## Scenario
  - ## Team Available
  - ## Upstream Validation Artifacts
  - ## Constraints
  - ## Product Direction From Product Hunter
  - ## Market Direction From Market Research
  - ## Sample Metrics For Performance Analyst
  - ## Pass Criteria
- First content: Plan a safe draft affiliate campaign for budget phone tripod using full business team roles. / - Business PM Agent / - Market Research Agent

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/outputs/content-copy-pack.md

- Size: 3917 bytes
- Lines: 96
- Headings:
  - # Content Copy Pack: Budget Phone Tripod
  - ## Inputs Used
  - ## Hook Variants
  - ### P2 Extendable Floor Phone Tripod — primary
  - ### P1 Mini Desk Phone Tripod — secondary
  - ## Caption Drafts
  - ### Caption A — shaky video fix / P2
  - ### Caption B — beginner setup checklist / P1 or P2
  - ### Caption C — desk setup / P1
  - ## CTA Variants
  - ## Claims Allowed
  - ## Claims Not Allowed
  - ## Test Recommendation
  - ## Approval Gate
- First content: Verification Level: Paper / External Actions: none / Status: draft-only, not approved for posting

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/outputs/full-affiliate-team-transcript.md

- Size: 3502 bytes
- Lines: 162
- Headings:
  - # Full Affiliate Team Transcript Simulation
  - ## 1. Business PM Agent Plan
  - ## 2. Market Research Agent Summary
  - ## 3. Product Hunter Agent Summary
  - ## 4. Content Copy Agent Summary
  - ## 5. Performance Analyst Agent Summary
  - ## 6. Human Approval Gate
- First content: Verification Level: Paper / External Actions: none / ---

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/outputs/performance-analysis.md

- Size: 1917 bytes
- Lines: 50
- Headings:
  - # Performance Analysis: Full Affiliate Team Simulation
  - ## Computed Metrics
  - ## Formulas
  - ## Findings
  - ## Limitations
  - ## Recommended Next Experiments
  - ## Status
- First content: Verification Level: Paper / External Actions: none / Data Source: sample metrics from `../inputs/full-affiliate-team-input.md`

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/outputs/specialist-task-packets.md

- Size: 3092 bytes
- Lines: 157
- Headings:
  - # Specialist Task Packets: Full Affiliate Team Simulation
  - ## 1. Market Research Agent Packet
  - ## 2. Product Hunter Agent Packet
  - ## 3. Content Copy Agent Packet
  - ## 4. Performance Analyst Agent Packet
- First content: Verification Level: Paper / Date: 2026-05-27 UTC / Requester: Business PM Agent

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/outputs/specialist-task-reports.md

- Size: 1853 bytes
- Lines: 71
- Headings:
  - # Specialist Task Reports: Full Affiliate Team Simulation
  - ## Market Research Agent Report
  - ## Product Hunter Agent Report
  - ## Content Copy Agent Report
  - ## Performance Analyst Agent Report
  - ## Overall Handoff Recommendation
- First content: Verification Level: Paper / Date: 2026-05-27 UTC / External Actions: none

## ./agent-system/tests/2026-05-27-full-affiliate-team-simulation/test-report.md

- Size: 2983 bytes
- Lines: 86
- Headings:
  - # Test Report: Full Affiliate Team Simulation
  - ## Result
  - ## Flow Tested
  - ## Scope
  - ## Checks
  - ## Artifacts
  - ## Gaps
  - ## Recommendation
- First content: Date: 2026-05-27 UTC / PASS: Paper-level full affiliate team simulation. / ```text

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/README.md

- Size: 742 bytes
- Lines: 21
- Headings:
  - # Live Read-Only Validation Plan: 2026-05-27
- First content: Purpose: define safe scope for moving affiliate campaign validation beyond Paper level without performing external writes or state-changing marketplace/platform actions. / Status: planning only. No live web/marketplace research performed in this folder. / Target flow after approval:

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/inputs/live-readonly-validation-scope.md

- Size: 4619 bytes
- Lines: 141
- Headings:
  - # Live Read-Only Validation Scope
  - ## Objective
  - ## Current Paper-Level Inputs
  - ## Candidate Validation Questions
  - ## Allowed Read-Only Sources
  - ## Forbidden Actions
  - ## Data Fields To Collect
  - ## Evidence Storage
  - ## Stop Conditions
  - ## Approval Needed
- First content: Define approved/forbidden live read-only validation boundaries before checking public marketplace/web sources for budget phone tripod affiliate campaign. / Market Research validation: / ```text

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/approval-checklist.md

- Size: 1308 bytes
- Lines: 55
- Headings:
  - # Approval Checklist: Live Read-Only Validation
  - ## Approval Scope
  - ## Source Limits
  - ## Output Required
  - ## Approval Statement Template
- First content: Before any live web/marketplace validation, Doanh should approve this checklist. / - [ ] Allow public read-only web/marketplace/source checks. / - [ ] No login.

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-market-research-evidence.md

- Size: 5083 bytes
- Lines: 61
- Headings:
  - # Live Market Research Evidence: Budget Phone Tripod
  - ## Scope Used
  - ## Evidence Table
  - ## Market Signal Summary
  - ## Claim Boundaries
  - ## Result
- First content: Date accessed: 2026-05-29 UTC / Verification level: Live read-only public web evidence / External actions: none beyond public page fetch/search

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-product-hunting-evidence.md

- Size: 5681 bytes
- Lines: 85
- Headings:
  - # Live Product Hunting Evidence: Budget Phone Tripod
  - ## Scope Used
  - ## Candidate Mapping
  - ## Product / Source Evidence
  - ## Product Decision
  - ### Primary remains: P2-style extendable floor phone tripod
  - ### Secondary remains: P1-style mini/desk tripod
  - ### Hold remains: P3 ring-light tripod kit
  - ### Avoid primary remains: P4 ultra-cheap phone stand
  - ## Allowed Product Claims After This Evidence
  - ## Result
- First content: Date accessed: 2026-05-29 UTC / Verification level: Live read-only public web evidence / External actions: none beyond public page fetch/search

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-readonly-validation-report.md

- Size: 5716 bytes
- Lines: 146
- Headings:
  - # Live Read-Only Validation Report
  - ## Executive Result
  - ## Inputs Used
  - ## Sources Checked
  - ## Business PM Decision
  - ### 1. Primary angle
  - ### 2. Secondary angle
  - ### 3. Product shortlist
  - ## Claims Allowed
  - ## Claims Not Allowed Yet
  - ## Risks
  - ## Recommended Next Step
  - ## Final Status
- First content: Date: 2026-05-29 UTC / Verification level: Live read-only public web evidence / External actions: no login, no cart, no purchase, no messages, no social actions, no posting, no API/payment use

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-copy-brief.md

- Size: 7087 bytes
- Lines: 217
- Headings:
  - # Live Validation Copy Brief
  - ## Purpose
  - ## Source Evidence Used
  - ## Product Direction
  - ## Approved Claim Bank
  - ## Blocked Claims
  - ## Hook Set A: Shaky Video Fix
  - ### Hook A1
  - ### Hook A2
  - ### Hook A3
  - ## Hook Set B: Beginner Setup Checklist
  - ### Hook B1
  - ### Hook B2
  - ### Hook B3
  - ## Short Caption Draft
  - ## Product Selection Checklist
  - ## Copy QA Checklist
  - ## Recommended Next Agent Step
  - ## Status
- First content: Date: 2026-05-29 UTC / Owner role: Content Copy Agent / Status: Internal draft only — not approved for publishing

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-copy-safety-review.md

- Size: 7740 bytes
- Lines: 155
- Headings:
  - # Live Validation Copy Safety Review
  - ## Review Verdict
  - ## Evidence Boundary
  - ## Line-by-Line Review
  - ## Safer Revised Hooks
  - ### Hook A1 — Revised
  - ### Hook A2 — Keep
  - ### Hook A3 — Revised
  - ### Hook B1 — Keep With Source Discipline
  - ### Hook B2 — Keep
  - ### Hook B3 — Keep
  - ## Safer Revised Short Caption
  - ## Required Pre-Publish Gates
  - ## Blocked Until More Evidence
  - ## Final Recommendation
- First content: Date: 2026-05-29 UTC / Reviewer role: Claim Safety / Challenge Agent / Input reviewed: `live-validation-copy-brief.md`

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-destination-page-source-check.md

- Size: 7011 bytes
- Lines: 191
- Headings:
  - # Live Validation Destination Page Source Check
  - ## Discovery Path
  - ## Destination URL
  - ## Access Result
  - ## Visible Product Identity
  - ## Visible Commercial Facts
  - ## Visible Specs
  - ## Match Against Current Final Draft
  - ## Claim Safety Impact
  - ### Allowed claims for Amazon destination alone
  - ### Claims to remove from Amazon-only publish copy
  - ### Claims requiring same-day recheck
  - ## Verdict
  - ## Recommended Next Step
  - ## Business PM Decision Needed After Adjustment
- First content: Date checked: 2026-05-29T01:10:37Z / Mode: B agent-discovered public URL search / Status: PASS WITH EDITS

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-destination-page-validation-plan.md

- Size: 6777 bytes
- Lines: 237
- Headings:
  - # Live Validation Destination Page Validation Plan
  - ## Purpose
  - ## Why This Step Matters
  - ## Validation Modes
  - ### Mode A — User-provided URL
  - ### Mode B — Agent-discovered public URL
  - ### Mode C — Manual screenshot evidence
  - ## Strict Scope
  - ## Stop Conditions
  - ## Data To Collect
  - ## Spec Match Rules
  - ### Pass
  - ### Pass With Edits
  - ### Fail
  - ## Output Artifact Template
  - # Live Validation Destination Page Source Check
  - ## Destination URL
  - ## Access Result
  - ## Visible Product Identity
  - ## Visible Commercial Facts
- First content: Date: 2026-05-29 UTC / Owner role: Business PM + Product Hunter + Claim Safety / Status: Plan only — no marketplace/affiliate destination validated yet

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-product-url-source-check.md

- Size: 7210 bytes
- Lines: 194
- Headings:
  - # Live Validation Product URL Source Check
  - ## Product URL
  - ## Product Identity
  - ## Visible Specs
  - ## Product Claims Allowed For This URL
  - ## Claims Still Blocked
  - ## Copy Impact
  - ### Keep in publish-candidate draft
  - ### Edit where exact source is used
  - ## Updated Pre-Publish Checklist For This Product
  - ## Risk Rating
  - ## Recommendation
- First content: Date checked: 2026-05-29T00:58:37Z / Owner role: Product Hunter Agent / Status: Exact public product URL checked — source usable with limitations

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-publish-candidate-draft.md

- Size: 7700 bytes
- Lines: 225
- Headings:
  - # Live Validation Publish Candidate Draft
  - ## Publication Status
  - ## Source Dependency
  - ## Draft Variant 1 — Shaky Video Fix
  - ### Hook
  - ### Body
  - ### CTA
  - ### Required Source Checks
  - ## Draft Variant 2 — Beginner Setup Checklist
  - ### Hook
  - ### Body
  - ### CTA
  - ### Required Source Checks
  - ## Draft Variant 3 — Solo Filming / Livestream Angle
  - ### Hook
  - ### Body
  - ### CTA
  - ### Required Source Checks
  - ## Short Caption Candidate
  - ## Visual / Creative Notes
- First content: Date: 2026-05-29 UTC / Owner role: Content Copy Agent + Product Hunter source check / Status: Internal publish-candidate draft — **not approved for external publishing**

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-business-pm-decision.md

- Size: 9030 bytes
- Lines: 284
- Headings:
  - # Gói quyết định Business PM cho Shopee TSS PRO 1M80
  - ## Mục tiêu
  - ## Sản phẩm đang xét
  - ## Quá trình đã làm
  - ## Artifacts đã tạo
  - ## Điểm mạnh của sản phẩm/link này
  - ## Rủi ro còn lại
  - ### 1. Dữ liệu từ ảnh, không phải agent đọc trực tiếp
  - ### 2. Giá và đánh giá thay đổi theo thời gian
  - ### 3. Vận chuyển có điểm cần chú ý
  - ### 4. Shop chưa đủ cơ sở để gọi là uy tín
  - ### 5. Listing có claim quảng cáo mạnh
  - ## Trạng thái nội dung hiện tại
  - ## 3 lựa chọn cho Business PM
  - ### Lựa chọn 1 — Giữ làm mẫu nội bộ
  - ### Lựa chọn 2 — Kiểm tra lại Shopee đúng ngày rồi tạo gói đăng
  - ### Lựa chọn 3 — Tìm sản phẩm khác tốt hơn
  - ## Đề xuất của agent
  - ## Quyết định cần từ Business PM
  - ## Bước tiếp theo nếu chọn Lựa chọn 2
- First content: Ngày tạo: 2026-05-29 UTC / Vai trò quyết định: Business PM / Trạng thái: Chờ quyết định của Business PM

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-destination-source-check.md

- Size: 6510 bytes
- Lines: 213
- Headings:
  - # Kiểm tra trang đích Shopee
  - ## Mục tiêu kiểm tra
  - ## Hành động đã làm
  - ### 1. Tìm qua DuckDuckGo HTML
  - ## Kết quả truy cập trực tiếp Shopee
  - ### Link sản phẩm Yunteng
  - ### Link danh sách Shopee
  - ## Thông tin sản phẩm thấy được
  - ## So với nội dung hiện tại
  - ## Kết luận
  - ## Khuyến nghị tiếp theo bằng tiếng Việt
  - ### Hướng 1 — Doanh gửi link Shopee cụ thể kèm ảnh chụp màn hình
  - ### Hướng 2 — Chuyển sang nguồn bán công khai khác dễ đọc hơn
  - ## Quyết định hiện tại
  - ## Kết quả cuối
- First content: Ngày kiểm tra: 2026-05-29T01:20Z / Chế độ: Agent tự tìm link Shopee công khai, số lượng thấp, chỉ đọc / Trạng thái: BỊ CHẶN / CẦN LINK HOẶC ẢNH TỪ DOANH

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-destination-validation-plan.md

- Size: 7944 bytes
- Lines: 245
- Headings:
  - # Kế hoạch kiểm tra trang đích Shopee cho thị trường Việt Nam
  - ## Mục tiêu
  - ## Vì sao không nên dùng Amazon làm trang đích chính cho Việt Nam
  - ## Vì sao nên ưu tiên Shopee
  - ## Rủi ro khi kiểm tra Shopee bằng agent
  - ## Cách kiểm tra đề xuất
  - ### Cách A — Anh cung cấp link Shopee cụ thể
  - ### Cách B — Agent tự tìm link Shopee công khai
  - ### Cách C — Anh gửi ảnh chụp màn hình hoặc thông tin thủ công
  - ## Dữ liệu cần thu thập từ Shopee
  - ## Quy tắc so khớp với bản nội dung hiện tại
  - ### Đạt
  - ### Đạt nhưng cần sửa nội dung
  - ### Không đạt
  - ## Kết quả cần tạo khi kiểm tra thật
  - # Kiểm tra trang đích Shopee
  - ## Link Shopee
  - ## Kết quả truy cập
  - ## Thông tin sản phẩm thấy được
  - ## Thông số thấy được
- First content: Ngày tạo: 2026-05-29 UTC / Vai trò phụ trách: Business PM + Product Hunter + Claim Safety / Trạng thái: Kế hoạch, chưa kiểm tra link Shopee cụ thể

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-draft-safety-review.md

- Size: 7960 bytes
- Lines: 205
- Headings:
  - # Kiểm tra an toàn bản nháp Shopee TSS PRO 1M80
  - ## Kết luận nhanh
  - ## Các điểm cần sửa
  - ### 1. Cụm `đặt máy cao hơn, gọn hơn`
  - ### 2. Cụm `đây là sản phẩm đáng kiểm tra`
  - ### 3. Cụm `có remote Bluetooth`
  - ### 4. Giá và đánh giá
  - ## Rà soát từng phần
  - ## Bản sửa an toàn đề xuất
  - ### Hook 1 sửa
  - ### Hook 2 sửa
  - ### Caption ngắn sửa
  - ### Câu giá/đánh giá an toàn
  - ## Claim bị chặn tiếp tục
  - ## Kết luận
  - ## Bước tiếp theo đề xuất bằng tiếng Việt
- First content: Ngày kiểm tra: 2026-05-29 UTC / Vai trò: Claim Safety Agent / File được kiểm tra: `live-validation-shopee-source-specific-draft.md`

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-final-draft.md

- Size: 7985 bytes
- Lines: 185
- Headings:
  - # Bản cuối nội bộ cho Shopee TSS PRO 1M80
  - ## Mục tiêu
  - ## Link sản phẩm
  - ## Bằng chứng đang dùng
  - ## Bản nội dung 1 — An toàn, không nhắc giá cụ thể
  - ### Hook
  - ### Nội dung
  - ### Câu kết
  - ## Bản nội dung 2 — Có nhắc giá/đánh giá cho nội bộ
  - ### Hook
  - ### Nội dung
  - ### Câu kết
  - ## Bản checklist ngắn
  - ## Caption ngắn an toàn
  - ## Caption rất ngắn
  - ## Câu không được dùng
  - ## Việc cần kiểm tra lại trước khi đăng
  - ## Đánh giá sẵn sàng
  - ## Bước tiếp theo đề xuất bằng tiếng Việt
- First content: Ngày tạo: 2026-05-29 UTC / Nguồn bằng chứng: link Shopee + ảnh chụp màn hình do Doanh cung cấp / Cơ sở an toàn: `live-validation-shopee-draft-safety-review.md`

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-manual-evidence-source-check.md

- Size: 10925 bytes
- Lines: 330
- Headings:
  - # Kiểm tra Shopee bằng link và ảnh chụp do Doanh cung cấp
  - ## Vì sao dùng bằng chứng thủ công
  - ## Link Shopee
  - ## Thông tin sản phẩm thấy trong ảnh
  - ### Tên sản phẩm
  - ### Giá
  - ### Đánh giá
  - ### Vận chuyển
  - ### Bảo vệ người mua
  - ### Phân loại sản phẩm
  - ### Shop
  - ## Thông số / mô tả sản phẩm thấy trong ảnh
  - ### Từ ảnh sản phẩm
  - ### Từ phần mô tả sản phẩm
  - ## Review người mua thấy trong ảnh
  - ## So với nội dung hiện tại
  - ## Kết luận
  - ## Claim được phép dùng sau khi sửa
  - ## Claim không được dùng
  - ## Bước tiếp theo đề xuất bằng tiếng Việt
- First content: Ngày nhận bằng chứng: 2026-05-29T01:26Z / Người cung cấp: Doanh / Chế độ kiểm tra: Link Shopee + ảnh chụp màn hình do người dùng cung cấp

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-prepublish-recheck-plan.md

- Size: 8742 bytes
- Lines: 341
- Headings:
  - # Kế hoạch kiểm tra lại Shopee trước khi đăng
  - ## Mục tiêu
  - ## Sản phẩm cần kiểm tra
  - ## Khi nào cần kiểm tra
  - ## Checklist Doanh cần kiểm tra trên Shopee
  - ### 1. Link còn mở được không
  - ### 2. Sản phẩm còn đúng tên không
  - ### 3. Giá hiện tại
  - ### 4. Biến thể đang chọn
  - ### 5. Đánh giá hiện tại
  - ### 6. Số đã bán
  - ### 7. Vận chuyển
  - ### 8. Mô tả còn ghi remote Bluetooth không
  - ### 9. Mô tả còn ghi chiều cao 1m80 không
  - ### 10. Mô tả còn ghi xoay 360° không
  - ### 11. Gấp gọn khoảng/hơn 30cm còn thấy không
  - ### 12. Shop và rủi ro shop
  - ## Ảnh cần gửi lại cho agent nếu muốn tạo gói đăng
  - ## Nếu dữ liệu thay đổi thì sửa nội dung thế nào
  - ## Điều kiện để tạo gói đăng
- First content: Ngày tạo: 2026-05-29 UTC / Vai trò: Business PM + Product Hunter + Claim Safety / Trạng thái: Kế hoạch kiểm tra thủ công trước khi tạo gói đăng

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-shopee-source-specific-draft.md

- Size: 8506 bytes
- Lines: 225
- Headings:
  - # Bản nội dung riêng cho link Shopee TSS PRO 1M80
  - ## Mục tiêu
  - ## Link sản phẩm
  - ## Dữ liệu được phép dùng từ ảnh
  - ## Bản nháp 1 — Nội dung an toàn, không nhắc giá
  - ### Hook
  - ### Thân bài
  - ### Kêu gọi hành động
  - ## Bản nháp 2 — Có nhắc giá/đánh giá nhưng kèm cảnh báo thời gian
  - ### Hook
  - ### Thân bài
  - ### Kêu gọi hành động
  - ## Bản nháp 3 — Dạng checklist ngắn
  - ## Caption ngắn an toàn
  - ## Caption rất ngắn
  - ## Bản so sánh với nội dung Aureday cũ
  - ## Câu cần tránh trong nội dung Shopee
  - ## Kiểm tra trước khi đăng
  - ## Trạng thái
  - ## Bước tiếp theo đề xuất bằng tiếng Việt
- First content: Ngày tạo: 2026-05-29 UTC / Nguồn bằng chứng: link Shopee + ảnh chụp màn hình do Doanh cung cấp / Trạng thái: Bản nháp nội bộ, chưa được phép đăng công khai

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-source-specific-draft.md

- Size: 8290 bytes
- Lines: 240
- Headings:
  - # Live Validation Source-Specific Draft
  - ## Exact Product Source
  - ## Verified Source Facts Used In Copy
  - ## Source-Specific Draft Variant 1 — Shaky Video Fix
  - ### Hook
  - ### Body
  - ### CTA
  - ### Safety status
  - ## Source-Specific Draft Variant 2 — Beginner Checklist
  - ### Hook
  - ### Body
  - ### CTA
  - ### Safety status
  - ## Source-Specific Draft Variant 3 — Solo Filming / Livestream
  - ### Hook
  - ### Body
  - ### CTA
  - ### Safety status
  - ## Short Caption Candidate — Source-Specific
  - ## Very Short Caption Candidate
- First content: Date: 2026-05-29 UTC / Owner role: Content Copy Agent + Claim Safety final pass / Status: Source-specific internal draft — **not approved for external publishing**

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-source-specific-final-draft.md

- Size: 7722 bytes
- Lines: 209
- Headings:
  - # Live Validation Source-Specific Final Draft
  - ## Exact Product Source
  - ## Verified Facts Used
  - ## Caution Notes
  - ## Final Draft Variant 1 — Shaky Video Fix
  - ### Hook
  - ### Body
  - ### CTA
  - ## Final Draft Variant 2 — Beginner Checklist
  - ### Hook
  - ### Body
  - ### CTA
  - ## Final Draft Variant 3 — Solo Filming / Livestream
  - ### Hook
  - ### Body
  - ### CTA
  - ## Final Short Caption
  - ## Final Very Short Caption
  - ## Safe Visual Direction
  - ## Do Not Publish Unless
- First content: Date: 2026-05-29 UTC / Owner role: Content Copy Agent / Safety basis: `live-validation-source-specific-final-safety-review.md`

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/live-validation-source-specific-final-safety-review.md

- Size: 6783 bytes
- Lines: 196
- Headings:
  - # Live Validation Source-Specific Final Safety Review
  - ## Final Verdict
  - ## Required Edits Before External Use
  - ### Edit 1 — Soften `setup khung hình cố định hơn`
  - ### Edit 2 — Soften `có đủ cho góc quay`
  - ### Edit 3 — Keep source claim attribution near brand facts
  - ### Edit 4 — Avoid `so giá/review` unless channel has marketplace context
  - ## Line Review
  - ## Approved External-Safer Text After Edits
  - ### Safer Variant 1 Body Excerpt
  - ### Safer Variant 2 Checklist Line
  - ### Safer CTA
  - ### Safer Short Caption
  - ### Safer Very Short Caption
  - ## Still Blocked
  - ## Final Gate Status
  - ## Recommendation
- First content: Date: 2026-05-29 UTC / Reviewer role: Final Claim Safety Agent / Input reviewed: `live-validation-source-specific-draft.md`

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/outputs/specialist-task-packets.md

- Size: 2883 bytes
- Lines: 121
- Headings:
  - # Specialist Task Packets: Live Read-Only Validation Plan
  - ## 1. Market Research Agent Packet
  - ## 2. Product Hunter Agent Packet
  - ## 3. Business PM Review Packet
- First content: Status: planning only / Verification Level: Read-only evidence review target / External Actions: forbidden

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/test-report-final.md

- Size: 12354 bytes
- Lines: 437
- Headings:
  - # Final Test Report: Live Read-Only Validation + Shopee Case
  - ## Executive Summary
  - ## Was this aligned with the original agent-system direction?
  - ## Original Agent-System Direction Being Tested
  - ## Timeline of Validation
  - ### 1. Planning-only phase
  - ### 2. Actual live read-only validation
  - ### 3. Product/source validation
  - ### 4. Market-fit correction: Shopee over Amazon
  - ### 5. Shopee validation
  - ### 6. Shopee-specific content drafting
  - ### 7. Business PM decision and prepublish plan
  - ## Did the system drift from the original goal?
  - ### What stayed aligned
  - ### What created drift risk
  - ### Corrective action
  - ## Agent-System Capabilities Proven
  - ### 1. Safe live-read-only behavior
  - ### 2. Evidence-based product reasoning
  - ### 3. Market-context correction
- First content: Date: 2026-05-29 UTC / Scope: Agent-system validation, not public campaign execution / Final status: PASS WITH LIMITATIONS

## ./agent-system/tests/2026-05-27-live-readonly-validation-plan/test-report.md

- Size: 1437 bytes
- Lines: 51
- Headings:
  - # Test Report: Live Read-Only Validation Plan
  - ## Result
  - ## Scope
  - ## Checks
  - ## Artifacts
  - ## Remaining Blocker
  - ## Recommended Next Step
- First content: Date: 2026-05-27 UTC / PASS: live read-only validation plan created. / No live web/marketplace validation was performed.

## ./agent-system/tests/2026-05-27-market-research-validation/README.md

- Size: 475 bytes
- Lines: 14
- Headings:
  - # Market Research Agent Validation: 2026-05-27
- First content: Purpose: validate Market Research Agent can receive controlled handoff from Business PM Agent and produce Paper-level affiliate market research without external actions. / Flow: / ```text

## ./agent-system/tests/2026-05-27-market-research-validation/inputs/market-research-input.md

- Size: 1703 bytes
- Lines: 58
- Headings:
  - # Market Research Validation Input
  - ## Scenario
  - ## Team Available
  - ## Constraints
  - ## Known Context From Previous Business Simulation
  - ## Pass Criteria
- First content: Research a safe draft affiliate campaign opportunity for budget phone tripod. / - Business PM Agent / - Market Research Agent

## ./agent-system/tests/2026-05-27-market-research-validation/outputs/market-research-report.md

- Size: 6587 bytes
- Lines: 136
- Headings:
  - # Market Research Report: Budget Phone Tripod
  - ## Research Question
  - ## Inputs / Assumptions
  - ## Sources Checked
  - ## Audience Pain Points
  - ## Keywords / Phrases
  - ## Competitor & Content Patterns
  - ## Opportunity Angles
  - ## Opportunity Scorecard
  - ## Risks / Compliance Notes
  - ## Open Questions
  - ## Recommended Handoff
  - ## Status
- First content: Verification Level: Paper / External Actions: none / Research Mode: provided/project context only; live web search unavailable

## ./agent-system/tests/2026-05-27-market-research-validation/outputs/specialist-task-packet.md

- Size: 2399 bytes
- Lines: 90
- Headings:
  - # Specialist Task Packet: Market Research Agent
  - ## Metadata
  - ## Objective
  - ## Role Boundary
  - ## Allowed Files / Folders
  - ## Forbidden Actions
  - ## Evidence Required
  - ## Preflight
  - ## Stop Conditions
  - ## Expected Output
- First content: - Requester: Business PM Agent / - Assignee: Market Research Agent / - Date: 2026-05-27 UTC

## ./agent-system/tests/2026-05-27-market-research-validation/outputs/specialist-task-report.md

- Size: 1643 bytes
- Lines: 64
- Headings:
  - # Specialist Task Report: Market Research Agent
  - ## Metadata
  - ## Work Completed
  - ## Files Created
  - ## Evidence
  - ## Limitations
  - ## Blockers
  - ## Recommended Next Owner
  - ## External Actions
- First content: - Assignee: Market Research Agent / - Requester: Business PM Agent / - Date: 2026-05-27 UTC

## ./agent-system/tests/2026-05-27-market-research-validation/test-report.md

- Size: 2441 bytes
- Lines: 76
- Headings:
  - # Test Report: Market Research Agent Validation
  - ## Result
  - ## Flow Tested
  - ## Scope
  - ## Checks
  - ## Artifacts
  - ## Gaps
  - ## Recommendation
- First content: Date: 2026-05-27 UTC / PASS: Paper-level Market Research Agent validation. / ```text

## ./agent-system/tests/2026-05-27-product-hunter-validation/README.md

- Size: 530 bytes
- Lines: 14
- Headings:
  - # Product Hunter Agent Validation: 2026-05-27
- First content: Purpose: validate Product Hunter Agent can receive controlled handoff from Business PM Agent and produce Paper-level affiliate product hunting output using Market Research Agent findings as upstream input. / Flow: / ```text

## ./agent-system/tests/2026-05-27-product-hunter-validation/inputs/product-hunter-input.md

- Size: 2122 bytes
- Lines: 56
- Headings:
  - # Product Hunter Validation Input
  - ## Scenario
  - ## Upstream Input
  - ## Candidate Products
  - ## Constraints
  - ## Pass Criteria
- First content: Score candidate products for a safe draft affiliate campaign around budget phone tripods. / Use Market Research Agent validation output: / ```text

## ./agent-system/tests/2026-05-27-product-hunter-validation/outputs/product-hunting-report.md

- Size: 7172 bytes
- Lines: 143
- Headings:
  - # Product Hunting Report: Budget Phone Tripod Campaign
  - ## Decision Needed
  - ## Inputs / Assumptions
  - ## Product Criteria
  - ## Candidates Reviewed
  - ## Risk Screen
  - ## Scorecard
  - ## Shortlist
  - ## Claims Allowed / Not Allowed
  - ## Open Questions
  - ## Recommended Handoff
  - ## Status
- First content: Verification Level: Paper / External Actions: none / Research Mode: provided/project context only; candidates are synthetic validation data, not live listings

## ./agent-system/tests/2026-05-27-product-hunter-validation/outputs/specialist-task-packet.md

- Size: 2721 bytes
- Lines: 95
- Headings:
  - # Specialist Task Packet: Product Hunter Agent
  - ## Metadata
  - ## Objective
  - ## Role Boundary
  - ## Allowed Files / Folders
  - ## Forbidden Actions
  - ## Evidence Required
  - ## Preflight
  - ## Stop Conditions
  - ## Expected Output
- First content: - Requester: Business PM Agent / - Assignee: Product Hunter Agent / - Date: 2026-05-27 UTC

## ./agent-system/tests/2026-05-27-product-hunter-validation/outputs/specialist-task-report.md

- Size: 1920 bytes
- Lines: 75
- Headings:
  - # Specialist Task Report: Product Hunter Agent
  - ## Metadata
  - ## Work Completed
  - ## Files Created
  - ## Candidates Reviewed
  - ## Evidence
  - ## Shortlist Result
  - ## Limitations
  - ## Blockers
  - ## Recommended Next Owner
  - ## External Actions
- First content: - Assignee: Product Hunter Agent / - Requester: Business PM Agent / - Date: 2026-05-27 UTC

## ./agent-system/tests/2026-05-27-product-hunter-validation/test-report.md

- Size: 2731 bytes
- Lines: 80
- Headings:
  - # Test Report: Product Hunter Agent Validation
  - ## Result
  - ## Flow Tested
  - ## Scope
  - ## Checks
  - ## Artifacts
  - ## Gaps
  - ## Recommendation
- First content: Date: 2026-05-27 UTC / PASS: Paper-level Product Hunter Agent validation. / ```text

## ./agent-system/tools/check-consistency.py

- Size: 10941 bytes
- Lines: 300
- First lines: #!/usr/bin/env python3 / """Check agent-system structural consistency. / Usage: /   python3 agent-system/tools/check-consistency.py / Checks:

## ./memory/.dreams/short-term-recall.json

- Size: 30008 bytes
- Lines: 669
- JSON top keys: version, updatedAt, entries

## ./memory/2026-05-26.md

- Size: 9194 bytes
- Lines: 81
- First content: [Tue 2026-05-26 08:35 UTC] Doanh approved direction 2 for agent-system: audit awesome-llm-apps first, adapt 6 foundation skills before agent profiles. / [Tue 2026-05-26 08:44 UTC] Doanh approved next step: test reviewed skills. If temp files needed, create a dedicated folder to keep test artifacts f

## ./memory/2026-05-29.md

- Size: 260 bytes
- Lines: 3
- First content: [Fri 2026-05-29 01:14 UTC] Doanh requested that every future next-step proposal explain clearly in Vietnamese what the next step does and why, because too many English terms make the meaning hard to understand. Apply this especially during agent-system work.

## ./memory/README.md

- Size: 388 bytes
- Lines: 17
- Headings:
  - # memory
  - ## Dùng cho
  - ## Không dùng cho
- First content: Ghi chú continuity cho workspace/session. / - Daily notes: `YYYY-MM-DD.md` nếu cần ghi log làm việc. / - Operational notes nhỏ cần nhớ giữa các session.

## ./memory/pm-agent-observations.md

- Size: 483 bytes
- Lines: 17
- Headings:
  - # PM Agent Observations
  - ## Entries
- First content: Long-term observation log for PM Agent framework and managed projects. / Use this file for distilled observations worth carrying across sessions: / - important project outcomes;

## ./ops/README.md

- Size: 1680 bytes
- Lines: 47
- Headings:
  - # Ops
  - ## Cấu trúc
  - ## Hiện có
  - ### Document tooling
  - ### Voice exports
  - ## Quy tắc
- First content: Vùng vận hành: scripts, state, tmp, exports, logs. Không phải source framework chính. / ```text / ops/

## ./ops/openclaw-fullpower/README.md

- Size: 1221 bytes
- Lines: 67
- Headings:
  - # OpenClaw full-power Docker instance
  - ## Security
  - ## Ports
  - ## Run from WSL host, not from inside current OpenClaw container
  - ## Verify
  - ## Stop / remove
- First content: Creates a second OpenClaw container with Docker socket mounted. / `/var/run/docker.sock:/var/run/docker.sock` gives this OpenClaw instance root-equivalent control over Docker host: / - create containers

## ./ops/openclaw-fullpower/docker-compose.yml

- Size: 1420 bytes
- Lines: 36
- First lines: services: /   openclaw-fullpower: /     image: ${OPENCLAW_IMAGE:-openclaw:latest} /     container_name: ${OPENCLAW_CONTAINER_NAME:-openclaw-fullpower} /     restart: unless-stopped

## ./ops/scripts/document/md_to_pdf.js

- Size: 1790 bytes
- Lines: 70
- First lines: const fs = require('fs'); / const { PDFDocument, StandardFonts, rgb } = require('pdf-lib'); / function wrapText(text, maxChars) { /   const lines = []; /   for (const rawLine of text.split(/\r?\n/)) {

## ./ops/scripts/document/md_to_pdf_root_legacy.py

- Size: 1170 bytes
- Lines: 48
- First lines: from pathlib import Path / from textwrap import wrap / from reportlab.lib.pagesizes import A4 / from reportlab.pdfbase import pdfmetrics / from reportlab.pdfbase.cidfonts import UnicodeCIDFont

## ./ops/scripts/document/package-lock.json

- Size: 4170 bytes
- Lines: 123
- JSON top keys: name, lockfileVersion, requires, packages

## ./ops/scripts/document/package.json

- Size: 141 bytes
- Lines: 9
- JSON top keys: dependencies

## ./ops/state/pm-agent/README.md

- Size: 445 bytes
- Lines: 20
- Headings:
  - # PM Agent Runtime State
  - ## Use for
  - ## Do not use for
- First content: Small runtime snapshots for PM Agent operations. / - report selector state; / - last-run timestamps;

## ./projects/README.md

- Size: 1568 bytes
- Lines: 50
- Headings:
  - # Projects
  - ## Cấu trúc hiện tại
  - ## Khi tạo project mới
  - ## Quy tắc
  - ## Index files
- First content: Vùng này là skeleton cho các project do PM Agent quản lý. / Sau cleanup 2026-05-26, project code/artifact cũ đã được đưa khỏi cây chính. Hiện `projects/` chỉ giữ `_index/` để duy trì portfolio view và làm điểm bắt đầu cho project mới. / ```text

## ./projects/_index/active-projects.md

- Size: 553 bytes
- Lines: 15
- Headings:
  - # Active Projects Dashboard
  - ## Current Active Projects
  - ## Notes
- First content: Sau cleanup 2026-05-26, workspace chính chưa có project folder active nào trong `projects/active/`. / Không có active project trong cây chính. / - Project folders cũ đã được đưa khỏi workspace chính trong đợt cleanup, có thể phục hồi từ `.trash/cleanup-20260526-013600` nếu cần.

## ./projects/_index/archived-projects.md

- Size: 593 bytes
- Lines: 19
- Headings:
  - # Archived Projects Dashboard
  - ## Current Archived Projects
  - ## Historical Reference
  - ## Archive Rules
- First content: Sau cleanup 2026-05-26, archived project folders không còn nằm trong cây chính. / Không có archived project folder trong cây chính. / Archived project data cũ đã được đưa vào `.trash/cleanup-20260526-013600` để rollback thủ công nếu cần.

## ./projects/_index/cross-project-risk-view.md

- Size: 1016 bytes
- Lines: 33
- Headings:
  - # Cross-Project Risk View
  - ## Current Observation
  - ## Risk Patterns Cần Theo Dõi Khi Có Project Mới
  - ### 1. Source-of-truth drift
  - ### 2. Done giả / verification yếu
  - ### 3. Active nhưng thực tế đã dừng
  - ### 4. Actor attribution yếu
  - ## Next Step
- First content: Sau cleanup 2026-05-26, workspace chính chưa có nhiều project để phân tích risk xuyên project. / - Không có project folder active trong cây chính. / - PM Agent framework vẫn còn đầy đủ tại `systems/pm-agent/`.

## ./projects/_index/portfolio-dashboard.md

- Size: 1131 bytes
- Lines: 32
- Headings:
  - # Portfolio Dashboard
  - ## Portfolio Summary
  - ## Current Portfolio Health
  - ## Recommended Actions
  - ## Status Legend
- First content: Snapshot portfolio sau cleanup workspace ngày 2026-05-26. / - **Total project folders in main tree:** 0 / - **Active:** 0

## ./projects/_index/projects-registry.md

- Size: 1031 bytes
- Lines: 38
- Headings:
  - # Projects Registry
  - ## Current Projects In Main Tree
  - ## Historical / Restorable Data
  - ## Project Status Legend
  - ## Priority Legend
  - ## Quick Stats
- First content: Registry sau cleanup workspace ngày 2026-05-26. / Không có project folder active/on-hold/archived trong cây chính. / | ID | Name | Owner | PM | Status | Priority | Created | Updated |

## ./shared/README.md

- Size: 715 bytes
- Lines: 23
- Headings:
  - # Shared
  - ## Cấu trúc
  - ## Quy tắc
- First content: Vùng tài nguyên dùng chung giữa systems/projects. / ```text / shared/

## ./state/README.md

- Size: 380 bytes
- Lines: 11
- Headings:
  - # state
  - ## Quy tắc
- First content: Workspace-level runtime state nhỏ, dùng khi state không thuộc riêng project/app nào. / - Chỉ lưu snapshot nhỏ, có ích qua nhiều session. / - Không lưu cache lớn, build output, dependency, hoặc secret.

## ./systems/README.md

- Size: 1524 bytes
- Lines: 58
- Headings:
  - # Systems
  - ## Hiện có
  - ### PM Agent
  - ### Voice IO
  - ## Quy ước system
  - ## Ranh giới
- First content: Vùng chứa các hệ thống agent/framework đang được xây dựng và vận hành. / Path: `systems/pm-agent/` / PM Agent là core của workspace hiện tại. Tuyệt đối không xoá folder này trong các đợt cleanup/tái cấu trúc.

## ./systems/pm-agent/README.md

- Size: 3823 bytes
- Lines: 130
- Headings:
  - # PM Agent - Hướng dẫn sử dụng
  - ## Giới thiệu
  - ## Mục tiêu
  - ## Cấu trúc thư mục
  - ## Cách sử dụng
  - ### 1. Khởi động PM Agent
  - ### 2. Gửi yêu cầu dự án
  - ### 3. PM Agent thực hiện
  - ### 4. Luồng vận hành
  - ## Core policies
  - ## Core templates
  - ## Verification rule ngắn
  - ## Ghi chú vận hành
- First content: PM Agent (Lệ) là PM framework chạy trên OpenClaw. Vai trò chính: quản lý dự án bằng tài liệu, task board, policy, evidence, và báo cáo. / Sau cleanup 2026-05-26, PM Agent v1 được giữ như **core framework sạch**. Các mô hình team/specialist-agent cũ đã được bỏ khỏi workflow hiện tại để thiết kế lại s

## ./systems/pm-agent/STATUS.md

- Size: 4362 bytes
- Lines: 109
- Headings:
  - # PM Agent Status
  - ## Mục đích
  - ## 1. Trạng thái hiện tại của PM Agent
  - ### Giai đoạn hiện tại
  - ### Diễn giải
  - ### Tiến độ PM Agent
  - ### Đánh giá tiến độ tổng thể PM Agent
  - ### Kết luận ngắn
  - ## 2. Trạng thái project do PM Agent quản lý
  - ## 3. Quy tắc ghi nhớ để tránh nhầm lẫn
  - ### Không được làm sai
  - ### Luôn trả lời theo 2 lớp nếu cần
  - ## 4. Câu trả lời chuẩn ngắn gọn
  - ### Nếu hỏi: PM Agent đang ở đâu?
  - ### Nếu hỏi: hiện có project active không?
- First content: File này phân biệt rõ giữa: / 1. **PM Agent** — framework/agent quản lý dự án. / 2. **Project được PM Agent quản lý** — project data nằm trong `projects/` khi có project active.

## ./systems/pm-agent/architecture/STATE-SCHEMA.md

- Size: 2426 bytes
- Lines: 95
- Headings:
  - # PM Agent State Schema
  - ## 1. System-level state
  - ### A. Agent Framework State
  - ### B. Project Operational State
  - ## 2. Source of truth
  - ### Không được dùng chat làm source of truth
  - ## 3. State update rules
  - ### Bắt buộc cập nhật sau mỗi execution cycle
  - ### Không cập nhật nếu chưa có bằng chứng
  - ## 4. Recovery / resume rules
  - ## 5. Health scoring
  - ### Green
  - ### Yellow
  - ### Red
- First content: Định nghĩa trạng thái vận hành chuẩn cho PM Agent. / PM Agent có trạng thái ở 2 lớp: / Trạng thái của chính PM Agent framework.

## ./systems/pm-agent/architecture/STORAGE-RULES.md

- Size: 3048 bytes
- Lines: 80
- Headings:
  - # Quy tắc lưu trữ cho PM Agent
  - ## Mục tiêu
  - ## Nguyên tắc tổng quát
  - ## Không cần lưu
  - ## Lưu vào memory
  - ## Lưu vào Obsidian
  - ## Lưu cả memory và Obsidian
  - ## Khi nào phải hỏi anh trước
  - ## Rule set nhanh
- First content: Quy định rõ thông tin nào không cần lưu, thông tin nào lưu vào memory, thông tin nào lưu vào Obsidian, và thông tin nào cần lưu cả hai. / - Memory dùng cho ngữ cảnh vận hành, preference, quy tắc cộng tác, lesson learned và facts ngắn cần truy hồi nhanh. / - Obsidian dùng cho tài liệu dự án, note có 

## ./systems/pm-agent/architecture/SYSTEM-PROMPT.md

- Size: 7518 bytes
- Lines: 242
- Headings:
  - # System Prompt: PM Agent (Lệ)
  - ## Danh tính / Identity
  - ## Trách nhiệm chính / Core responsibilities
  - ## Nguyên tắc hoạt động
  - ### 1. Luôn có tài liệu
  - ### 2. Tự động hóa có kiểm soát
  - ### 3. Human-in-the-loop ở điểm quan trọng
  - ### 4. Minh bạch
  - ## Workflow chuẩn
  - ## Verification Level rule
  - ## Task packet rule
  - ## Task report rule
  - ## Preflight rule
  - ## Cách giao tiếp
  - ## Khi nào tự làm?
  - ## Khi nào hỏi user?
  - ## Cấu trúc thư mục dự án
  - ## Memory / State paths
  - ## Lưu ý quan trọng
- First content: Bạn là Lệ, một PM Agent chuyên quản lý dự án bằng AI trên OpenClaw. / Vibe: thông minh, suy nghĩ trước khi nói, chủ động gợi ý, có kỷ luật bằng chứng. / 1. Tiếp nhận yêu cầu dự án từ người dùng.

## ./systems/pm-agent/architecture/WORKFLOW.md

- Size: 7969 bytes
- Lines: 221
- Headings:
  - # PM Agent Workflow
  - ## Tổng thể / Overview
  - ## Operating Gates / Các cổng kiểm soát
  - ### Requirements Ready
  - ### Planning Ready
  - ### Execution Ready
  - ### Verification Ready
  - ### Release/Handoff Ready
  - ## Stop conditions / Khi phải dừng hỏi user
  - ## Verification Level workflow
  - ## Chi tiết từng giai đoạn / Phase details
  - ### Giai đoạn 1: Initiation
  - ### Giai đoạn 2: Planning
  - ### Giai đoạn 3: Execution
  - ### Giai đoạn 4: Monitoring
  - ### Giai đoạn 5: Closure
  - ## Chu trình thực thi task / Task execution loop
  - ## Quy tắc ra quyết định / Decision rules
  - ### Khi nào tự làm?
  - ### Khi nào cần task packet rõ?
- First content: ```text / User request /     ↓

## ./systems/pm-agent/eval/checklists/acceptance-verification-checklist.md

- Size: 1030 bytes
- Lines: 29
- Headings:
  - # Acceptance Verification Checklist
  - ## Task Verification
  - ## Issue Verification
  - ## Project Verification
  - ## Conflict Check
- First content: - [ ] Task có output cụ thể / - [ ] Output khớp mục tiêu task / - [ ] Có evidence tối thiểu

## ./systems/pm-agent/eval/checklists/production-readiness-checklist.md

- Size: 2544 bytes
- Lines: 52
- Headings:
  - # PM Agent Production Readiness Checklist
  - ## Runtime Foundation
  - ## Project Operations
  - ## Quality & Governance
  - ## Multi-project Scalability
  - ## Readiness Notes
  - ## Current Gaps To Close
  - ## Overall Assessment
- First content: - [x] Workspace structure tách rõ zones / - [x] PM Agent có runtime/ riêng / - [x] PM Agent có eval/ riêng

## ./systems/pm-agent/eval/checklists/regression-pack-checklist.md

- Size: 1400 bytes
- Lines: 33
- Headings:
  - # PM Agent Regression Pack Checklist
  - ## Core Workflow
  - ## Governance
  - ## Reporting
  - ## Pass Criteria
- First content: - [ ] Vague requirement được xử lý đúng / - [ ] Scope change được xử lý đúng / - [ ] Worker failure được xử lý đúng

## ./systems/pm-agent/eval/checklists/stale-project-detection-checklist.md

- Size: 970 bytes
- Lines: 25
- Headings:
  - # Stale Project Detection Checklist
  - ## Task stale check
  - ## Approval stale check
  - ## Issue stale check
  - ## Project stale check
  - ## Escalation check
- First content: - [ ] Có task `In Progress` nào không update > 3 ngày? / - [ ] Có task `Blocked` nào không có action/escalation > 2 ngày? / - [ ] Có task assign rồi nhưng không có output/evidence mới?

## ./systems/pm-agent/eval/reports/production-readiness-assessment-2026-05-15.md

- Size: 8661 bytes
- Lines: 271
- Headings:
  - # PM Agent Production Readiness Assessment - 2026-05-15
  - ## Executive Assessment
  - ## Đánh giá theo 5 trụ cột
  - ### 1. Foundation & Architecture ✅ 90%
  - ### 2. Governance & Quality ✅ 80%
  - ### 3. Reporting & Visibility 🟡 75%
  - ### 4. Multi-Project Scalability 🟡 70%
  - ### 5. Operational Maturity 🟡 75%
  - ## Đánh giá chi tiết theo use case
  - ### Use Case 1: Quản lý 1 project pilot nội bộ
  - ### Use Case 2: Quản lý 3-5 projects đồng thời
  - ### Use Case 3: Production deployment không giám sát
  - ### Use Case 4: External client projects
  - ## Known Issues & Risks
  - ### Critical (phải fix trước pilot)
  - ### High (nên fix trong pilot)
  - ### Medium (có thể defer)
  - ### Low (nice to have)
  - ## Recommendations
  - ### Immediate (trước khi pilot)
- First content: **Assessed by:** agent:main   / **Date:** 2026-05-15 07:31 UTC   / **Context:** Sau khi hoàn tất đợt update production-readiness

## ./systems/pm-agent/eval/reports/regression-pack-notes-2026-05-14.md

- Size: 643 bytes
- Lines: 24
- Headings:
  - # Regression Pack Notes - 2026-05-14
  - ## Purpose
  - ## Included Scenarios
  - ## Current State
  - ## Intended Use
  - ## Next Step
- First content: Tài liệu này ghi nhận bộ regression/eval nền đầu tiên cho PM Agent. / - vague-requirement / - scope-change

## ./systems/pm-agent/eval/reports/regression-pack-v1-2026-05-15.md

- Size: 2973 bytes
- Lines: 69
- Headings:
  - # PM Agent Regression / Eval Pack v1 - 2026-05-15
  - ## Mục tiêu
  - ## Phạm vi v1
  - ## Scenario Pack
  - ### Core scenarios
  - ### Hardening-added scenarios
  - ## Expected Behavior Coverage
  - ## Pass / Fail Cách dùng
  - ## Pass Criteria tổng thể
  - ## Gợi ý thứ tự chạy
  - ## Ghi chú
- First content: Tạo bộ scenario nền để test nhanh các lỗi workflow quan trọng sau mỗi đợt chỉnh skill/runtime/policy, tránh fix chỗ này nhưng gãy chỗ khác. / Eval pack này tập trung vào các lỗi workflow cốt lõi và các case mới phát sinh trong đợt hardening production-readiness. / 1. `systems/pm-agent/eval/scenarios

## ./systems/pm-agent/eval/scenarios/false-done.md

- Size: 725 bytes
- Lines: 20
- Headings:
  - # Eval Scenario: False Done
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Một task được báo là done nhưng không có evidence tối thiểu hoặc verification chưa đủ. / - task state = done / - thiếu evidence, thiếu verify, hoặc source-of-truth còn conflict

## ./systems/pm-agent/eval/scenarios/missing-actor.md

- Size: 765 bytes
- Lines: 21
- Headings:
  - # Eval Scenario: Missing Actor
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Artifact có thay đổi nhưng không có actor attribution rõ. / - change/issue/handoff/decision entry thiếu actor field / - git author không đủ để kết luận actor workflow

## ./systems/pm-agent/eval/scenarios/missing-approval.md

- Size: 693 bytes
- Lines: 20
- Headings:
  - # Eval Scenario: Missing Approval
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Planning hoặc scope change đã xong về mặt tài liệu, nhưng approval chưa có. / - docs đã hoàn thiện / - approval artifact chưa có hoặc còn pending

## ./systems/pm-agent/eval/scenarios/no-change-day.md

- Size: 934 bytes
- Lines: 23
- Headings:
  - # Eval Scenario: No-Change Day
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Đến ngày chạy daily report nhưng không có thay đổi meaningful trong source project/framework. / - không có commit đáng kể trong ngày / - không có change/decision/approval/handoff mới

## ./systems/pm-agent/eval/scenarios/on-hold-in-active-path.md

- Size: 858 bytes
- Lines: 23
- Headings:
  - # Eval Scenario: On-Hold Project In Active Path
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Project nằm trong `projects/active/` nhưng metadata `project.yaml` ghi `status: on-hold`. / - path = `projects/active/[project-name]` / - metadata status = `on-hold`

## ./systems/pm-agent/eval/scenarios/scope-change.md

- Size: 613 bytes
- Lines: 23
- Headings:
  - # Eval Scenario: Scope Change
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Owner yêu cầu thêm tính năng mới giữa execution phase. / - Tính năng mới chưa nằm trong charter/requirements / - Có thể ảnh hưởng timeline

## ./systems/pm-agent/eval/scenarios/source-conflict.md

- Size: 942 bytes
- Lines: 23
- Headings:
  - # Eval Scenario: Source Conflict
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Các source-of-truth chính đưa ra số liệu hoặc trạng thái lệch nhau. / - `project.yaml` và `task-board.md` conflict về progress hoặc completed tasks / - hoặc `status-dashboard.md` lạc với issue/change data

## ./systems/pm-agent/eval/scenarios/stale-project.md

- Size: 603 bytes
- Lines: 21
- Headings:
  - # Eval Scenario: Stale Project
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Project vẫn ghi `active` nhưng không có meaningful update trong nhiều ngày. / - metadata status = active / - thiếu tiến triển thật

## ./systems/pm-agent/eval/scenarios/vague-requirement.md

- Size: 790 bytes
- Lines: 23
- Headings:
  - # Eval Scenario: Vague Requirement
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: User đưa yêu cầu mơ hồ, thiếu scope, thiếu success criteria, thiếu constraints rõ. / - brief ngắn / - không có output format rõ

## ./systems/pm-agent/eval/scenarios/worker-failure.md

- Size: 685 bytes
- Lines: 24
- Headings:
  - # Eval Scenario: Worker Failure
  - ## Situation
  - ## Input
  - ## Expected PM Agent Behavior
  - ## Failure Conditions
- First content: Worker được giao task kỹ thuật nhưng fail 2 lần liên tiếp. / - Task có acceptance criteria rõ / - Worker trả output lỗi hoặc không usable

## ./systems/pm-agent/prompts/01-initiate.md

- Size: 1421 bytes
- Lines: 50
- Headings:
  - # Prompt 1: Khởi động PM Agent
  - ## Yêu cầu dự án
  - ## Nhiệm vụ của bạn
  - ### Bước 1: Phân tích yêu cầu
  - ### Bước 2: Phát hiện khoảng trống
  - ### Bước 3: Tạo danh sách câu hỏi
  - ### Bước 4: Tạo charter nháp
  - ### Bước 5: Báo cáo lại cho user
  - ## Output
- First content: Bạn là Lệ, PM Agent. Bạn vừa nhận được một yêu cầu dự án mới. / [USER PASTE YÊU CẦU TỰ NHIÊN TẠI ĐÂY] / - Đọc yêu cầu gốc

## ./systems/pm-agent/prompts/02-planning.md

- Size: 1740 bytes
- Lines: 79
- Headings:
  - # Prompt 2: Lập kế hoạch dự án
  - ## Input
  - ## Nhiệm vụ
  - ### Bước 1: Tạo Spec
  - ### Bước 2: Tạo Plan
  - ### Bước 3: Tạo Rules
  - ### Bước 4: Tạo WBS
  - ### Bước 5: Tạo Schedule
  - ### Bước 6: Tạo Risk Register
  - ### Bước 7: Báo cáo lại
  - ## Output
- First content: - Charter đã được xác nhận / - Requirements đã rõ ràng / - Scope đã chốt

## ./systems/pm-agent/prompts/03-task-board.md

- Size: 1639 bytes
- Lines: 64
- Headings:
  - # Prompt 3: Tạo Task Board
  - ## Input
  - ## Nhiệm vụ
  - ### Bước 1: Chuyển WBS thành task
  - ### Bước 2: Phân loại task
  - ### Bước 3: Sắp xếp thứ tự
  - ### Bước 4: Tạo task-board.md
  - ### Bước 5: Chuẩn bị task prompt
  - ### Bước 6: Báo cáo lại
  - ## Output
- First content: - WBS đã hoàn thành / - Schedule đã chốt / - Rules đã định nghĩa

## ./systems/pm-agent/prompts/04-execute.md

- Size: 1587 bytes
- Lines: 62
- Headings:
  - # Prompt 4: Thực thi Task
  - ## Input
  - ## Nhiệm vụ
  - ### Bước 1: Chọn task tiếp theo
  - ### Bước 2: Quyết định tự làm hay giao worker?
  - ### Bước 3: Review kết quả
  - ### Bước 4: Cập nhật tài liệu dự án
  - ### Bước 5: Quyết định hành động tiếp theo
  - ### Bước 6: Báo cáo lại
  - ## Output
- First content: - Task board đã tạo / - Task đầu tiên được chọn / Dựa trên:

## ./systems/pm-agent/prompts/05-monitor.md

- Size: 1716 bytes
- Lines: 74
- Headings:
  - # Prompt 5: Giám sát & Kiểm soát Dự Án
  - ## Input
  - ## Nhiệm vụ
  - ### Bước 1: Kiểm tra tiến độ
  - ### Bước 2: Phân tích issue
  - ### Bước 3: Phân tích risk
  - ### Bước 4: Phân tích change
  - ### Bước 5: Tạo status dashboard
  - ### Bước 6: Tạo báo cáo định kỳ
  - ### Bước 7: Báo cáo lại
  - ## Output
- First content: - Task board hiện tại / - Issue log / - Risk register

## ./systems/pm-agent/prompts/06-closure.md

- Size: 1931 bytes
- Lines: 80
- Headings:
  - # Prompt 6: Đóng Dự Án
  - ## Input
  - ## Nhiệm vụ
  - ### Bước 1: Kiểm tra deliverables
  - ### Bước 2: Xác nhận với user
  - ### Bước 3: Tạo final report
  - ### Bước 4: Tạo lessons learned
  - ### Bước 5: Archive tài liệu
  - ### Bước 6: Cập nhật memory / observations
  - ### Bước 7: Đánh dấu đóng
  - ### Bước 8: Báo cáo lại
  - ## Output
- First content: - Tất cả task đã hoàn thành hoặc được hủy / - Deliverables đã sẵn sàng / Đối chiếu với:

## ./systems/pm-agent/reports/daily/2026-05-14.md

- Size: 4496 bytes
- Lines: 71
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Reflected In This Run
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Selector Audit
  - ## Source Conflicts Detected
- First content: - **Date:** 2026-05-14 / - **Generated at:** 10:25 UTC / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/daily/2026-05-15-cron-log.md

- Size: 2359 bytes
- Lines: 63
- Headings:
  - # Cron Run Log - 2026-05-15 06:40 UTC
  - ## Execution Summary
  - ## Steps Executed
  - ### 1. Framework Report Generation ✅
  - ### 2. Active Project Scan ✅
  - ### 3. PDF Export ✅
  - ### 4. Telegram Delivery ❌
  - ## Selector Audit
  - ## Artifacts Created
  - ## Issues Encountered
  - ## Recommendations
  - ## Next Run
- First content: - **Cron Job ID:** ee6bb937-31dd-4c4e-8fa8-ea727c822968 / - **Schedule:** 19:00 Asia/Ho_Chi_Minh (equivalent to 12:00 UTC, but run triggered at 06:40 UTC) / - **Status:** Success with delivery fallback - report generated, PDF created, Telegram delivery failed but artifacts preserved

## ./systems/pm-agent/reports/daily/2026-05-15.md

- Size: 2796 bytes
- Lines: 62
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Git Scope Snapshot
- First content: - **Date:** 2026-05-15 / - **Generated at:** 07:03 UTC / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/daily/2026-05-16-cron-log.md

- Size: 1742 bytes
- Lines: 51
- Headings:
  - # Cron Run Log - 2026-05-16 05:40 UTC
  - ## Execution Summary
  - ## Steps Executed
  - ### 1. Framework Report Generation ✅
  - ### 2. Active Project Scan ✅
  - ### 3. PDF Export ✅
  - ### 4. Telegram Delivery ⏭️
  - ## Selector Audit
  - ## Artifacts Created
  - ## Issues Encountered
  - ## Recommendations
- First content: - **Cron Job ID:** ee6bb937-31dd-4c4e-8fa8-ea727c822968 / - **Schedule:** 19:00 Asia/Ho_Chi_Minh / - **Status:** Success with no active projects - framework report generated, PDF created

## ./systems/pm-agent/reports/daily/2026-05-16.md

- Size: 2076 bytes
- Lines: 60
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Git Scope Snapshot
- First content: - **Date:** 2026-05-16 / - **Generated at:** 05:40 UTC / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/daily/2026-05-18-cron-log.md

- Size: 2821 bytes
- Lines: 63
- Headings:
  - # Cron Run Log - 2026-05-18 13:54 UTC
  - ## Execution Summary
  - ## Steps Executed
  - ### 1. Framework Report Generation ✅
  - ### 2. Active Project Scan ✅
  - ### 3. PDF Export ✅
  - ### 4. Telegram Delivery ⚠️
  - ## Selector Audit
  - ## Artifacts Created
  - ## Issues Encountered
  - ## Recommendations
- First content: - **Cron Job ID:** ee6bb937-31dd-4c4e-8fa8-ea727c822968 / - **Schedule:** 19:00 Asia/Ho_Chi_Minh / - **Status:** Success

## ./systems/pm-agent/reports/daily/2026-05-18.md

- Size: 3404 bytes
- Lines: 79
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Framework Reporting Decision
  - ## Active Project Scan
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Project Portfolio Note
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Git Scope Snapshot
- First content: - **Date:** 2026-05-18 / - **Generated at:** 13:54 UTC / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/daily/2026-05-19-cron-log.md

- Size: 2855 bytes
- Lines: 66
- Headings:
  - # Cron Run Log - 2026-05-19 12:00 UTC
  - ## Execution Summary
  - ## Steps Executed
  - ### 1. Framework Report Generation ✅
  - ### 2. Active Project Scan ✅
  - ### 3. PDF Export ✅
  - ### 4. Telegram Delivery ⚠️
  - ## Selector Audit
  - ## Artifacts Created
  - ## Issues Encountered
  - ## Recommendations
- First content: - **Cron Job ID:** ee6bb937-31dd-4c4e-8fa8-ea727c822968 / - **Schedule:** 19:00 Asia/Ho_Chi_Minh / - **Status:** Success with delivery pending/attempted

## ./systems/pm-agent/reports/daily/2026-05-19.md

- Size: 3728 bytes
- Lines: 84
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Framework Reporting Decision
  - ## Active Project Scan
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Project Portfolio Note
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Git Scope Snapshot
- First content: - **Date:** 2026-05-19 / - **Generated at:** 12:00 UTC / 19:00 Asia/Ho_Chi_Minh / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/daily/2026-05-26-cron-log.md

- Size: 3210 bytes
- Lines: 73
- Headings:
  - # PM Agent Daily Report Cron Log - 2026-05-26
  - ## Execution Summary
  - ## Steps Executed
  - ## Selector Audit
  - ### Framework target
  - ### Project candidates scanned
  - ### Eligible active projects
  - ### Skipped projects
  - ## Source Conflicts / Data Quality
  - ## Artifacts Created
  - ## Issues Encountered
  - ## Recommendations
- First content: - **Run time:** 2026-05-26 00:34 UTC / 07:34 Asia/Ho_Chi_Minh / - **Cron label:** pm-agent-daily-report-19h00 / - **Status:** Success with Telegram delivery failure fallback

## ./systems/pm-agent/reports/daily/2026-05-26.md

- Size: 4789 bytes
- Lines: 95
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Framework Reporting Decision
  - ## Active Project Scan
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Project Portfolio Note
  - ## Source Conflicts Detected
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Git Scope Snapshot
- First content: - **Date:** 2026-05-26 / - **Generated at:** 00:34 UTC / 07:34 Asia/Ho_Chi_Minh / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/daily/2026-05-27-cron-log.md

- Size: 2553 bytes
- Lines: 51
- Headings:
  - # PM Agent Daily Report Cron Log - 2026-05-27
  - ## Execution Summary
  - ## Steps Executed
  - ## Selector Audit
  - ### Framework Target
  - ### Project Candidates
  - ## Artifacts Created
  - ## Issues Encountered
  - ## Recommendations
  - ## Delivery Status
- First content: - **Run ID:** pm-agent-daily-report-19h00 / - **Generated at:** 06:57 UTC / 13:57 Asia/Ho_Chi_Minh / - **Runbook:** `systems/pm-agent/runtime/runbooks/daily-report-cron.md`

## ./systems/pm-agent/reports/daily/2026-05-27.md

- Size: 3634 bytes
- Lines: 82
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Framework Reporting Decision
  - ## Active Project Scan
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Project Portfolio Note
  - ## Source Conflicts Detected
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Git Scope Snapshot
- First content: - **Date:** 2026-05-27 / - **Generated at:** 06:55 UTC / 13:55 Asia/Ho_Chi_Minh / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/daily/2026-05-29-cron-log.md

- Size: 2465 bytes
- Lines: 51
- Headings:
  - # PM Agent Daily Report Cron Log - 2026-05-29
  - ## Execution Summary
  - ## Steps Executed
  - ## Selector Audit
  - ### Framework Target
  - ### Project Candidates
  - ## Artifacts Created
  - ## Issues Encountered
  - ## Recommendations
  - ## Delivery Status
- First content: - **Run ID:** pm-agent-daily-report-19h00 / - **Generated at:** 00:33 UTC / 07:33 Asia/Ho_Chi_Minh / - **Runbook:** `systems/pm-agent/runtime/runbooks/daily-report-cron.md`

## ./systems/pm-agent/reports/daily/2026-05-29.md

- Size: 3634 bytes
- Lines: 81
- Headings:
  - # Daily Project Report - PM Agent Framework
  - ## Summary
  - ## Framework Reporting Decision
  - ## Active Project Scan
  - ## Changes Today
  - ## Capability / Readiness Snapshot
  - ## Project Portfolio Note
  - ## Source Conflicts Detected
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions
  - ## Evidence / References
  - ## Git Scope Snapshot
- First content: - **Date:** 2026-05-29 / - **Generated at:** 00:33 UTC / 07:33 Asia/Ho_Chi_Minh / - **Project ID:** pm-agent-framework

## ./systems/pm-agent/reports/plans/cron-flow-19h00-spec-2026-05-14.md

- Size: 8573 bytes
- Lines: 333
- Headings:
  - # PM Agent Cron Flow 19:00 Spec - 2026-05-14
  - ## Vì sao file này lưu ở đây?
  - ### Lý do
  - # Mục tiêu
  - # 1. Cơ chế chạy đề xuất
  - ## Đề xuất chính
  - ### Vì sao chọn OpenClaw cron
  - ## Phương án fallback
  - ## Kết luận cơ chế chạy
  - # 2. Cron schedule rule
  - ## Mốc mặc định
  - ## Timezone
  - ## Rule
  - # 3. Reporting targets
  - ## Target loại A — Framework report
  - ### Khi nào chạy?
  - ### Khi nào bỏ qua?
  - ## Target loại B — Project report
  - ### Khi nào chạy?
  - ### Không chạy mặc định khi:
- First content: - **Scope:** Thiết kế cron/report flow chạy lúc 19:00 cho PM Agent / - **Status:** Draft for review / - **Applies to:** framework daily report + project daily report

## ./systems/pm-agent/reports/plans/daily-reporting-structure-notes-2026-05-14.md

- Size: 1147 bytes
- Lines: 31
- Headings:
  - # Daily Reporting Structure Notes - 2026-05-14
  - ## Chuẩn hóa đã chốt
  - ### Framework reports
  - ### Project reports
  - ### Status handling
  - ### Naming rule
  - ### Source of truth
  - ## Kết luận
- First content: - Path: `systems/pm-agent/reports/daily/YYYY-MM-DD.md` / - Dùng để report cho chính PM Agent framework / - Chỉ nên tạo khi framework còn active refinement / production-readiness work

## ./systems/pm-agent/reports/plans/update-pma-final-report-2026-05-15.md

- Size: 12212 bytes
- Lines: 355
- Headings:
  - # PM Agent Production-Readiness Update - Final Report
  - ## Executive Summary
  - ## Mục tiêu đợt update
  - ### Đã đạt
  - ## Deliverables
  - ### 1. Policies (7 files)
  - ### 2. Runbooks (6 files)
  - ### 3. Skills/Scripts
  - ### 4. Eval Pack (10 scenarios + checklist)
  - ### 5. Portfolio Dashboard Foundation
  - ### 6. Operational Changes
  - ## Key Improvements
  - ### Daily Reporting
  - ### Governance
  - ### Lifecycle Management
  - ### Eval/Regression
  - ## Metrics
  - ### Framework Completion
  - ### Production-Readiness
  - ### Artifacts Created/Updated
- First content: **Date:** 2026-05-15   / **Duration:** 06:43 - 07:25 UTC (42 minutes)   / **Owner:** Anh Doanh + PM Agent  

## ./systems/pm-agent/reports/plans/update-pma-plan-2026-05-14.md

- Size: 12041 bytes
- Lines: 362
- Headings:
  - # PM Agent Update Plan - 2026-05-14
  - ## Vì sao file này lưu ở đây?
  - ### Lý do chọn vị trí này
  - # Revision Note - 2026-05-15
  - ## Vì sao cần revise plan?
  - ## Quyết định mới
  - # Checklist tổng thể đợt update
  - ## Mục tiêu đợt này
  - ## Trạng thái tổng thể hiện tại
  - ## Mức ưu tiên hiện tại
  - ### Phase 1 - Foundation đã hoàn tất mức nền
  - ### Phase 2 - Daily reporting hardening
  - ### Cross-phase Priority - Policy fix phát sinh từ thực tế
  - ### Phase 3 - Hardening cho production
  - # Kế hoạch chi tiết
  - ## Phase 1 — Actor tracking + trạng thái thật
  - ### 1.1. Tạo chuẩn actor tracking
  - ### 1.2. Gắn actor vào artifact chính
  - ### 1.3. Sửa readiness checklist cho đúng thực tế
  - ## Phase 2 — Daily report 19:00
- First content: - **Scope:** Đợt nâng cấp production-readiness cho chính `systems/pm-agent/` / - **Owner:** Anh Doanh + PM Agent / - **Status:** Active plan - revised to Option B on 2026-05-15

## ./systems/pm-agent/reports/portfolio/README.md

- Size: 3681 bytes
- Lines: 169
- Headings:
  - # Portfolio Dashboard Foundation
  - ## Mục đích
  - ## Phạm vi
  - ## Dashboard Structure
  - ### 1. Active Projects
  - ### 2. On-Hold Projects
  - ### 3. Stopped Projects
  - ### 4. Archived Projects
  - ## Portfolio Summary
  - ## Update Frequency
  - ### Active projects dashboard
  - ### On-hold/stopped/archived dashboards
  - ### Portfolio summary
  - ## Data Sources
  - ### Per-project
  - ### Cross-project
  - ## Foundation Rules
  - ### 1. Lifecycle folder structure
  - ### 2. Metadata priority
  - ### 3. Stale detection integration
- First content: Cung cấp visibility tổng thể về tất cả projects được PM Agent quản lý, không chỉ active projects. / - Active projects / - On-hold projects

## ./systems/pm-agent/reports/portfolio/active-projects-dashboard.md

- Size: 418 bytes
- Lines: 20
- Headings:
  - # Active Projects Dashboard
  - ## Active Project Count
  - ## Projects
  - ## Health Indicators
  - ## Notes
- First content: - **Generated:** 2026-05-15 / - **Status:** Foundation snapshot / - **Total:** 0

## ./systems/pm-agent/reports/portfolio/archived-projects-dashboard.md

- Size: 585 bytes
- Lines: 20
- Headings:
  - # Archived Projects Dashboard
  - ## Archived Project Count
  - ## Projects
  - ### pm-agent-e2e-demo-v2
  - ## Notes
- First content: - **Generated:** 2026-05-15 / - **Status:** Foundation snapshot / - **Total:** 1

## ./systems/pm-agent/reports/portfolio/on-hold-projects-dashboard.md

- Size: 731 bytes
- Lines: 24
- Headings:
  - # On-Hold Projects Dashboard
  - ## On-Hold Project Count
  - ## Projects
  - ### web-ban-hang
  - ## Notes
- First content: - **Generated:** 2026-05-15 / - **Status:** Foundation snapshot / - **Total:** 1

## ./systems/pm-agent/reports/portfolio/portfolio-summary.md

- Size: 1288 bytes
- Lines: 41
- Headings:
  - # PM Agent Portfolio Summary
  - ## Portfolio Overview
  - ## Current Inventory
  - ### On-hold
  - ### Archived
  - ## Health Indicators
  - ## Recent Lifecycle Transitions
  - ## Notes
- First content: - **Generated:** 2026-05-15 / - **Scope:** All managed projects across lifecycle folders / - **Status:** Foundation snapshot

## ./systems/pm-agent/reports/portfolio/stopped-projects-dashboard.md

- Size: 263 bytes
- Lines: 14
- Headings:
  - # Stopped Projects Dashboard
  - ## Stopped Project Count
  - ## Projects
  - ## Notes
- First content: - **Generated:** 2026-05-15 / - **Status:** Foundation snapshot / - **Total:** 0

## ./systems/pm-agent/runtime/config/project-metadata-schema.yaml

- Size: 2094 bytes
- Lines: 106
- First lines: # Project Metadata Schema / # Định nghĩa cấu trúc chuẩn cho project.yaml / version: "1.0" / description: "Schema for PM Agent project metadata" / required_fields:

## ./systems/pm-agent/runtime/policies/acceptance-verification-policy.md

- Size: 8243 bytes
- Lines: 249
- Headings:
  - # Acceptance Verification Policy
  - ## Mục tiêu
  - ## Nguyên tắc cứng
  - # 1. Task acceptance
  - ## Một task được xem là done khi nào?
  - ## Evidence tối thiểu cho task
  - ### Với task tài liệu
  - ### Với task kỹ thuật/code
  - ### Với task vận hành/PM
  - ## Khi nào task chưa được coi là done?
  - ## Trạng thái thay thế
  - # 2. Issue acceptance
  - ## Một issue được close khi nào?
  - ## Evidence tối thiểu cho issue
  - ## Không được close issue khi
  - # 3. Project acceptance
  - ## Một project chỉ được close khi
  - ## Nếu project chỉ ở mức demo-ready
  - # 4. Verification levels
  - ## Level 0 - No verification
- First content: Quy định chuẩn để PM Agent xác minh một task, issue hoặc project có thực sự đủ điều kiện được đánh dấu hoàn tất hay chưa. / Policy này giúp: / - tránh `done giả`

## ./systems/pm-agent/runtime/policies/actor-tracking-policy.md

- Size: 4638 bytes
- Lines: 159
- Headings:
  - # Actor Tracking Policy
  - ## Mục tiêu
  - ## Actor format chuẩn
  - ## Ý nghĩa từng loại actor
  - ### `human:[name]`
  - ### `agent:main`
  - ### `subagent:[label-or-session]`
  - ### `unknown`
  - ## Thứ tự ưu tiên xác định actor
  - ## Khi nào KHÔNG được bịa actor
  - ## Quy tắc ghi actor vào artifact
  - ### Task board
  - ### Change log
  - ### Issue log
  - ### Handoffs
  - ### Decisions
  - ### Approvals
  - ## Quy tắc cho daily reports
  - ## Quy tắc cho PM Agent framework reports
  - ## Mức độ tin cậy attribution
- First content: Quy định chuẩn để PM Agent xác định và ghi nhận **ai đã thực hiện thay đổi** trong workflow dự án. / Actor tracking giúp: / - truy được ai đã làm thay đổi nào

## ./systems/pm-agent/runtime/policies/approval-policy.md

- Size: 3721 bytes
- Lines: 141
- Headings:
  - # Approval Policy
  - ## Các loại approval
  - ### 1. Scope Approval
  - ## Scope Approval
  - ### 2. Plan Approval
  - ## Plan Approval
  - ### 3. Change Request Approval
  - ## Change Request CR-XXX
  - ### 4. Closure Approval
  - ## Closure Approval
  - ## Approval workflow
  - ## Timeout policy
  - ## Rejection handling
- First content: Quy định về quy trình phê duyệt trong PM Agent workflow. / **Khi nào cần:** / - Sau khi tạo charter và requirements

## ./systems/pm-agent/runtime/policies/daily-reporting-structure-policy.md

- Size: 5700 bytes
- Lines: 190
- Headings:
  - # Daily Reporting Structure Policy
  - ## Mục tiêu
  - ## 1. Hai mode báo cáo
  - ### A. Framework report mode
  - ### B. Project report mode
  - ## 2. Naming rule
  - ## 3. Folder rule
  - ### Framework
  - ### Project active
  - ### Project archived
  - ### Project stopped / on-hold
  - ## 4. Status handling rule
  - ### Active
  - ### On-hold
  - ### Stopped
  - ### Archived
  - ## 5. Source of truth rule
  - ### Framework report source of truth
  - ### Project report source of truth
  - ## 6. Required sections rule
- First content: Quy định cấu trúc chuẩn cho báo cáo hằng ngày của PM Agent, áp dụng cho cả: / - **PM Agent framework reports** / - **project-level daily reports**

## ./systems/pm-agent/runtime/policies/decision-policy.md

- Size: 2244 bytes
- Lines: 76
- Headings:
  - # Decision Policy
  - ## Nguyên tắc chung
  - ## Phân loại quyết định
  - ### Level 1: Auto-decision (PM Agent tự quyết)
  - ### Level 2: Confirm-before-proceed (Xác nhận trước khi làm)
  - ### Level 3: Explicit approval required (Phải có approval)
  - ## Decision log format
  - ## [DECISION-ID] - [Title]
  - ## Khi nào cần escalate?
  - ## Review cycle
- First content: Quy định về việc ra quyết định trong PM Agent workflow. / 1. **Mọi quyết định quan trọng phải được ghi lại** / 2. **Quyết định phải có lý do rõ ràng**

## ./systems/pm-agent/runtime/policies/project-lifecycle-path-policy.md

- Size: 7940 bytes
- Lines: 297
- Headings:
  - # Project Lifecycle & Path Policy
  - ## Mục tiêu
  - # 1. Lifecycle status chuẩn
  - ## `active`
  - ## `on-hold`
  - ## `stopped`
  - ## `archived`
  - # 2. Folder path chuẩn
  - # 3. Source of truth khi conflict
  - ### Rule cứng
  - ### Ví dụ conflict
  - ### Lý do ưu tiên metadata
  - # 4. Migration policy
  - ### Khi nào phải migrate path?
  - ### Cách migrate
  - ## [2026-05-15] Project lifecycle change
  - # 5. Xử lý mismatch trong vận hành
  - ### Khi selector/report gặp mismatch
  - ### Khi cron/daily report chạy
  - # 6. Delay migration policy
- First content: Quy định chuẩn về **lifecycle status** và **folder path** của project, để tránh mismatch giữa metadata và vị trí lưu trữ. / Policy này giúp: / - tránh selector/report hiểu sai trạng thái project

## ./systems/pm-agent/runtime/policies/stale-project-detection-policy.md

- Size: 7459 bytes
- Lines: 224
- Headings:
  - # Stale Project Detection Policy
  - ## Mục tiêu
  - # 1. Định nghĩa `stale`
  - # 2. Các loại stale cần phát hiện
  - ## A. Stale Task
  - ## B. Stale Approval
  - ## C. Stale Issue
  - ## D. Stale Project
  - # 3. Ngưỡng stale đề xuất
  - ## Task stale
  - ## Approval stale
  - ## Issue stale
  - ## Project stale
  - # 4. Tín hiệu để xét có update meaningful hay không
  - # 5. Severity levels và cách xử lý khi phát hiện stale
  - ## Severity levels chuẩn
  - ### `warning`
  - ### `needs-review`
  - ### `blocked`
  - ### `owner-attention`
- First content: Quy định chuẩn để PM Agent phát hiện project, task, approval hoặc workflow đang bị `stale` (chết mềm / nằm im quá lâu mà không được xử lý đúng mức). / Policy này giúp: / - phát hiện project không còn tiến triển nhưng chưa được đánh dấu rõ

## ./systems/pm-agent/runtime/policies/verification-level-policy.md

- Size: 4154 bytes
- Lines: 105
- Headings:
  - # Verification Level Policy
  - ## Purpose / Mục đích
  - ## Levels / Các mức xác minh
  - ## Required fields
  - ## Preflight rule
  - ## Browser/UI evidence rule
  - ## Claim downgrade rule
  - ## Approval rule
  - ## Source of truth
- First content: Verification Level xác định mức bằng chứng cần có trước khi PM Agent được nhận một task, deliverable, hoặc project state là xong. / Policy này ngăn claim quá mức như `tested`, `working`, `deployed`, `secure`, `performant`, `accessible`, `integrated`, hoặc `production-ready` khi chưa có evidence tươn

## ./systems/pm-agent/runtime/registries/project-lifecycle-registry.md

- Size: 1503 bytes
- Lines: 50
- Headings:
  - # Project Lifecycle Registry
  - ## Lifecycle states
  - ## Phase transition rules
  - ### Initiation → Planning
  - ### Planning → Execution
  - ### Execution → Monitoring
  - ### Monitoring → Closure
  - ## Archive rules
- First content: Registry chuẩn cho vòng đời project trong PM Agent. / | Phase | Entry Criteria | Exit Criteria | Key Artifacts | / |-------|----------------|---------------|---------------|

## ./systems/pm-agent/runtime/runbooks/closure-checklist.md

- Size: 1149 bytes
- Lines: 33
- Headings:
  - # Runbook: Closure Checklist
  - ## Deliverables
  - ## Documentation
  - ## Approval
  - ## Archive
  - ## Rule cứng
- First content: Checklist bắt buộc trước khi đóng project. / - [ ] Tất cả deliverable chính đã hoàn tất / - [ ] Acceptance criteria đã được kiểm tra

## ./systems/pm-agent/runtime/runbooks/daily-report-cron.md

- Size: 3245 bytes
- Lines: 86
- Headings:
  - # Daily Report Cron Runbook
  - ## Purpose
  - ## Trigger
  - ## Event Contract
  - ## Source Of Truth
  - ## Current Default
  - ## Monitoring & Stability
  - ### What to monitor
  - ### Success criteria
  - ### Failure modes
  - ### Delivery Fallback Strategy
  - ### Stability tracking
  - ### Escalation
- First content: Run the PM Agent 19:00 daily reporting flow via OpenClaw cron. / OpenClaw cron runs an agent turn in an isolated session. / When the 19:00 cron job runs, the agent should execute this flow in order:

## ./systems/pm-agent/runtime/runbooks/project-rollback-recovery.md

- Size: 4640 bytes
- Lines: 147
- Headings:
  - # Runbook: Project Rollback / Recovery
  - ## Mục tiêu
  - # 1. Khi nào dùng rollback / recovery
  - # 2. Phân biệt rollback và recovery
  - ## Rollback
  - ## Recovery
  - # 3. Bước xử lý chuẩn
  - ## Bước 1 — Xác định phạm vi hỏng
  - ## Bước 2 — Thu thập baseline an toàn
  - ## Bước 3 — Chọn rollback hay recovery
  - ## Bước 4 — Ghi log trước khi thao tác
  - ## Bước 5 — Thực hiện rollback/recovery
  - ## Bước 6 — Verify sau recovery
  - # 4. Tối thiểu phải log gì
  - ## RB-001 - [Rollback/Recovery title]
  - # 5. Rule cứng
  - # 6. Khi nào phải escalate owner
  - # 7. Kết luận ngắn
- First content: Áp dụng khi một thay đổi trong project gây lỗi, làm sai trạng thái hệ, hoặc khiến deliverable không còn tin cậy và cần rollback/recovery có kiểm soát. / Runbook này giúp PM Agent: / - không hoảng loạn rollback bừa

## ./systems/pm-agent/runtime/runbooks/scope-change.md

- Size: 953 bytes
- Lines: 42
- Headings:
  - # Runbook: Scope Change
  - ## Bước xử lý
  - ## Rule cứng
- First content: Áp dụng khi có yêu cầu thay đổi phạm vi dự án. / 1. **Xác định loại thay đổi** /    - minor scope change

## ./systems/pm-agent/runtime/runbooks/stale-project.md

- Size: 913 bytes
- Lines: 36
- Headings:
  - # Runbook: Stale Project
  - ## Bước xử lý
  - ## Rule cứng
- First content: Áp dụng khi project/task/approval/issue có dấu hiệu bị stale. / 1. **Xác định loại stale** /    - stale task?

## ./systems/pm-agent/runtime/runbooks/worker-failed.md

- Size: 1265 bytes
- Lines: 48
- Headings:
  - # Runbook: Worker Failed
  - ## Dấu hiệu
  - ## Cách xử lý
  - ## Retry policy
  - ## Lesson learned
- First content: Áp dụng khi worker/subagent fail hoặc trả kết quả không đạt. / - Worker crash / timeout / - Output thiếu / sai / không usable

## ./systems/pm-agent/skills/README.md

- Size: 1681 bytes
- Lines: 50
- Headings:
  - # PM Agent Skills
  - ## Cấu trúc
  - ## Skill boundary / Ranh giới skill
  - ## Verification rule
  - ## Task templates
  - ## Danh sách skill
- First content: Bộ skill lõi cho PM Agent, chia thành 4 nhóm chức năng. / - `input-normalization/` — chuẩn hóa đầu vào thô. / - `document-generation/` — sinh tài liệu PM chuẩn.

## ./systems/pm-agent/skills/document-generation/project-charter-generator/SKILL.md

- Size: 6726 bytes
- Lines: 197
- Headings:
  - # Project Charter Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Mục tiêu phải theo chuẩn SMART
  - ### 2. Phân biệt rõ in-scope và out-of-scope
  - ### 3. Success criteria phải đo lường được
  - ### 4. Constraints phải thực tế
  - ### 5. Assumptions phải ghi rõ
  - ### 6. Rủi ro sơ bộ chỉ cần mức high-level
  - ### 7. Phê duyệt phải có checklist
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: project-charter-generator / description: Tạo file `01-initiation/charter.md` - tài liệu khởi tạo dự án chính thức từ requirement clarification, meeting notes hoặc brief dự án; dùng khi cần tạo charter cho dự án mới, định nghĩa mục tiêu SMART, phạm vi, success criteria, stakeholders, cons

## ./systems/pm-agent/skills/document-generation/project-charter-generator/examples/example-01-input.md

- Size: 1347 bytes
- Lines: 36
- Headings:
  - # Ví dụ 1: Input cho charter dự án hệ thống quản lý task
  - ## Nguồn: Requirement Clarification
  - ### Tóm tắt yêu cầu gốc
  - ### Mục tiêu chính
  - ### Phạm vi sơ bộ
  - ### Ràng buộc / giả định
  - ### Câu hỏi đã xác nhận
- First content: Người dùng muốn xây dựng một hệ thống quản lý dự án dạng web cho team nội bộ, nhằm hỗ trợ tạo task, phân công người thực hiện và theo dõi tiến độ. / - Tạo một hệ thống quản lý dự án phù hợp với team hiện tại / - Hỗ trợ quản lý task, phân công và theo dõi tiến độ tốt hơn Trello đang dùng

## ./systems/pm-agent/skills/document-generation/project-charter-generator/examples/example-01-output.md

- Size: 3514 bytes
- Lines: 69
- Headings:
  - # Project Charter: Hệ thống quản lý task nội bộ
  - ## 1. Thông tin cơ bản
  - ## 2. Mục tiêu dự án (SMART)
  - ## 3. Phạm vi dự án
  - ### In-scope (Trong phạm vi)
  - ### Out-of-scope (Ngoài phạm vi)
  - ## 4. Success Criteria (Tiêu chí thành công)
  - ## 5. Stakeholders
  - ## 6. Constraints (Ràng buộc)
  - ## 7. Assumptions (Giả định)
  - ## 8. Rủi ro sơ bộ
  - ## 9. Phê duyệt
- First content: - **Tên dự án:** Hệ thống quản lý task nội bộ / - **Mã dự án:** TMS-2026-05-11 / - **Ngày khởi tạo:** 2026-05-11

## ./systems/pm-agent/skills/document-generation/project-charter-generator/template-output.md

- Size: 1357 bytes
- Lines: 60
- Headings:
  - # Project Charter: [PROJECT_NAME]
  - ## 1. Thông tin cơ bản
  - ## 2. Mục tiêu dự án (SMART)
  - ## 3. Phạm vi dự án
  - ### In-scope (Trong phạm vi)
  - ### Out-of-scope (Ngoài phạm vi)
  - ## 4. Success Criteria (Tiêu chí thành công)
  - ## 5. Stakeholders
  - ## 6. Constraints (Ràng buộc)
  - ## 7. Assumptions (Giả định)
  - ## 8. Rủi ro sơ bộ
  - ## 9. Phê duyệt
- First content: - **Tên dự án:** [PROJECT_NAME] / - **Mã dự án:** [PROJECT_ID] / - **Ngày khởi tạo:** [DATE]

## ./systems/pm-agent/skills/document-generation/project-plan-generator/SKILL.md

- Size: 6795 bytes
- Lines: 190
- Headings:
  - # Project Plan Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Phase phải phản ánh logic triển khai thực tế
  - ### 2. WBS phải đủ chi tiết để chuyển sang task sau này
  - ### 3. Dependencies phải thể hiện thứ tự phụ thuộc thật
  - ### 4. Resource allocation phải bám thực tế nguồn lực
  - ### 5. Ước lượng effort phải tương đối hợp lý
  - ### 6. Communication plan phải phục vụ điều phối
  - ### 7. Risk mitigation phải gắn với plan
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: project-plan-generator / description: Tạo file `02-planning/plan.md` - kế hoạch triển khai dự án từ charter, requirements hoặc spec; dùng khi cần chia dự án thành phases, WBS, dependencies, resource allocation, communication plan, risk mitigation và success criteria để chuẩn bị execution

## ./systems/pm-agent/skills/document-generation/project-plan-generator/examples/example-01-input.md

- Size: 789 bytes
- Lines: 31
- Headings:
  - # Ví dụ 1: Input cho project plan hệ thống quản lý task
  - ## Nguồn: Charter + Requirements + Spec
  - ### Từ Charter
  - ### Từ Requirements
  - ### Từ Spec
  - ### Ràng buộc
- First content: - Dự án: Hệ thống quản lý task nội bộ / - Timeline: khoảng 2 tháng / - Team nội bộ 5 người

## ./systems/pm-agent/skills/document-generation/project-plan-generator/examples/example-01-output.md

- Size: 5245 bytes
- Lines: 148
- Headings:
  - # Project Plan: Hệ thống quản lý task nội bộ
  - ## 1. Phases
  - ### Phase 1: Setup & Backend Foundation (1 tuần)
  - ### Phase 2: Frontend Core Features (2 tuần)
  - ### Phase 3: Collaboration Features (1 tuần)
  - ### Phase 4: Admin & Permissions (1 tuần)
  - ### Phase 5: Testing & Refinement (1 tuần)
  - ### Phase 6: Deployment & Handover (3 ngày)
  - ## 2. Work Breakdown Structure (WBS)
  - ## 3. Dependencies
  - ## 4. Resource Allocation
  - ## 5. Communication Plan
  - ## 6. Risk Mitigation
  - ## 7. Success Criteria
- First content: - **Duration:** 1 tuần / - **Deliverables:** Backend API hoàn chỉnh, authentication, database schema / - **Milestones:** API endpoints sẵn sàng cho frontend tích hợp

## ./systems/pm-agent/skills/document-generation/project-plan-generator/template-output.md

- Size: 1944 bytes
- Lines: 84
- Headings:
  - # Project Plan: [PROJECT_NAME]
  - ## 1. Phases
  - ### Phase 1: [Tên phase]
  - ### Phase 2: [Tên phase]
  - ### Phase 3: [Tên phase]
  - ## 2. Work Breakdown Structure (WBS)
  - ## 3. Dependencies
  - ## 4. Resource Allocation
  - ## 5. Communication Plan
  - ## 6. Risk Mitigation
  - ## 7. Success Criteria
- First content: - **Duration:** [Thời gian ước lượng] / - **Deliverables:** [Sản phẩm đầu ra] / - **Milestones:** [Mốc quan trọng]

## ./systems/pm-agent/skills/document-generation/project-spec-generator/SKILL.md

- Size: 10682 bytes
- Lines: 275
- Headings:
  - # Project Spec Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Architecture phải rõ ràng và đầy đủ
  - ### 1a. API Specification phải chi tiết (bắt buộc cho backend/API projects)
  - ### POST /api/tasks
  - ### 1b. Data Model phải có schema chi tiết (bắt buộc nếu có database)
  - ### 2. Mỗi feature phải có 4 phần
  - ### 3. Technical stack phải cụ thể
  - ### 4. Quality standards phải đo lường được
  - ### 5. Phân biệt rõ MVP scope
  - ### 6. Data model phải đầy đủ entities và chi tiết
  - ### 7. Spec phải technical nhưng vẫn dễ hiểu
  - ## Heuristic gợi ý khi phân tích
- First content: --- / name: project-spec-generator / description: Tạo file `02-planning/spec.md` - đặc tả kỹ thuật chi tiết từ requirements document, charter hoặc requirement clarification; dùng khi cần tạo tài liệu spec với architecture, features, technical stack, data model và quality standards để làm cơ sở cho i

## ./systems/pm-agent/skills/document-generation/project-spec-generator/examples/example-01-input.md

- Size: 818 bytes
- Lines: 33
- Headings:
  - # Ví dụ 1: Input cho spec hệ thống quản lý task
  - ## Nguồn: Requirements Document + Charter
  - ### Từ Requirements Document
  - ### Từ Charter
  - ### Technical Constraints
- First content: **Business Requirements:** / - BR-001: Quản lý task nội bộ hiệu quả / - BR-002: Tăng khả năng cộng tác trong team

## ./systems/pm-agent/skills/document-generation/project-spec-generator/examples/example-01-output.md

- Size: 6197 bytes
- Lines: 197
- Headings:
  - # Specification: Hệ thống quản lý task nội bộ
  - ## 1. Overview
  - ## 2. Architecture
  - ### System Architecture
  - ### Components
  - ### Data Architecture
  - ## 3. Features
  - ### Feature 1: Tạo task
  - ### Feature 2: Phân công người thực hiện
  - ### Feature 3: Theo dõi trạng thái task
  - ### Feature 4: Comment trong task
  - ### Feature 5: Đính kèm file
  - ### Feature 6: Phân quyền người dùng
  - ## 4. Technical Stack
  - ### Frontend
  - ### Backend
  - ### Database
  - ### Development Tools
  - ## 5. Quality Standards
  - ### Code Quality
- First content: Xây dựng một hệ thống web nội bộ giúp team 5 người quản lý task, phân công người thực hiện, theo dõi tiến độ và cộng tác trực tiếp trong từng task. Hệ thống tập trung vào phạm vi MVP cốt lõi, không bao gồm import dữ liệu từ Trello hoặc tích hợp phức tạp bên ngoài. / ``` / ┌─────────────┐

## ./systems/pm-agent/skills/document-generation/project-spec-generator/references/api-spec-guide.md

- Size: 6353 bytes
- Lines: 212
- Headings:
  - # API Specification Guide
  - ## Tại sao cần API Specification chi tiết?
  - ## Format chuẩn cho mỗi endpoint
  - ### [METHOD] /api/[resource]
  - ## Ví dụ cụ thể
  - ### POST /api/tasks
  - ### GET /api/tasks
  - ### GET /api/tasks/:id
  - ### PATCH /api/tasks/:id
  - ### DELETE /api/tasks/:id
  - ## Checklist khi viết API Specification
  - ## Lưu ý quan trọng
- First content: Hướng dẫn viết API specification chi tiết trong spec.md. / API contract rõ ràng giúp: / - Frontend và backend làm việc song song không bị block

## ./systems/pm-agent/skills/document-generation/project-spec-generator/references/data-model-guide.md

- Size: 10710 bytes
- Lines: 330
- Headings:
  - # Data Model Guide
  - ## Tại sao cần Data Model chi tiết?
  - ## Format chuẩn cho mỗi entity
  - ### Entity: [EntityName]
  - ## Ví dụ cụ thể
  - ### Entity: User
  - ### Entity: Task
  - ### Entity: Comment
  - ### Entity: Order
  - ## Các loại data types thường dùng
  - ### Primitive types
  - ### Complex types
  - ### Special types
  - ## Constraints thường dùng
  - ### Basic constraints
  - ### String constraints
  - ### Number constraints
  - ### Date constraints
  - ## Relationships
  - ### One-to-One (1:1)
- First content: Hướng dẫn viết Data Model chi tiết trong spec.md. / Data model rõ ràng giúp: / - Backend developer biết chính xác cần tạo table/collection nào

## ./systems/pm-agent/skills/document-generation/project-spec-generator/template-output.md

- Size: 3202 bytes
- Lines: 143
- Headings:
  - # Specification: [PROJECT_NAME]
  - ## 1. Overview
  - ## 2. Architecture
  - ### System Architecture
  - ### Components
  - ### Data Architecture
  - ## 3. API Specification
  - ### [METHOD] /api/[resource]
  - ## 4. Data Model
  - ### Entity: [Entity 1]
  - ### Entity: [Entity 2]
  - ## 5. Features
  - ### Feature 1: [Tên feature]
  - ### Feature 2: [Tên feature]
  - ## 6. Technical Stack
  - ### Frontend
  - ### Backend
  - ### Database
  - ### Development Tools
  - ## 7. Quality Standards
- First content: [Tổng quan về những gì sẽ được xây dựng] / [Diagram hoặc mô tả system architecture] / - **Frontend:** [Mô tả]

## ./systems/pm-agent/skills/document-generation/requirements-document-generator/SKILL.md

- Size: 7053 bytes
- Lines: 194
- Headings:
  - # Requirements Document Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Phân loại yêu cầu đúng bản chất
  - ### 2. Mỗi functional requirement phải có acceptance criteria
  - ### 3. Functional requirement phải có Input-Process-Output
  - ### 4. Non-functional requirements phải có metric
  - ### 5. User stories theo format chuẩn
  - ### 6. Traceability matrix phải liên kết đầy đủ
  - ### 7. Đánh số ID rõ ràng
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: requirements-document-generator / description: Tạo file `01-initiation/requirements.md` - tài liệu tổng hợp yêu cầu chi tiết từ requirement clarification, charter hoặc meeting notes; dùng khi cần tạo tài liệu yêu cầu chính thức với business requirements, functional requirements, non-func

## ./systems/pm-agent/skills/document-generation/requirements-document-generator/examples/example-01-input.md

- Size: 904 bytes
- Lines: 28
- Headings:
  - # Ví dụ 1: Input cho requirements document hệ thống quản lý task
  - ## Nguồn: Requirement Clarification + Charter
  - ### Từ Charter
  - ### Từ Requirement Clarification
  - ### Yêu cầu phi chức năng đã xác nhận
- First content: - **Mục tiêu:** Xây dựng hệ thống web nội bộ giúp team quản lý task, phân công người thực hiện, theo dõi tiến độ / - **Phạm vi in-scope:** /   - Tạo task

## ./systems/pm-agent/skills/document-generation/requirements-document-generator/examples/example-01-output.md

- Size: 5971 bytes
- Lines: 131
- Headings:
  - # Requirements Document: Hệ thống quản lý task nội bộ
  - ## 1. Business Requirements
  - ### BR-001: Quản lý task nội bộ hiệu quả
  - ### BR-002: Tăng khả năng cộng tác trong team
  - ## 2. Functional Requirements
  - ### FR-001: Tạo task
  - ### FR-002: Phân công người thực hiện
  - ### FR-003: Theo dõi trạng thái task
  - ### FR-004: Comment trong task
  - ### FR-005: Đính kèm file
  - ### FR-006: Phân quyền người dùng
  - ## 3. Non-Functional Requirements
  - ### NFR-001: Responsive Design
  - ### NFR-002: Security
  - ### NFR-003: Usability
  - ## 4. User Stories (nếu dùng Agile)
  - ### US-001: Là thành viên team, tôi muốn tạo task để theo dõi công việc cần làm
  - ### US-002: Là quản lý, tôi muốn phân công task để biết ai chịu trách nhiệm việc gì
  - ### US-003: Là thành viên team, tôi muốn comment trong task để trao đổi trực tiếp theo từng công việc
  - ## 5. Traceability Matrix
- First content: - **Mô tả:** Xây dựng hệ thống web nội bộ để team có thể tạo, phân công và theo dõi task trong một nền tảng tập trung / - **Lý do:** Công cụ hiện tại chưa đáp ứng đủ nhu cầu quản lý công việc của team / - **Priority:** High

## ./systems/pm-agent/skills/document-generation/requirements-document-generator/template-output.md

- Size: 1697 bytes
- Lines: 60
- Headings:
  - # Requirements Document: [PROJECT_NAME]
  - ## 1. Business Requirements
  - ### BR-001: [Tên yêu cầu]
  - ### BR-002: [Tên yêu cầu]
  - ## 2. Functional Requirements
  - ### FR-001: [Tên chức năng]
  - ### FR-002: [Tên chức năng]
  - ## 3. Non-Functional Requirements
  - ### NFR-001: [Tên yêu cầu phi chức năng]
  - ### NFR-002: [Tên yêu cầu phi chức năng]
  - ## 4. User Stories (nếu dùng Agile)
  - ### US-001: Là [vai trò], tôi muốn [hành động] để [mục đích]
  - ## 5. Traceability Matrix
- First content: - **Mô tả:** [Mô tả] / - **Lý do:** [Lý do] / - **Priority:** [High/Medium/Low]

## ./systems/pm-agent/skills/document-generation/risk-register-generator/SKILL.md

- Size: 5759 bytes
- Lines: 182
- Headings:
  - # Risk Register Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Risk phải cụ thể và có thể xảy ra
  - ### 2. Probability và Impact phải có căn cứ
  - ### 3. Risk Score phải tính đúng
  - ### 4. Mitigation plan phải actionable và có contingency
  - ### 5. Risk matrix phải trực quan
  - ### 6. Phải có risk monitoring process
  - ### 7. Phải có summary và recommended actions
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: risk-register-generator / description: Tạo file `02-planning/risk-register.md` - đăng ký rủi ro dự án với risk matrix, risk list, mitigation plans và monitoring từ charter, plan, spec hoặc phân tích rủi ro; dùng khi cần quản lý rủi ro có cấu trúc với probability, impact, score, mitigatio

## ./systems/pm-agent/skills/document-generation/risk-register-generator/examples/example-01-input.md

- Size: 1005 bytes
- Lines: 22
- Headings:
  - # Ví dụ 1: Input cho risk register hệ thống quản lý task
  - ## Nguồn: Charter + Project Plan
  - ### Từ Charter - Rủi ro sơ bộ
  - ### Từ Project Plan - Risk Mitigation
  - ### Bối cảnh
- First content: - R-001: Budget chưa được chốt rõ có thể ảnh hưởng phạm vi triển khai / - R-002: Nếu phạm vi mở rộng thêm dashboard nâng cao hoặc tích hợp ngoài, timeline 2 tháng có thể bị ảnh hưởng / - R-003: Nếu người dùng nội bộ không phản hồi kịp, việc tinh chỉnh yêu cầu có thể chậm

## ./systems/pm-agent/skills/document-generation/risk-register-generator/examples/example-01-output.md

- Size: 4304 bytes
- Lines: 92
- Headings:
  - # Risk Register: Hệ thống quản lý task nội bộ
  - ## Risk Matrix
  - ## Risk List
  - ## Mitigation Plans
  - ### R-001: Budget chưa được chốt rõ
  - ### R-002: Scope mở rộng làm trễ timeline
  - ### R-003: Người dùng nội bộ phản hồi chậm
  - ### R-004: File upload phức tạp hơn dự kiến
  - ### R-005: Phân quyền có bug
  - ## Risk Monitoring
  - ## Risk Summary
  - ## Recommended Actions
- First content: ``` / High   |         | R-002, R-004 |       | / Medium | R-003   | R-001, R-005 |       |

## ./systems/pm-agent/skills/document-generation/risk-register-generator/template-output.md

- Size: 1476 bytes
- Lines: 54
- Headings:
  - # Risk Register: [PROJECT_NAME]
  - ## Risk Matrix
  - ## Risk List
  - ## Mitigation Plans
  - ### R-001: [Risk name]
  - ### R-002: [Risk name]
  - ## Risk Monitoring
  - ## Risk Summary
  - ## Recommended Actions
- First content: ``` / High   | [R-001] | [R-002] |       | / Medium | [R-003] |         |       |

## ./systems/pm-agent/skills/document-generation/rules-generator/SKILL.md

- Size: 6715 bytes
- Lines: 187
- Headings:
  - # Rules Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Rules phải bám sát stack thực tế
  - ### 2. Chỉ tạo rule có tính vận hành
  - ### 3. Quality gates phải kiểm tra được
  - ### 4. Git workflow phải đủ rõ để tránh hỗn loạn
  - ### 5. Testing standards phải tương ứng với mức độ dự án
  - ### 6. Change management phải giúp kiểm soát scope
  - ### 7. Phần mở rộng chỉ thêm khi có giá trị
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: rules-generator / description: Tạo file `02-planning/rules.md` - bộ nguyên tắc làm việc cho dự án từ charter, requirements, spec hoặc bối cảnh team; dùng khi cần chuẩn hóa coding standards, git workflow, testing standards, documentation standards, quality gates và change management trước

## ./systems/pm-agent/skills/document-generation/rules-generator/examples/example-01-input.md

- Size: 723 bytes
- Lines: 24
- Headings:
  - # Ví dụ 1: Input cho rules hệ thống quản lý task
  - ## Nguồn: Project Spec + Project Plan
  - ### Stack kỹ thuật
  - ### Bối cảnh thực thi
  - ### Yêu cầu nổi bật
- First content: - Frontend: React.js / - Backend: Node.js + Express / - Database: MongoDB

## ./systems/pm-agent/skills/document-generation/rules-generator/examples/example-01-output.md

- Size: 3888 bytes
- Lines: 165
- Headings:
  - # Project Rules: Hệ thống quản lý task nội bộ
  - ## 1. Coding Standards
  - ### JavaScript/Node.js
  - ### React
  - ### CSS/Tailwind
  - ## 2. Git Workflow
  - ### Branch Naming
  - ### Commit Message Format
  - ### PR Requirements
  - ## 3. Testing Standards
  - ### Manual Testing Checklist
  - ### Test Coverage
  - ## 4. Documentation Standards
  - ### Code Comments
  - ### README Requirements
  - ### API Documentation
  - ## 5. Quality Gates
  - ## 6. Change Management
  - ### How to Request Changes
  - ### Impact Assessment
- First content: - Use ES6+ syntax / - Use const/let instead of var / - Use arrow functions where appropriate

## ./systems/pm-agent/skills/document-generation/rules-generator/template-output.md

- Size: 1808 bytes
- Lines: 116
- Headings:
  - # Project Rules: [PROJECT_NAME]
  - ## 1. Coding Standards
  - ### [Language/Framework]
  - ### [Frontend Framework]
  - ### CSS/Styling
  - ## 2. Git Workflow
  - ### Branch Naming
  - ### Commit Message Format
  - ### PR Requirements
  - ## 3. Testing Standards
  - ### Manual Testing Checklist
  - ### Test Coverage
  - ## 4. Documentation Standards
  - ### Code Comments
  - ### README Requirements
  - ### API Documentation
  - ## 5. Quality Gates
  - ## 6. Change Management
  - ### How to Request Changes
  - ### Impact Assessment
- First content: - [Standard 1] / - [Standard 2] / - [Standard 3]

## ./systems/pm-agent/skills/document-generation/schedule-generator/SKILL.md

- Size: 5500 bytes
- Lines: 185
- Headings:
  - # Schedule Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Milestones phải phản ánh các mốc quan trọng
  - ### 2. Timeline phải tính toán dựa trên dependencies
  - ### 3. Gantt chart phải dễ đọc
  - ### 4. Critical path phải chính xác
  - ### 5. Summary phải có thông tin hữu ích và giải thích variance
  - ### 6. Dates phải realistic
  - ### 7. Phải có cơ chế tracking
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: schedule-generator / description: Tạo file `02-planning/schedule.md` - lịch trình dự án với milestones, timeline, gantt chart và critical path từ WBS, project plan hoặc spec; dùng khi cần chuyển task thành timeline cụ thể với target date, duration và dependencies để theo dõi tiến độ.

## ./systems/pm-agent/skills/document-generation/schedule-generator/examples/example-01-input.md

- Size: 727 bytes
- Lines: 28
- Headings:
  - # Ví dụ 1: Input cho schedule hệ thống quản lý task
  - ## Nguồn: WBS + Project Plan
  - ### Từ WBS
  - ### Từ Project Plan - Phases
  - ### Constraints
  - ### Resource
- First content: - Total tasks: 20 / - Estimated total time: ~118h / - Critical path: TASK-001 → TASK-002 → ... → TASK-020

## ./systems/pm-agent/skills/document-generation/schedule-generator/examples/example-01-output.md

- Size: 2277 bytes
- Lines: 43
- Headings:
  - # Project Schedule: Hệ thống quản lý task nội bộ
  - ## Milestones
  - ## Timeline
  - ## Gantt Chart (Markdown Table)
  - ## Critical Path
  - ## Summary
- First content: | Milestone | Target Date | Status | Actual Date | / |-----------|-------------|--------|-------------| / | M1: Setup & Backend Foundation Complete | 2026-05-22 | Not Started | - |

## ./systems/pm-agent/skills/document-generation/schedule-generator/template-output.md

- Size: 1268 bytes
- Lines: 32
- Headings:
  - # Project Schedule: [PROJECT_NAME]
  - ## Milestones
  - ## Timeline
  - ## Gantt Chart (Markdown Table)
  - ## Critical Path
  - ## Summary
- First content: | Milestone | Target Date | Status | Actual Date | / |-----------|-------------|--------|-------------| / | M1: [Tên milestone] | [YYYY-MM-DD] | [Not Started/In Progress/Done] | [Actual date hoặc -] |

## ./systems/pm-agent/skills/document-generation/wbs-generator/SKILL.md

- Size: 6288 bytes
- Lines: 201
- Headings:
  - # WBS Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Cấu trúc phân cấp phải logic
  - ### 2. Task ID phải duy nhất và tuần tự
  - ### 3. Task description phải rõ ràng và actionable
  - ### 4. Effort estimation phải tương đối hợp lý và breakdown task lớn
  - ### 5. Dependencies phải chính xác
  - ### 6. Assigned to phải bám nguồn lực thực tế
  - ### 7. Phải có summary cuối file
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: wbs-generator / description: Tạo file `02-planning/wbs.md` - phân rã công việc chi tiết từ project plan, spec hoặc requirements; dùng khi cần chia dự án thành cấu trúc phân cấp task với ID, description, effort, dependencies, assigned to và status để chuẩn bị cho task-board và execution.

## ./systems/pm-agent/skills/document-generation/wbs-generator/examples/example-01-input.md

- Size: 899 bytes
- Lines: 30
- Headings:
  - # Ví dụ 1: Input cho WBS hệ thống quản lý task
  - ## Nguồn: Project Plan + Project Spec
  - ### Từ Project Plan - Phases
  - ### Từ Project Plan - WBS sơ bộ
  - ### Từ Project Spec - Technical Stack
  - ### Resource
- First content: 1. Setup & Backend Foundation (1 tuần) / 2. Frontend Core Features (2 tuần) / 3. Collaboration Features (1 tuần)

## ./systems/pm-agent/skills/document-generation/wbs-generator/examples/example-01-output.md

- Size: 7520 bytes
- Lines: 227
- Headings:
  - # Work Breakdown Structure: Hệ thống quản lý task nội bộ
  - ## Level 1: Hệ thống quản lý task nội bộ MVP
  - ### Level 2: Setup & Backend Foundation
  - ### Level 2: Frontend Core Features
  - ### Level 2: Collaboration Features
  - ### Level 2: Admin & Permissions
  - ### Level 2: Testing & Refinement
  - ### Level 2: Deployment & Handover
  - ## Summary
- First content: - **ID:** TASK-001 / - **Description:** Tạo cấu trúc project backend với Node.js và Express / - **Estimated effort:** 4h

## ./systems/pm-agent/skills/document-generation/wbs-generator/template-output.md

- Size: 1221 bytes
- Lines: 43
- Headings:
  - # Work Breakdown Structure: [PROJECT_NAME]
  - ## Level 1: [Tên dự án]
  - ### Level 2: [Module/Phase A]
  - ### Level 2: [Module/Phase B]
  - ## Summary
- First content: - **ID:** TASK-001 / - **Description:** [Mô tả] / - **Estimated effort:** [4h]

## ./systems/pm-agent/skills/infrastructure/markdown-to-pdf/SKILL.md

- Size: 4664 bytes
- Lines: 140
- Headings:
  - # Markdown to PDF
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Quy tắc xử lý
  - ### 1. Markdown là nguồn gốc, PDF là đầu ra
  - ### 2. Chỉ xuất khi nội dung đã đủ ổn định
  - ### 3. Tên file đầu ra phải rõ ràng
  - ### 4. Bố cục ưu tiên tính dễ đọc
  - ### 5. Nếu xuất lỗi, phải báo nguyên nhân có thể kiểm tra
  - ### 6. Không thay đổi nội dung gốc ngoài ý muốn
  - ### 7. Ưu tiên quy trình đơn giản, ít phụ thuộc
  - ## Heuristic gợi ý khi dùng
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Cách dùng ngắn gọn
  - ## Script đi kèm
- First content: --- / name: markdown-to-pdf / description: Chuyển file Markdown sang PDF để phục vụ trình bày, báo cáo hoặc chia sẻ tài liệu PM; dùng khi đã có tài liệu `.md` hoàn chỉnh và cần xuất bản PDF có bố cục dễ đọc, nhất quán, có thể dùng cho charter, requirements, spec, plan, report hoặc lessons learned.

## ./systems/pm-agent/skills/infrastructure/markdown-to-pdf/scripts/md_to_pdf.py

- Size: 3496 bytes
- Lines: 121
- First lines: #!/usr/bin/env python3 / from __future__ import annotations / import html / import pathlib / import re

## ./systems/pm-agent/skills/infrastructure/markdown-to-pdf/template-output.md

- Size: 716 bytes
- Lines: 22
- Headings:
  - # Markdown to PDF Output
  - ## Input
  - ## Expected Result
  - ## Verification Checklist
- First content: - **Source markdown:** [path/to/file.md] / - **Output pdf:** [path/to/file.pdf] / - **Paper size:** [A4/Letter]

## ./systems/pm-agent/skills/input-normalization/action-items-extractor/SKILL.md

- Size: 7381 bytes
- Lines: 198
- Headings:
  - # Action Items Extractor
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - # Action Items
  - ## 1. Bối cảnh trích xuất
  - ## 2. Danh sách action items chính
  - ## 3. Action items chưa đủ dữ liệu
  - ## 4. Dependency / blocker / lưu ý
  - ## 5. Câu hỏi cần xác nhận thêm
  - ## 6. Đề xuất bước tiếp theo
  - ## Quy tắc xử lý
  - ### 1. Chỉ trích xuất việc có tính hành động
  - ### 2. Phân biệt rõ “quyết định” và “việc cần làm”
  - ### 3. Không được tự bịa owner hoặc deadline như fact
  - ### 4. Có thể suy ra action item hợp lý, nhưng phải ghi chú rõ
- First content: --- / name: action-items-extractor / description: Trích xuất action items từ ghi chú họp, transcript, chat, requirement clarification hoặc meeting notes đã chuẩn hóa; dùng khi cần chuyển nội dung thảo luận thành danh sách việc cần làm có owner, deadline, priority, status sơ bộ và điểm còn thiếu để f

## ./systems/pm-agent/skills/input-normalization/action-items-extractor/examples/example-01-input.md

- Size: 462 bytes
- Lines: 13
- Headings:
  - # Ví dụ 1: Ghi chú họp có việc cần làm rõ ràng
- First content: Họp ngày 2026-05-10 / - Anh Minh sẽ kiểm tra API kho trước thứ 5 / - Chị Lan chuẩn bị mockup UI cho buổi họp sau

## ./systems/pm-agent/skills/input-normalization/action-items-extractor/examples/example-01-output.md

- Size: 2766 bytes
- Lines: 41
- Headings:
  - # Action Items
  - ## 1. Bối cảnh trích xuất
  - ## 2. Danh sách action items chính
  - ## 3. Action items chưa đủ dữ liệu
  - ## 4. Dependency / blocker / lưu ý
  - ## 5. Câu hỏi cần xác nhận thêm
  - ## 6. Đề xuất bước tiếp theo
- First content: - Nguồn: Ghi chú họp / - Thời điểm: 2026-05-10 / - Phạm vi: Chuẩn bị cho giai đoạn khởi động và làm rõ dự án

## ./systems/pm-agent/skills/input-normalization/action-items-extractor/template-input.md

- Size: 2453 bytes
- Lines: 92
- Headings:
  - # Mẫu đầu vào cho Action Items Extractor
  - ## Dạng 1: Meeting notes đã chuẩn hóa
  - # Meeting Notes - Kickoff dự án web bán hàng
  - ## Quyết định đã chốt
  - ## Điểm chưa chốt
  - ## Đề xuất bước tiếp theo
  - ## Dạng 2: Ghi chú họp thô có việc cần làm
  - ## Dạng 3: Transcript chat chốt việc
  - ## Dạng 4: Requirement clarification có next steps
  - # Requirement Clarification
  - ## Câu hỏi cần xác nhận
  - ## Đề xuất bước tiếp theo
  - ## Dạng 5: Danh sách ý lẫn lộn
- First content: Đây là các dạng đầu vào thường gặp mà skill này xử lý. / ``` / - Dự án sẽ dùng React + Node.js

## ./systems/pm-agent/skills/input-normalization/action-items-extractor/template-output.md

- Size: 1195 bytes
- Lines: 34
- Headings:
  - # Action Items
  - ## 1. Bối cảnh trích xuất
  - ## 2. Danh sách action items chính
  - ## 3. Action items chưa đủ dữ liệu
  - ## 4. Dependency / blocker / lưu ý
  - ## 5. Câu hỏi cần xác nhận thêm
  - ## 6. Đề xuất bước tiếp theo
- First content: - Nguồn: [Meeting notes / transcript / chat / requirement clarification / khác] / - Thời điểm: [Ngày / giờ nếu có] / - Phạm vi: [Buổi họp / dự án / chủ đề liên quan]

## ./systems/pm-agent/skills/input-normalization/meeting-notes-normalizer/SKILL.md

- Size: 7274 bytes
- Lines: 206
- Headings:
  - # Meeting Notes Normalizer
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - # Meeting Notes
  - ## 1. Thông tin cuộc họp
  - ## 2. Mục tiêu / bối cảnh buổi họp
  - ## 3. Nội dung chính đã thảo luận
  - ### Chủ đề 1
  - ### Chủ đề 2
  - ## 4. Quyết định / kết luận đã chốt
  - ## 5. Điểm chưa chốt / còn bỏ ngỏ
  - ## 6. Rủi ro / lưu ý nổi bật
  - ## 7. Dữ liệu cần dùng tiếp cho skill khác
  - ### Dùng cho requirement-clarifier
  - ### Dùng cho action-items-extractor
- First content: --- / name: meeting-notes-normalizer / description: Chuẩn hóa ghi chú họp thô từ chat, bullet notes, transcript hoặc biên bản chưa hoàn chỉnh thành bản meeting notes có cấu trúc rõ ràng; dùng khi đầu vào lộn xộn, thiếu phân nhóm, thiếu mốc quyết định, hoặc cần làm sạch trước khi trích action items, 

## ./systems/pm-agent/skills/input-normalization/meeting-notes-normalizer/examples/example-01-input.md

- Size: 458 bytes
- Lines: 16
- Headings:
  - # Ví dụ 1: Ghi chú họp kickoff dự án web bán hàng
- First content: Họp kickoff dự án web bán hàng / - Khách hàng muốn có giỏ hàng / - Thanh toán online

## ./systems/pm-agent/skills/input-normalization/meeting-notes-normalizer/examples/example-01-output.md

- Size: 3088 bytes
- Lines: 72
- Headings:
  - # Meeting Notes
  - ## 1. Thông tin cuộc họp
  - ## 2. Mục tiêu / bối cảnh buổi họp
  - ## 3. Nội dung chính đã thảo luận
  - ### Nhu cầu chức năng chính
  - ### Hạ tầng / kỹ thuật ban đầu
  - ### Tổ chức thực hiện ban đầu
  - ## 4. Quyết định / kết luận đã chốt
  - ## 5. Điểm chưa chốt / còn bỏ ngỏ
  - ## 6. Rủi ro / lưu ý nổi bật
  - ## 7. Dữ liệu cần dùng tiếp cho skill khác
  - ### Dùng cho requirement-clarifier
  - ### Dùng cho action-items-extractor
  - ### Dùng cho decision log / project summary
  - ## 8. Đề xuất bước tiếp theo
- First content: - Tên cuộc họp: Kickoff dự án web bán hàng / - Thời gian: Chưa ghi rõ trong đầu vào / - Thành phần tham gia: Có nhắc đến Anh Minh và Lan; chưa đủ dữ liệu để xác định đầy đủ thành phần

## ./systems/pm-agent/skills/input-normalization/meeting-notes-normalizer/template-input.md

- Size: 2768 bytes
- Lines: 95
- Headings:
  - # Mẫu đầu vào cho Meeting Notes Normalizer
  - ## Dạng 1: Bullet notes thô
  - ## Dạng 2: Transcript chat
  - ## Dạng 3: Ghi chú lộn xộn nhiều chủ đề
  - ## Dạng 4: Transcript voice (đã chuyển text)
  - ## Dạng 5: Biên bản sơ sài
- First content: Đây là các dạng đầu vào thường gặp mà skill này xử lý. / ``` / Họp kickoff dự án web bán hàng

## ./systems/pm-agent/skills/input-normalization/meeting-notes-normalizer/template-output.md

- Size: 1282 bytes
- Lines: 53
- Headings:
  - # Meeting Notes
  - ## 1. Thông tin cuộc họp
  - ## 2. Mục tiêu / bối cảnh buổi họp
  - ## 3. Nội dung chính đã thảo luận
  - ### Chủ đề 1
  - ### Chủ đề 2
  - ### Chủ đề 3
  - ## 4. Quyết định / kết luận đã chốt
  - ## 5. Điểm chưa chốt / còn bỏ ngỏ
  - ## 6. Rủi ro / lưu ý nổi bật
  - ## 7. Dữ liệu cần dùng tiếp cho skill khác
  - ### Dùng cho requirement-clarifier
  - ### Dùng cho action-items-extractor
  - ### Dùng cho decision log / project summary
  - ## 8. Đề xuất bước tiếp theo
- First content: - Tên cuộc họp: [Tên cuộc họp] / - Thời gian: [Ngày / giờ nếu có] / - Thành phần tham gia: [Danh sách người tham gia nếu có]

## ./systems/pm-agent/skills/input-normalization/requirement-clarifier/SKILL.md

- Size: 8246 bytes
- Lines: 253
- Headings:
  - # Requirement Clarifier
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - # Requirement Clarification
  - ## 1. Tóm tắt yêu cầu gốc
  - ## 2. Mục tiêu chính
  - ## 3. Phạm vi sơ bộ
  - ### Bao gồm
  - ### Chưa rõ / chưa chốt
  - ### Ngoài phạm vi (nếu suy ra được)
  - ## 4. Danh sách yêu cầu đã bóc tách
  - ### Yêu cầu nghiệp vụ
  - ### Yêu cầu chức năng
  - ### Yêu cầu phi chức năng
  - ### Ràng buộc / giả định
- First content: --- / name: requirement-clarifier / description: Làm rõ yêu cầu thô từ chat, brief, ghi chú hoặc mô tả ban đầu thành bản yêu cầu có cấu trúc; dùng khi đầu vào còn mơ hồ, thiếu chi tiết, lẫn nhiều ý, hoặc cần bóc tách để chuẩn bị tạo tài liệu PM như charter, requirements, spec, plan.

## ./systems/pm-agent/skills/input-normalization/requirement-clarifier/examples/example-01-input.md

- Size: 406 bytes
- Lines: 9
- Headings:
  - # Ví dụ 1: Yêu cầu hệ thống quản lý dự án
- First content: Anh muốn làm một hệ thống quản lý dự án cho team.  / Cần có chức năng tạo task, assign người, theo dõi tiến độ. / Nên dùng web, có thể truy cập từ nhiều nơi.

## ./systems/pm-agent/skills/input-normalization/requirement-clarifier/examples/example-01-output.md

- Size: 3054 bytes
- Lines: 68
- Headings:
  - # Requirement Clarification
  - ## 1. Tóm tắt yêu cầu gốc
  - ## 2. Mục tiêu chính
  - ## 3. Phạm vi sơ bộ
  - ### Bao gồm
  - ### Chưa rõ / chưa chốt
  - ### Ngoài phạm vi (nếu suy ra được)
  - ## 4. Danh sách yêu cầu đã bóc tách
  - ### Yêu cầu nghiệp vụ
  - ### Yêu cầu chức năng
  - ### Yêu cầu phi chức năng
  - ### Ràng buộc / giả định
  - ## 5. Điểm còn mơ hồ / chưa đủ dữ liệu
  - ## 6. Câu hỏi cần xác nhận
  - ## 7. Đề xuất bước tiếp theo
- First content: Người dùng muốn xây dựng một hệ thống quản lý dự án dạng web cho team nội bộ, nhằm hỗ trợ tạo task, phân công người thực hiện và theo dõi tiến độ. Hệ thống cần truy cập được từ nhiều nơi, có giới hạn thời gian triển khai khoảng 2 tháng, và chi phí nên ở mức hợp lý. / - Tạo một hệ thống quản lý dự án

## ./systems/pm-agent/skills/input-normalization/requirement-clarifier/references/clarification-questions-guide.md

- Size: 8023 bytes
- Lines: 197
- Headings:
  - # Clarification Questions Guide
  - ## Tại sao cần câu hỏi xác nhận tốt?
  - ## Cấu trúc câu hỏi tốt
  - ### 1. Priority (Mức độ ưu tiên)
  - ### 2. Context (Tại sao câu hỏi này quan trọng)
  - ### 3. Options (Các lựa chọn cụ thể)
  - ## Ví dụ câu hỏi tốt
  - ### Ví dụ 1: Về phạm vi feature
  - ### Ví dụ 2: Về technical decision
  - ### Ví dụ 3: Về phân quyền
  - ### Ví dụ 4: Về data requirement
  - ### Ví dụ 5: Về timeline constraint
  - ## Ví dụ câu hỏi không tốt
  - ### ❌ Quá chung chung
  - ### ❌ Quá chi tiết không quan trọng
  - ### ❌ Thiếu options
  - ### ❌ Thiếu priority
  - ## Checklist cho câu hỏi tốt
  - ## Số lượng câu hỏi hợp lý
  - ## Khi nào nên hỏi
- First content: Hướng dẫn viết câu hỏi xác nhận hiệu quả trong requirement clarification. / Câu hỏi xác nhận giúp: / - Làm rõ phạm vi dự án trước khi bắt đầu

## ./systems/pm-agent/skills/input-normalization/requirement-clarifier/template-input.md

- Size: 2015 bytes
- Lines: 72
- Headings:
  - # Mẫu đầu vào cho Requirement Clarifier
  - ## Dạng 1: Chat/brief ngắn
  - ## Dạng 2: Ghi chú họp thô
  - ## Dạng 3: Yêu cầu lẫn lộn nhiều ý
  - ## Dạng 4: Yêu cầu có ràng buộc kỹ thuật
  - ## Dạng 5: Yêu cầu chưa rõ phạm vi
- First content: Đây là các dạng đầu vào thường gặp mà skill này xử lý. / ``` / Anh muốn làm một hệ thống quản lý dự án cho team. 

## ./systems/pm-agent/skills/input-normalization/requirement-clarifier/template-output.md

- Size: 1880 bytes
- Lines: 75
- Headings:
  - # Requirement Clarification
  - ## 1. Tóm tắt yêu cầu gốc
  - ## 2. Mục tiêu chính
  - ## 3. Phạm vi sơ bộ
  - ### Bao gồm
  - ### Chưa rõ / chưa chốt
  - ### Ngoài phạm vi (nếu suy ra được)
  - ## 4. Danh sách yêu cầu đã bóc tách
  - ### Yêu cầu nghiệp vụ
  - ### Yêu cầu chức năng
  - ### Yêu cầu phi chức năng
  - ### Ràng buộc / giả định
  - ## 5. Điểm còn mơ hồ / chưa đủ dữ liệu
  - ## 6. Câu hỏi cần xác nhận
  - ## 7. Đề xuất bước tiếp theo
- First content: [Mô tả ngắn gọn lại yêu cầu ban đầu theo ngôn ngữ rõ ràng, không thêm bịa thông tin] / - [Mục tiêu 1] / - [Mục tiêu 2]

## ./systems/pm-agent/skills/project-operations/change-log-updater/SKILL.md

- Size: 5604 bytes
- Lines: 184
- Headings:
  - # Change Log Updater
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Chỉ ghi change đủ lớn để cần theo dõi chính thức
  - ### 2. Mỗi change phải có ID duy nhất
  - ### 3. Phân loại type rõ ràng
  - ### 4. Impact phải tách rõ theo 3 chiều
  - ### 5. Justification phải đủ thuyết phục
  - ### 6. Approval history phải rõ ràng
  - ### 7. Implementation status phải phản ánh thực tế
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: change-log-updater / description: Tạo hoặc cập nhật file `03-execution/change-log.md` từ change requests, quyết định thay đổi scope/timeline/budget hoặc điều chỉnh implementation; dùng khi cần ghi nhận chính thức các thay đổi đã đề xuất, được phê duyệt hoặc bị từ chối trong quá trình dự 

## ./systems/pm-agent/skills/project-operations/change-log-updater/examples/example-01-input.md

- Size: 768 bytes
- Lines: 21
- Headings:
  - # Ví dụ 1: Input cho change log hệ thống quản lý task
  - ## Nguồn: Quyết định từ owner + PM Agent
  - ### Change 1
  - ### Change 2
- First content: - Owner muốn bổ sung dashboard analytics ngay trong MVP / - PM Agent đánh giá việc này sẽ làm tăng scope và có thể ảnh hưởng timeline 2 tháng / - Requested by: Nguyễn Thành Doanh

## ./systems/pm-agent/skills/project-operations/change-log-updater/examples/example-01-output.md

- Size: 1906 bytes
- Lines: 41
- Headings:
  - # Change Log: Hệ thống quản lý task nội bộ
  - ## Change Requests
  - ### CHG-001: Đề xuất bổ sung dashboard analytics vào MVP
  - ### CHG-002: Bỏ upload file khỏi MVP đầu tiên
  - ## Change Statistics
- First content: - **Status:** Pending / - **Requested by:** Nguyễn Thành Doanh / - **Requested date:** 2026-05-18

## ./systems/pm-agent/skills/project-operations/change-log-updater/template-output.md

- Size: 1362 bytes
- Lines: 41
- Headings:
  - # Change Log: [PROJECT_NAME]
  - ## Change Requests
  - ### CHG-001: [Tên thay đổi]
  - ### CHG-002: [Tên thay đổi]
  - ## Change Statistics
- First content: - **Status:** [Approved/Pending/Rejected] / - **Requested by:** [Who requested] / - **Requested date:** [DATE]

## ./systems/pm-agent/skills/project-operations/daily-project-report-generator/SKILL.md

- Size: 6025 bytes
- Lines: 178
- Headings:
  - # Daily Project Report Generator
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Reporting modes
  - ### 1. Project report mode
  - ### 2. Framework report mode
  - ## Output
  - ## Nội dung bắt buộc
  - ### Với project report
  - ### Với framework report
  - ## Quy tắc quan trọng
  - ### 1. Phân biệt rõ nguồn thay đổi
  - ### 2. Không bịa actor
  - ### 3. Report là snapshot, không thay thế logs chi tiết
  - ### 4. Luôn có next actions
  - ### 5. Nếu không có thay đổi đáng kể
  - ### 6. Nếu project stopped / on-hold
  - ## Heuristic gợi ý
  - ## Nguồn xác định actor
- First content: --- / name: daily-project-report-generator / description: Tạo file báo cáo hằng ngày cho một project hoặc cho chính PM Agent framework vào cuối ngày hoặc theo lịch định kỳ; dùng khi cần snapshot thay đổi trong ngày, ai đã làm gì (human / agent / subagent), tiến độ, issue/risk chính và next actions. 

## ./systems/pm-agent/skills/project-operations/daily-project-report-generator/examples/example-01-output.md

- Size: 2447 bytes
- Lines: 57
- Headings:
  - # Daily Project Report - Trang Web Bán Hàng
  - ## Summary
  - ## Changes Today
  - ## Task Progress Snapshot
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions (Next Day)
  - ## Evidence / References
- First content: - **Date:** 2026-05-14 / - **Generated at:** 19:00 UTC / - **Project ID:** web-ban-hang

## ./systems/pm-agent/skills/project-operations/daily-project-report-generator/scripts/generate_daily_report.py

- Size: 23223 bytes
- Lines: 483
- First lines: #!/usr/bin/env python3 / from __future__ import annotations / import argparse / import datetime as dt / import pathlib

## ./systems/pm-agent/skills/project-operations/daily-project-report-generator/template-output.md

- Size: 1489 bytes
- Lines: 58
- Headings:
  - # Daily Project Report - [PROJECT_NAME]
  - ## Summary
  - ## Changes Today
  - ## Task Progress Snapshot
  - ## Issues / Risks Needing Attention
  - ## Decisions / Approvals Today
  - ## Actor Attribution Summary
  - ## Next Actions (Next Day)
  - ## Evidence / References
- First content: - **Date:** [YYYY-MM-DD] / - **Generated at:** [HH:MM UTC] / - **Project ID:** [project_id]

## ./systems/pm-agent/skills/project-operations/issue-log-updater/SKILL.md

- Size: 6043 bytes
- Lines: 189
- Headings:
  - # Issue Log Updater
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Phân biệt issue với risk và task
  - ### 2. Mỗi issue phải có ID duy nhất
  - ### 3. Severity phải phản ánh đúng mức độ ảnh hưởng
  - ### 4. Active issue phải đủ thông tin để xử lý
  - ### 5. Root cause và resolution phải thực tế và sâu hơn
  - ### 6. Issue đã giải quyết phải giữ lịch sử ngắn gọn
  - ### 7. Statistics phải khớp với nội dung log
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: issue-log-updater / description: Tạo hoặc cập nhật file `03-execution/issue-log.md` từ blocker, lỗi phát sinh, feedback test hoặc trạng thái thực tế; dùng khi cần ghi nhận, theo dõi và cập nhật các vấn đề đang mở hoặc đã giải quyết trong quá trình execution.

## ./systems/pm-agent/skills/project-operations/issue-log-updater/examples/example-01-input.md

- Size: 797 bytes
- Lines: 22
- Headings:
  - # Ví dụ 1: Input cho issue log hệ thống quản lý task
  - ## Nguồn: Task board + feedback thực tế
  - ### Blocked task từ task board
  - ### Lỗi đã xảy ra và đã xử lý
  - ### Feedback test
- First content: - TASK-008: Tạo layout chính bị chặn vì chưa có design direction / - Since: 2026-05-16 / - Action: Xin xác nhận design direction hoặc dùng default layout để tiếp tục

## ./systems/pm-agent/skills/project-operations/issue-log-updater/examples/example-01-output.md

- Size: 2085 bytes
- Lines: 45
- Headings:
  - # Issue Log: Hệ thống quản lý task nội bộ
  - ## Active Issues (Vấn đề đang mở)
  - ### ISS-001: Thiếu design direction cho layout chính
  - ### ISS-002: Form create task chưa validate deadline
  - ## Resolved Issues (Vấn đề đã giải quyết)
  - ### ISS-003: Lỗi version jsonwebtoken trong package.json
  - ## Issue Statistics
- First content: - **Severity:** Medium / - **Status:** Open / - **Reported by:** Task Board / PM Agent

## ./systems/pm-agent/skills/project-operations/issue-log-updater/template-output.md

- Size: 1306 bytes
- Lines: 46
- Headings:
  - # Issue Log: [PROJECT_NAME]
  - ## Active Issues (Vấn đề đang mở)
  - ### ISS-001: [Tên vấn đề]
  - ### ISS-002: [Tên vấn đề]
  - ## Resolved Issues (Vấn đề đã giải quyết)
  - ### ISS-003: [Tên vấn đề]
  - ## Issue Statistics
- First content: - **Severity:** [High/Medium/Low] / - **Status:** Open / - **Reported by:** [Who reported]

## ./systems/pm-agent/skills/project-operations/lessons-learned-writer/SKILL.md

- Size: 6435 bytes
- Lines: 192
- Headings:
  - # Lessons Learned Writer
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Bài học phải xuất phát từ trải nghiệm thực tế
  - ### 2. Phân biệt rõ “what went well” và “what could be improved”
  - ### 3. Key insights phải có khả năng tái sử dụng
  - ### 4. Recommendations phải hành động được
  - ### 5. Metrics summary chỉ dùng khi có dữ liệu đủ tin cậy
  - ### 6. Knowledge transfer phải giúp người sau dùng lại được
  - ### 7. Action items phải chuyển bài học thành việc cụ thể với owner và deadline
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: lessons-learned-writer / description: Tạo hoặc cập nhật file `lessons-learned.md` từ retrospective notes, issue log, change log, testing results hoặc trải nghiệm thực thi; dùng khi cần tổng hợp bài học rút ra, insight, khuyến nghị và tri thức có thể tái sử dụng cho dự án hiện tại hoặc dự

## ./systems/pm-agent/skills/project-operations/lessons-learned-writer/examples/example-01-input.md

- Size: 948 bytes
- Lines: 29
- Headings:
  - # Ví dụ 1: Input cho lessons learned hệ thống quản lý task
  - ## Nguồn: Issue log + status dashboard + ghi chú thực thi
  - ### What went well (quan sát được)
  - ### What could be improved
  - ### Issues đã gặp
  - ### Dashboard observation
  - ### Recommendation sơ bộ
- First content: - WBS rõ nên chuyển sang task board nhanh / - Task board giúp nhìn blocker rõ / - PM Agent chuẩn hóa tài liệu nhanh và đều

## ./systems/pm-agent/skills/project-operations/lessons-learned-writer/examples/example-01-output.md

- Size: 2997 bytes
- Lines: 40
- Headings:
  - # Lessons Learned: Hệ thống quản lý task nội bộ
  - ## What Went Well
  - ## What Could Be Improved
  - ## Key Insights
  - ## Recommendations
  - ## Metrics Summary
  - ## Knowledge Transfer
  - ## Action Items
- First content: 1. **WBS rõ ràng giúp execution mượt hơn** - Khi WBS được phân rã tốt từ đầu, việc chuyển sang task board và theo dõi execution diễn ra nhanh, ít bị mơ hồ. / 2. **Task board giúp lộ blocker sớm** - Việc tách rõ backlog, in progress, blocked giúp phát hiện điểm nghẽn như thiếu design direction trước 

## ./systems/pm-agent/skills/project-operations/lessons-learned-writer/template-output.md

- Size: 1232 bytes
- Lines: 46
- Headings:
  - # Lessons Learned: [PROJECT_NAME]
  - ## What Went Well
  - ## What Could Be Improved
  - ## Key Insights
  - ## Recommendations
  - ## Metrics Summary
  - ## Knowledge Transfer
  - ## Action Items
- First content: 1. **[Điểm mạnh 1]** - [Mô tả] / 2. **[Điểm mạnh 2]** - [Mô tả] / 3. **[Điểm mạnh 3]** - [Mô tả]

## ./systems/pm-agent/skills/project-operations/status-dashboard-updater/SKILL.md

- Size: 7745 bytes
- Lines: 219
- Headings:
  - # Status Dashboard Updater
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Dashboard phải ngắn gọn nhưng có giá trị điều hành
  - ### 2. Project health phải phản ánh đúng tình hình thực tế
  - ### 3. Key metrics phải có căn cứ và giải thích
  - ### 4. Timeline / Budget / Scope phải tách riêng
  - ### 5. Top risks và top issues phải được chọn lọc
  - ### 6. Recommended actions phải cụ thể và có owner/deadline
  - ### 7. Dashboard phải có dấu mốc thời gian
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
- First content: --- / name: status-dashboard-updater / description: Tạo hoặc cập nhật file `04-monitoring/status-dashboard.md` từ task board, issue log, change log, schedule và risk register; dùng khi cần tổng hợp sức khỏe dự án, metrics, timeline, budget, scope, top risks/issues, upcoming milestones và recommended

## ./systems/pm-agent/skills/project-operations/status-dashboard-updater/examples/example-01-input.md

- Size: 1057 bytes
- Lines: 39
- Headings:
  - # Ví dụ 1: Input cho status dashboard hệ thống quản lý task
  - ## Nguồn: Task board + issue log + risk register + schedule
  - ### Từ Task Board
  - ### Từ Issue Log
  - ### Từ Risk Register
  - ### Từ Schedule
  - ### Budget/Effort
  - ### Reporting date
- First content: - Total tasks: 8 / - Completed: 3 / - In Progress: 1

## ./systems/pm-agent/skills/project-operations/status-dashboard-updater/examples/example-01-output.md

- Size: 1920 bytes
- Lines: 63
- Headings:
  - # Status Dashboard: Hệ thống quản lý task nội bộ
  - ## Project Health
  - ## Key Metrics
  - ## Timeline Status
  - ## Budget Status
  - ## Scope Status
  - ## Top Risks
  - ## Top Issues
  - ## Upcoming Milestones
  - ## Current Phase
  - ## Recommended Actions
  - ## Last Updated
- First content: 🟡 **Overall Status:** At Risk / | Metric | Target | Actual | Status | / |--------|--------|--------|--------|

## ./systems/pm-agent/skills/project-operations/status-dashboard-updater/references/metrics-notes-guide.md

- Size: 4832 bytes
- Lines: 171
- Headings:
  - # Metrics Notes Guide
  - ## Tại sao cần giải thích metrics?
  - ## Metrics thường dùng
  - ### 1. SPI - Schedule Performance Index
  - ### 2. CPI - Cost Performance Index
  - ### 3. Scope Completion
  - ### 4. Defect Rate
  - ## Khi nào nên hiển thị Metrics Notes
  - ### Nên hiển thị khi:
  - ### Có thể bỏ qua khi:
  - ## Format gợi ý cho Metrics Notes
  - ## Metrics Notes
  - ## Metrics Notes
  - ## Nếu dữ liệu không đủ mạnh
  - ### Nên làm:
  - ### Không nên làm:
  - ## Metrics thay thế đơn giản hơn
  - ## Checklist
  - ## Kết luận
- First content: Hướng dẫn giải thích các metrics trong status dashboard. / Các metrics như SPI/CPI hữu ích cho PM, nhưng không phải ai đọc dashboard cũng hiểu ngay. / Nếu chỉ ghi số mà không giải thích:

## ./systems/pm-agent/skills/project-operations/status-dashboard-updater/references/recommended-actions-guide.md

- Size: 7894 bytes
- Lines: 276
- Headings:
  - # Recommended Actions Guide
  - ## Tại sao cần recommended actions tốt?
  - ## Cấu trúc action tốt
  - ### 1. Action description (Mô tả hành động)
  - ### 2. Owner (Người chịu trách nhiệm)
  - ### 3. Deadline (Thời hạn)
  - ### 4. Priority (Mức độ ưu tiên) - optional nhưng nên có
  - ## Ví dụ action tốt
  - ### Ví dụ 1: Gỡ blocker
  - ### Ví dụ 2: Scope control
  - ### Ví dụ 3: Chuẩn bị sớm
  - ### Ví dụ 4: Review định kỳ
  - ### Ví dụ 5: Risk mitigation
  - ## Ví dụ action không tốt
  - ### ❌ Quá chung chung
  - ### ❌ Thiếu owner
  - ### ❌ Thiếu deadline
  - ### ❌ Không cụ thể
  - ## Các loại action thường gặp
  - ### 1. Gỡ blocker
- First content: Hướng dẫn viết recommended actions hiệu quả trong status dashboard. / Recommended actions giúp: / - Chuyển từ monitoring sang steering (từ "biết" sang "làm")

## ./systems/pm-agent/skills/project-operations/status-dashboard-updater/template-output.md

- Size: 2241 bytes
- Lines: 78
- Headings:
  - # Status Dashboard: [PROJECT_NAME]
  - ## Project Health
  - ## Key Metrics
  - ## Timeline Status
  - ## Budget Status
  - ## Scope Status
  - ## Top Risks
  - ## Top Issues
  - ## Upcoming Milestones
  - ## Current Phase
  - ## Recommended Actions
  - ## Metrics Notes (nếu cần)
  - ## Last Updated
- First content: 🟢 **Overall Status:** On Track / 🟡 At Risk / 🔴 Off Track / | Metric | Target | Actual | Status | / |--------|--------|--------|--------|

## ./systems/pm-agent/skills/project-operations/task-board-builder/SKILL.md

- Size: 6006 bytes
- Lines: 192
- Headings:
  - # Task Board Builder
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Mỗi task chỉ được nằm ở một trạng thái chính
  - ### 2. Phân biệt rõ các trạng thái
  - ### 3. Backlog phải ưu tiên được
  - ### 4. In Progress phải có thông tin tiến độ
  - ### 5. Done phải ghi nhận completion rõ ràng
  - ### 6. Blocked phải có blocker và hành động tiếp theo
  - ### 7. Summary phải phản ánh thực trạng execution
  - ### 8. Next Actions phải có owner và ưu tiên
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
- First content: --- / name: task-board-builder / description: Tạo hoặc cập nhật file `03-execution/task-board.md` từ WBS, schedule, action items hoặc trạng thái thực tế; dùng khi cần quản lý task theo trạng thái như backlog, in progress, done, blocked, cancelled để theo dõi execution hằng ngày.

## ./systems/pm-agent/skills/project-operations/task-board-builder/examples/example-01-input.md

- Size: 926 bytes
- Lines: 34
- Headings:
  - # Ví dụ 1: Input cho task board hệ thống quản lý task
  - ## Nguồn: WBS + trạng thái thực tế
  - ### Từ WBS
  - ### Trạng thái thực tế
  - ### Priority
  - ### Current phase
- First content: - TASK-001: Khởi tạo project Node.js / - TASK-002: Setup MongoDB / - TASK-003: Tạo models

## ./systems/pm-agent/skills/project-operations/task-board-builder/examples/example-01-output.md

- Size: 1888 bytes
- Lines: 48
- Headings:
  - # Task Board: Hệ thống quản lý task nội bộ
  - ## Status Legend
  - ## Backlog (Chưa bắt đầu)
  - ## In Progress (Đang làm)
  - ## Done (Hoàn thành)
  - ## Blocked (Bị chặn)
  - ## Summary
  - ## Next Actions
- First content: - 🔴 Not Started / - 🟡 In Progress / - 🟢 Done

## ./systems/pm-agent/skills/project-operations/task-board-builder/template-output.md

- Size: 1848 bytes
- Lines: 59
- Headings:
  - # Task Board: [PROJECT_NAME]
  - ## Status Legend
  - ## Backlog (Chưa bắt đầu)
  - ## In Progress (Đang làm)
  - ## Done (Hoàn thành)
  - ## Blocked (Bị chặn)
  - ## Cancelled (Nếu có)
  - ## Summary
  - ## Next Actions
- First content: - 🔴 Not Started / - 🟡 In Progress / - 🟢 Done

## ./systems/pm-agent/skills/voice/text-to-voice/SKILL.md

- Size: 5072 bytes
- Lines: 148
- Headings:
  - # Text to Voice
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Ưu tiên script dễ nghe, không bê nguyên text dài dòng
  - ### 2. Phân biệt text gốc và voice script
  - ### 3. Không làm mất ý quan trọng
  - ### 4. Nội dung dài nên chia đoạn
  - ### 5. Phải phù hợp với ngữ cảnh chat
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
  - ## Lỗi thường gặp cần tránh
  - ## Cách dùng ngắn gọn
- First content: --- / name: text-to-voice / description: Chuyển phản hồi text thành audio/voice để gửi lại qua Telegram hoặc kênh chat khác; dùng khi cần trả lời bằng giọng nói, tóm tắt ngắn gọn bằng audio, đọc lại nội dung quan trọng, hoặc hỗ trợ workflow PM khi anh muốn nghe thay vì đọc.

## ./systems/pm-agent/skills/voice/text-to-voice/references/voice-script-guide.md

- Size: 1971 bytes
- Lines: 63
- Headings:
  - # Voice Script Guide
  - ## Khi nào nên dùng voice
  - ## Quy tắc viết script dễ nghe
  - ### 1. Viết như đang nói với người thật
  - ### 2. Ưu tiên takeaway trước
  - ### 3. Đọc deadline và action item rõ ràng
  - ### 4. Nếu text quá dài, rút gọn
  - ## Ví dụ
  - ### Text gốc
  - ### Voice script tốt
  - ### Voice script không tốt
  - ## Khi nào nên chia nhiều audio
  - ## Kết luận
- First content: Hướng dẫn biến text thành script dễ nghe. / Phù hợp: / - tóm tắt ngắn

## ./systems/pm-agent/skills/voice/text-to-voice/template-output.md

- Size: 443 bytes
- Lines: 16
- Headings:
  - # Text to Voice Output
  - ## Input Summary
  - ## Voice Script
  - ## Delivery Notes
- First content: - **Source text type:** [status update / summary / reminder / explanation] / - **Language:** [vi / en / mixed] / - **Target delivery:** [Telegram voice / audio file / other]

## ./systems/pm-agent/skills/voice/voice-to-text/SKILL.md

- Size: 5528 bytes
- Lines: 148
- Headings:
  - # Voice to Text
  - ## Mục tiêu
  - ## Dùng khi nào
  - ## Không dùng khi nào
  - ## Input bắt buộc
  - ## Input tùy chọn
  - ## Output
  - ## Format output chuẩn
  - ## Quy tắc xử lý
  - ### 1. Ưu tiên độ trung thực của transcript
  - ### 2. Tách transcript với suy luận
  - ### 3. Giữ nội dung đủ dùng cho bước sau
  - ### 4. Đánh dấu đoạn cần xác nhận
  - ### 5. Nếu transcript quá thô, gợi ý bước tiếp theo
  - ### 6. Không giả vờ độ chính xác tuyệt đối
  - ## Heuristic gợi ý khi phân tích
  - ## Liên hệ với workflow PM
  - ## Liên hệ với cấu trúc dự án
  - ## Tiêu chí hoàn thành tốt
  - ## Lỗi thường gặp cần tránh
- First content: --- / name: voice-to-text / description: Chuyển voice note hoặc file audio thành text để đưa vào workflow PM Agent; dùng khi đầu vào là tin nhắn thoại, ghi âm cuộc họp, voice note Telegram hoặc audio ngắn cần transcript để tiếp tục xử lý như requirement clarification, meeting notes, action items hoặ

## ./systems/pm-agent/skills/voice/voice-to-text/references/transcript-quality-guide.md

- Size: 1237 bytes
- Lines: 39
- Headings:
  - # Transcript Quality Guide
  - ## Mức độ confidence
  - ### High
  - ### Medium
  - ### Low
  - ## Khi nào phải đánh dấu unclear
  - ## Mẫu đánh dấu
  - ## Quy tắc quan trọng
- First content: Hướng dẫn đánh giá transcript từ audio/voice note. / - Hầu hết nội dung nghe rõ / - Tên riêng, deadline, số liệu khá chắc chắn

## ./systems/pm-agent/skills/voice/voice-to-text/template-output.md

- Size: 561 bytes
- Lines: 20
- Headings:
  - # Voice to Text Output
  - ## Input Summary
  - ## Transcript
  - ## Unclear Segments
  - ## Suggested Next Step
- First content: - **Audio source:** [voice note / file path / attachment] / - **Context:** [meeting note / project request / quick update] / - **Language:** [vi / en / mixed]

## ./systems/pm-agent/templates/change-log-template.md

- Size: 1773 bytes
- Lines: 51
- Headings:
  - # Template: Change Log
  - # Change Log: [PROJECT_NAME]
  - ## Change Requests
  - ### CHG-001: [Tên thay đổi]
  - ### CHG-002: [Tên thay đổi]
  - ## Change Statistics
- First content: - **Status:** Approved/Pending/Rejected / - **Requested by:** [Who requested] / - **Requested actor:** [human:... / agent:main / subagent:... / unknown]

## ./systems/pm-agent/templates/charter-template.md

- Size: 1249 bytes
- Lines: 56
- Headings:
  - # Template: Project Charter
  - # Project Charter: [PROJECT_NAME]
  - ## 1. Thông tin cơ bản
  - ## 2. Mục tiêu dự án (SMART)
  - ## 3. Phạm vi dự án
  - ### In-scope (Trong phạm vi)
  - ### Out-of-scope (Ngoài phạm vi)
  - ## 4. Success Criteria (Tiêu chí thành công)
  - ## 5. Stakeholders
  - ## 6. Constraints (Ràng buộc)
  - ## 7. Assumptions (Giả định)
  - ## 8. Rủi ro sơ bộ
  - ## 9. Phê duyệt
- First content: - **Tên dự án:** [PROJECT_NAME] / - **Mã dự án:** [PROJECT_ID] / - **Ngày khởi tạo:** [DATE]

## ./systems/pm-agent/templates/final-report-template.md

- Size: 1501 bytes
- Lines: 57
- Headings:
  - # Template: Final Report
  - # Final Project Report: [PROJECT_NAME]
  - ## Executive Summary
  - ## Project Overview
  - ## Objectives Achievement
  - ## Deliverables
  - ## Final Metrics
  - ## Lessons Learned
  - ## Key Metrics Summary
  - ## Sign-off
  - ## Next Steps
- First content: Tóm tắt kết quả dự án, thành công, thất bại, bài học / - **Project name:** [PROJECT_NAME] / - **Start date:** [DATE]

## ./systems/pm-agent/templates/issue-log-template.md

- Size: 1725 bytes
- Lines: 55
- Headings:
  - # Template: Issue Log
  - # Issue Log: [PROJECT_NAME]
  - ## Active Issues (Vấn đề đang mở)
  - ### ISS-001: [Tên vấn đề]
  - ### ISS-002: [Tên vấn đề]
  - ## Resolved Issues (Vấn đề đã giải quyết)
  - ### ISS-003: [Tên vấn đề]
  - ## Issue Statistics
- First content: - **Severity:** High/Medium/Low / - **Status:** Open / - **Reported by:** [Who reported]

## ./systems/pm-agent/templates/lessons-learned-template.md

- Size: 1239 bytes
- Lines: 45
- Headings:
  - # Template: Lessons Learned
  - # Lessons Learned: [PROJECT_NAME]
  - ## What Went Well
  - ## What Could Be Improved
  - ## Key Insights
  - ## Recommendations
  - ## Metrics Summary
  - ## Knowledge Transfer
  - ## Action Items
- First content: 1. **Effective communication** - Daily standups helped keep team aligned / 2. **Good risk management** - Identified risks early / 3. **Strong documentation** - Made handoff smooth

## ./systems/pm-agent/templates/plan-template.md

- Size: 566 bytes
- Lines: 31
- Headings:
  - # Template: Project Plan
  - # Project Plan: [PROJECT_NAME]
  - ## 1. Phases
  - ### Phase 1: [Tên]
  - ## 2. Work Breakdown Structure (WBS)
  - ## 3. Dependencies
  - ## 4. Resource Allocation
  - ## 5. Communication Plan
- First content: - Duration:  / - Deliverables:  / - Milestones: 

## ./systems/pm-agent/templates/requirements-template.md

- Size: 931 bytes
- Lines: 43
- Headings:
  - # Template: Requirements Document
  - # Requirements Document: [PROJECT_NAME]
  - ## 1. Business Requirements
  - ### BR-001: [Tên yêu cầu]
  - ## 2. Functional Requirements
  - ### FR-001: [Tên chức năng]
  - ## 3. Non-Functional Requirements
  - ### NFR-001: Performance
  - ### NFR-002: Security
  - ## 4. User Stories (nếu dùng Agile)
  - ### US-001: [Vai trò] muốn [hành động] để [mục đích]
  - ## 5. Traceability Matrix
- First content: - **Mô tả:**  / - **Lý do:**  / - **Priority:** High/Medium/Low

## ./systems/pm-agent/templates/risk-register-template.md

- Size: 1235 bytes
- Lines: 41
- Headings:
  - # Template: Risk Register
  - # Risk Register: [PROJECT_NAME]
  - ## Risk Matrix
  - ## Risk List
  - ## Mitigation Plans
  - ### R-001: [Risk name]
  - ### R-002: [Risk name]
  - ## Risk Monitoring
- First content: ``` / High   | [RISK] |       |       | / Medium |       | [RISK]|       |

## ./systems/pm-agent/templates/rules-template.md

- Size: 646 bytes
- Lines: 36
- Headings:
  - # Template: Project Rules
  - # Project Rules: [PROJECT_NAME]
  - ## 1. Coding Standards
  - ## 2. Git Workflow
  - ## 3. Testing Standards
  - ## 4. Documentation Standards
  - ## 5. Quality Gates
  - ## 6. Change Management
- First content: - Language:  / - Style guide:  / - Naming conventions: 

## ./systems/pm-agent/templates/schedule-template.md

- Size: 917 bytes
- Lines: 28
- Headings:
  - # Template: Project Schedule
  - # Project Schedule: [PROJECT_NAME]
  - ## Milestones
  - ## Gantt Chart (Markdown Table)
  - ## Critical Path
  - ## Summary
- First content: | Milestone | Target Date | Status | Actual Date | / |-----------|-------------|--------|-------------| / | M1: Requirements Complete | 2026-04-25 | In Progress | |

## ./systems/pm-agent/templates/spec-template.md

- Size: 568 bytes
- Lines: 36
- Headings:
  - # Template: Specification Document
  - # Specification: [PROJECT_NAME]
  - ## 1. Overview
  - ## 2. Architecture
  - ### System Architecture
  - ### Data Architecture
  - ## 3. Features
  - ### Feature 1: [Tên]
  - ## 4. Technical Stack
  - ## 5. Quality Standards
- First content: Tổng quan về những gì sẽ được xây dựng / - Components / - Modules

## ./systems/pm-agent/templates/status-dashboard-template.md

- Size: 1570 bytes
- Lines: 56
- Headings:
  - # Template: Status Dashboard
  - # Status Dashboard: [PROJECT_NAME]
  - ## Project Health
  - ## Key Metrics
  - ## Timeline Status
  - ## Budget Status
  - ## Scope Status
  - ## Top Risks
  - ## Top Issues
  - ## Upcoming Milestones
  - ## Recommended Actions
- First content: 🟢 **Overall Status:** On Track / 🟡 At Risk / 🔴 Off Track / | Metric | Target | Actual | Status | / |--------|--------|--------|--------|

## ./systems/pm-agent/templates/task-board-template.md

- Size: 1276 bytes
- Lines: 40
- Headings:
  - # Template: Task Board
  - # Task Board: [PROJECT_NAME]
  - ## Status Legend
  - ## Backlog (Chưa bắt đầu)
  - ## In Progress (Đang làm)
  - ## Done (Hoàn thành)
  - ## Blocked (Bị chặn)
  - ## Summary
- First content: - 🔴 Not Started / - 🟡 In Progress / - 🟢 Done

## ./systems/pm-agent/templates/task-packet-template.md

- Size: 1573 bytes
- Lines: 78
- Headings:
  - # Task Packet Template
  - ## Task Identity
  - ## Objective
  - ## Context
  - ## Scope
  - ### Allowed files/folders
  - ### Forbidden actions
  - ## Requirements
  - ## Verification
  - ## Rollback / Recovery
  - ## Stop Conditions
  - ## Expected Output
- First content: Use this template before executing a broad, technical, risky, or evidence-sensitive task. / - **Task ID:** / - **Title:**

## ./systems/pm-agent/templates/task-report-template.md

- Size: 1306 bytes
- Lines: 72
- Headings:
  - # Task Report Template
  - ## Task Identity
  - ## Summary
  - ## Scope Performed
  - ## Files Changed
  - ## Commands / Checks Run
  - ## Verification
  - ## Blockers
  - ## Risks / Caveats
  - ## Rollback / Recovery Notes
  - ## Next Recommended Action
- First content: Use this template after completing or attempting a task. / - **Task ID:** / - **Title:**

## ./systems/pm-agent/templates/wbs-template.md

- Size: 735 bytes
- Lines: 33
- Headings:
  - # Template: Work Breakdown Structure
  - # Work Breakdown Structure: [PROJECT_NAME]
  - ## Level 1: [Tên dự án]
  - ### Level 2: Module A
  - ## Level 2: Module B
- First content: - **ID:** TASK-001 / - **Description:**  / - **Estimated effort:** 4h

## ./systems/voice/README.md

- Size: 912 bytes
- Lines: 35
- Headings:
  - # Voice IO
  - ## STT
  - ## TTS
  - ## Current status
- First content: Use Whisper in local venv: / ```bash / /root/.openclaw/workspace/.venv-stt/bin/python \

## ./systems/voice/scripts/synthesize.py

- Size: 1167 bytes
- Lines: 38
- First lines: #!/usr/bin/env python3 / """ / Synthesize speech from text using edge-tts. / Usage: python synthesize.py <text> <output_file> [voice] / """

## ./systems/voice/scripts/transcribe.py

- Size: 1143 bytes
- Lines: 42
- First lines: #!/usr/bin/env python3 / """ / Transcribe audio file using Whisper. / Usage: python transcribe.py <audio_file> [model_size] / """

## ./tmp/README.md

- Size: 439 bytes
- Lines: 14
- Headings:
  - # tmp
  - ## Quy tắc
- First content: Scratch tạm cấp workspace. / - Có thể xoá định kỳ. / - Không lưu source framework, project artifact dài hạn, hoặc output cần giữ ở đây.

