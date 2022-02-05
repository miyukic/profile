import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import bg from "./asets/background.png"

import { Value } from './index'

//ChakuraUI プロバイダーの設定
import { ChakraProvider, extendTheme, Box, Text, Button, Flex } from '@chakra-ui/react';

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
    }, []);

    useEffect(() => {

    }, [windowHeight])

    useEffect(() => {
        console.log("App useEffect [time] time=" + time);
    }, [time]);
    console.log("App time=" + time);
    const countUp = () => { setTime((p) => p + 1); };
    //const countDown = () => { setTime((p) => p - 1); };
    const showWindowSize = () => { };

    let test: number = 0;

    let jsx = (
        <ChakraProvider theme={theme}>
{/* 背景 */}
            <Box backgroundImage={bg} backgroundPosition={"100%"}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"contain"} backgroundAttachment={"fixed"} minHeight={windowHeight}>
                <Box minHeight={windowHeight} height={"100%"} justifyContent={"center"} background={"rgba(256, 256, 256, 0.7)"}>
{/* ここからページ内容 */}
{/* 上部のライン */}
            <Box bgColor={"facebook.100"} FontSize={4} marginBottom={5} paddingRight={3} border={2} textAlign={"right"} height={7}>©miyuki</Box>
{/* メインの領域ボックス */}
                    <Box marginLeft={'auto'} marginRight={'auto'} width={Value.WIDTH} overflow={"hidden"}>
                        <Profile></Profile>
                        {/* <Text >現在のカウント&nbsp;{time}</Text>
                        <Text >現在のウィンドウサイズ&nbsp;{windowHeight}</Text>
                        <Box mx={5} my={5}>
                            <Button mx={5} onClick={countUp}>現在のウィンドウサイズ</Button>
                        </Box> */}
{/* SNSのリンク */}
                    </Box>
{/* メインの領域ボックス終了 */}
                </Box>
            </Box>
        </ChakraProvider>
    )
    return jsx;
}

export default App;
