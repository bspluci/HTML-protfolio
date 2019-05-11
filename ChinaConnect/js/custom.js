$(document).ready(function(){
    $(".configsectionbox02, .configsectionbox03").hide();
    $(".configtitle>div").click(function(){
        var i = $(this).index();
        $(".configtitle>div").removeClass("underline tabon");
        $(".configtitle>div").eq(i).addClass("underline tabon");
        $(".configsectionbox").hide();
        $(".configsection>div").eq(i).show();
    });
    $(".blogtab").hide();
    $(".nbtitle>div").click(function(){
        var i = $(this).index();
        $(".nbtitle>div").removeClass("underline tabon");
        $(".nbtitle>div").eq(i).addClass("underline tabon");
        $(".nbsection>div").hide();
        $(".nbsection>div").eq(i).show();
    });
    $(".menu01").click(function(){
        $("html, body").stop().animate({scrollTop:$(".connectintro").offset().top -120}, 800);
    });    
    $(".menu02").click(function(){    
        $("html, body").stop().animate({scrollTop:$(".pointheader").offset().top -20}, 800);    
    });
    $(".menu03").click(function(){    
        $("html, body").stop().animate({scrollTop:$(".connecteffect").offset().top -20}, 800);    
    });
    $(".menu04").click(function(){    
        $("html, body").stop().animate({scrollTop:$(".connectcase").offset().top -70}, 800);    
    });
    $(".menulist>li>a").click(function(){
        var i = $(this).index();
        $(".menulist>li>a").removeClass("menuon");
        $(this).addClass("menuon");
    });
    $(document).scroll(function(){
        var windowtop = $(window).scrollTop();  
        if(windowtop >= $(".connectintro").offset().top -120){
            $(".menulist>li>a").removeClass("menuon");
            $(".menu01>a").addClass("menuon")};
        if(windowtop >= $(".pointheader").offset().top -20){
            $(".menulist>li>a").removeClass("menuon");
            $(".menu02>a").addClass("menuon")};
        if(windowtop >= $(".connecteffect").offset().top -20){
            $(".menulist>li>a").removeClass("menuon");
            $(".menu03>a").addClass("menuon")};      
        if(windowtop >= $(".connectcase").offset().top -70){
            $(".menulist>li>a").removeClass("menuon");
            $(".menu04>a").addClass("menuon")};      
        });
});
