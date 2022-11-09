import { Web3Modal, useAccount, useBalance } from '@web3modal/react'
import './App.css'
import ConnectButton from './components/ConnectButton/ConnectButton';

const config = {
  projectId: '0fd4e96476f7e05185797b376aa28781',
  theme: 'dark',
  accentColor: 'teal',
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true
  }
}


function App() {
  const { account } = useAccount()
  const { data } = useBalance({addressOrName: account?.address})
  console.log(account)
  return (
    <div className='app-wrapper'>
      <div className='app-content'>
        <ConnectButton/>
        <h3>Account: <span className='info'>{account?.address}</span></h3>
        <h3>Balance: <span className='info'>{data ? data?.formatted : '0.00'}</span></h3>
      </div>
      {/*@ts-ignore*/}
      <Web3Modal config={config} />
    </div>
  )
}

export default App
