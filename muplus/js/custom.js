$(document).ready(function(){
            var menu = $(".sidebtn>ul>li");
            var contents = $(".section");
            menu.click(function(e){
                e.preventDefault();
                var i = $(this).index();
                var section = contents.eq(i);
                var tt = section.offset().top;
                $("html, body").stop().animate({scrollTop:tt});
                menu.removeClass("btnenter")
                menu.eq(i).addClass("btnenter")
            });
            $(window).scroll(function(){
                var sectiontop = window.pageYOffset;
                var section1 = $("#section1").offset().top;
                var section2 = $("#section2").offset().top;
                var section3 = $("#section3").offset().top;
                var section4 = $("#section4").offset().top;
                var section5 = $("#section5").offset().top;
                var section6 = $("#section6").offset().top;            
                
                if (sectiontop >= section1){
                    menu.removeClass("btnenter");
                    menu.eq(0).addClass("btnenter");
                }
                if (sectiontop >= section2){
                    menu.removeClass("btnenter");
                    menu.eq(1).addClass("btnenter");
                }
                if (sectiontop >= section3){
                    menu.removeClass("btnenter");
                    menu.eq(2).addClass("btnenter");
                }
                if (sectiontop >= section4){
                    menu.removeClass("btnenter");
                    menu.eq(3).addClass("btnenter");
                }
                if (sectiontop >= section5){
                    menu.removeClass("btnenter");
                    menu.eq(4).addClass("btnenter");
                }
                if (sectiontop == section6){
                    menu.removeClass("btnenter");
                    menu.eq(5).addClass("btnenter");
                }
                contents.each(function(index){
//                    var i=$(this).index();
                    if (sectiontop >= $(this).offset().top){
                        menu.removeClass("btnenter")
                        menu.eq(index).addClass("btnenter");
                    }
                });
            });
    var mapbtn = $(".mapbtn");
    mapbtn.click(function(){
        mapbtn.stop().animate({'left':'100%'},400,function(){
           mapbtn.css({'width':'0'});
        });
        $(".googlemaps").stop().animate({'left':'100%'},400,function(){
            (".googlemaps").css({'display':'none'});    
        });
        $(".contactinput").stop().animate({'left':'0'},400);
        $(".contacttext").stop().animate({'left':'50%'},400);
        $(".closbtn").stop().delay(300).animate({'width':'60px'},200);
    });
    var closbtn = $(".closbtn");
    closbtn.click(function(){
        mapbtn.stop().animate({'width':'120px'},0.00001,function(){
            mapbtn.stop().animate({'left':'50%'},400);
        });
        $(".googlemaps").stop().animate({'left':'50%'},400,function(){
            $(".googlemaps").css({'left':'', 'display':'block'});
        });
        $(".contactinput").stop().animate({'left':'-44%'},400,function(){
            $(".contactinput").css({'left':''});
        });
        $(".contacttext").stop().animate({'left':'0'},400,function(){
            (".contacttext").css({'left':''});
        });
        $(".closbtn").stop().animate({'width':'0'},100);
    });
    
    
    
    $(".logopoint1").mouseover(function(){
       $(".infobox").css('opacity','0');
       $(".st01").css('opacity','1');
    });
    $(".logopoint2").mouseover(function(){
       $(".infobox").css('opacity','0');
       $(".st02").css('opacity','1');
    });
    $(".logopoint3").mouseover(function(){
       $(".infobox").css('opacity','0');
       $(".st03").css('opacity','1');
    });
    $(".logopoint1, .logopoint2, .logopoint3").mouseleave(function(){
        $(".infobox").css('opacity','0');
        $(".basic").css('opacity','1');
    });
    
    $(".logopoint1, .logopoint2, .logopoint3").mouseover(function(){
       $(".pagebg").addClass("openbg");
    });
    $(".logopoint1, .logopoint2, .logopoint3").mouseleave(function(){
       $(".pagebg").removeClass("openbg");
    });
    
})