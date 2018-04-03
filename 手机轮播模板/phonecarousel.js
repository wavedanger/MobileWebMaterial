window.onload=function(){
	setInterval(function(){
		var idx=$(".carousel-inner .active").index();
		$("#myCarousel ol li").removeClass("active");
		$("#myCarousel ol li").eq(idx).addClass("active");
	},1);
	$("#myCarousel ol li").click( function () {
	$("#myCarousel ol li").removeClass("active");
	$(this).addClass("active");
	});
}