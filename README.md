# hkx — "The 10,001st Slice"
> Bitcoin Pizza Day 2026 · CUHK COMM4150 FYP  
> *Compliance Can Be Punk.*

[![Live: Pizza Quiz](https://img.shields.io/badge/Live-Pizza%20Quiz-orange)](https://beltran12138.github.io/hkx/quiz/)
[![Live: RIB Memorial](https://img.shields.io/badge/Live-RIB%20Memorial-black)](https://beltran12138.github.io/hkx/rib/)
[![npm](https://img.shields.io/badge/npm-hkx-red)](https://npmjs.com/package/hkx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Research Data](https://img.shields.io/badge/Research-fyp--research--4150-blue)](https://github.com/Beltran12138/-fyp-research-4150)

Campaign deliverables for a proposed IMC repositioning of **HashKey Exchange** (HKEX: 3887.HK) — from "institutional" to "institutional + cool" — anchored to Bitcoin Pizza Day, 22 May 2026.

Research basis: N=287 quantitative survey · NLP social listening (5,000+ interactions) · paired-sample t-test confirming Trust-Engagement Gap Δ=2.52, p<.001.  
Full methodology → [github.com/Beltran12138/-fyp-research-4150](https://github.com/Beltran12138/-fyp-research-4150)

---

## Live Demos

| Deliverable | Description | Link |
|---|---|---|
| **Pizza Personas Quiz** | "Which crypto personality are you?" — SBTI-informed viral quiz, 5 archetypes, bilingual ZH/EN, no dependencies | [🍕 Launch](https://beltran12138.github.io/hkx/quiz/) |
| **Rest in Blockchain (RIB)** | Community memorial wall for every failed crypto exchange, fund, and protocol — the campaign's provocation engine | [🪦 View](https://beltran12138.github.io/hkx/rib/) |
| **SkillHub** | SFC-compatible AI agent skills registry for HK licensed exchange | [🔧 Browse](https://beltran12138.github.io/hkx/) |

---

## Developer CLI

```bash
npm install -g hkx
```

### Price

```
$ hkx price btc

BTC
  USD  $78,155
  HKD  HK$612,133
  24h  +0.30%
  Source: CoinGecko · 2026-04-23T06:06:29Z
```

### Compliance Check

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

### SkillHub

```
$ hkx skill list

HashKey SkillHub — SFC-reviewed agent skills

    available  hashkey-dca                      Dollar-cost averaging within SFC-approved assets
    available  hashkey-compliance-check         Pre-trade SFC compliance verification
    available  hashkey-portfolio-rebalance      Rebalance to target allocations (SFC assets only)
    available  hashkey-market-summary           Daily factual market summary, no price predictions
    available  hashkey-kyc-status               Check account KYC status before trade execution
    available  hashkey-hkd-onramp               Initiate HKD fiat deposit flow

$ hkx skill install hashkey-dca

Installing hashkey-dca... done
  Saved to ~/.hkx/skills/hashkey-dca.md
```

Skills follow the [agentskills.io](https://agentskills.io) open standard — compatible with Claude Code, Codex, Hermes Agent, and Cursor.

---

## Why hkx?

Most crypto CLI tools are built for offshore exchanges with no regulatory context. `hkx` operates within SFC Type 1 & Type 7 licence boundaries by default — compliance is the default state, not an option.

> "Even your AI needs a licence." — HashKey SkillHub

---

## Campaign Architecture

This repo covers three of the campaign's seven pillars:

| Pillar | Location | Status |
|---|---|---|
| Pizza Personas Quiz | `quiz/` | ✅ Live |
| Rest in Blockchain (RIB) memorial | `rib/` | ✅ Live |
| Developer infrastructure (hkx CLI + SkillHub) | `src/` | ✅ npm published |
| Laszlo Bot (Telegram AI, DeepSeek-V3) | Dify prototype | 🔧 Prototype |
| Hero Film (60-sec brand film) | — | 📽 Produced |
| OOH (MTR + DOOH + flyposting) | — | 📐 Mockups |
| Social content series (RIB thread + TG Confession) | — | 📋 Scripted |

---

*ZHAO Han · CUHK COMM4150 Final Year Project · 2025–2026*  
*Research methodology → [github.com/Beltran12138/-fyp-research-4150](https://github.com/Beltran12138/-fyp-research-4150)*
