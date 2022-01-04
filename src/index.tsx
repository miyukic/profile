import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import { ChakraProvider, extendTheme, Box } from '@chakra-ui/react';

//export { default as Profile } from './Profile';

//ChakuraUI プロバイダーの設定


export class Value {
    static readonly BLANK: string = "&nbsp;";
    static readonly WIDTH: number = 1920 / 2;
}

export function getWidth() {
    return window.innerWidth;
}
const Hoge = ({p1, p2='デフォルト引数'} : {p1: string, p2?: string}) => {
    return (
        <>
            <p>{p1}</p>
            <p>{p2}</p>
        </>
    )
}


const render: () => void = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App></App>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render();


window.onload = () => {
    console.log(getWidth());
    // const el: HTMLElement | null = document.getElementById("main") as HTMLCanvasElement;
    // if (el == null) return;
    // const ca: HTMLCanvasElement = el as HTMLCanvasElement;
    // const g: CanvasRenderingContext2D | null = ca.getContext("2d");
    // if (g == null) return;
    // g.font = FONT;
    // g.fillText("Hello World", 0, 64);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
