import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';

import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  // {/* 11155111 */}

  <ThirdwebProvider activeChain={{chainId:'Your Chain Id',rpc: ["Rpc network"]}}> 

  
    <Router>
      <StateContextProvider>

      <App/>
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)