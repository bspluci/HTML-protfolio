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
        $(".mclosebtn").click();
    });    
    $(".menu02").click(function(){    
        $("html, body").stop().animate({scrollTop:$(".pointheader").offset().top -20}, 800);
        $(".mclosebtn").click();
    });
    $(".menu03").click(function(){    
        $("html, body").stop().animate({scrollTop:$(".connecteffect").offset().top -20}, 800);
        $(".mclosebtn").click();
    });
    $(".menu04").click(function(){    
        $("html, body").stop().animate({scrollTop:$(".connectcase").offset().top -70}, 800);
        $(".mclosebtn").click();
    });
//    $(".menulist>li>a").click(function(){
//        var i = $(this).index();
//        $(".menulist>li>a").removeClass("menuon");
//        $(this).addClass("menuon");
//    });
    $(document).scroll(function(){
        var windowtop = $(window).scrollTop();
        if(windowtop > 0){
            $("#header").addClass("headeron");
        }else{
            $("#header").removeClass("headeron");
        }
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

    $(".mobilemenubtn").click(function(){
        $(".mobilemenu").stop().animate({"right":"0"});
        $(".mbg").css({"display":"block", "z-index":"1"});
        $(".mbg").fadeTo(600, 0.5);
    });
    $(".mclosebtn").click(function(){
        $(".mbg").fadeTo(600, 0);
        $(".mobilemenu").stop().animate({"right":"-400px"}, function(){
            $(".mbg").css({"display":"none"});
        });
        
    });
        
    
    if(matchMedia("screen and (min-width: 751px)").matches) {
        
        $(".secmenulist>div").click(function(){
        var i = $(this).index();
        $(".secmenulist>div").removeClass("underline tabon");
        $(".secmenulist>div").eq(i).addClass("underline tabon");
        $("html, body").stop().animate({scrollTop:$(".cover>div").eq(i).offset().top -100}, 800)
        });
        
        
        $(".fixbtn").hide();
        $(window).scroll(function(){
        var windowtop = $(window).scrollTop();
        if(windowtop > 0){
            $(".fixbtn").fadeIn();
        }else{
            $(".fixbtn").fadeOut();
        }
        });
        $(".tbtn").click(function(){
            $("html, body").animate({scrollTop:0}, 800);
        });
    }else {
        
        $(".mhistory, .moperation, .mguest").hide();
        $(".secmenulist>div").click(function(){
        var i = $(this).index();
        $(".secmenulist>div").removeClass("underline tabon");
        $(".secmenulist>div").eq(i).addClass("underline tabon");
        $(".sectionhibox>div").hide();    
        $(".sectionhibox>div").eq(i).show();    
        });
    }
});
