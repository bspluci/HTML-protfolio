$(document).ready(function(){
//  메뉴 클릭 이동
    var menu = $(".menuright>div");
    var contents = $("#body>div");
    menu.click(function(e){
        e.preventDefault();
        var i = $(this).index();
        var section = contents.eq(i);
        var sectiontop = section.offset().top;
        $("html, body").stop().animate({scrollTop:sectiontop - 67}, 1000);
    });
//  메뉴 슬라이드
    $(document).scroll(function(){
        var scrolltop = $(window).scrollTop();
        if(scrolltop > 0){
           $(".logo").slideUp(300);
           $(".menuright").addClass("menubg");
        }else{
           $(".logo").slideDown(300);
           $(".menuright").removeClass("menubg");
        }
//      메뉴 스크롤 밑줄
        var windowtop = $(window).scrollTop();
        contents.each(function(){
            var i = $(this).index();
            if(windowtop >= $(this).offset().top -67){
                menu.removeClass("menuon"); 
                menu.eq(i).addClass("menuon"); 
            }
            if(windowtop >= $(".footerline").offset().top -700){
                menu.removeClass("menuon");
                $(".skillbtn").addClass("menuon");
            };
        });        
    });
//  미디어쿼리
    if(matchMedia("screen and (min-width: 750px)").matches) {
           
//      스크롤 따라 내려오는 중앙라인            
        $(".imgimg>div").hide();
        var dotmax = $(".introsection .dot").length -1;
        var dotnum = 0
        $(document).scroll(function(){
            var line = $(".centerline>span");
            var linetop = line.offset().top;
            var scrolltop = $(window).scrollTop();
            line.css("height", scrolltop - $(".introbox").offset().top + $(window).height()/2);
//          스크롤 도트 이미지변경
            if(linetop + line.height() >= $(".introsection .dot").eq(dotnum).offset().top){
                $(".introsection .dot").eq(dotnum).addClass("on");
                dotnum ++;
                if(dotnum > dotmax) dotnum = dotmax;
            } else if(linetop + line.height() < $(".introsection .dot").eq(dotnum).offset().top){
                $(".introsection .dot").eq(dotnum).removeClass("on");
                dotnum --;
                if(dotnum < 0) dotnum = 0;
            }    
//          스크롤 도트 이미지 이벤트
            if(linetop + line.height() >= $(".dot01").offset().top){
                $(".img01").css({"position":"fixed"});
                $(".img01>img, .imghoverbg01").addClass("imgonon");
                $(".imghover01>p").addClass("texton1");
                $(".imghoverbg01, .imghover01").css({"display":"block"});
            }else if(linetop + line.height() < $(".dot01").offset().top){
                $(".img01").css({"position":"absolute"});
                $(".img01>img").removeClass("imgonon");
                $(".imghover01>p").removeClass("texton1");
                $(".imghoverbg01, .imghover01").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot02").offset().top){
                $(".img01").css({"position":"absolute"});
                $(".img01>img").removeClass("imgonon");
                $(".imghover01>p").removeClass("texton1");
                $(".imghoverbg01, .imghover01").css({"display":"none"});
            };
            if(linetop + line.height() >= $(".dot02").offset().top){
                $(".img02").css({"position":"fixed"});
                $(".img02>img, .imghoverbg02").addClass("imgnono");
                $(".imghover02>p").addClass("textonon2");
                $(".imghoverbg02, .imghover02").css({"display":"block"});
            }else if(linetop + line.height() < $(".dot02").offset().top){
                $(".img02").css({"position":"absolute"});
                $(".img02>img").removeClass("imgnono");
                $(".imghover02>p").removeClass("textonon2");
                $(".imghoverbg02, .imghover02").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot03").offset().top){
                $(".img02").css({"position":"absolute"});
                $(".img02>img").removeClass("imgnono");
                $(".imghover02>p").removeClass("textonon2");
                $(".imghoverbg02, .imghover02").css({"display":"none"});
            };
            if(linetop + line.height() >= $(".dot03").offset().top){
                $(".img03").css({"position":"fixed"});
                $(".img03>img, .imghoverbg03").addClass("imgonon");
                $(".imghover03>p").addClass("texton3");
                $(".imghoverbg03, .imghover03").css({"display":"block"});
            }else if(linetop + line.height() < $(".dot03").offset().top){
                $(".img03").css({"position":"absolute"});
                $(".img03>img").removeClass("imgonon")
                $(".imghover03>p").removeClass("texton3");
                $(".imghoverbg03, .imghover03").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot04").offset().top){
                $(".img03").css({"position":"absolute"});
                $(".img03>img").removeClass("imgonon");
                $(".imghover03>p").removeClass("texton3");
                $(".imghoverbg03, .imghover03").css({"display":"none"});
            };    
            if(linetop + line.height() >= $(".dot04").offset().top){
                $(".img04").css({"position":"fixed"});
                $(".img04>img, .imghoverbg04").addClass("imgnono");
                $(".imghover04>p").addClass("textonon4");
                $(".imghoverbg04, .imghover04").css({"display":"block"});
            }else if(linetop + line.height() < $(".dot04").offset().top){
                $(".img04").css({"position":"absolute"});
                $(".img04>img").removeClass("imgnono");
                $(".imghover04>p").removeClass("textonon4");
                $(".imghoverbg04, .imghover04").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot05").offset().top){
                $(".img04").css({"position":"absolute"});
                $(".img04>img").removeClass("imgnono");
                $(".imghover04>p").removeClass("textonon4");
                $(".imghoverbg04, .imghover04").css({"display":"none"});
            };
            if(linetop + line.height() >= $(".dot05").offset().top){
                $(".img05").css({"position":"fixed"});
                $(".img05>img, .imghoverbg05").addClass("imgonon");
                $(".imghover05>p").addClass("texton5");
                $(".imghoverbg05, .imghover05").css({"display":"block"});
            }else if(linetop + line.height() < $(".dot05").offset().top){
                $(".img05").css({"position":"absolute"});
                $(".img05>img").removeClass("imgonon");
                $(".imghover05>p").removeClass("texton5");
                $(".imghoverbg05, .imghover05").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot06").offset().top){
                $(".img05").css({"position":"absolute"});
                $(".img05>img").removeClass("imgonon");
                $(".imghover05>p").removeClass("texton5");
                $(".imghoverbg05, .imghover05").css({"display":"none"});
            };
            if(linetop + line.height() >= $(".dot06").offset().top){
                $(".img06").css({"position":"fixed"});
                $(".img06>img, .imghoverbg06").addClass("imgnono");
                $(".imghover06>p").addClass("textonon6");
                $(".imghoverbg06, .imghover06").css({"display":"block"});
            }else if(linetop + line.height() < $(".dot06").offset().top){
                $(".img06").css({"position":"absolute"});
                $(".img06>img").removeClass("imgnono");
                $(".imghover06>p").removeClass("textonon6");
                $(".imghoverbg06, .imghover06").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot07").offset().top){
                $(".img06").css({"position":"absolute"});
                $(".img06>img").removeClass("imgnono");
                $(".imghover06>p").removeClass("textonon6");
                $(".imghoverbg06, .imghover06").css({"display":"none"});
            };
//          풋터 테두리 이벤트
            var flwidth = $(".footerlineright>span, .footerlineright02>span, .footerlineleft>span, .footerlineleft02>span");
            var flhight = $(".footerlineright01>span, .footerlineleft01>span")
            if(linetop + line.height() >= $(".dot07").offset().top){
                $(flwidth).stop().animate({"width":"100%"},400);
            } else $(flwidth).stop().animate({"width":"0"},400);
            if(linetop + line.height() >= $(".dot07").offset().top){
                $(flhight).stop().animate({"height":"100%"},400);
            } else $(flhight).stop().animate({"height":"0"},400);
//          스킬창 보이기    
            if(linetop + line.height() >= $(".dot07").offset().top){
                $(".skill").animate({opacity:"1"},800);
            }
        });
//      프로필 사진 무브            
        $(document).on("mousemove",function(e) {
            var card = $(".profilephoto");
            var ax = -($(window).innerWidth()/2- e.pageX)/100;
            var ay = ($(window).innerHeight()/2- e.pageY)/100;
            card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);");
        });
//      탑 버튼
        $(".topbtn").hide();
        $(window).scroll(function(){
            var topbtn = $(".topbtn");
            var windowtop = $(window).scrollTop();
            topbtn.hide();
            if(windowtop > 0){
                topbtn.show()
            }
            if(windowtop > $(".footerline").offset().top - $(window).height()){
                topbtn.addClass("topbtnstop")
            } else{
                topbtn.removeClass("topbtnstop")
            };
        });
        $(".topbtn").click(function(){
            $("html, body").animate({scrollTop:0}, 1000);
        });
           
    } else{
           
//      탑 버튼
        $(".topbtn").hide();
        $(window).scroll(function(){
            var topbtn = $(".topbtn");
            var windowtop = $(window).scrollTop();
            topbtn.hide();
            if(windowtop > 0){
                topbtn.show()
            };
            if(windowtop > $(".footer").offset().top){
                topbtn.addClass("topbtnstop")
            }else{
                topbtn.removeClass("topbtnstop")
            };
        });
        $(".topbtn").click(function(){
            $("html, body").animate({scrollTop:0}, 1000);
        });
    }
});