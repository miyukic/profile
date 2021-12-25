import React, { useState } from 'react';

const Profile = () => {
    const [items, setItem] = useState();

    return (
        <>
        <p>
            何者でもなく何者にもなれなかった空っぽの方のみゆき❄ 絵を描きはじめました。自作OSも。気の合う人と繋がれたら嬉しいです。絡んでくれたら… うれしい！プログラミング/動画作り/3DCAD/Windows/.NET/WSL/株/ピアノ/興味のある広くetc.
        </p>
        <input></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>検索</button>
        </>
    );
}

export default Profile;
