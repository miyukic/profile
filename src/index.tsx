import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Profile from './Profile';

//ChakuraUI プロバイダーの設定
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'


window.onload = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ChakraProvider>
        <Profile></Profile>
      </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
