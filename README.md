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
import { configureChains, chain, createClient } from 'wagmi'
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

## Usage

> connectButtons.ts 🔵

```typescript jsx
import {useConnect, useDisconnect} from 'wagmi';

const ConnectButton = () => {
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  const MetaMaskConnector = connectors[0]
  const CoinbaseWalletConnector = connectors[1]
  const WalletConnectConnector = connectors[2]

  return (
    <div>
      <button onClick={() => connect({connector: MetaMaskConnector})}>
        Metamask
      </button>
      <button onClick={() => connect({connector: CoinbaseWalletConnector})}>
        Coinbase
      </button>
      <button onClick={() => connect({connector: WalletConnectConnector})}>
        WalletConnect
      </button>
      <button onClick={() => disconnect()}>
        Disconnect
      </button>
    </div>
  );
};

export default ConnectButton;
```

### Possible errors with create-react-app:
<span style="color: crimson"> - Buffer is not defined </span>

To fix this add
> index.ts 🔵

```typescript 
;(window as any)['global'] = window
global.Buffer = global.Buffer || require('buffer').Buffer
```

### Additional Info
For more information on hooks, click here https://wagmi.sh/docs/hooks/useAccount
