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
```
$ hkx price btc

BTC
  USD  $78,155
  HKD  HK$612,133
  24h  +0.30%
  Source: CoinGecko · 2026-04-23T06:06:29Z
```

### Compliance
```
$ hkx compliance check eth

✓ APPROVED  ETH — Ethereum
  Pairs    HKD, USD, USDT
  Type     spot
  Listed on HashKey Exchange under SFC Type 1 & Type 7 licence.

$ hkx compliance check shib

✗ NOT LISTED  SHIB
  This asset is not currently listed on HashKey Exchange.
  SFC approval required before listing.
```

### Skills
```
$ hkx skill list

HashKey SkillHub — SFC-reviewed agent skills

    available  hashkey-dca                      Dollar-cost averaging within SFC-approved assets
    available  hashkey-compliance-check         Pre-trade SFC compliance verification
    available  hashkey-portfolio-rebalance      Rebalance to target allocations (SFC assets only)
    available  hashkey-market-summary           Daily factual market summary, no price predictions
    available  hashkey-kyc-status               Check account KYC status before trade execution
    available  hashkey-hkd-onramp               Initiate HKD fiat deposit flow

Install: hkx skill install <name>

$ hkx skill install hashkey-dca

Installing hashkey-dca... done
  Saved to ~/.hkx/skills/hashkey-dca.md
```

---

## SkillHub

HashKey SkillHub is the first SFC-framework-compatible agent skills registry for Hong Kong retail crypto. Every skill is reviewed against SFC guidelines before listing.

Skills follow the [agentskills.io](https://agentskills.io) open standard — compatible with Claude Code, Codex, Hermes Agent, and Cursor.

→ [Browse SkillHub](https://beltran12138.github.io/hkx/)

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
