    $(document).ready(function(){
        var dotmax = $(".introsection .dot").length -1;
        var dotnum = 0
        $(document).scroll(function(){
        var line = $(".centerline>span");
        var linetop = line.offset().top;
        var scrolltop = $(window).scrollTop();
//        스크롤 따라 내려오는 라인
		line.css("height", scrolltop - $(".introbox").offset().top + $(window).height()/2);
            
//        스크롤 도트 이미지변경
        if(linetop + line.height() >= $(".introsection .dot").eq(dotnum).offset().top){
            $(".introsection .dot").eq(dotnum).addClass("on");
        dotnum ++;
        if(dotnum > dotmax) dotnum = dotmax;
        }else if(linetop + line.height() < $(".introsection .dot").eq(dotnum).offset().top){
            $(".introsection .dot").eq(dotnum).removeClass("on");
            dotnum --;
            if(dotnum < 0) dotnum = 0;}    
        });

        $(document).scroll(function(){
        var line = $(".centerline>span");
        var linetop = line.offset().top;
        var scrolltop = $(window).scrollTop();
            
            
//        스크롤 이미지 이벤트  
        if(linetop + line.height() >= $(".dot01").offset().top){
            $(".img01").css({"position":"fixed"});
            $(".img01>img").addClass("imgonon");
            $(".img01>p").addClass("texton");
            }else if(linetop + line.height() < $(".dot01").offset().top){
                $(".img01").css({"position":"absolute"});
                $(".img01>img").removeClass("imgonon");
                $(".img01>p").removeClass("texton");
            }if(linetop + line.height() >= $(".dot02").offset().top){
                $(".img01").css({"position":"absolute"});
                $(".img01>img").removeClass("imgonon");
                $(".img01>p").removeClass("texton");
            }
            
            
        if(linetop + line.height() >= $(".dot02").offset().top){
            $(".img02").css({"position":"fixed"});
            $(".img02>img").addClass("imgnono");
            $(".img02>p").addClass("textonon");
            }else if(linetop + line.height() < $(".dot02").offset().top){
                $(".img02").css({"position":"absolute"});
                $(".img02>img").removeClass("imgnono");
                $(".img02>p").removeClass("textonon");
            };if(linetop + line.height() >= $(".dot03").offset().top){
                $(".img02").css({"position":"absolute"});
                $(".img02>img").removeClass("imgnono")
                $(".img02>p").removeClass("textonon");
            };
            
            
            
        if(linetop + line.height() >= $(".dot03").offset().top){
            $(".img03").css({"position":"fixed"});
            $(".img03>img").addClass("imgonon");
            $(".img03>p").addClass("texton");
            }else if(linetop + line.height() < $(".dot03").offset().top){
                $(".img03").css({"position":"absolute"});
                $(".img03>img").removeClass("imgonon")
                $(".img03>p").removeClass("texton");
            }if(linetop + line.height() >= $(".dot04").offset().top){
                $(".img03").css({"position":"absolute"});
                $(".img03>img").removeClass("imgonon")
                $(".img03>p").removeClass("texton");
            };    
        
            
        if(linetop + line.height() >= $(".dot04").offset().top){
            $(".img04").css({"position":"fixed"});
            $(".img04>img").addClass("imgnono");
            $(".img04>p").addClass("textonon");
            }else if(linetop + line.height() < $(".dot04").offset().top){
                $(".img04").css({"position":"absolute"});
                $(".img04>img").removeClass("imgnono")
                $(".img04>p").removeClass("textonon");
            };if(linetop + line.height() >= $(".dot05").offset().top){
                $(".img04").css({"position":"absolute"});
                $(".img04>img").removeClass("imgnono")
                $(".img04>p").removeClass("textonon");
            };
            
            
        if(linetop + line.height() >= $(".dot05").offset().top){
            $(".img05").css({"position":"fixed"});
            $(".img05>img").addClass("imgonon");
            $(".img05>p").addClass("texton");
            }else if(linetop + line.height() < $(".dot05").offset().top){
                $(".img05").css({"position":"absolute"});
                $(".img05>img").removeClass("imgonon")
                $(".img05>p").removeClass("texton");    
            }if(linetop + line.height() >= $(".dot06").offset().top){
                $(".img05").css({"position":"absolute"});
                $(".img05>img").removeClass("imgonon");
                $(".img05>p").removeClass("texton");
            };
        
//        푸터 라인만들기    
        if(linetop + line.height() >= $(".dot06").offset().top){
            $(".footerlineright>span").stop().animate({"width":"100%"},400);
        }else $(".footerlineright>span").stop().animate({"width":"0"},400);
        if(linetop + line.height() >= $(".dot06").offset().top){
            $(".footerlineright01>span").stop().animate({"height":"100%"},400);
        }else $(".footerlineright01>span").stop().animate({"height":"0"},400);
        if(linetop + line.height() >= $(".dot06").offset().top){
            $(".footerlineright02>span").stop().animate({"width":"100%"},400);
        }else $(".footerlineright02>span").stop().animate({"width":"0"},400);    
            
        if(linetop + line.height() >= $(".dot06").offset().top){
            $(".footerlineleft>span").stop().animate({"width":"100%"},400);
        }else {$(".footerlineleft>span").stop().animate({"width":"0"},400)};
        if(linetop + line.height() >= $(".dot06").offset().top){
            $(".footerlineleft01>span").stop().animate({"height":"100%"},400);
        }else $(".footerlineleft01>span").stop().animate({"height":"0"},400);
        if(linetop + line.height() >= $(".dot06").offset().top){
            $(".footerlineleft02>span").stop().animate({"width":"100%"},400);
        }else {$(".footerlineleft02>span").stop().animate({"width":"0"},400)}
//        스킬창 보이기    
        $(".skill").hide();    
        if(linetop + line.height() >= $(".dot06").offset().top && $(".skill").hide()){
            $(".skill").fadeIn();
        }else $(".skill").hide();
//        메뉴 슬라이드    
        if(scrolltop > 0){
            $(".logo").slideUp(300);
            $(".menuright").addClass("menubg");
        }else{
            $(".logo").slideDown(300);
            $(".menuright").removeClass("menubg");
        }    
    });
        
        
//            탑버튼
        $(".topbtn").hide();
        $(window).scroll(function(){
            var topbtn = $(".topbtn");
            var windowtop = $(window).scrollTop();
            topbtn.hide();
            if(windowtop > 0){
                topbtn.show()
            };
            if(windowtop > 3100){
                topbtn.addClass("topbtnstop")
            }else{
                topbtn.removeClass("topbtnstop")
            };
        });
        $(".topbtn").click(function(){
            $("html, body").animate({scrollTop:0}, 1000);
        });
        
        
//        메뉴 클릭 위치이동
        $(".mainbtn").click(function(){
            $("html, body").stop().animate({scrollTop:0}, 1000);    
        });
        
        $(".profilebtn").click(function(){
            $("html, body").stop().animate({scrollTop:$(".fullbody").offset().top}, 1000);    
        });
        $(".portfoliobtn").click(function(){
            $("html, body").stop().animate({scrollTop:$(".introbox").offset().top}, 1000);    
        });
        $(".skillbtn").click(function(){
            $("html, body").stop().animate({scrollTop:$(".footerline").offset().top}, 1000);    
        });
        
//        메뉴 밑줄
        $(".menuright>div").click(function(){
            $(".menuright>div").removeClass("menuon");
            $(".menuright>div").eq($(this).index()).addClass("menuon");    
        });
        
});











