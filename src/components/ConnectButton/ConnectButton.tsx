import React from 'react';
import { useConnect } from 'wagmi';


const ConnectButton = () => {
  const { connect, connectors } = useConnect()

  return (
    <div style={{display: 'flex', gap: '20px'}}>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
        </button>
      ))}

      {/*{error && <div style={{color: 'crimson', position: 'absolute', top: '90px'}}>{error.message}</div>}*/}
    </div>
  );
};

export default ConnectButton;