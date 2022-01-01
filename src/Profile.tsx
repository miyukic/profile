'use strict'
import React from 'react';
import { Box, Center } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import Icon from "./Icon"

const Profile: React.VFC = () => {
    const SIZE: number = 85;
    return (
        <>
        <Icon></Icon>
            <Box>
                    何者でもなく何者にもなれなかった空っぽの方のみゆき❄ 絵を描きはじめました。自作OSも。気の合う人と繋がれたら嬉しいです。絡んでくれたら… うれしい！プログラミング/動画作り/3DCAD/Windows/.NET/WSL/株/ピアノ/興味のある広くetc.
            </Box>
        </>
    );
}

export default Profile;
