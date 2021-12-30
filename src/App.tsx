import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Profile from './Profile';

//ChakuraUI プロバイダーの設定
import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';

/// <reference path="./main.ts">

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme(colors)

const App = () => {
    return (
      <ChakraProvider>
        <Profile></Profile>
      </ChakraProvider>
    )
}

export default App;
