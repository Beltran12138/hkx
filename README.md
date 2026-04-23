# hkx — HashKey Exchange Developer CLI

> SFC-compliant crypto tools for AI agents and developers.  
> Part of the **"The 10,001st Slice"** Bitcoin Pizza Day 2026 campaign by HashKey Exchange.

[![npm](https://img.shields.io/badge/npm-hkx-red)](https://npmjs.com/package/hkx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![SFC Licensed](https://img.shields.io/badge/Exchange-SFC%20Licensed-green)](https://hashkey.com)
[![Skills: agentskills.io](https://img.shields.io/badge/Skills-agentskills.io-cyan)](https://agentskills.io)

---

## Install

```bash
npm install -g hkx
```

---

## Commands

### Price
```bash
hkx price btc
hkx price eth
hkx price sol
```

### Compliance
```bash
hkx compliance check btc      # APPROVED ✓
hkx compliance check shib     # NOT LISTED ✗
hkx compliance list           # All SFC-approved assets
```

### Skills
```bash
hkx skill list
hkx skill install hashkey-dca
hkx skill install hashkey-compliance-check
hkx skill remove hashkey-dca
```

---

## SkillHub

HashKey SkillHub is the first SFC-framework-compatible agent skills registry for Hong Kong retail crypto. Every skill is reviewed against SFC guidelines before listing.

Skills follow the [agentskills.io](https://agentskills.io) open standard — compatible with Claude Code, Codex, Hermes Agent, and Cursor.

→ [Browse SkillHub](./skillhub/index.html)

---

## Available Skills

| Skill | Description | Status |
|---|---|---|
| `hashkey-dca` | Dollar-cost averaging within SFC-approved assets | ✅ SFC-reviewed |
| `hashkey-compliance-check` | Pre-trade SFC compliance verification | ✅ SFC-reviewed |
| `hashkey-portfolio-rebalance` | Rebalance to target allocations | ✅ SFC-reviewed |
| `hashkey-market-summary` | Daily factual market summary | ✅ SFC-reviewed |
| `hashkey-kyc-status` | KYC status check before trade execution | ✅ SFC-reviewed |
| `hashkey-hkd-onramp` | Initiate HKD fiat deposit flow | ✅ SFC-reviewed |

---

## Why hkx?

Most crypto CLI tools are built for offshore exchanges with no regulatory context. `hkx` is built for Hong Kong's licensed exchange infrastructure — every command operates within SFC boundaries by default.

> "Even your AI needs a license." — HashKey SkillHub

---

## Campaign Context

`hkx` is a deliverable of the **COMM4150 FYP "Re-coding Trust"** research project at CUHK, developed as part of the "The 10,001st Slice" PR campaign for HashKey Exchange (Bitcoin Pizza Day, 22 May 2026).

**Tagline:** Compliance Can Be Punk.

---

*ZHAO Han (1155191400) · CUHK COMM4150 *
