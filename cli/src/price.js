const COINGECKO_IDS = {
  BTC:  "bitcoin",
  ETH:  "ethereum",
  USDT: "tether",
  USDC: "usd-coin",
  XRP:  "ripple",
  SOL:  "solana",
  APT:  "aptos",
  IOTX: "iotex",
  POL:  "matic-network",
};

export async function getPrice(symbol) {
  const upper = symbol.toUpperCase();
  const id = COINGECKO_IDS[upper];

  if (!id) {
    return { error: `Unknown asset: ${upper}. Run 'hkx compliance list' for supported assets.` };
  }

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd,hkd&include_24hr_change=true`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`CoinGecko returned ${res.status}`);
    const data = await res.json();
    const coin = data[id];

    return {
      symbol: upper,
      usd: coin.usd,
      hkd: coin.hkd,
      change24h: coin.usd_24h_change?.toFixed(2),
      source: "CoinGecko",
      timestamp: new Date().toISOString()
    };
  } catch (err) {
    return { error: `Price fetch failed: ${err.message}` };
  }
}
