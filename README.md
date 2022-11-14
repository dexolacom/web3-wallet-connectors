## Installation
Example: https://super-crepe-03b051.netlify.app/

yarn: 
```yarn add wagmi ethers```

npm:
```npm i wagmi ethers```

## Quick Start

#### Steps:
- Configure client
- Wrap app with WagmiConfig
- Add logic for wallet connection to ui

### 1. Configure chains
   
First, configure your desired chains to be used by wagmi, and the providers you want to use.

> config.ts 🔵

```typescript
import { configureChains, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
 
const { chains, provider } = configureChains(
  [binanceChain, binanceTestChain, chain.goerli, chain.mainnet],
  [publicProvider()],
)
```

In this example, the custom networks for binance are added. If you want to add a network, it should look like this:

```typescript
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
```

### 2.Create a wagmi client

Next, create a wagmi Client instance using createClient

> config.ts 🔵

```typescript
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import {CoinbaseWalletConnector} from 'wagmi/connectors/coinbaseWallet';
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect';
import { configureChains, chain, createClient } from 'wagmi'


const client = createClient({
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'your cool project',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  autoConnect: true,
  provider,
});

export default client
```

### 3. Wrap app with WagmiConfig
Finally, wrap your app with the WagmiConfig component, passing client to it.

> index.ts 🔵

```typescript jsx
import { WagmiConfig } from "wagmi";
import client from './client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WagmiConfig client={client}>
    <App /> 
  </WagmiConfig>
)
```
