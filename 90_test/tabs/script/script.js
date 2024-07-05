$("#tabs>ul li").click(function () {
    var i = $(this).index();
    $("#tabs>ul li").removeClass();
    $(this).addClass("on");
    $("#tabs>div").removeClass();
    $("#tabs>div").eq(i).addClass("on");
});





