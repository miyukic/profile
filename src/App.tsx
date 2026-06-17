import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import bg from "./asets/background.png"
import icon from "./asets/icon.png"

import { Value } from './index'

//ChakuraUI プロバイダーの設定
import { ChakraProvider, extendTheme, Box, Image, SimpleGrid, Text } from '@chakra-ui/react';

import g01 from './asets/gallery/EJeMq3-U0AA0N-w.jpg';
import g02 from './asets/gallery/E4wJYAkVcAE6COV.jpg';
import g03 from './asets/gallery/E4z42LbVoAoxP58.jpg';
import g04 from './asets/gallery/E5tCqqYVUAcl4bN.png';
import g05 from './asets/gallery/E5tGVR9VEAAYT-R.jpg';
import g06 from './asets/gallery/E-2ZHotVIAoTMxq.jpg';
import g07 from './asets/gallery/E-qh9kbUcAAhMvO.jpg';
import g08 from './asets/gallery/E-_wKKVVgAcXHUD.jpg';
import g09 from './asets/gallery/E_MGZCeVIAE2mxS.jpg';
import g10 from './asets/gallery/E_WnM0KUUAA9bt6.jpg';
import g11 from './asets/gallery/FAigrIAVkAgcPNp.jpg';
import g12 from './asets/gallery/FFEVuKDaQAAp620.jpg';
import g13 from './asets/gallery/FFHXNzmaUAAZ8gT.jpg';
import g14 from './asets/gallery/FHxjyataMAIdCCz.jpg';
import g15 from './asets/gallery/FH_olUvaQAAeGtZ.jpg';
import g16 from './asets/gallery/FNp91EwakAE3stp.jpg';
import g17 from './asets/gallery/FRZK1udVIAAI4ug.jpg';
import g18 from './asets/gallery/2ET0EkBwv5lbLlGv.jpg';
import g19 from './asets/gallery/E11BBeiUYAQflRL.jpg';
import g20 from './asets/gallery/EE86A4nU4AI53sv.jpg';
import g21 from './asets/gallery/EF9I-WBU4AAOWWo.jpg';
import g22 from './asets/gallery/EFueqZUUEAgG5rN.jpg';
import g23 from './asets/gallery/EHFnpEMU4AAJzGb.jpg';
import g24 from './asets/gallery/EIXrECqXUAAQBxa.jpg';
import g25 from './asets/gallery/EIfMeauU0AAfgrG.jpg';
import g26 from './asets/gallery/EIpiXh3XUAAhxyV.png';
import g27 from './asets/gallery/EKeDEOiVAAEnVTN.jpg';
import g28 from './asets/gallery/EMbZwloUUAIMjUk.jpg';
import g29 from './asets/gallery/EznVLeEUcAMfpjc.jpg';
import g30 from './asets/gallery/FAskg8JVgAQzBIe.jpg';
import g31 from './asets/gallery/FdLsui1aMAMxvEK.jpg';

const galleryPaths = [g31, g30, g29, g28, g27, g26, g25, g24, g23, g22, g21, g20, g19, g18, g17, g16, g15, g14, g13, g12, g11, g10, g09, g08, g07, g06, g05, g04, g03, g02, g01];

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
        const windWidthList: number[] = [100, 500, 900, 1300, 1700, 2100];
        windWidthList.map((x) => {f(x)});

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
            border={2} height={7} overflow={"hidden"} objectFit={"cover"}>
                {/* <Image bgColor={'AppWorkspace'} height={6} paddingTop={1} paddingLeft={2} src={icon} objectFit={"cover"}/> */}
                <Box margin={"0 0 0 auto"}>©miyuki</Box>
            </Box>
{/* メインの領域ボックス */}
                    <Box marginLeft={'auto'} marginRight={'auto'} width={Value.WIDTH}>
                        <Profile></Profile>

<Box paddingTop={10} marginBottom={30}>
    <Text fontSize="xl" fontWeight="bold">らくがき</Text>
    <Text fontSize="sm" color="gray.500" marginBottom={4}>落書き程度ですが描いてます</Text>
    <SimpleGrid columns={[2, 3]} spacing={4}>
        {galleryPaths.map((src: string, i: number) => (
            <Image key={i} src={src} borderRadius="md" objectFit="cover" shadow="lg" border="2px" borderColor="blue.200" />
        ))}
    </SimpleGrid>
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
