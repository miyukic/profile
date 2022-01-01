import React from 'react';
import IconPng from './icon.png';
import { Box, Image } from '@chakra-ui/react'
import { getWidth } from './index'


const Icon = (props: any) => {
    let height = props.height;
    let width = props.width;
    if (width == undefined) width = 180;
    return (
            <Image mx={10} padding={30} src={IconPng} alt="miyuki" width={width} height={height} borderRadius='full' fallbackSrc='https://via.placeholder.com/150' align='center'></Image>
    )
}

export default Icon;