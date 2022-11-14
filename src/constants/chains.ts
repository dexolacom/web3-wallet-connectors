import { Chain } from "wagmi";

export const binanceChain: Chain = {
  id: 56,
  name: "Binance Smart Chain Mainnet",
  network: "binance-smart chain mainnet",
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
  },
  rpcUrls: {
    binance: "https://bsc-dataseed4.binance.org",
    defibit: "https://bsc-dataseed4.defibit.io",
    ninicoin: "https://bsc-dataseed4.ninicoin.io",
    public: "https://bsc-dataseed4.binance.org",
    default: "https://bsc-dataseed4.binance.org",
  },
  blockExplorers: {
    default: { name: "Bscscan", url: "https://bscscan.com" },
  },
  testnet: false,
};

export const binanceTestChain: Chain = {
  id: 97,
  name: "Binance Smart Chain Testnet",
  network: "binance-smart chain testnet",
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "TBNB",
    decimals: 18,
  },

  rpcUrls: {
    binance: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    public: "https://data-seed-prebsc-1-s1.binance.org:8545",
    default: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
  blockExplorers: {
    default: { name: "Bscscantest", url: "https://bscscan.testnet.com" },
  },
  testnet: false,
};