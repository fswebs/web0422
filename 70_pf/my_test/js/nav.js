// nav.js
$(()=>{
    const nav = $("nav");

    $(window).on("scroll", function () {
        console.log(this.scrollTop());
        if (this.scrollTop() >= 50) {
            nav.addClass("active");
        } else {
            nav.removeClass("active");
        }
    });
});
