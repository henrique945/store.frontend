import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/main/main';
import reportWebVitals from './reportWebVitals';

// TODO: pelo tempo foi feita apenas uma versão desktop, falta tratar as responsividades em outras telas
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
