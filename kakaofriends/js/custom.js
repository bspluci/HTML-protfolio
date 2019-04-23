$(document).ready(function(){
    $(document).scroll(function(){
        var scrolltop = $(window).scrollTop();
        if(scrolltop >= $(".section").offset().top -1000){
            $(".sectionaimg01").addClass("ani01");
            $(".sectionaimg02").addClass("ani02");
            $(".sectionaimg03").addClass("ani03");
            $(".sectionaimg04").addClass("ani04");
        }
        if(scrolltop >= $(".section").offset().top){
            $(".sectionbimg01").addClass("ani05");
        }
    });
})