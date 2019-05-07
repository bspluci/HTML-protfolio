$(document).ready(function(){
//    스크롤 높이에따른 애니메이션 시작 이벤트
    $(document).scroll(function(){
        var scrolltop = $(window).scrollTop();
        if(scrolltop > 0){
            $(".menubox").addClass("menushadow");
        }else{
            $(".menubox").removeClass("menushadow");
        }
        if(scrolltop >= $(".sectiona").offset().top - $(window).height()){
            $(".sectionaimg01").addClass("ani01");
            $(".sectionaimg02").addClass("ani02");
            $(".sectionaimg03").addClass("ani03");
            $(".sectionaimg04").addClass("ani04");
        }
        if(scrolltop >= $(".sectionb").offset().top - $(window).height()){
            $(".sectionbimg01").addClass("ani05");
            $(".sectionbimg02").addClass("ani06");
        }
        if(scrolltop >= $(".sectionc").offset().top - $(window).height()){
            $(".sectioncimg01").addClass("ani07");    
            $(".sectioncimg02").addClass("ani08");    
        }
        if(scrolltop >= $(".sectiond").offset().top - $(window).height()){
            $(".sectiondcard>img").addClass("ani10");
            $(".cardfriends01, .cardfriends02, .cardfriends03, .cardfriends04").addClass("ani11");
        }
    });
//    메인 카드 애니메이션
    $(".ad02, .ad03, .ad04").hide();
    $(".thumbimgbox>img").click(function(){
        var i = $(this).index();
        $(".ad01, .ad02, .ad03, .ad04").fadeOut();
        $(".cardbox>div").eq(i).fadeIn();
    });
//    프렌즈샵 슬라이더2개
    $(".slide01>li, .slide02>li").hide();
    $(".up, .upp").hide();
    $(".down, .downn").show();
    $(".slide01").click(function(){
        $(".slide01>li").slideToggle();
        $(".up, .down").toggle();
    });
        $(".showtext").html("신상품순");
    $(".slide01>li").click(function(){
        var thumbtext = $(this).html();
        $(".showtext").html(thumbtext);    
    });
    
    $(".slide02").click(function(){
        $(".slide02>li").slideToggle();
        $(".upp, .downn").toggle();
    });
        $(".showtextt").html("전체 캐릭터");
    $(".slide02>li").click(function(){
        var thumbtext = $(this).html();
        $(".showtextt").html(thumbtext);    
    });
//    프렌즈샵 페이지넘버 배경
    $(".sectcpage>p").click(function(){
        $(".sectcpage>p").removeClass("pageon");
        $(this).addClass("pageon");    
    });
//    스토어 지역클릭 이벤트
    $(".city>ul>li").click(function(){
        $(".city>ul>li").removeClass("cityon");
        $(".city>ul>li>a").css({"color":"#7d7d7d"});
        $(this).addClass("cityon");
        $(this).find("a").css({"color":"#000"});
    });
    $("#allcity").click(function(){
        $(".sectbline>div").show();
    });
    $("#seoul").click(function(){
        $(".sectbline>div").hide();
        $(".sectbline>div.seoul").show();    
    });
    $("#gyunggi").click(function(){
        $(".sectbline>div").hide();
        $(".sectbline>div.gyunggi").show();    
    });
    $("#inchon").click(function(){
        $(".sectbline>div").hide();
        $(".sectbline>div.inchon").show();    
    });
    $("#daegu").click(function(){
        $(".sectbline>div").hide();
        $(".sectbline>div.daegu").show();    
    });
    $("#busan").click(function(){
        $(".sectbline>div").hide();
        $(".sectbline>div.busan").show();    
    });
    $("#jeju").click(function(){
        $(".sectbline>div").hide();
        $(".sectbline>div.jeju").show();    
    });
    $("#daejun").click(function(){
        $(".sectbline>div").hide();
        $(".sectbline>div.daejun").show();    
    });
});