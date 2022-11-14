import './App.css'
import ConnectButton from './components/ConnectButton/ConnectButton';
import { useAccount, useBalance, useNetwork, useSwitchNetwork } from 'wagmi';
import { stringTrim } from './constants/utils';


function App() {
  const { address } = useAccount()
  const { data } = useBalance({addressOrName: address})
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  return (
    <div className='app-wrapper'>
      <div className='app-content'>
        <ConnectButton/>
        <div className='info-container'>
          <h3>Account: <span className='info'>{address ? stringTrim(address, 10) : '----'}</span></h3>
          <h3>Balance: <span className='info'>{data ? Number(data?.formatted).toFixed(2) : '0.00'}</span></h3>
          <h3>Connected to: <span className='info'>{chain?.name ?? 'unknown'}</span></h3>
        </div>

        <div className='buttons-container'>
          <button disabled={chain?.id === 1} onClick={() => switchNetwork?.(1)}>Ethereum</button>
          <button disabled={chain?.id === 5} onClick={() => switchNetwork?.(5)}>Goerli</button>
          <button disabled={chain?.id === 56} onClick={() => switchNetwork?.(56)}>Binance main</button>
          <button disabled={chain?.id === 97} onClick={() => switchNetwork?.(97)}>Binance test</button>
        </div>
      </div>
    </div>
  )
}

export default App
