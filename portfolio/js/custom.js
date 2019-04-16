$(document).ready(function(){        
        var im = $("#sliderimg>div");
        var imsu = im.length;
        var page = $("#sliderpage>div");
        var pagesu = page.length;
        var imgpos = 0;
        var pagepos = 0;
        
        im.hide();
        $(im[0]).show();
        page.css({"color":"#fff"});
        $(page[0]).css({"color":"#f00"});
        
        $("#left").click(prev);
//        page.click(pagesl);
        function prev(){
            imgpos--;
            if(imgpos < 0) imgpos = 2;
//            imgpos=imgpos%imsu;
            im.hide();
            $(im[imgpos]).fadeIn();
            page.css({"color":"#fff"});
            $(page[imgpos]).css({"color":"#f00"});
        }
        
        $("#right").click(next);
        page.click(pagesl);
        function next(){
            imgpos++;
//            if(imgpos > 4) imgpos = 0;
            imgpos=imgpos%imsu;
            im.hide();
            $(im[imgpos]).fadeIn(300);
            page.css({"color":"#fff"});
            $(page[imgpos]).css({"color":"#f00"});
        }
        
//        setInterval(next, 3000);
        function pagesl(){
            pagepos = $(this).index();
            imgpos=pagepos;
            im.hide();
            $(im[pagepos]).fadeIn(300)
            page.css({"color":"#fff"});
            $(page[pagepos]).css({"color":"#f00"});
        }
    })
