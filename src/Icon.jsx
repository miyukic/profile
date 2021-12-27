import React from 'react';
import IconPng from './icon.png';
import { Box } from '@chakra-ui/react'

const Icon = (props) => {
    let height = props.height;
    let width = props.width;
    return (
        <Box rounded="base">
            <img src={IconPng} alt="miyuki" width={width} height={height}></img>
        </Box>
    )
}

export default Icon;