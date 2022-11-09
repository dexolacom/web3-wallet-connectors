import './App.css'
import ConnectButton from './components/ConnectButton/ConnectButton';


function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-content'>
        <ConnectButton/>
        {/*<h3>Account: <span className='info'>{account?.address}</span></h3>*/}
        {/*<h3>Balance: <span className='info'>{data ? data?.formatted : '0.00'}</span></h3>*/}
        <div className='buttons-container'>
          <button>Ethereum</button>
          <button>Goerli</button>
          <button>Binance main</button>
          <button>Binance test</button>
        </div>
      </div>
      {/*@ts-ignore*/}
    </div>
  )
}

export default App
