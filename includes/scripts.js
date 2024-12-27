// JavaScript Document
$(document).ready(function(){
	
	// top banner functions 
	var bannerChild=$('#topBanner .bannerSlide').length;
	var bannerCounter=1;
	$('#topBanner .bannerSlide:first-child').fadeIn(500);
	setInterval(function(){
		if(bannerCounter>=bannerChild){
			bannerCounter=0;	
		}
			bannerCounter++;
			$('#topBanner .bannerSlide').fadeOut(500);
			$('#topBanner .bannerSlide:nth-child('+bannerCounter+')').fadeIn(500);
	},5000);
	
	// View Big Image
	$('.portfolioGrid button').click(function(){
		var imgSrc=$(this).parent().parent().find('img').attr('src');
		var imgAlt=$(this).parent().parent().find('img').attr('alt');
		$('#blackBack').fadeIn(600);
		$('#blackBack section').html('<img src="'+imgSrc+'" alt="'+imgAlt+'">');
		$('html,body').css('overflow','hidden').css('scroll-behavior','auto');
		$(document).scrollTop(0);
	});
	$('#blackBackBtn').click(function(){
		$('#blackBack').fadeOut(600);
		$('html,body').css('overflow','visible').css('scroll-behavior','smooth');
	});
	
});


