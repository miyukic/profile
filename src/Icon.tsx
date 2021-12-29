import React from 'react';
import IconPng from './icon.png';
import { Box } from '@chakra-ui/react'

const Icon = (props: any) => {
    let height = props.height;
    let width = props.width;
    return (
        <Box rounded="base" borderRadius="3xl">
            <img src={IconPng} alt="miyuki" width={width} height={height} border-dadius={50}></img>
        </Box>
    )
}

export default Icon;