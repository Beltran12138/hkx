#!/usr/bin/env node
import { getPrice } from '../src/price.js';
import { checkCompliance, listApproved } from '../src/compliance.js';
import { installSkill, listSkills, removeSkill } from '../src/skill.js';

const CYAN  = s => `\x1b[96m${s}\x1b[0m`;
const PINK  = s => `\x1b[95m${s}\x1b[0m`;
const GREEN = s => `\x1b[92m${s}\x1b[0m`;
const RED   = s => `\x1b[91m${s}\x1b[0m`;
const DIM   = s => `\x1b[2m${s}\x1b[0m`;
const BOLD  = s => `\x1b[1m${s}\x1b[0m`;

function printHelp() {
  console.log(`
${BOLD("hkx")} — HashKey Exchange Developer CLI
${DIM("SFC-compliant crypto tools for AI agents and developers")}

${PINK("USAGE")}
  hkx price <asset>                Get real-time price (BTC, ETH, SOL...)
  hkx compliance check <asset>     Check if asset is SFC-approved on HashKey
  hkx compliance list              List all SFC-approved assets
  hkx skill list                   Browse available skills
  hkx skill install <name>         Install a skill to ~/.hkx/skills/
  hkx skill remove <name>          Remove an installed skill

${PINK("EXAMPLES")}
  hkx price btc
  hkx compliance check sol
  hkx skill install hashkey-dca
  hkx skill install hashkey-compliance-check

${DIM("HashKey Exchange · Licensed by the SFC of Hong Kong")}
${DIM("https://github.com/Beltran12138/hkx")}
`);
}

const args = process.argv.slice(2);
const cmd = args[0];

// ── price ──────────────────────────────────────────────
if (cmd === 'price') {
  const symbol = args[1];
  if (!symbol) { console.error(RED('Error: specify an asset. e.g. hkx price btc')); process.exit(1); }

  const result = await getPrice(symbol);
  if (result.error) { console.error(RED(result.error)); process.exit(1); }

  const change = parseFloat(result.change24h);
  const changeStr = change >= 0
    ? GREEN(`+${result.change24h}%`)
    : RED(`${result.change24h}%`);

  console.log(`
${BOLD(result.symbol)}
  USD  ${CYAN(`$${result.usd.toLocaleString()}`)}
  HKD  ${CYAN(`HK$${result.hkd.toLocaleString()}`)}
  24h  ${changeStr}
  ${DIM(`Source: ${result.source} · ${result.timestamp}`)}
`);
}

// ── compliance ─────────────────────────────────────────
else if (cmd === 'compliance') {
  const sub = args[1];

  if (sub === 'check') {
    const symbol = args[2];
    if (!symbol) { console.error(RED('Error: specify an asset. e.g. hkx compliance check eth')); process.exit(1); }

    const result = checkCompliance(symbol);
    if (result.status === 'APPROVED') {
      console.log(`
${GREEN('✓ APPROVED')}  ${BOLD(result.symbol)} — ${result.name}
  Pairs    ${result.pairs.join(', ')}
  Type     ${result.type}
  ${DIM(result.note)}
`);
    } else {
      console.log(`
${RED('✗ NOT LISTED')}  ${BOLD(result.symbol)}
  ${DIM(result.note)}
`);
    }
  }

  else if (sub === 'list') {
    const assets = listApproved();
    console.log(`\n${PINK('SFC-Approved Assets on HashKey Exchange')}\n`);
    for (const a of assets) {
      console.log(`  ${CYAN(a.symbol.padEnd(6))} ${a.name.padEnd(18)} ${DIM(a.pairs.join(', '))}`);
    }
    console.log(`\n${DIM('Source: SFC Hong Kong · hashkey.com')}\n`);
  }

  else { printHelp(); }
}

// ── skill ──────────────────────────────────────────────
else if (cmd === 'skill') {
  const sub = args[1];

  if (sub === 'list') {
    const skills = listSkills();
    console.log(`\n${PINK('HashKey SkillHub')} ${DIM('— SFC-reviewed agent skills')}\n`);
    for (const s of skills) {
      const status = s.installed ? GREEN('✓ installed') : DIM('  available');
      console.log(`  ${status}  ${BOLD(s.name.padEnd(36))} ${DIM(s.desc)}`);
    }
    console.log(`\n${DIM('Install: hkx skill install <name>')}\n`);
  }

  else if (sub === 'install') {
    const name = args[2];
    if (!name) { console.error(RED('Error: specify a skill name. e.g. hkx skill install hashkey-dca')); process.exit(1); }
    process.stdout.write(`Installing ${CYAN(name)}... `);
    const result = await installSkill(name);
    if (result.error) { console.log(RED('failed')); console.error(RED(result.error)); process.exit(1); }
    console.log(GREEN('done'));
    console.log(`  ${DIM(`Saved to ${result.path}`)}`);
    if (result.note) console.log(`  ${DIM(result.note)}`);
    console.log();
  }

  else if (sub === 'remove') {
    const name = args[2];
    if (!name) { console.error(RED('Error: specify a skill name.')); process.exit(1); }
    const result = removeSkill(name);
    if (result.error) { console.error(RED(result.error)); process.exit(1); }
    console.log(`${DIM('Removed')} ${name}`);
  }

  else { printHelp(); }
}

// ── help / fallback ────────────────────────────────────
else {
  printHelp();
}
