import React from 'react';
import {useAccount, useConnect} from 'wagmi';


const ConnectButton = () => {
  const { connect, connectors, pendingConnector} = useConnect()

  return (
    <div style={{display: 'flex', gap: '20px'}}>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {/*{}*/}
          {/*{!connector.ready && ' (unsupported)'}*/}
          {/*{isLoading &&*/}
          {/*connector.id === pendingConnector?.id &&*/}
          {/*' (connecting)'}*/}
        </button>
      ))}

      {/*{error && <div style={{color: 'crimson', position: 'absolute', top: '90px'}}>{error.message}</div>}*/}
    </div>
  );
};

export default ConnectButton;