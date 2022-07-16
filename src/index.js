import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import './grid.css';
import reportWebVitals from './reportWebVitals';
import Header from './header.js'
import Content from './content.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
