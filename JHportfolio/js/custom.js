//centerline>span 

$(document).ready(function(){
    $(window).scroll(function(){
        var line = $(".centerline>span");
        var linetop = line.offset().top;
        var scrolltop = $(window).scrollTop();
        var dotmax = $(".introsection .dot").length -1;
        var dotnum = 0
        scrollTop = window.scrollY || window.pageYOffset;
		line.css("height", scrollTop - $(".introbox").offset().top + $(window).height()/2);
        linetop + line.height() >= 
//        if(scrollTop >= $(".dot").offset().top) {$(".introsection .dot").eq(dotnum).addClass("on");
//        dotnum++
//        if(dotnum > dotmax) dotnum = dotmax;}
    });
});