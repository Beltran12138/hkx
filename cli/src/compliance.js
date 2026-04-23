// SFC-approved assets on HashKey Exchange (as of 2026)
const SFC_APPROVED = {
  BTC:  { name: "Bitcoin",  pairs: ["HKD", "USD", "USDT"], type: "spot" },
  ETH:  { name: "Ethereum", pairs: ["HKD", "USD", "USDT"], type: "spot" },
  USDT: { name: "Tether",   pairs: ["HKD", "USD"],          type: "stablecoin" },
  USDC: { name: "USD Coin", pairs: ["HKD", "USD"],          type: "stablecoin" },
  XRP:  { name: "XRP",      pairs: ["USD", "USDT"],         type: "spot" },
  SOL:  { name: "Solana",   pairs: ["USD", "USDT"],         type: "spot" },
  APT:  { name: "Aptos",    pairs: ["HKD", "USDT"],         type: "spot" },
  IOTX: { name: "IoTeX",    pairs: ["HKD", "USDT"],         type: "spot" },
  POL:  { name: "Polygon",  pairs: ["USD", "USDT"],         type: "spot" },
};

export function checkCompliance(symbol) {
  const upper = symbol.toUpperCase();
  const asset = SFC_APPROVED[upper];

  if (asset) {
    return {
      status: "APPROVED",
      symbol: upper,
      name: asset.name,
      pairs: asset.pairs,
      type: asset.type,
      note: "Listed on HashKey Exchange under SFC Type 1 & Type 7 licence."
    };
  }

  return {
    status: "NOT_LISTED",
    symbol: upper,
    note: "This asset is not currently listed on HashKey Exchange. SFC approval required before listing. Do not execute trades for unlisted assets."
  };
}

export function listApproved() {
  return Object.entries(SFC_APPROVED).map(([symbol, data]) => ({
    symbol,
    ...data
  }));
}
