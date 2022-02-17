import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import bg from "./asets/background.png"
import icon from "./asets/icon.png"

import { Value } from './index'

//ChakuraUI プロバイダーの設定
import { ChakraProvider, extendTheme, Box, Image } from '@chakra-ui/react';

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
    const [windowWidth, setWindWidth] = useState<number>(0);

    useEffect(() => {
        setWindHeight(() => window.innerHeight);
        window.addEventListener("resize", () => { setWindHeight(() => window.innerHeight); setWindWidth(() => window.innerWidth) });
    }, []);

    useEffect(() => {

    }, [windowHeight])

    useEffect(() => {
        // console.log("Effect windowWidth=" + windowWidth);
        // if (windowWidth <= 600 && windowWidth > 220) {
        //     Value.WIDTH = 500;
        // } else if (windowWidth <= 700 && windowHeight > 600) {
        //     Value.WIDTH = 600;
        // }
        const f = (a: number) => {
            if (windowWidth <= a && windowWidth > a - 100) {
                Value.WIDTH = a - 100;
            }
        };
        const windSizeList: number[] = [100, 500, 900, 1300, 1700, 2100];
        windSizeList.map((x) => {f(x)});

    }, [windowWidth]);

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
                backgroundRepeat={"no-repeat"} backgroundSize={windowHeight/1.5}
                backgroundAttachment={"fixed"} minHeight={windowHeight}
                overflow={"hidden"}>
                <Box minHeight={windowHeight} height={"100%"} justifyContent={"center"} background={"rgba(256, 250, 251, 0.7)"}>

{/* ここからページ内容 */}
{/* 上部のライン */}
            <Box bgColor={"facebook.100"} FontSize={4} marginBottom={windowHeight/3.8} paddingRight={3}
            border={2} textAlign={"right"} height={7} overflow={"hidden"} objectFit={"cover"}>
                <Image height={6} paddingTop={1} paddingLeft={2} src={icon} objectFit={"cover"}/>©miyuki
            </Box>
{/* メインの領域ボックス */}
                    <Box marginLeft={'auto'} marginRight={'auto'} width={Value.WIDTH}>
                        <Profile></Profile>

<Box paddingTop={30} marginBottom={30}>
    <Box>

    </Box>
</Box>


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
