$(document).ready(function () {
    // 레이어 모달 팝업창
    $(".notice li:eq(0)").click(function(){
        $("#modal").show();
    });
    $(".popup button").click(function(){
        $("#modal").hide();
    });
});









