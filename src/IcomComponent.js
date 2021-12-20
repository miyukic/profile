import React from 'react';
import Icon from './icon.png';


const IconComponent = (props) => {
    let height = props.height;
    let width = props.width;
    return <img src={Icon} alt="miyuki" width={width} height={height}></img>
}

export default IconComponent;