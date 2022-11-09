import React from 'react';
import { useConnectModal } from '@web3modal/react'


const ConnectButton = () => {
  const { open } = useConnectModal()

  return (
    <button onClick={() => open()}>Connect wallet</button>
  );
};

export default ConnectButton;