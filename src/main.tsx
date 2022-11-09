import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import {binanceChain} from './constants/chains';
import { publicProvider } from 'wagmi/providers/public'
//
// const { chains, provider, webSocketProvider } = configureChains(
//   [chain.mainnet, chain.goerli],
//   [publicProvider()],
// )
//
// const client = createClient({
//   autoConnect: true,
//   provider,
//   webSocketProvider,
// })



const { chains, provider, webSocketProvider } = configureChains(
  [binanceChain, chain.goerli, chain.mainnet],
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
    // new WalletConnectConnector({
    //   options: {
    //     // @ts-ignore
    //     chains,
    //     qrcode: true,
    //     rpc: {
    //       56: "https://bsc-dataseed4.binance.org",
    //     },
    //   },
    // }),
  ],
  autoConnect: true,
  // @ts-ignore
  chains,
  provider,
  webSocketProvider
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WagmiConfig client={client}>
    <App />
  </WagmiConfig>

)
