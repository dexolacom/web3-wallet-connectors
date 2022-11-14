import {chain, configureChains, createClient} from 'wagmi';
import {binanceChain, binanceTestChain} from './chains';
import {publicProvider} from 'wagmi/providers/public';
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import {CoinbaseWalletConnector} from 'wagmi/connectors/coinbaseWallet';
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect';
import {InjectedConnector} from 'wagmi/connectors/injected';

const { chains, provider } = configureChains(
  [binanceChain, binanceTestChain, chain.goerli, chain.mainnet],
  [publicProvider()],
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
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: 'Injected',
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  autoConnect: true,
  provider,
});

export default client