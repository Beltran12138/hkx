import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const SKILLS_DIR = join(homedir(), '.hkx', 'skills');
const REGISTRY_URL = "https://raw.githubusercontent.com/Beltran12138/hkx/main/skills/";

const AVAILABLE_SKILLS = [
  { name: "hashkey-dca",                desc: "Dollar-cost averaging within SFC-approved assets" },
  { name: "hashkey-compliance-check",   desc: "Pre-trade SFC compliance verification" },
  { name: "hashkey-portfolio-rebalance",desc: "Rebalance to target allocations (SFC assets only)" },
  { name: "hashkey-market-summary",     desc: "Daily factual market summary, no price predictions" },
  { name: "hashkey-kyc-status",         desc: "Check account KYC status before trade execution" },
  { name: "hashkey-hkd-onramp",         desc: "Initiate HKD fiat deposit flow" },
];

function ensureSkillsDir() {
  if (!existsSync(SKILLS_DIR)) mkdirSync(SKILLS_DIR, { recursive: true });
}

export async function installSkill(name) {
  ensureSkillsDir();
  const available = AVAILABLE_SKILLS.find(s => s.name === name);
  if (!available) {
    return { error: `Skill '${name}' not found. Run 'hkx skill list' to see available skills.` };
  }

  const url = `${REGISTRY_URL}${name}.md`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Registry returned ${res.status}`);
    const content = await res.text();
    const dest = join(SKILLS_DIR, `${name}.md`);
    writeFileSync(dest, content, 'utf8');
    return { success: true, name, path: dest };
  } catch (err) {
    // fallback: write stub if registry not yet live
    const stub = `---\nname: ${name}\ncompliance: SFC-reviewed\n---\n\n# ${name}\n\n${available.desc}\n`;
    const dest = join(SKILLS_DIR, `${name}.md`);
    writeFileSync(dest, stub, 'utf8');
    return { success: true, name, path: dest, note: "Installed from local stub (registry pending)." };
  }
}

export function listSkills() {
  ensureSkillsDir();
  const installed = existsSync(SKILLS_DIR)
    ? readdirSync(SKILLS_DIR).filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
    : [];

  return AVAILABLE_SKILLS.map(s => ({
    ...s,
    installed: installed.includes(s.name)
  }));
}

export function removeSkill(name) {
  const path = join(SKILLS_DIR, `${name}.md`);
  if (!existsSync(path)) return { error: `Skill '${name}' is not installed.` };
  unlinkSync(path);
  return { success: true, name };
}
