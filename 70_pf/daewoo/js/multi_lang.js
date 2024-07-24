// 다국어 객체
const ml = {
    // 영어
    "en": {
        "logo": "assets/en/logo.png",
        "gnb": ["About Us", "Business", "PR Center", "Contact"],
        "tit": ["GREAT", "POSSIBILITY"],
        "flogo": "assets/en/footer_logo.png",
        "fmenu": ["About DAEWOO E&C", "Sitemap","Contact", "Email Security"],
        "addr": "04548 DAEWOO E&C 170 Eulji-ro, Jung-gu, Seoul, Republic of Korea"

    },
    // 한국어
    "ko": {
        "logo": "assets/ko/logo.png",
        "gnb": ["회사소개", "사업분야", "홍보센터", "고객센터"],
        "tit": ["BUILD", "TOGETHER"],
        "flogo": "assets/ko/footer_logo.png",
        "fmenu": ["회사소개", "사이트맵","개인정보처리방침", "이메일수집거부"],
        "addr": "04548 서울특별시 중구 을지로 170 ㈜대우건설"
    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    const sel = document.querySelector("select");
    const logo = document.querySelector(".logo");
    const gnb = document.querySelectorAll(".gnb a");
    const tit = document.querySelectorAll(".tit");
    const flogo = document.querySelector(".flogo");
    const fmenu = document.querySelectorAll(".fmenu");
    const addr = document.querySelector(".addr");

    //console.log(sel,logo,gnb,tit,flogo,fmenu,addr);

    sel.onchange = (e) => {
        let opt = e.currentTarget.value;
        let data = ml[opt];

        //로고 변경
        logo.setAttribute("src",`${data["logo"]}"`);
        console.log(data["logo"]);

        // 메뉴 변경
        gnb.forEach((ele,idx)=>
            ele.innerText = data["gnb"][idx]);
    };
});