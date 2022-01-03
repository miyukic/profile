import React from 'react';
import { Box, Circle, Image } from '@chakra-ui/react'
import { getWidth } from './index'

interface IconProps {
//    readonly width: number | undefined;
//   readonly height: number | undefined;
    readonly image: string | undefined;
}


const Icon: React.VFC<IconProps> = (props: IconProps) => {
    let height = 30;
    let width = 30;
    let IconPng = props.image;

    if (width == undefined) width = 180;
    return (
        <Circle mx={'auto'} width={200} height={200} bg={'gray.100'}>
            <Image mx={10} padding={10} src={IconPng} alt="miyuki" width={width} height={height} borderRadius='full' fallbackSrc='https://via.placeholder.com/150' align='center'></Image>
        </Circle>
    )
}

export default Icon;