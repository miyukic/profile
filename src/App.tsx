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

const FONT: string = "48px monospace";


const App: React.VFC = () => {
    // contextを状態として持つ
    const [g, setContext] = useState<CanvasRenderingContext2D | null>(null)
    // 画像読み込み完了トリガー
    const [loaded, setLoaded] = useState(false)
    // コンポーネントの初期化完了後コンポーネント状態にコンテキストを登録
    useEffect(() => {
        const el = document.getElementById("canvas");
        if (el == null) return;
        const cv = el as HTMLCanvasElement;
        const canvasContext = cv.getContext("2d");
        if (canvasContext == null) return;
        setContext(canvasContext);
    },[])
    // 状態にコンテキストが登録されたらそれに対して操作できる
        useEffect(()=>{
            if(g!==null)
            {
                // const img = new Image();
                // img.src = "img.jpg" // 描画する画像など
                // img.onload = () => {
                //     context.drawImage(img,0,0)
                //     // 更にこれに続いて何か処理をしたい場合
                //     setLoaded(true)
                // }
                g.font = FONT;
                g.fillText("Hello World", 0, 64);
            }
        },[g])
        // useEffect(()=>{
        //     if(loaded)
        //     {
        //         // それに続く処理
        //     }
        // },[loaded])

    return (
        <ChakraProvider theme={theme}>
            <Header />
            <canvas width="1280" height="720" id="canvas"></canvas>
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
