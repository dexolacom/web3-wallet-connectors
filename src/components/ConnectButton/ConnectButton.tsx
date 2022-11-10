import React from 'react';
import {useAccount, useConnect, useDisconnect} from 'wagmi';
import useCheckIsMobile from '../../hooks/useCheckIsMobile';


const ConnectButton = () => {
  const { connector: activeConnector } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { isMobile } = useCheckIsMobile()

  const MetaMaskConnector = connectors[0]
  const CoinbaseWalletConnector = connectors[1]
  const WalletConnectConnector = connectors[2]

  return (
    <div style={{display: 'flex', gap: '15px'}}>
      {/*{connectors.map((connector) => (*/}
      {/*  <button*/}
      {/*    disabled={!connector.ready}*/}
      {/*    key={connector.id}*/}
      {/*    onClick={() => connect({ connector })}*/}
      {/*  >*/}
      {/*    {connector.name}*/}
      {/*  </button>*/}
      {/*))}*/}

      {isMobile
        ? <a href='https://metamask.app.link/dapp/super-crepe-03b051.netlify.app/'>Metamask</a>
        : <button disabled={activeConnector?.name === 'MetaMask'} onClick={() => connect({connector: MetaMaskConnector})}>
          {activeConnector?.name === 'MetaMask'
            ? <span>Connected</span>
            : 'Metamask'
          }
        </button>
      }


      <button disabled={activeConnector?.name === 'Coinbase Wallet'} onClick={() => connect({connector: CoinbaseWalletConnector})}>
        {activeConnector?.name === 'Coinbase Wallet'
          ? <span>Connected</span>
          : 'Coinbase'
        }
      </button>
      <button disabled={activeConnector?.name === 'WalletConnect'} onClick={() => connect({connector: WalletConnectConnector})}>
        {activeConnector?.name === 'WalletConnect'
          ? <span>Connected</span>
          : 'WalletConnect'
        }
      </button>

      <button style={{display: 'flex'}} onClick={() => disconnect()}>
        <svg height='25px' width='25px' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6ee7b7"
             className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
        </svg>
      </button>

      {/*{error && <div style={{color: 'crimson', position: 'absolute', top: '90px'}}>{error.message}</div>}*/}
    </div>
  );
};

export default ConnectButton;