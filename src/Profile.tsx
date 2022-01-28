'use strict'
import React, { useState } from 'react';
import { Box, Center, Circle } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import Icon from "./Icon"
import IconPng from './icon.png';

const Profile: React.VFC = () => {
    const [size, setSize] = useState<number>(200);

    console.log("Profile");
    return (
        <>
        <Icon image={IconPng} width={size} height={size} isCenter={false}></Icon>
        <Box>みゆき</Box>
            <Circle bg='gray.100'>
                <Box margin={4}>
                    何者でもなく何者にもなれなかった空っぽの方のみゆき❄ 絵を描きはじめました。自作OSも。気の合う人と繋がれたら嬉しいです。絡んでくれたら… うれしい！プログラミング/動画作り/3DCAD/Windows/.NET/WSL/株/ピアノ/興味のある広くetc.
                </Box>
            </Circle>
        </>
    );
}

export default Profile;
