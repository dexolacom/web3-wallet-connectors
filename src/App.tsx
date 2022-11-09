import { Web3Modal, useAccount, useBalance, useNetwork, useSwitchNetwork } from '@web3modal/react'
import { chains, providers } from '@web3modal/ethereum';
import './App.css'
import ConnectButton from './components/ConnectButton/ConnectButton';

const config = {
  projectId: '0fd4e96476f7e05185797b376aa28781',
  theme: 'dark',
  accentColor: 'teal',
  ethereum: {
    appName: 'web3Modal',
    chains: [
      chains.mainnet,
      chains.goerli,
      chains.binanceSmartChain,
      chains.binanceSmartChainTestnet
    ],
    providers: [
      providers.walletConnectProvider({
        projectId: '0fd4e96476f7e05185797b376aa28781'
      })
    ],
    autoConnect: true
  }
}


function App() {
  const { account } = useAccount()
  const { data } = useBalance({addressOrName: account?.address})
  const { error, isLoading,  switchNetwork } = useSwitchNetwork()

  return (
    <div className='app-wrapper'>
      <div className='app-content'>
        <ConnectButton/>
        <h3>Account: <span className='info'>{account?.address}</span></h3>
        <h3>Balance: <span className='info'>{data ? data?.formatted : '0.00'}</span></h3>
        <div className='buttons-container'>
          <button>Ethereum</button>
          <button>Goerli</button>
          <button>Binance main</button>
          <button>Binance test</button>
        </div>
      </div>
      {/*@ts-ignore*/}
      <Web3Modal config={config} />
    </div>
  )
}

export default App
