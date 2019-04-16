$(document).ready(function(){
    $("#fullpage").fullpage({
				anchors:["1st","2st","3st","4st"],
				menu:"#topMenu",
					'afterLoad':function(anchorsLink,index){
                        if(index==1){new WOW().init();}
						if(index==2){
							wow = new WOW({offset: -1200,}); wow.init();}
                        if(index==3){
							wow = new WOW({offset: -2400,}); wow.init();}
                        if(index==4){
							wow = new WOW({offset: -4000,}); wow.init();}
					}
			});
});

//$(document).ready(function(){
//          var a = $("#imghover").attr("alt");
//          $(this).hover(function(){
//              console.log("a"+a);
//          $("#imghover").attr("src", a+"c.jpg");      
//        });
//          $("#imghover").mouseleave(function(){
//          $("#imghover").attr("src", a+".jpg"); 
//        });
//});

$(document).ready(function(){
    $("#bars").click(function(){
        $("#mmenu").stop().animate({left:"0"},300);
    });
    $("#close").click(function(){
        $("#mmenu").stop().animate({left:"-100%"},300);
    });
})
















