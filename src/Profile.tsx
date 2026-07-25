'use strict'
import React, { useState } from 'react';
import { Box, Button, HStack } from "@chakra-ui/react"
import Icon from "./Icon"
import IconPng from './icon.png';
import { FaTwitter, FaYoutube, FaGithub, FaPen } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Profile: React.VFC = () => {
    const [size, setSize] = useState<number>(200);

    console.log("Profile");
    return (
        <>
        <Icon image={IconPng} width={size} height={size} isCenter={false}></Icon>
            <Box bg='gray.100' shadow="md" rounded={"10"} width={600}>
                <Box margin={4} padding={3}>
                    とうふが好きです！マイ研究所（LocusLab）を夢見ながらコードを書いています。LocusSystemを2026/3/21に考案・設立し3年半のブランクを経て、技術沼に帰還。LocusLabについてYouTubeにも動画を投稿してます↓ youtube.com/@LocusLab
                </Box>
            </Box>

            <Box px={2} fontSize={20}>
                <HStack dropShadow={'2xl'} fontStyle={'inherit'}>

                    <IconContext.Provider value={{ color: '#ccc"', size: "" }}>
                        <Button as="a" href="https://twitter.com/Miyukiumoo">
                            <FaTwitter />
                            &nbsp;
                            Twitter
                            </Button>
                        <Button as="a" href="https://github.com/miyukic">
                            <FaGithub />
                            &nbsp;
                            GitHub
                        </Button>
                        <Button as="a" href="https://www.youtube.com/channel/UCnHC4vCULFtRm3f22hEu5ag">
                            <FaYoutube/>
                            &nbsp;
                            YouTube
                        </Button>
                        <Button as="a" href="https://zenn.dev/yumeno">
                            <FaPen/>
                            &nbsp;
                            Zenn
                        </Button>
                    </IconContext.Provider>
                </HStack>
            </Box>
        </>
    );
}

export default Profile;
