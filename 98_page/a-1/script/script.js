$(document).ready(function(){
    // modal popup
   $("#tab1 li:eq(0)").click(function(){
       $("#modal").show();
   });
   $(".popup button").click(function(){
       $("#modal").hide();
   });
    
   
    // tab
    $("#tabs>ul li").click(function(){
        var i = $(this).index();
        $("#tabs>ul li").removeClass();
        $(this).addClass("on");
        $("#tabs>div").removeClass();
        $("#tabs>div").eq(i).addClass("on");
    });
});





