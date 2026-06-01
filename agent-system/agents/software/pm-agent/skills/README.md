# PM Agent Skills

PM Agent local skill library. Skills are grouped by function and are referenced by PM Agent workflow/prompts; each leaf skill has its own `SKILL.md` and often templates/examples.

## Current groups

- `document-generation/` — charter, requirements, plan, spec, risk register, rules, schedule, WBS generators.
- `input-normalization/` — action item extraction, meeting notes normalization, requirement clarification.
- `project-operations/` — changelog, daily report, issue log, lessons learned, status dashboard, task board.
- `infrastructure/markdown-to-pdf/` — Markdown to PDF helper skill and script.
- `voice/` — text-to-voice and voice-to-text workflow templates/references.

## Boundary

Skills produce PM artifacts or transformations. They do not independently approve scope, post externally, deploy, spend money, change secrets, or claim verification beyond available evidence.

## Verification

Generated artifacts must cite inputs/evidence level when making claims. PM Agent remains responsible for approval gates and final status claims.
