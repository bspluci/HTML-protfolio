$(document).ready(function(){
    $("#topmenubb").mouseover(function(){
        $(".submenua").stop().slideDown(200)    
    });
    $("#topmenubb").mouseleave(function(){
        $(".submenua").stop().slideUp(200)    
    });
    
    $("#topmenue").mouseover(function(){
        $(".submenuc").stop().slideDown(200)    
    });
    $("#topmenue").mouseleave(function(){
        $(".submenuc").stop().slideUp(200)    
    });
    
    $("#topmenud").mouseover(function(){
        $(".submenub").stop().slideDown(200)    
    });
    $("#topmenud").mouseleave(function(){
        $(".submenub").stop().slideUp(200)    
    });
});
