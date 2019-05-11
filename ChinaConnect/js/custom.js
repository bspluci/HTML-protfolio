$(document).ready(function(){
    $(".configsectionbox02, .configsectionbox03").hide();
    $(".underline").css({"background":"#fff", "border-bottom":"none", "color":"#ff0000"});
    $(".configtitle>div").click(function(){
        var i = $(this).index();
        $(".configtitle>div").css({"background":"#fbfcfc", "border-bottom":"2px solid #d7d7d7", "color":"#000"});
        $(".configtitle>div").removeClass("underline");
        $(".configtitle>div").eq(i).addClass("underline");
        $(".configtitle>div").eq(i).css({"background":"#fff", "border-bottom":"none", "color":"#ff0000"});
        $(".configsectionbox").hide();
        $(".configsection>div").eq(i).show();
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
