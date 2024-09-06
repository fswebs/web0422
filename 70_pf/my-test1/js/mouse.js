/* 
            event.pageX ~ 마우스 이벤트가 발생할 때 마우스 포인터의 문서 상대 X 좌표(읽기 전용)
            event.pageY ~ 마우스 이벤트가 발생할 때 마우스 포인터의 문서 상대 Y 좌표(읽기 전용)
        */

$(() => {
    let mp = $(".mp");

    $("body").mousemove(() => {
        mm(0);
        mm(1);
    });

    function mm(i) {
        /* 
            innerWidth(), innerHeight() -> padding 포함 -> JS의 clientWidth
            outerWidth(), outerHeight() -> padding과 border 포함 -> JS의 offsetWidth
        */
        let x = event.pageX - mp.eq(i).outerWidth() / 2;
        let y = event.pageY - mp.eq(i).outerWidth() / 2;

        mp.eq(i).css({left: x + "px", top: y + "px"});
    }
});
