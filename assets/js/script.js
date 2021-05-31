$(function(){

	$('.back-top').on('click', function(){
		$('html, body').animate({scrollTop:0}, 'slow'); //slow, medium, fast
	});

	$('nav a, .banner a, .section-aboutus a, .section-price a').on('click', function(e){
		e.preventDefault();
		let id = $(this).attr('href'),
			targetOffSet = $(id).offset().top;

		$('html, body').animate({scrollTop: targetOffSet}, 'slow');
	});

	$('.menu-opener').on('click', function(){

		if ($('nav').width() == 0) {
			$('nav').css('display', 'block');
			$('nav').animate({width:'80vw'}, 'medium');
		} else {
			$('nav').animate({width:'0vw'}, 'medium');
		}
		
	});

	// Passar página Equipe no Computador 
	$('#p1-pc').on('click', function(){
		$('#s1').show();
		$('#s2').show();
		$('#s3').show();
		$('#s4').hide();
		$('#s5').hide();
		$('.section-team').attr('style', 'width:880px;');
		$(this).attr('class', 'pointer pc active');
		$('#p2-pc').attr('class', 'pointer pc');
	});

	$('#p2-pc').on('click', function(){
		$('#s1').hide();
		$('#s2').hide();
		$('#s3').hide();
		$('#s4').show();
		$('#s5').show();
		$('.section-team').attr('style', 'width:580px;');
		$(this).attr('class', 'pointer pc active');
		$('#p1-pc').attr('class', 'pointer pc');
	});

	//Passar página de equipe no tablet
	$('#p1-tb').on('click', function(){
		$('#s1').show();
		$('#s2').show();
		$('#s3').hide();
		$('#s4').hide();
		$('#s5').hide();
		$('.section-team').attr('style', 'width:580px;');
		$(this).attr('class', 'pointer tb active');
		$('#p2-tb').attr('class', 'pointer tb');
		$('#p3-tb').attr('class', 'pointer tb');
	});

	$('#p2-tb').on('click', function(){
		$('#s1').hide();
		$('#s2').hide();
		$('#s3').show();
		$('#s4').show();
		$('#s5').hide();
		$('.section-team').attr('style', 'width:580px;');
		$(this).attr('class', 'pointer tb active');
		$('#p1-tb').attr('class', 'pointer tb');
		$('#p3-tb').attr('class', 'pointer tb');
	});

	$('#p3-tb').on('click', function(){
		$('#s1').hide();
		$('#s2').hide();
		$('#s3').hide();
		$('#s4').hide();
		$('#s5').show();
		$('.section-team').attr('style', 'width:280px;');
		$(this).attr('class', 'pointer tb active');
		$('#p1-tb').attr('class', 'pointer tb');
		$('#p2-tb').attr('class', 'pointer tb');
	});

	// Passar página de equipe no Celular
	$('#p1-cl').on('click', function(){
		$('#s1').show();
		$('#s2').hide();
		$('#s3').hide();
		$('#s4').hide();
		$('#s5').hide();
		$(this).attr('class', 'pointer cl active');
		$('#p2-cl').attr('class', 'pointer cl');
		$('#p3-cl').attr('class', 'pointer cl');
		$('#p4-cl').attr('class', 'pointer cl');
		$('#p5-cl').attr('class', 'pointer cl');
	});

	$('#p2-cl').on('click', function(){
		$('#s1').hide();
		$('#s2').show();
		$('#s3').hide();
		$('#s4').hide();
		$('#s5').hide();
		$(this).attr('class', 'pointer cl active');
		$('#p1-cl').attr('class', 'pointer cl');
		$('#p3-cl').attr('class', 'pointer cl');
		$('#p4-cl').attr('class', 'pointer cl');
		$('#p5-cl').attr('class', 'pointer cl');
	});

	$('#p3-cl').on('click', function(){
		$('#s1').hide();
		$('#s2').hide();
		$('#s3').show();
		$('#s4').hide();
		$('#s5').hide();
		$(this).attr('class', 'pointer cl active');
		$('#p1-cl').attr('class', 'pointer cl');
		$('#p2-cl').attr('class', 'pointer cl');
		$('#p4-cl').attr('class', 'pointer cl');
		$('#p5-cl').attr('class', 'pointer cl');
	});

	$('#p4-cl').on('click', function(){
		$('#s1').hide();
		$('#s2').hide();
		$('#s3').hide();
		$('#s4').show();
		$('#s5').hide();
		$(this).attr('class', 'pointer cl active');
		$('#p1-cl').attr('class', 'pointer cl');
		$('#p2-cl').attr('class', 'pointer cl');
		$('#p3-cl').attr('class', 'pointer cl');
		$('#p5-cl').attr('class', 'pointer cl');
	});

	$('#p5-cl').on('click', function(){
		$('#s1').hide();
		$('#s2').hide();
		$('#s3').hide();
		$('#s4').hide();
		$('#s5').show();
		$(this).attr('class', 'pointer cl active');
		$('#p1-cl').attr('class', 'pointer cl');
		$('#p2-cl').attr('class', 'pointer cl');
		$('#p3-cl').attr('class', 'pointer cl');
		$('#p4-cl').attr('class', 'pointer cl');
	});

});