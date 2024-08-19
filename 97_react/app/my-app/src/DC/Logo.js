// 로고 컴포넌트
import React from "react";
import isrc from "./ImgSrc";

const Logo = () => {
    return (
        <>
            <h1>
                <img src={isrc.logo} />
            </h1>
        </>
    );
};

export default Logo;