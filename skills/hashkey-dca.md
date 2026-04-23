---
name: hashkey-dca
version: 1.2.0
author: HashKey Exchange
compliance: SFC-reviewed
approved_assets: [BTC, ETH, USDT, USDC, APT, IOTX]
prohibited: [price-prediction, investment-advice, unlisted-asset-trading]
last_reviewed: 2026-04-01
standard: agentskills.io
---

# hashkey-dca

Executes a dollar-cost averaging strategy on HashKey Exchange within SFC-approved asset parameters.

## Trigger
User sets: target asset, amount per interval, interval frequency (daily/weekly/monthly).

## Steps
1. Run `hkx compliance check <asset>` — abort if NOT_LISTED
2. Verify user account KYC status via HashKey API
3. Place limit order at current mid-price ± 0.1%
4. Log trade: timestamp, asset, amount, price, order ID
5. Report execution summary to user

## Constraints
- Never recommend which asset to DCA into
- Never execute trades outside approved_assets list
- Never exceed user-defined per-interval amount
- If KYC inactive → pause execution, notify user
- No price predictions in any output

## Example output
> DCA executed: 0.0012 BTC purchased at HKD 742,310.
> Next execution: 2026-05-22 09:00 HKT.
> Trade logged to hashkey.com/account/history.
