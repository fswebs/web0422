// nav.js
$(()=>{
    const nav = $("nav");
    const nav2 = $("nav").clone().appendTo("body").css({top:0});
    nav2.css({opacity:1});
    nav.removeClass("on");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 200) {
            nav2.css({opacity:0});
            nav.addClass("on");
        } else {
            nav2.css({opacity:1});
            nav.removeClass("on");
        }
    });


    const collapsedMenuIcon = $(".collapsedMenuIcon");
    const navbarCollapse = $(".navbar-collapse");
    const navbarBrand = $(".navbar-brand");
    const navLink = $(".nav-link");

    collapsedMenuIcon.click(()=>{
        $(event.currentTarget).toggleClass("change");
    });
    navLink.click(()=>{
        navbarCollapse.removeClass("show");
    });
    navbarBrand.click(()=>{
        navbarCollapse.removeClass("show");
    });
});
