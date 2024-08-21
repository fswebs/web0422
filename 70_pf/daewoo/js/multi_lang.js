import ml from "./main_data.js";

window.addEventListener("DOMContentLoaded", ()=>{
    const sel = document.querySelector("select");
    const logo = document.querySelector(".logo img");
    const gnb = document.querySelectorAll(".gnb a");
    const tit = document.querySelectorAll(".tit span");
    const flogo = document.querySelector(".flogo img");
    const fmenu = document.querySelectorAll(".fmenu a");
    const addr = document.querySelector(".addr");

    //console.log(sel,logo,gnb,tit,flogo,fmenu,addr);

    sel.onchange = (e) => {
        let opt = e.currentTarget.value;
        let data = ml[opt];

        //로고 변경
        logo.setAttribute("src",`${data["logo"]}`);
        console.log(data["logo"]);

        // 메인 타이틀 변경
        tit.forEach((ele,idx)=>
            ele.innerText = data["tit"][idx]);

        // 메뉴 변경
        gnb.forEach((ele,idx)=>
            ele.innerText = data["gnb"][idx]);

        // 푸터 메뉴 변경
        fmenu.forEach((ele,idx)=>
            ele.innerText = data["fmenu"][idx]);

        //푸터 로고 변경
        flogo.setAttribute("src",`${data["flogo"]}`);
        console.log(data["flogo"]);

        // 주소 변경
        addr.innerText = data["addr"];
    };
});