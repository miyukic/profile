import React from 'react';
import { Box, Circle, Image } from '@chakra-ui/react'
import { getWidth } from './index'
import { useState } from 'react';

interface IconProps {
    readonly width?: number;
    readonly height?: number;
    readonly image: string;
    readonly isCenter?: boolean;
}


const Icon: React.FC<IconProps> = ({width=100, height=100, image, isCenter=false}: IconProps) => {
    const [size, setSize] = useState<[number, number]>();
    let center: string | undefined = undefined;
    if (isCenter === true) {
        center = "auto";
    }
    return (

        <Circle mx={center}  width={width} height={height} bg={'gray.100'}>
            <Image mx={3} padding={3} src={image} alt="miyuki" borderRadius='full' fallbackSrc='https://via.placeholder.com/150' align='center'></Image>
        </Circle>
    )
}

export default Icon;