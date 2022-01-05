import React from 'react';
import { Box, Circle, Image } from '@chakra-ui/react'
import { getWidth } from './index'
import IconPng from './icon.png';

interface IconProps {
    readonly width?: number;
    readonly height?: number;
    readonly image: any;
}


const Icon: React.VFC<IconProps> = (props: IconProps) => {

    return (

        <Circle mx={'auto'} width={200} height={200} bg={'gray.100'}>
            <Image mx={3} padding={3} src={IconPng} alt="miyuki" width={props.image} height={props.image} borderRadius='full' fallbackSrc='https://via.placeholder.com/150' align='center'></Image>
        </Circle>
    )
}

export default Icon;