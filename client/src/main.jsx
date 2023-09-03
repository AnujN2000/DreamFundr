import React from 'react';
import  ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
// import { Sepolia } from "@thirdweb-dev/chains";
// import { ThirdwebSDK } from "@thirdweb-dev/sdk";


import { StateContextProvider } from './context';
import App from './App';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThirdwebProvider activeChain="goerli" 
  clientId="a293ac842d4a302c02efeca166cec23e">   
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)
