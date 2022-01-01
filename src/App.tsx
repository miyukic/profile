import React from 'react';
import Profile from './Profile';
import Header from './Header'


//ChakuraUI プロバイダーの設定
import { ChakraProvider, extendTheme, Box, Text } from '@chakra-ui/react';

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
            <body aria-setsize={800}>
            <Header />
            <Profile></Profile>
            <Box px={10} py={10} fontSize={20}>
                リンク
                <Box fontSize={12}>
                    <Box>
                        Twitter:
                    </Box>
                    <Box>
                        GitHub:
                    </Box>
                    <Box>
                        YouTube:
                    </Box>
                </Box>
            </Box>
            <Text></Text>
            </body>
        </ChakraProvider>
    )
}

export default App;
