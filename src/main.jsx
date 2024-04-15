import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';

import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <ThirdwebProvider activeChain="ethereum"
  // clientId="2b2df85829449c2086846815e4466d71"> 
  // {/* 11155111 */}


  // <ThirdwebProvider desiredChainId={ChainId.sepolia}> 
  <ThirdwebProvider activeChain={{chainId:11155111,rpc: ["https://rpc.ankr.com/eth_sepolia"]}}> 

  
    <Router>
      <StateContextProvider>

      <App/>
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)