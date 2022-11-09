import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { WagmiConfig } from "wagmi";
import client from './constants/client';

window.global ||= window

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WagmiConfig client={client}>
    <App />
  </WagmiConfig>
)
