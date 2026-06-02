#!/usr/bin/env python3
"""Check agent-system structural consistency.

Usage:
  python3 agent-system/tools/check-consistency.py

Checks:
- agent folders contain AGENT.md, README.md, skills.json
- skills.json files are valid JSON
- skill and handoff relative paths exist
- docs/templates required by handoff exist
- tests contain README.md and test-report.md
- activated Market Research / Product Hunter docs have no stale future markers
- Paper-level test reports do not overclaim with production/deployment wording
"""
from __future__ import annotations

import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parents[1]
AGENTS_DIR = ROOT / "agents"
TESTS_DIR = ROOT / "tests"

REQUIRED_ROOT_FILES = [
    ROOT / "INDEX.md",
    ROOT / "STATUS.md",
    ROOT / "README.md",
    ROOT / "docs" / "activation-guide.md",
    ROOT / "docs" / "agent-role-matrix.md",
    ROOT / "docs" / "skills-json-schema.md",
    ROOT / "docs" / "specialist-handoff-protocol.md",
    ROOT / "docs" / "openclaw-runtime-activation.md",
    ROOT / "schemas" / "agent-skills.schema.json",
    ROOT / "templates" / "specialist-task-packet.md",
    ROOT / "templates" / "specialist-task-report.md",
]

REQUIRED_AGENT_FILES = ["AGENT.md", "README.md", "skills.json"]
REQUIRED_SKILLS_JSON_KEYS = ["agent", "status", "domain"]
HANDOFF_KEYS = ["protocol", "task_packet_template", "task_report_template"]
REQUIRED_RUNTIME_SPEC_HEADINGS = [
    "## Purpose", "## Runtime Actors", "## Spawn Decision Rules", "## Session / Subagent Mapping",
    "## Input Format", "## Output Format", "## Evidence Path", "## Acceptance Gate",
    "## Role Runtime Mapping", "## Runtime Command Pattern", "## Stop Conditions", "## Completion Criteria",
]
REQUIRED_PACKET_HEADINGS = [
    "## Task Identity", "## Runtime Activation", "## Canonical PM References", "## Objective", "## Context",
    "## Role Boundary", "## Work Mode Gate", "## Scope", "## Requirements", "## Verification",
    "## Evidence Routing", "## Acceptance Gate", "## Rollback / Recovery", "## Stop Conditions", "## Expected Output",
]
REQUIRED_REPORT_HEADINGS = [
    "## Task Identity", "## Runtime Result", "## Summary", "## Work Mode Gate Result", "## Scope Performed",
    "## Role Boundary Check", "## Files Changed", "## Commands / Checks Run", "## Verification",
    "## Evidence Routing", "## Acceptance Gate Result", "## Claim Control", "## Blockers",
    "## Risks / Caveats", "## Rollback / Recovery Notes", "## Handoff Back to PM Agent",
]
REQUIRED_ROLE_TASKS = [
    ("Product Agent", "product_requirements"), ("Architect Agent", "architecture_review"),
    ("Frontend Agent", "frontend_work"), ("Backend Agent", "backend_work"), ("QA Agent", "qa_review"),
    ("Business PM Agent", "business_pm_plan"), ("Market Research Agent", "market_research"),
    ("Product Hunter Agent", "product_hunting"), ("Content Copy Agent", "content_copy"),
    ("Performance Analyst Agent", "performance_analysis"),
]
STALE_MARKERS = [
    "Market Research Agent | future",
    "Product Hunter Agent | future",
    "add after `market-research`",
    "add after `product-hunting`",
]
PAPER_OVERCLAIM_PATTERNS = [
    r"\bproduction-ready\b",
    r"\bdeployed\b",
    r"\bintegrated\b",
    r"\bworking\b",
    r"\btested\b",
    r"\bverified authentic\b",
    r"\bconversion-ready\b",
]
ALLOW_OVERCLAIM_CONTEXT = [
    "do not",
    "does not",
    "not claim",
    "not allowed",
    "no working",
    "no external",
    "without matching evidence",
    "cannot claim",
    "block",
    "blocked",
    "forbidden",
    "avoid",
    "until evidence",
    "until human approval",
    "paper evidence only proves",
    "flow tested",
    "tested flows",
    "should be tested",
    "verification level paper",
    "not production-ready",
    "conversion-ready claims",
    "no conversion-ready claim",
]


@dataclass
class Finding:
    severity: str
    path: str
    message: str


def rel(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def add(findings: list[Finding], severity: str, path: Path | str, message: str) -> None:
    findings.append(Finding(severity, rel(path) if isinstance(path, Path) else path, message))


def iter_agent_dirs() -> Iterable[Path]:
    if not AGENTS_DIR.exists():
        return []
    # The integrated canonical PM Agent preserves its original PM framework
    # structure and intentionally does not use specialist-profile AGENT.md/skills.json.
    return sorted(p for p in AGENTS_DIR.glob("*/*") if p.is_dir() and p.name != "pm-agent")


def check_required_root(findings: list[Finding]) -> None:
    for p in REQUIRED_ROOT_FILES:
        if not p.exists():
            add(findings, "FAIL", p, "required root doc/template missing")


def check_schema_file(findings: list[Finding]) -> None:
    schema_path = ROOT / "schemas" / "agent-skills.schema.json"
    if not schema_path.exists():
        add(findings, "FAIL", schema_path, "schema file missing")
        return
    try:
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
    except Exception as exc:
        add(findings, "FAIL", schema_path, f"invalid schema JSON: {exc}")
        return
    for key in ["$schema", "title", "type", "properties"]:
        if key not in schema:
            add(findings, "FAIL", schema_path, f"schema missing key: {key}")
    if schema.get("type") != "object":
        add(findings, "FAIL", schema_path, "schema type must be object")


def check_profile_shape(findings: list[Finding], skills_path: Path, data: dict) -> None:
    if "primary_skills" not in data:
        add(findings, "FAIL", skills_path, "specialist profile missing primary_skills")
    if "extension_skills" in data or "canonical_agent" in data:
        add(findings, "FAIL", skills_path, "non-current PM profile fields are not allowed")
    if "slug" not in data:
        add(findings, "FAIL", skills_path, "specialist profile missing slug")
    if "handoff_protocol" not in data:
        add(findings, "WARN", skills_path, "specialist profile missing handoff_protocol")


def check_agents(findings: list[Finding]) -> None:
    for agent_dir in iter_agent_dirs():
        for name in REQUIRED_AGENT_FILES:
            p = agent_dir / name
            if not p.exists():
                add(findings, "FAIL", p, "required agent file missing")

        skills_path = agent_dir / "skills.json"
        if not skills_path.exists():
            continue

        try:
            data = json.loads(skills_path.read_text(encoding="utf-8"))
        except Exception as exc:
            add(findings, "FAIL", skills_path, f"invalid JSON: {exc}")
            continue

        for key in REQUIRED_SKILLS_JSON_KEYS:
            if key not in data:
                add(findings, "FAIL", skills_path, f"missing required key: {key}")
        check_profile_shape(findings, skills_path, data)

        skill_lists: dict[str, list[str]] = {}
        primary = data.get("primary_skills", [])
        if not isinstance(primary, list) or not primary:
            add(findings, "FAIL", skills_path, "primary_skills must be non-empty list")
        skill_lists["primary_skills"] = primary
        skill_lists["supporting_skills"] = data.get("supporting_skills", [])

        for key, value in skill_lists.items():
            if value is None:
                value = []
            if not isinstance(value, list):
                add(findings, "FAIL", skills_path, f"{key} must be list")
                continue
            for target_rel in value:
                if not isinstance(target_rel, str):
                    add(findings, "FAIL", skills_path, f"{key} contains non-string path")
                    continue
                target = (agent_dir / target_rel).resolve()
                if not target.exists():
                    add(findings, "FAIL", skills_path, f"missing {key} target: {target_rel}")

        hp = data.get("handoff_protocol")
        if hp is None:
            add(findings, "WARN", skills_path, "handoff_protocol missing")
        elif not isinstance(hp, dict):
            add(findings, "FAIL", skills_path, "handoff_protocol must be object")
        else:
            for key in HANDOFF_KEYS:
                target_rel = hp.get(key)
                if not target_rel:
                    add(findings, "FAIL", skills_path, f"handoff_protocol missing {key}")
                    continue
                target = (agent_dir / target_rel).resolve()
                if not target.exists():
                    add(findings, "FAIL", skills_path, f"missing handoff target {key}: {target_rel}")


def check_tests(findings: list[Finding]) -> None:
    if not TESTS_DIR.exists():
        add(findings, "WARN", TESTS_DIR, "tests directory missing")
        return
    for test_dir in sorted(p for p in TESTS_DIR.iterdir() if p.is_dir()):
        for name in ["README.md", "test-report.md"]:
            p = test_dir / name
            if not p.exists():
                add(findings, "FAIL", p, "required test file missing")


def check_required_headings(findings: list[Finding], file_path: Path, headings: list[str]) -> None:
    if not file_path.exists():
        return
    text = file_path.read_text(encoding="utf-8", errors="replace")
    for heading in headings:
        if heading not in text:
            add(findings, "FAIL", file_path, f"missing required heading: {heading}")


def check_runtime_activation_spec(findings: list[Finding]) -> None:
    spec = ROOT / "docs" / "openclaw-runtime-activation.md"
    check_required_headings(findings, spec, REQUIRED_RUNTIME_SPEC_HEADINGS)
    if not spec.exists():
        return
    text = spec.read_text(encoding="utf-8", errors="replace")
    for role, task_name in REQUIRED_ROLE_TASKS:
        if role not in text:
            add(findings, "FAIL", spec, f"runtime mapping missing role: {role}")
        if task_name not in text:
            add(findings, "FAIL", spec, f"runtime mapping missing taskName: {task_name}")
    for token in ["Output", "Evidence", "sessions_spawn", "context=isolated", "Acceptance"]:
        if token not in text:
            add(findings, "FAIL", spec, f"runtime activation spec missing topic: {token}")


def check_runtime_templates(findings: list[Finding]) -> None:
    packet = ROOT / "templates" / "specialist-task-packet.md"
    report = ROOT / "templates" / "specialist-task-report.md"
    check_required_headings(findings, packet, REQUIRED_PACKET_HEADINGS)
    check_required_headings(findings, report, REQUIRED_REPORT_HEADINGS)
    if packet.exists():
        text = packet.read_text(encoding="utf-8", errors="replace")
        for token in ["**Runtime:**", "**Session mode:**", "**OpenClaw action:**", "**taskName:**", "**Evidence Path:**", "Acceptance states allowed"]:
            if token not in text:
                add(findings, "FAIL", packet, f"task packet missing runtime field: {token}")
    if report.exists():
        text = report.read_text(encoding="utf-8", errors="replace")
        for token in ["**Runtime:**", "**Session mode:**", "**OpenClaw action used:**", "**taskName:**", "**Evidence path:**", "**Recommended state:**"]:
            if token not in text:
                add(findings, "FAIL", report, f"task report missing runtime field: {token}")


def check_stale_markers(findings: list[Finding]) -> None:
    scan_roots = [ROOT / "docs", ROOT / "agents"]
    for root in scan_roots:
        if not root.exists():
            continue
        for p in sorted(root.rglob("*.md")):
            text = p.read_text(encoding="utf-8", errors="replace")
            for marker in STALE_MARKERS:
                if marker in text:
                    add(findings, "FAIL", p, f"stale marker found: {marker}")


def line_has_allow_context(line: str) -> bool:
    s = line.strip().lower()
    if not s or s.startswith("#"):
        return True
    return any(ctx.lower() in s for ctx in ALLOW_OVERCLAIM_CONTEXT)


def check_paper_overclaims(findings: list[Finding]) -> None:
    for p in sorted(TESTS_DIR.glob("**/*.md")) if TESTS_DIR.exists() else []:
        text = p.read_text(encoding="utf-8", errors="replace")
        if "Paper" not in text:
            continue
        in_fence = False
        for i, line in enumerate(text.splitlines(), start=1):
            if line.strip().startswith("```"):
                in_fence = not in_fence
                continue
            if in_fence or line_has_allow_context(line):
                continue
            for pattern in PAPER_OVERCLAIM_PATTERNS:
                if re.search(pattern, line, flags=re.IGNORECASE):
                    add(findings, "WARN", p, f"possible Paper-level overclaim on line {i}: {line.strip()}")


def main() -> int:
    findings: list[Finding] = []
    check_required_root(findings)
    check_schema_file(findings)
    check_agents(findings)
    check_tests(findings)
    check_runtime_activation_spec(findings)
    check_runtime_templates(findings)
    check_stale_markers(findings)
    check_paper_overclaims(findings)

    fails = [f for f in findings if f.severity == "FAIL"]
    warns = [f for f in findings if f.severity == "WARN"]

    print(f"agent-system consistency check")
    print(f"root: {ROOT}")
    print(f"agents: {len(list(iter_agent_dirs()))}")
    print(f"tests: {len([p for p in TESTS_DIR.iterdir() if p.is_dir()]) if TESTS_DIR.exists() else 0}")
    print(f"failures: {len(fails)}")
    print(f"warnings: {len(warns)}")

    for f in findings:
        print(f"{f.severity}: {f.path}: {f.message}")

    if fails:
        print("RESULT: FAIL")
        return 1
    print("RESULT: PASS" if not warns else "RESULT: PASS_WITH_WARNINGS")
    return 0


if __name__ == "__main__":
    sys.exit(main())
