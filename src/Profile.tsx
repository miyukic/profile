'use strict'
import React, { useState } from 'react';
import { Box, Button, Center, Circle, HStack, Stack } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import Icon from "./Icon"
import IconPng from './icon.png';

const Profile: React.VFC = () => {
    const [size, setSize] = useState<number>(200);

    console.log("Profile");
    return (
        <>
        <Icon image={IconPng} width={size} height={size} isCenter={false}></Icon>
            <Box bg='gray.100' shadow="md" rounded={"10"} width={600}>
                <Box margin={4} padding={3}>
                    何者でもなく何者にもなれなかった空っぽの方のみゆき❄ 絵を描きはじめました。自作OSも。気の合う人と繋がれたら嬉しいです。絡んでくれたら… うれしい！プログラミング/動画作り/3DCAD/Windows/.NET/WSL/株/ピアノ/興味のある広くetc.
                </Box>
            </Box>
            <Box px={2} fontSize={20}>
                <HStack dropShadow={'2xl'} fontStyle={'inherit'}>
                    <Box>
                        <Button as="a" href="https://twitter.com/Miyukiumoo" width={20}>Twitter</Button>
                    </Box>
                    <Box>
                        <Button as="a" href="https://github.com/miyukic" width={20}>GitHub</Button>
                    </Box>
                    <Box>
                        <Button as="a" href="https://www.youtube.com/channel/UCnHC4vCULFtRm3f22hEu5ag" width={20}>YouTube</Button>
                    </Box>
                </HStack>
            </Box>
        </>
    );
}

export default Profile;
