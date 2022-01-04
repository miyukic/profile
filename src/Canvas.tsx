import { useEffect, useState } from "react";

const FONT: string = "48px monospace";

interface Props {
    readonly id: string;
    readonly width: number;
    readonly height: number;
}

const Canvas: React.FC<Props> = (props: Props) => {
    // contextを状態として持つ
    const [g, setContext] = useState<CanvasRenderingContext2D | null>(null)
    // 画像読み込み完了トリガー
    const [loaded, setLoaded] = useState<boolean>(false)
    // コンポーネントの初期化完了後コンポーネント状態にコンテキストを登録
    useEffect(() => {
        const el = document.getElementById("canvas");
        if (el == null) return;
        const cv = el as HTMLCanvasElement;
        const canvasContext = cv.getContext("2d");
        if (canvasContext == null) return;
        setContext(canvasContext);
    },[])
    // 状態にコンテキストが登録されたらそれに対して操作できる
        useEffect(()=>{
            if(g!==null)
            {
                // const img = new Image();
                // img.src = "img.jpg" // 描画する画像など
                // img.onload = () => {
                //     context.drawImage(img,0,0)
                //     // 更にこれに続いて何か処理をしたい場合
                //     setLoaded(true)
                // }
                g.font = FONT;
                g.fillText("Hello World", 0, 64);
            }
        },[g])
        // useEffect(()=>{
        //     if(loaded)
        //     {
        //         // それに続く処理
        //     }
        // },[loaded])
    return (
        <canvas width={props.width} height={props.height} id={props.id}></canvas>
    )
}