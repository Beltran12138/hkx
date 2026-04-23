---
name: hashkey-compliance-check
version: 1.0.3
author: HashKey Exchange
compliance: SFC-reviewed
approved_assets: [ALL]
prohibited: [bypassing-sfc-rules]
last_reviewed: 2026-04-01
standard: agentskills.io
---

# hashkey-compliance-check

Pre-trade SFC compliance verification. Checks whether a target asset is approved for trading on HashKey Exchange before any order is placed.

## Trigger
Any trading skill should call this as a dependency before order execution.

## Steps
1. Receive target asset symbol
2. Query HashKey SFC-approved asset registry
3. Return: APPROVED (with available pairs) or NOT_LISTED (with reason)
4. If NOT_LISTED → block downstream trade execution

## Output schema
```json
{
  "status": "APPROVED | NOT_LISTED",
  "symbol": "BTC",
  "pairs": ["HKD", "USD", "USDT"],
  "note": "string"
}
```

## Constraints
- Never suggest workarounds for NOT_LISTED assets
- Never access external exchanges
- This skill is read-only — it checks, never executes
