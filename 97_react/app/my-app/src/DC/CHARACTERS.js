// CHARACTERS.js
import React from "react";
import isrc from "./ImgSrc";

const CHARACTERS = () => {
    return (
        <>
            <h2>CHARACTERS 페이지</h2>
            <img src={isrc.character} />
        </>
    );
};

export default CHARACTERS;