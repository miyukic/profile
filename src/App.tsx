import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Header from './Header'

import { Value } from './index'

//ChakuraUI プロバイダーの設定
import { ChakraProvider, extendTheme, Box, Text, Button, AlertTitle, Flex, Circle } from '@chakra-ui/react';
import ReactDOM from 'react-dom';

/// <reference path="./main.ts">
const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac'
    }
}

const theme = extendTheme(colors)


const App: React.VFC = () => {

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Box marginLeft={'auto'} marginRight={'auto'} width={Value.WIDTH}>
            <Profile></Profile>
            <Box px={10} py={10} fontSize={20}>
                <Flex fontSize={12}>
                    <Box>
                        <Button width={20}>Twitter</Button>
                    </Box>
                    <Box>
                        <Button width={20}>GitHub</Button>
                    </Box>
                    <Box>
                        <Button width={20}>YouTube</Button>
                    </Box>
            </Flex>
            </Box>
            <Text></Text>
            </Box>
        </ChakraProvider>
    )
}

export default App;
