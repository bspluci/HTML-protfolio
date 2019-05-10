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
});