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
    const [windowHeight, setWindHeight] = useState<number>(0);

    useEffect(() => {
        console.log("App useEffect [] time=" + time);
        setWindHeight(() => window.innerHeight);
        window.addEventListener("resize", () => { console.log("windowheight: " + windowHeight); setWindHeight(() => window.innerHeight) });
    }, [])

    useEffect(() => {

    }, [windowHeight])

    useEffect(() => {
        console.log("App useEffect [time] time=" + time);
    }, [time])
    console.log("App time=" + time);
    const countUp = () => { setTime((p) => p + 1); };
    //const countDown = () => { setTime((p) => p - 1); };
    const showWindowSize = () => { };

    let test: number = 0;

    let jsx = (
        <ChakraProvider theme={theme}>
{/* 上部のライン */}
            <Box bgColor={"facebook.100"} Size={4} border={1} textAlign={"right"} height={8}>©miyuki</Box>
{/* 背景 */}
            <Box backgroundImage={bg} backgroundPosition={"100%"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"contain"} backgroundAttachment={"fixed"}>
                <Box height={"100%"} justifyContent={"center"} background={"rgba(255, 255, 255, 0.5)"}>
{/* ここからページ内容 */}
{/* メインの領域ボックス */}
                    <Box marginLeft={'auto'} marginRight={'auto'} width={Value.WIDTH} overflow={"hidden"}>
                        <Profile></Profile>
                        <Text >現在のカウント&nbsp;{time}</Text>
                        <Text >現在のウィンドウサイズ&nbsp;{windowHeight}</Text>
                        <Box mx={5} my={5}>
                            <Button mx={5} onClick={countUp}>現在のウィンドウサイズ</Button>
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
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box fontSize={30}> {++test} </Box>
                        <Box>あああああ</Box>
                        <Box>あああああ</Box>
                        <Box>あああああ</Box>
                        <Box>あああああ</Box>
                        <Box>あああああ</Box>
                    </Box>
{/* メインの領域ボックス終了 */}
                </Box>
            </Box>
        </ChakraProvider>
    )
    return jsx;
}

export default App;
