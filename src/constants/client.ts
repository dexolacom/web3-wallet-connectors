import { createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public'
import { bscTestnet } from 'wagmi/chains'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'

const { chains, provider, webSocketProvider } = configureChains(
  [bscTestnet],
  [publicProvider()],
);

const client = createClient({
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'bubblegum',
      },
    }),
    new WalletConnectLegacyConnector({
      chains,
      options: {
        qrcodeModalOptions: {
          desktopLinks: [],
        }
      },
    }),
  ],
  provider,
  webSocketProvider,
  autoConnect: true
})

export default client