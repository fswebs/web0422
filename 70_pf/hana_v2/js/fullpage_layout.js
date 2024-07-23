// Section Common Layout
// jQuery fullpage.js Plug-in

$(function(){
    $('#wrap').fullpage({
        //menu: '#hana_nav',
        //anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

        sectionsColor: ['red', 'green', 'blue', 'yellow'],
        
        // navigation: false(기본값) -> 오른쪽에 있는 인디케이터
        navigation: true,
        navigationTooltips: ['Home', 'Best Tour', 'Favorite', 'Culture'],
        //showActiveTooltip: true
    });
});