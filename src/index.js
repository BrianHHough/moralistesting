import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MoralisProvider appId="cJeGUubKlYjFiAAtM2fKSeGBBgV12uiAycS4De6T" serverUrl="https://zucgwfnukrja.moralishost.com:2053/server">
    <App />
  </MoralisProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
