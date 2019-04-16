
//    윈도우 탑이동
        $(document).ready(function(){
            $(window).scroll(function(){
                var topbtn = $(".topbtn");
//                var topbtntop = topbtn.scrollTop();
                var windowtop = $(window).scrollTop();
                console.log("aa"+windowtop);
                topbtn.hide();
                if(windowtop > 0) {topbtn.show(1)};
                if(windowtop > 2650) {topbtn.addClass("topbtnstop")}
                    else{topbtn.removeClass("topbtnstop")};
            });
            var topbtn = $(".topbtn");
            topbtn.click(function(){
                $("html, body").animate({scrollTop:0}, 300);
            });


//            메뉴검색창
            $(".searchbtn").click(function(){
                $("#search").toggle(300);
           });
            
//            푸터패밀리사이트
            $("#fsmenu").click(function(){
                var up = $("#upup")
                var down = $("#dodo")
                var fs = $("#fsmenus")
                fs.toggle(300);
                up.toggle();
                down.toggle();
           });
            
//            메뉴사이트맵
            $(".sitemap").click(function(){
                $("#info").stop().slideDown(500)
            });
            $("#close").click(function(){
                $("#info").stop().slideUp(500)
            });
    
//            메뉴슬라이드
            $(".menubox>ul>li, .menuwrap2").mouseover(function(){
                $(".headerbg").stop().animate({"top":"0"},100)
                $(".menuwrap2").stop().animate({"top":"0"},250);
                $(".menubox>ul>li>a, .shopingbtn>p").css({"color":"#000"});
                $(".shopingbtn>a>img").attr('src','img/cartb.png');
                $(".searchbtn>a>img").attr('src','img/searchb.png');
                $(".sitemap>a>img").attr('src','img/sitemapb.png');
                $(".menulogo>a>img").attr('src','img/logog.png');
            });
            $(".menubox>ul>li, .menuwrap2").mouseleave(function(){
                $(".headerbg").stop().animate({"top":"-70px"},400)
                $(".menuwrap2").stop().animate({"top":"-440px"},250,function(){
                    $(".menubox>ul>li>a, .shopingbtn>p").css({"color":"#fff"});
                    $(".shopingbtn>a>img").attr('src','img/cart.png');
                    $(".searchbtn>a>img").attr('src','img/search.png');
                    $(".sitemap>a>img").attr('src','img/sitemap.png');
                    $(".menulogo>a>img").attr('src','img/logo.png');
                });
            });
            $(".msection1").mouseover(function(){
                $("msection01").addClass("hovercolor");
            })
            $(".msection1").mouseleave(function(){
                $("msection01").removeClass("hovercolor");
            })
            
            
            
            $(".menua").mouseover(function(){
                $(".menulogo>a>img").attr("src", "img/logogr.png");
            });
            $(".menua").mouseleave(function(){
                $(".menulogo>a>img").attr("src", "img/logo.png");
            });
            
            
            
//            제품찾기 보이기
                $("#sbara").show()
                $("#sbarb, #sbarc").hide()
            
            $("#sbarA").click(function(){
                $("#sbara").show()
                $("#sbarb, #sbarc").hide()
            });
            $("#sbarB").click(function(){
                $("#sbarb").show()
                $("#sbara, #sbarc").hide()
            });
            $("#sbarC").click(function(){
                $("#sbarc").show()
                $("#sbara, #sbarb").hide()
            });
            
            
            $(".sbarbtn").click(function(){
                $("#sbar").stop().slideDown(500)
            });
            $("#sliderclose").click(function(){
                $("#sbar").stop().slideUp(500)
            });          
}) 