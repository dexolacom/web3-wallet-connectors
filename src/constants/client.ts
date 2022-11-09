import {chain, configureChains, createClient, defaultChains} from 'wagmi';
import {binanceChain} from './chains';
import {publicProvider} from 'wagmi/providers/public';
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import {CoinbaseWalletConnector} from 'wagmi/connectors/coinbaseWallet';
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect';
import {InjectedConnector} from 'wagmi/connectors/injected';

const { chains, provider, webSocketProvider } = configureChains(
  // [binanceChain, chain.goerli, chain.mainnet],
  defaultChains,
  [publicProvider()],
  // [
  //   jsonRpcProvider({
  //     rpc: (chain) => {
  //       if (chain.id !== binanceChain.id) return null;
  //       return { http: chain.rpcUrls.default };
  //     },
  //   }),
  // ]
);

const client = createClient({
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  autoConnect: true,
  provider,
  webSocketProvider
});

export default client