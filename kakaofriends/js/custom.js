$(document).ready(function(){
    $(document).scroll(function(){
        var scrolltop = $(window).scrollTop();
        if(scrolltop >= $(".sectiona").offset().top -800){
            $(".sectionaimg01").addClass("ani01");
            $(".sectionaimg02").addClass("ani02");
            $(".sectionaimg03").addClass("ani03");
            $(".sectionaimg04").addClass("ani04");
        }
        if(scrolltop >= $(".sectionb").offset().top -800){
            $(".sectionbimg01").addClass("ani05");
            $(".sectionbimg02").addClass("ani06");
        }
        if(scrolltop >= $(".sectionc").offset().top -500){
            $(".sectioncimg01").addClass("ani07");    
            $(".sectioncimg02").addClass("ani08");    
        }
    });
})