import React from 'react';
import {useAccount, useConnect, useDisconnect} from 'wagmi';
import useCheckIsMobile from '../../hooks/useCheckIsMobile';
import disconnectIcon from '../../assets/disconnect.svg'


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
        ? <a className='metamaskLink' href='https://metamask.app.link/dapp/super-crepe-03b051.netlify.app/'>Metamask</a>
        : <button
          disabled={activeConnector?.name === 'MetaMask'}
          onClick={() => connect({connector: MetaMaskConnector})}>
          {activeConnector?.name === 'MetaMask'
            ? <span>Connected</span>
            : 'Metamask'
          }
        </button>
      }

      <button
        disabled={activeConnector?.name === 'Coinbase Wallet'}
        onClick={() => connect({connector: CoinbaseWalletConnector})}>
        {activeConnector?.name === 'Coinbase Wallet'
          ? <span>Connected</span>
          : 'Coinbase'
        }
      </button>

      <button
        disabled={activeConnector?.name === 'WalletConnect'}
        onClick={() => connect({connector: WalletConnectConnector})}>
        {activeConnector?.name === 'WalletConnect'
          ? <span>Connected</span>
          : 'WalletConnect'
        }
      </button>

      <button style={{display: 'flex'}} onClick={() => disconnect()}>
        <img src={disconnectIcon}/>
      </button>
    </div>
  );
};

export default ConnectButton;