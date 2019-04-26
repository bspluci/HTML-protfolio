$(document).ready(function(){
    $(document).scroll(function(){
        var scrolltop = $(window).scrollTop();
        if(scrolltop > 0){
            $(".menubox").addClass("menushadow");
        }else{
            $(".menubox").removeClass("menushadow");
        }
        if(scrolltop >= $(".sectiona").offset().top -700){
            $(".sectionaimg01").addClass("ani01");
            $(".sectionaimg02").addClass("ani02");
            $(".sectionaimg03").addClass("ani03");
            $(".sectionaimg04").addClass("ani04");
        }
        if(scrolltop >= $(".sectionb").offset().top -700){
            $(".sectionbimg01").addClass("ani05");
            $(".sectionbimg02").addClass("ani06");
        }
        if(scrolltop >= $(".sectionc").offset().top -700){
            $(".sectioncimg01").addClass("ani07");    
            $(".sectioncimg02").addClass("ani08");    
        }
        if(scrolltop >= $(".sectiond").offset().top -700){
            $(".sectiondcard>img").addClass("ani10");
            $(".cardfriends01, .cardfriends02, .cardfriends03, .cardfriends04").addClass("ani11");
        }
    });
    $(".ad02, .ad03, .ad04").hide();
    $(".thumbimgbox>img").click(function(){
        var i = $(this).index();
        $(".ad01, .ad02, .ad03, .ad04").fadeOut();
        $(".cardbox>div").eq(i).fadeIn();
    });
    
    $(".sectbheader>ul>li").hide();
    $(".up").hide();
    $(".down").show();
    $(".sectbheader>ul").click(function(){
        $(".sectbheader>ul>li").slideToggle();
        $(".up").toggle();
        $(".down").toggle();
    });
        $(".showtext").html("전체 캐릭터");
    $(".sectbheader>ul>li").click(function(){
        var thumbtext = $(this).html();
        $(".showtext").html(thumbtext);    
    });
});    