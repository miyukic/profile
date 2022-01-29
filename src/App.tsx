import React, { SetStateAction, useEffect, useState } from 'react';
import Profile from './Profile';
import Header from './Header'
import bg from "./asets/background.png"

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
    const [time, setTime] = useState<number>(0);
    useEffect(() => {
        console.log("App useEffect [] time=" + time);
    }, [])
    useEffect(() => {
        console.log("App useEffect [time] time=" + time);
    }, [time])
    console.log("App time=" + time);
    const countUp = () => { setTime((p) => p + 1); }

    const countDown = () => { setTime((p) => p - 1); }

    return (
        <ChakraProvider theme={theme}>
            <Box backgroundImage={bg} opacity={0.5} height={200}>
            <Box opacity={undefined}>
            <Box height={4} bgColor={'#BBAAAA'} />
            <Box marginLeft={'auto'} marginRight={'auto'} width={Value.WIDTH}>
            <Profile></Profile>
            <Text >現在のカウント&nbsp;{time}</Text>
            <Box mx={5} my={5}>
                <Button mx={5} onClick={countUp}>カウントアップ</Button>
                <Button onClick={countDown}>カウントダウン</Button>
            </Box>
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
            </Box>
            </Box>
        </ChakraProvider>
    )
}

export default App;
