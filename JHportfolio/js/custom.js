    $(document).ready(function(){
        $(".imghoverbg01, .imghover01, .imghoverbg02, .imghover02, .imghoverbg03, .imghover03, .imghoverbg04, .imghover04, .imghoverbg05, .imghover05, .imghoverbg06, .imghover06").hide();
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
//        스크롤 이미지 이벤트
        $(document).scroll(function(){
        var line = $(".centerline>span");
        var linetop = line.offset().top;
        var scrolltop = $(window).scrollTop();
        if(linetop + line.height() >= $(".dot01").offset().top){
            $(".img01").css({"position":"fixed"});
            $(".img01>img").addClass("imgonon");
            $(".img01>p").addClass("texton");
            $(".imghoverbg01, .imghover01").delay(300).css({"display":"block"});
            }else if(linetop + line.height() < $(".dot01").offset().top){
                $(".img01").css({"position":"absolute"});
                $(".img01>img").removeClass("imgonon");
                $(".img01>p").removeClass("texton");
                $(".imghoverbg01, .imghover01").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot02").offset().top){
                $(".img01").css({"position":"absolute"});
                $(".img01>img").removeClass("imgonon");
                $(".img01>p").removeClass("texton");
                $(".imghoverbg01, .imghover01").css({"display":"none"});
            };
        if(linetop + line.height() >= $(".dot02").offset().top){
            $(".img02").css({"position":"fixed"});
            $(".img02>img").addClass("imgnono");
            $(".img02>p").addClass("textonon");
            $(".imghoverbg02, .imghover02").delay(300).css({"display":"block"});
            }else if(linetop + line.height() < $(".dot02").offset().top){
                $(".img02").css({"position":"absolute"});
                $(".img02>img").removeClass("imgnono");
                $(".img02>p").removeClass("textonon");
                $(".imghoverbg02, .imghover02").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot03").offset().top){
                $(".img02").css({"position":"absolute"});
                $(".img02>img").removeClass("imgnono");
                $(".img02>p").removeClass("textonon");
                $(".imghoverbg02, .imghover02").css({"display":"none"});
            };
        if(linetop + line.height() >= $(".dot03").offset().top){
            $(".img03").css({"position":"fixed"});
            $(".img03>img").addClass("imgonon");
            $(".img03>p").addClass("texton");
            $(".imghoverbg03, .imghover03").delay(300).css({"display":"block"});
            }else if(linetop + line.height() < $(".dot03").offset().top){
                $(".img03").css({"position":"absolute"});
                $(".img03>img").removeClass("imgonon")
                $(".img03>p").removeClass("texton");
                $(".imghoverbg03, .imghover03").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot04").offset().top){
                $(".img03").css({"position":"absolute"});
                $(".img03>img").removeClass("imgonon");
                $(".img03>p").removeClass("texton");
                $(".imghoverbg03, .imghover03").css({"display":"none"});
            };    
        if(linetop + line.height() >= $(".dot04").offset().top){
            $(".img04").css({"position":"fixed"});
            $(".img04>img").addClass("imgnono");
            $(".img04>p").addClass("textonon");
            $(".imghoverbg04, .imghover04").delay(300).css({"display":"block"});
            }else if(linetop + line.height() < $(".dot04").offset().top){
                $(".img04").css({"position":"absolute"});
                $(".img04>img").removeClass("imgnono");
                $(".img04>p").removeClass("textonon");
                $(".imghoverbg04, .imghover04").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot05").offset().top){
                $(".img04").css({"position":"absolute"});
                $(".img04>img").removeClass("imgnono");
                $(".img04>p").removeClass("textonon");
                $(".imghoverbg04, .imghover04").css({"display":"none"});
            };
        if(linetop + line.height() >= $(".dot05").offset().top){
            $(".img05").css({"position":"fixed"});
            $(".img05>img").addClass("imgonon");
            $(".img05>p").addClass("texton");
            $(".imghoverbg05, .imghover05").delay(300).css({"display":"block"});
            }else if(linetop + line.height() < $(".dot05").offset().top){
                $(".img05").css({"position":"absolute"});
                $(".img05>img").removeClass("imgonon");
                $(".img05>p").removeClass("texton");
                $(".imghoverbg05, .imghover05").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot06").offset().top){
                $(".img05").css({"position":"absolute"});
                $(".img05>img").removeClass("imgonon");
                $(".img05>p").removeClass("texton");
                $(".imghoverbg05, .imghover05").css({"display":"none"});
            };
        if(linetop + line.height() >= $(".dot06").offset().top){
            $(".img06").css({"position":"fixed"});
            $(".img06>img").addClass("imgnono");
            $(".img06>p").addClass("textonon");
            $(".imghoverbg06, .imghover06").delay(300).css({"display":"block"});
            }else if(linetop + line.height() < $(".dot06").offset().top){
                $(".img06").css({"position":"absolute"});
                $(".img06>img").removeClass("imgnono");
                $(".img06>p").removeClass("textonon");
                $(".imghoverbg06, .imghover06").css({"display":"none"});
            }if(linetop + line.height() >= $(".dot07").offset().top){
                $(".img06").css({"position":"absolute"});
                $(".img06>img").removeClass("imgnono");
                $(".img06>p").removeClass("textonon");
                $(".imghoverbg06, .imghover06").css({"display":"none"});
            };
//        푸터 라인만들기    
        if(linetop + line.height() >= $(".dot07").offset().top){
            $(".footerlineright>span").stop().animate({"width":"100%"},400);
        }else $(".footerlineright>span").stop().animate({"width":"0"},400);
        if(linetop + line.height() >= $(".dot07").offset().top){
            $(".footerlineright01>span").stop().animate({"height":"100%"},400);
        }else $(".footerlineright01>span").stop().animate({"height":"0"},400);
        if(linetop + line.height() >= $(".dot07").offset().top){
            $(".footerlineright02>span").stop().animate({"width":"100%"},400);
        }else $(".footerlineright02>span").stop().animate({"width":"0"},400);    
        if(linetop + line.height() >= $(".dot07").offset().top){
            $(".footerlineleft>span").stop().animate({"width":"100%"},400);
        }else {$(".footerlineleft>span").stop().animate({"width":"0"},400)};
        if(linetop + line.height() >= $(".dot07").offset().top){
            $(".footerlineleft01>span").stop().animate({"height":"100%"},400);
        }else $(".footerlineleft01>span").stop().animate({"height":"0"},400);
        if(linetop + line.height() >= $(".dot07").offset().top){
            $(".footerlineleft02>span").stop().animate({"width":"100%"},400);
        }else {$(".footerlineleft02>span").stop().animate({"width":"0"},400)}
//        스킬창 보이기    
        if(linetop + line.height() >= $(".dot07").offset().top){
            $(".skill").animate({opacity:"1"},500);
        }
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
            if(windowtop > 3500){
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
            $("html, body").stop().animate({scrollTop:$(".profilesection").offset().top}, 1000);    
        });
        $(".portfoliobtn").click(function(){
            $("html, body").stop().animate({scrollTop:$(".fullbody").offset().top}, 1000);    
        });
        $(".skillbtn").click(function(){
            $("html, body").stop().animate({scrollTop:$(".footerline").offset().top}, 1000);    
        });
//        메뉴 스크롤 밑줄
        $(document).scroll(function(){
        var windowtop = $(window).scrollTop();
        if(windowtop < $(".profilesection").offset().top){
            $(".mainbtn").addClass("menuon");
        }    
        if(windowtop >= $(".profilesection").offset().top -70){
            $(".menuright>div").removeClass("menuon");
            $(".profilebtn").addClass("menuon");
            }else{
                $(".profilebtn").removeClass("menuon")            
        }
        if(windowtop >= $(".fullbody").offset().top -70){
            $(".menuright>div").removeClass("menuon");
            $(".portfoliobtn").addClass("menuon");
            }else{
                $(".portfoliobtn").removeClass("menuon")            
        }
        if(windowtop >= $(".footerline").offset().top -800){
            $(".menuright>div").removeClass("menuon");
            $(".skillbtn").addClass("menuon");
            }else{
                $(".skillbtn").removeClass("menuon")            
            }        
        });
//        프로필사진 무브
        $(document).on("mousemove",function(e) {
            var card = $(".profilephoto");
            var ax = -($(window).innerWidth()/2- e.pageX)/100;
            var ay = ($(window).innerHeight()/2- e.pageY)/100;
            card.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);");
        });
});











