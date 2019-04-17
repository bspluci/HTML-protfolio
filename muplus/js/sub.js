$(document).ready(function(){
//    var i = $(this).index();
//    $(".subbox").eq(i).mouseover(function(){
//       $(".subboxa>div").addClass("redbox");
//       $(".textbox>p").addClass("redtext");
//       $(".redbox").stop().animate({'opacity':'1'},200);
//       $(".redtext").stop().animate({'bottom':'20px'},200);
//    });
//    $(".subboxa").mouseleave(function(){
//       $(".subboxa>div").removeClass("redbox");
//       $(".textbox>p").removeClass("redtext");
//       $(".redbox").stop().animate({'opacity':'0'},200);
//       $(".redtext").stop().animate({'bottom':'-60px'},200);
//    });
    $(".subboxa").mouseover(function(){
        $(this).find("div").addClass("redbox");
        $(this).find("p").addClass("redtext");
        $(".redtext").stop().animate({'bottom':'20px'},1);
    });
    $(".subboxa").mouseleave(function(){
        $(this).find("div").removeClass("redbox");
        $(this).find("p").removeClass("redtext");
        $(".textbox>p").stop().animate({'bottom':'-60px'},1);
    });
    
    $(".headermenu>li>div").click(function(){
        $(".headermenu>li>div").removeClass("on");
        $(this).addClass("on");
    });
    
    
    
    
    $(".allbtn").click(function(){
        $(".subboxa").show();
    });
    $(".websitebtn>div").click(function(){
        $(".subboxa").hide();
        $(".websit").show();    
    });
    $(".mobilebtn>div").click(function(){
        $(".subboxa").hide();
        $(".mobile").show();    
    });
    $(".promotionbtn>div").click(function(){
        $(".subboxa").hide();
        $(".promotion").show();    
    });
    $(".etcbtn>div").click(function(){
        $(".subboxa").hide();
        $(".etc").show();    
    });
});






