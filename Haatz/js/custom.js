//비엑스슬라이더
$(document).ready(function(){
    new WOW().init();
    var myslider = $("#sliderc").bxSlider({
        auto:true,
        pager:true,
        controls:false,
        adaptiveHeight: true,
//        onSlideAfter: function () {
//            new WOW().init();
//},
        onSlideBefore: function () {
            new WOW().init();
        }
        
    });
    
    $(".nextBtn").on("click",function(){
        myslider.goToNextSlide()
    });
    $(".prevBtn").on("click",function(){
        myslider.goToPrevSlide()
    });
    
    $(".menuaa").mouseover(function(){
        $(".menuaaa").slideDown(300)
    });
    
    $(window).on("scroll",myslider,function(){
        var strInfo = window.pageYOffset
        if (strInfo > 500) {myslider.stopAuto();}
        else {myslider.startAuto();}
    });
});
        
//        탑위치이동
        $(document).ready(function(){
            var menu = $(".moreBtn");
            var contents = $("#sectiona");
            menu.click(function(e){
                var offset = contents.offset();
                $("html, body").animate({scrollTop:offset.top}, 300);
                $("html, body").stop.myslider();
            });
        })

        $(document).ready(function(){
            $(window).scroll(function(){
                var topbtn = $(".topbtn");
//                var topbtntop = topbtn.scrollTop();
                var windowtop = $(window).scrollTop();
                console.log("aa"+windowtop);
                topbtn.hide();
                if(windowtop > 0) {topbtn.show()};
                if(windowtop > 2650) {topbtn.addClass("topbtnstop")}
                    else{topbtn.removeClass("topbtnstop")};
                    
            });
            var topbtn = $(".topbtn");
            topbtn.click(function(){
                $("html, body").animate({scrollTop:0}, 300);
            });
        });
//3351
//        뉴스배너슬라이드
        $(document).ready(function(){
            var pager = $(".pager")
            var bts = $(".bts");
            
            function listMove(){
                var aa = current*960*-1;
                $("#newsss").animate({left:aa});
                bts.css({"color":"#c4c4c4"});
                bts.eq(current).css({"color":"#2099d4"});
                };
//    
            var pager = $(".pager")
            var bts = $(".bts");
    
            bts.click(function(){
                var i = $(this).index();
                bts.css({"color":"#c4c4c4"});
                bts.eq(i).css({"color":"#2099d4"});
                current = i;
                listMove();
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
            $(".menuwrap2").hide();
            $(".menubox, .menuwrap2").mouseover(function(){
                $(".headerbg").css({"top":"0"})
                $(".menuwrap2").stop().slideDown(250);
                $(".menubox>ul>li>a, .shopingbtn>p").css({"color":"#000"});
                $(".shopingbtn>a>img").attr('src','img/cartb.png');
                $(".searchbtn>a>img").attr('src','img/searchb.png');
                $(".sitemap>a>img").attr('src','img/sitemapb.png');
                $(".menulogo>a>img").attr('src','img/logog.png');
            });
            $(".menubox, .menuwrap2").mouseleave(function(){
                $(".menuwrap2").stop().slideUp(250,function(){
                    $(".headerbg").css({"top":"-70px"});
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
            
            var sect = $("#sectionaa, #sectionaaa");
            $("#sectiona").mouseenter(function(){
                sect.stop().animate({"width":"46%"},200);
                $("#sectiona").stop().animate({"width":"54%"},200);
            });
            $("#sectiona").mouseleave(function(){
                $("#sectiona").stop().animate({"width":"50%"},200);
                sect.stop().animate({"width":"50%"},200);
            });
            
            
            sect.mouseenter(function(){
                $("#sectiona").stop().animate({"width":"46%"},200);
                sect.stop().animate({"width":"54%"},200);
            });
            sect.mouseleave(function(){
                sect.stop().animate({"width":"50%"},200)
                $("#sectiona").stop().animate({"width":"50%"},200);
            });
            
            
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

            $("#bighood").hide();
            $(".bighoodclose").hide();
            $("#sectiona").click(function(){
                wow = new WOW({offset: 0,})
                    wow.init();
                sect.stop().animate({"width":"0%"},300);
                $("#sectiona").stop().animate({"width":"100%"},300);
                $("#sectionaa .boxx").stop().animate({"left":"100%"},300);
                $("#sectionaaa .boxx").stop().animate({"right":"0"},300);
                $(".bighoodclose").show(300)
                $("#bighood").show();
                $("#sectionc").hide();
                $("#sectiona").off();
            });
            $(".bighoodclose").click(function(){
                $("#sectiona").stop().animate({"width":"50%"},300);
                sect.stop().animate({"width":"50%"},300);
                $("#sectionaa .boxx").stop().animate({"left":"0"},300);
                $("#sectionaaa .boxx").stop().animate({"right":"10%"},300);
                $(".bighoodclose").hide();
                $("#bighood").hide();
                $("#sectionc").show();

            $("#sectiona").mouseenter(function(){
                sect.stop().animate({"width":"46%"},200);
                $("#sectiona").stop().animate({"width":"54%"},200);
            });
            $("#sectiona").mouseleave(function(){
                $("#sectiona").stop().animate({"width":"50%"},200);
                sect.stop().animate({"width":"50%"},200);
            });
            $("#sectiona").click(function(){
                wow = new WOW({offset: 0,})
                    wow.init();
                sect.stop().animate({"width":"0%"},300);
                $("#sectiona").stop().animate({"width":"100%"},300);
                $("#sectionaa .boxx").stop().animate({"left":"100%"},300);
                $("#sectionaaa .boxx").stop().animate({"right":"0"},300);
                $(".bighoodclose").show(300);
                $("#bighood").show();
                $("#sectionc").hide();
                $("#sectiona").off();
            }); 
          });
            $("#hoverboxa, #hoverboxb, #hoverboxc").hide();
            $("#boxboa").mouseenter(function(){
                $("#hoverboxa").show();
                $("#hoverboxb, #hoverboxc, #iconlinea").hide();
            });
            $("#boxboa").mouseleave(function(){
                $("#hoverboxa").hide();
                $("#iconlinea").show();
            });
            
            $("#boxbob").mouseenter(function(){
                $("#hoverboxb").show();
                $("#hoverboxa, #hoverboxc, #iconlineb").hide();
            });
            $("#boxbob").mouseleave(function(){
                $("#hoverboxb").hide();
                $("#iconlineb").show();
            });
            
            $("#boxboc").mouseenter(function(){
                $("#hoverboxc").show();
                $("#hoverboxa, #hoverboxb, #iconlinec").hide();
            });
                $("#boxboc").mouseleave(function(){
                $("#hoverboxc").hide();
                $("#iconlinec").show();
            });
            
            
            
            $(".hksection").mouseenter(function(){
               $(this).find(".hkicon").stop().animate({"padding-top":"40px"},300);
               $(this).find(".hktext").stop().animate({"padding-top":"10px"},300);
               $(this).find(".hkplus>img").stop().animate({"height":"40px"},300);
            });
            $(".hksection").mouseleave(function(){
               $(this).find(".hkicon").stop().animate({"padding-top":"70px"},300);
               $(this).find(".hktext").stop().animate({"padding-top":"50px"},300);
               $(this).find(".hkplus>img").stop().animate({"height":"0px"},300);
            });
            
            var sect = $("#sectionaa, #sectionaaa");
            $(".haatzknow").hide();
            $("#sectionaa").click(function(){
                wow = new WOW({offset: 0,})
                    wow.init();
                $(".haatzknow").css({"opacity":"1", "z-index":"999"});
                $(".delete").hide();
                $("#sectiona").stop().animate({"width":"0%"},300);
                $("#sectionc").css({"display":"none"});
                $(".haatzknow").show();
                $(".haatzknow").stop().animate({"width":"100%"},300);

            $(".haatzknowclose").click(function(){
                $(".delete").show();
                $("#sectiona").stop().animate({"width":"50%"},300);
                $("#sectionc").css({"display":"block"});
                sect.stop().animate({"width":"50%"});
                $(".haatzknow").stop().animate({"opacity":"0", "width":"50%"},300,function(){
                    $(".haatzknow").css({"z-index":"-999"});
                });
            }); 
        });    
            
            
            
}) 