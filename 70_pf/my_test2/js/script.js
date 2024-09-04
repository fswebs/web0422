$(() => {

    // nav
    const nav = $("nav");
    const nav2 = $("nav").clone().appendTo("body").css({ top: 0 });
    nav2.css({ opacity: 1 });
    nav.removeClass("on");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 200) {
            nav2.css({ opacity: 0 });
            nav.addClass("on");
        } else {
            nav2.css({ opacity: 1 });
            nav.removeClass("on");
        }
    });

    const collapsedMenuIcon = $(".collapsedMenuIcon");
    const navbarCollapse = $(".navbar-collapse");
    const navbarBrand = $(".navbar-brand");
    const navLink = $(".nav-link");

    collapsedMenuIcon.click(() => {
        $(event.currentTarget).toggleClass("change");
    });
    navLink.click(() => {
        navbarCollapse.removeClass("show");
    });
    navbarBrand.click(() => {
        navbarCollapse.removeClass("show");
    });

    // profile motion
    const txtMove1 = document.querySelector(".move1");
    const imgMove2 = document.querySelector(".move2");
    const txtMove3 = document.querySelector(".move3");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 400) {
            txtMove1.style.transform = "translateY(0)";
            imgMove2.style.transform = "translateY(0)";
            txtMove3.style.transform = "translateY(0)";
        } else {
            txtMove1.style.transform = "translateY(300px)";
            imgMove2.style.transform = "translateY(500px)";
            txtMove3.style.transform = "translateY(500px)";
        }
    });

    // progress bar
    const pBar = $(".progress-bar");
    const pBarNum = $(".progress b");
    const num = [];
    for (let i = 0; i < pBar.length; i++) {
        num[i] = 0;
    }
    const percent = [80, 90, 70, 95];

    function pb(i) {
        num[i]++;

        if (num[i] <= percent[i]) {
            setTimeout(() => pb(i), 30);
        } else {
            return;
        }
        pBar.eq(i).css({ width: num[i] + "%" });
        pBarNum.eq(i).text(num[i]);
    }

    $(window).on("scroll", function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 1200) {
            pBar.each((idx) => pb(idx));
        } else {
            for (let i = 0; i < pBar.length; i++) {
                num[i] = 0;
                pBar.eq(i).css({ width: num[i] + "%" });
                pBarNum.eq(i).text(num[i]);
            }
        }
    });

    // counter
    const cntNum = $(".counter b");
    const initNums = [];
    const totalCount = [2, 3, 5, 2];
    console.log(cntNum);
    for (let i = 0; i < cntNum.length; i++) {
        initNums[i] = 0;
    }

    function cntFn(i) {
        initNums[i]++;
        if (initNums[i] <= totalCount[i]) {
            setTimeout(() => cntFn(i), 100);
        } else {
            return;
        }
        cntNum.eq(i).text(initNums[i]);
    }

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 1500) {
            cntNum.each((idx) => cntFn(idx));
        } else {
            for (let i = 0; i < cntNum.length; i++) {
                initNums[i] = 0;
                cntNum.eq(i).text(initNums[i]);
            }
        }
    });

    // lightbox2 link
    const lb_caption = document.querySelector(".lb-caption");
    lb_caption.style.cursor = "pointer";
    lb_caption.onclick = () => {
        const lb_link = event.currentTarget.innerText;
        const openNewWindow = window.open("about:blank");
        openNewWindow.location.href = lb_link;
    };
});
