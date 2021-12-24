import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import IconComponent from './IcomComponent';
import Profile from './Profile';

window.onload = () => {
  console.log("window.onloadが読み込まれました。");
}

ReactDOM.render(
  <React.StrictMode>
    <IconComponent height={150} width={150}></IconComponent>
    <Profile></Profile>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
