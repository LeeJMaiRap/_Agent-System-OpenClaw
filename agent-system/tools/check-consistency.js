#!/usr/bin/env node
// Check agent-system structural consistency. Node fallback for environments without python3.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const AGENTS_DIR = path.join(ROOT, 'agents');
const TESTS_DIR = path.join(ROOT, 'tests');

const REQUIRED_ROOT_FILES = [
  'INDEX.md', 'STATUS.md', 'README.md',
  'docs/activation-guide.md', 'docs/agent-role-matrix.md', 'docs/skills-json-schema.md',
  'docs/specialist-handoff-protocol.md', 'schemas/agent-skills.schema.json',
  'templates/specialist-task-packet.md', 'templates/specialist-task-report.md',
].map(p => path.join(ROOT, p));
const REQUIRED_AGENT_FILES = ['AGENT.md', 'README.md', 'skills.json'];
const REQUIRED_SKILLS_JSON_KEYS = ['agent', 'status', 'domain'];
const HANDOFF_KEYS = ['protocol', 'task_packet_template', 'task_report_template'];
const STALE_MARKERS = [
  'Market Research Agent | future',
  'Product Hunter Agent | future',
  'add after `market-research`',
  'add after `product-hunting`',
];
const PAPER_OVERCLAIM_PATTERNS = [
  /\bproduction-ready\b/i, /\bdeployed\b/i, /\bintegrated\b/i, /\bworking\b/i,
  /\btested\b/i, /\bverified authentic\b/i, /\bconversion-ready\b/i,
];
const ALLOW_OVERCLAIM_CONTEXT = [
  'do not', 'does not', 'not claim', 'not allowed', 'no working', 'no external',
  'without matching evidence', 'cannot claim', 'block', 'blocked', 'forbidden', 'avoid',
  'until evidence', 'until human approval', 'paper evidence only proves', 'flow tested',
  'tested flows', 'should be tested', 'verification level paper', 'not production-ready',
  'conversion-ready claims', 'no conversion-ready claim',
];

const findings = [];
function exists(p) { return fs.existsSync(p); }
function rel(p) { return path.relative(ROOT, p) || '.'; }
function add(severity, p, message) { findings.push({ severity, path: path.isAbsolute(p) ? rel(p) : p, message }); }
function read(p) { return fs.readFileSync(p, 'utf8'); }
function listDirs(p) { return exists(p) ? fs.readdirSync(p, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => path.join(p, e.name)).sort() : []; }
function walkFiles(dir, out = []) {
  if (!exists(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkFiles(p, out); else out.push(p);
  }
  return out.sort();
}
function iterAgentDirs() {
  // Integrated canonical PM Agent preserves original PM framework structure.
  // Adapter-side AGENT.md/skills.json checks apply to specialist/legacy profiles only.
  return listDirs(AGENTS_DIR).flatMap(domain => listDirs(domain)).filter(p => path.basename(p) !== 'pm-agent');
}

function checkRequiredRoot() {
  for (const p of REQUIRED_ROOT_FILES) if (!exists(p)) add('FAIL', p, 'required root doc/template missing');
}
function checkSchemaFile() {
  const p = path.join(ROOT, 'schemas/agent-skills.schema.json');
  if (!exists(p)) return add('FAIL', p, 'schema file missing');
  let schema;
  try { schema = JSON.parse(read(p)); } catch (e) { return add('FAIL', p, `invalid schema JSON: ${e.message}`); }
  for (const k of ['$schema', 'title', 'type', 'properties']) if (!(k in schema)) add('FAIL', p, `schema missing key: ${k}`);
  if (schema.type !== 'object') add('FAIL', p, 'schema type must be object');
}
function checkProfileShape(skillsPath, data) {
  if (!Object.prototype.hasOwnProperty.call(data, 'primary_skills')) add('FAIL', skillsPath, 'specialist profile missing primary_skills');
  if (Object.prototype.hasOwnProperty.call(data, 'extension_skills') || Object.prototype.hasOwnProperty.call(data, 'canonical_agent')) add('FAIL', skillsPath, 'non-current PM profile fields are not allowed');
  if (!('slug' in data)) add('FAIL', skillsPath, 'specialist profile missing slug');
  if (!('handoff_protocol' in data)) add('WARN', skillsPath, 'specialist profile missing handoff_protocol');
}
function checkAgents() {
  for (const agentDir of iterAgentDirs()) {
    for (const name of REQUIRED_AGENT_FILES) if (!exists(path.join(agentDir, name))) add('FAIL', path.join(agentDir, name), 'required agent file missing');
    const skillsPath = path.join(agentDir, 'skills.json');
    if (!exists(skillsPath)) continue;
    let data;
    try { data = JSON.parse(read(skillsPath)); } catch (e) { add('FAIL', skillsPath, `invalid JSON: ${e.message}`); continue; }
    for (const k of REQUIRED_SKILLS_JSON_KEYS) if (!(k in data)) add('FAIL', skillsPath, `missing required key: ${k}`);
    checkProfileShape(skillsPath, data);
    const skillLists = {};
    if (!Array.isArray(data.primary_skills) || data.primary_skills.length === 0) add('FAIL', skillsPath, 'primary_skills must be non-empty list');
    skillLists.primary_skills = data.primary_skills || [];
    skillLists.supporting_skills = data.supporting_skills || [];
    for (const [k, value] of Object.entries(skillLists)) {
      if (!Array.isArray(value)) { add('FAIL', skillsPath, `${k} must be list`); continue; }
      for (const targetRel of value) {
        if (typeof targetRel !== 'string') { add('FAIL', skillsPath, `${k} contains non-string path`); continue; }
        if (!exists(path.resolve(agentDir, targetRel))) add('FAIL', skillsPath, `missing ${k} target: ${targetRel}`);
      }
    }
    const hp = data.handoff_protocol;
    if (hp == null) add('WARN', skillsPath, 'handoff_protocol missing');
    else if (typeof hp !== 'object' || Array.isArray(hp)) add('FAIL', skillsPath, 'handoff_protocol must be object');
    else for (const k of HANDOFF_KEYS) {
      const targetRel = hp[k];
      if (!targetRel) { add('FAIL', skillsPath, `handoff_protocol missing ${k}`); continue; }
      if (!exists(path.resolve(agentDir, targetRel))) add('FAIL', skillsPath, `missing handoff target ${k}: ${targetRel}`);
    }
  }
}
function checkTests() {
  if (!exists(TESTS_DIR)) return add('WARN', TESTS_DIR, 'tests directory missing');
  for (const testDir of listDirs(TESTS_DIR)) {
    for (const name of ['README.md', 'test-report.md']) if (!exists(path.join(testDir, name))) add('FAIL', path.join(testDir, name), 'required test file missing');
  }
}
function checkStaleMarkers() {
  for (const root of [path.join(ROOT, 'docs'), path.join(ROOT, 'agents')]) {
    for (const p of walkFiles(root).filter(f => f.endsWith('.md'))) {
      const text = read(p);
      for (const marker of STALE_MARKERS) if (text.includes(marker)) add('FAIL', p, `stale marker found: ${marker}`);
    }
  }
}
function lineHasAllowContext(line) {
  const s = line.trim().toLowerCase();
  return !s || s.startsWith('#') || ALLOW_OVERCLAIM_CONTEXT.some(ctx => s.includes(ctx));
}
function checkPaperOverclaims() {
  for (const p of walkFiles(TESTS_DIR).filter(f => f.endsWith('.md'))) {
    const text = read(p);
    if (!text.includes('Paper')) continue;
    let inFence = false;
    text.split(/\r?\n/).forEach((line, idx) => {
      if (line.trim().startsWith('```')) { inFence = !inFence; return; }
      if (inFence || lineHasAllowContext(line)) return;
      for (const pat of PAPER_OVERCLAIM_PATTERNS) if (pat.test(line)) add('WARN', p, `possible Paper-level overclaim on line ${idx + 1}: ${line.trim()}`);
    });
  }
}

checkRequiredRoot();
checkSchemaFile();
checkAgents();
checkTests();
checkStaleMarkers();
checkPaperOverclaims();
const fails = findings.filter(f => f.severity === 'FAIL');
const warns = findings.filter(f => f.severity === 'WARN');
console.log('agent-system consistency check');
console.log(`root: ${ROOT}`);
console.log(`agents: ${iterAgentDirs().length}`);
console.log(`tests: ${exists(TESTS_DIR) ? listDirs(TESTS_DIR).length : 0}`);
console.log(`failures: ${fails.length}`);
console.log(`warnings: ${warns.length}`);
for (const f of findings) console.log(`${f.severity}: ${f.path}: ${f.message}`);
if (fails.length) { console.log('RESULT: FAIL'); process.exit(1); }
console.log(warns.length ? 'RESULT: PASS_WITH_WARNINGS' : 'RESULT: PASS');
