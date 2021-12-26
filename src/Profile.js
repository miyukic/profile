import React, { useState } from 'react';
import { Box } from "@chakra-ui/react"

const Profile = () => {
    const [items, setItem] = useState();

    return (
        <>
        <Box padding={10} backgroundColor="red.100">
            何者でもなく何者にもなれなかった空っぽの方のみゆき❄ 絵を描きはじめました。自作OSも。気の合う人と繋がれたら嬉しいです。絡んでくれたら… うれしい！プログラミング/動画作り/3DCAD/Windows/.NET/WSL/株/ピアノ/興味のある広くetc.
        </Box>
        </>
    );
}

export default Profile;
