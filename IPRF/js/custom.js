$(document).ready(function(){
    $("#fullpage").fullpage({
				anchors:["1st","2st","3st","4st"],
				menu:"#topMenu",
					'afterLoad':function(anchorsLink,index){
                        if(index==1){new WOW().init();}
						if(index==2){
							wow = new WOW({offset: -1000,}); wow.init();}
                        if(index==3){
							wow = new WOW({offset: -2000,}); wow.init();}
                        if(index==4){
							wow = new WOW({offset: -3000,}); wow.init();}
					}
			});
});
$(document).ready(function(){
    $("#bars").click(function(){
        $("#mmenu").stop().animate({left:"0"},300);
    });
    $("#close").click(function(){
        $("#mmenu").stop().animate({left:"-100%"},300);
    });
})