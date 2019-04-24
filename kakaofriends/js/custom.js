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
        if(scrolltop >= $(".sectionc").offset().top -800){
            $(".sectioncimg01").addClass("ani07");    
            $(".sectioncimg02").addClass("ani08");    
        }
        if(scrolltop >= $(".sectiond").offset().top -800){
            $(".sectiondcard>img").addClass("ani10");
            $(".cardfriends").addClass("ani11");
        }
    });
//    $(".thumbimgbox>img").click(function(){
//        var i = $(this).index();
//        var cardimg = $(".cardbox").eq(i)
//        cardimg.fadeIn();
//    });
        $(".ad02, .ad03, .ad04").hide();
    $(".thumbimg01").click(function(){
        $(".ad02, .ad03, .ad04").fadeOut();
        $(".ad01").fadeIn();
    });
    $(".thumbimg02").click(function(){
        $(".ad01, .ad03, .ad04").fadeOut();
        $(".ad02").fadeIn();
    });
    $(".thumbimg03").click(function(){
        $(".ad01, .ad02, .ad04").fadeOut();
        $(".ad03").fadeIn();
    });
    $(".thumbimg04").click(function(){
        $(".ad01, .ad02, .ad03").fadeOut();
        $(".ad04").fadeIn();
    });
})