$(document).ready(function(){
    $("#bars").click(function(){
        $("#mmenu").stop().animate({left:"0"},300);
    });
    $("#close").click(function(){
        $("#mmenu").stop().animate({left:"-100%"},300);
    });
})