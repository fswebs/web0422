import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 첫 번째 방법
// import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
