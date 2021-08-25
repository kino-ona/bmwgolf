
$(document).ready(function() {
	if($('.video_wrap').length > 0) {
		$('.video_wrap').find('video').get(0).pause();
		setTimeout(function() {
			if($('.video_wrap').hasClass('on')){
				$('.video_wrap.on').find('video').get(0).play();
			}
		}, 300);
	}

	var winH = $(this).height();
	var winW = $(this).width();
	if($('.keyvisual .video_wrap').length> 0) {
		if(winW > 1680){
			$('.keyvisual .video_wrap').css('height', winW/50 + 'vw');
		}else{
			$('.keyvisual .video_wrap').css('height', winW/36.5 + 'vw');
			if(winW < 768){
				$('.keyvisual .video_wrap').css('min-height', winW + 'px');
			}
		}

		if(winW > 968){
			$('.keyvisual').removeClass('mobile')
			$('.keyvisual').find('.video_wrap.mobile').removeClass('on')
			$('.keyvisual').addClass('desktop')
			$('.keyvisual').find('.video_wrap.desktop').addClass('on')
		}else{
			$('.keyvisual').removeClass('desktop')
			$('.keyvisual').find('.video_wrap.desktop').removeClass('on')
			$('.keyvisual').addClass('mobile')
			$('.keyvisual').find('.video_wrap.mobile').addClass('on')
		}
	}

	// ************
	// layer popup control
	// ************
	var htmlbody = $('html'),
		layerbody = $('.layer_body'),
		layerHide = $('.layer_overlay, .layer_close'),
		layerWrap = $('.layer_wrap');
		layerOverlay = $('.layer_overlay');

	// layer default Show
	$('.layer_open').each(function(){
		if(!$(this).hasClass('menualfn')){
			$(this).on('click', function(e) {
				e.preventDefault();
				htmlbody.addClass('no-scroll');
				$(this).parents(layerbody).addClass('is-visible');
				var layerID = $('#' + $(this).attr('aria-labelledby'));
				layerID.attr({
					'aria-hidden': 'false',
					'open': 'true',
					'tabindex': '0'
				});
			});
		}
	});
	// layer Hide
	layerHide.each(function(){
		$(this).on('click', function(e) {
			e.preventDefault();
			$(this).parents(layerbody).removeClass('is-visible');
			$(this).parents(layerbody).attr('aria-hidden', 'true');
			$(this).parents(layerbody).removeAttr('open tabindex');
			if ($('[role="dialog"].is-visible').length == 0) {
				htmlbody.removeClass('no-scroll');
			}
		});
	});
	$(window).keydown(function(e){
		if (e.keyCode == 27) { // esc
			e.preventDefault();

			htmlbody.removeClass('no-scroll');
			layerbody.removeClass('is-visible');
			layerbody.attr('aria-hidden', 'true');
			layerbody.removeAttr('open tabindex');
		}
	});

	$(window).on('resize', function(){
    var winH = $(this).height();
    var winW = $(this).width();
		if($('.keyvisual .video_wrap').length> 0) {
			if(winW > 1680){
				$('.keyvisual .video_wrap').css('height', winW/50 + 'vw');
			}else{
				$('.keyvisual .video_wrap').css('height', winW/36.5 + 'vw');
				if(winW < 768){
					$('.keyvisual .video_wrap').css('min-height', winW + 'px');
				}
			}
			if(winW > 968){
				$('.keyvisual').removeClass('mobile')
				$('.keyvisual').find('.video_wrap.mobile').removeClass('on')
				$('.keyvisual').addClass('desktop')
				$('.keyvisual').find('.video_wrap.desktop').addClass('on')
			}else{
				$('.keyvisual').removeClass('desktop')
				$('.keyvisual').find('.video_wrap.desktop').removeClass('on')
				$('.keyvisual').addClass('mobile')
				$('.keyvisual').find('.video_wrap.mobile').addClass('on')
			}

			$('.video_wrap').find('video').get(0).pause();
			setTimeout(function() {
				if($('.video_wrap').hasClass('on')){
					$('.video_wrap.on').find('video').get(0).play();
				}
			}, 500);
		}
	});


});
var lastSt = 0;
$(window).scroll(function(e){
	var st = $(this).scrollTop();
	if($('.header .logo').length> 0) {
		if (st > 1){
			$('.header .logo').addClass('scroll');
		}else{
			$('.header .logo').removeClass('scroll');
		}
	}
});

// ************
// layer popup control
// ************
var layerOpen = function(layerId){
	$('html').addClass('no-scroll');
	$('#' + layerId).addClass('is-visible');
	var layerID = $('#' + layerId);
	layerID.attr({
		'aria-hidden': 'false',
		'open': 'true',
		'tabindex': '0'
	});
}
var layerClose = function(layerId){
	$('#' + layerId).removeClass('is-visible');
	$('#' + layerId).attr('aria-hidden', 'true');
	$('#' + layerId).removeAttr('open tabindex');
	if ($('[role="dialog"].is-visible').length == 0) {
		$('html').removeClass('no-scroll');
	}
}

// ************
// video play/pause
// ************
var videoControl = function(){
	$('.video_body').each(function(i) {
		var media = $(this).find('video').get(0);
		var control = $(this).find('.btn_play');

		function controlShow() {
			$(control).animate({'opacity':1});
		}
		function controlHide() {
			$(control).animate({'opacity':0});
		}
		function playPauseMedia() {
			if(media.paused) {
				media.play();
				$(control).addClass('stop');
				// $(this).find('.video_util').removeClass('cover');
			} else {
				media.pause();
				$(control).removeClass('stop');
				// $(this).find('.video_util').addClass('cover');
			}
		}
		if($(control).length > 0) {
			$(control).click(playPauseMedia);
		}
		$(this).on('mouseenter mouseover',controlShow).on('mouseleave',function(){
			if(media.paused == false) {
				controlHide();
			}
		});
		$(this).on('focus',controlShow).on('blur',function(){
			if(media.paused == false) {
				controlHide();
			}
		});
		media.addEventListener('ended',function(){
			$(control).removeClass('stop');
			controlShow();
		});
	});
}

$(document).ready(function() {
	$('.btn').click(function(e) {
		var parninfo = $(this).parents('.logolist').find('.partn_info');
		var parninfoId = $(this).parents('.logolist').find('a').attr('id');
		var boxH = $(this).parents('.logolist').find('.box').height();
		var parninfoH = $(this).parents('.logolist').find('.partn_info').height();

		$('.partn_info').hide();
		$('.sub_cont').css('margin-bottom', 0);
		$('.logolist').css('padding-bottom', 0);

		if ($(this).hasClass('show')) {
			$(this).removeClass('show');
		} else {
			$('.partn_info').hide();
			$('.btn').removeClass('show');
			$(this).addClass('show');
			$(this).parents('.logolist').find('.partn_info').show();
			if($(window).width() > 1024){
				$(this).parents('.logolist').find('.partn_info').css('top', boxH + 45);
				$(this).parents('.logolist').css('padding-bottom', parninfoH + 90);
				if($(this).parents('.partn').hasClass('type02')){
					if($(this).parents('.logolist:nth-child(n+4)')) {
						$(this).parents('.logolist:nth-child(n+4)').find('.partn_info').css('top', boxH*2 + 45);
					}else{
						$(this).parents('.logolist').find('.partn_info').css('top', boxH + 45);
					}
					$(this).parents('.logolist').css('padding-bottom', parninfoH + 90);
				}

				if($(this).parents('.partn').hasClass('type03')){
					$(this).parents('.logolist:nth-child(5n)').find('.partn_info').css('top', boxH*2 + 45);
					$(this).parents('.logolist:nth-child(6)').find('.partn_info').css('top', boxH*2 + 45);
					$(this).parents('.logolist:nth-child(7)').find('.partn_info').css('top', boxH*2 + 45);
				}
			}
			if($(window).width() <= 1024){
				if($(this).parents('.partn').hasClass('type03')){
					$(this).parents('.logolist').find('.partn_info').css('top', boxH);
					$(this).parents('.logolist:nth-child(4n)').find('.partn_info').css('top', boxH*2 + 15);
					$(this).parents('.logolist:nth-child(5)').find('.partn_info').css('top', boxH*2 + 15);
					$(this).parents('.logolist:nth-child(6)').find('.partn_info').css('top', boxH*2 + 15);
					$(this).parents('.logolist').css('padding-bottom', parninfoH + 45);
				}

				$('html, body').animate({
					scrollTop: $('#'+parninfoId).offset().top
				}, 500);
			}
		}
	});
});

$(window).resize(function() {
	if($('.partn_info').length > 0){
		$('.partn_info').hide();
		$('.btn').removeClass('show');
		$('.sub_cont').css('margin-bottom', 0);
		$('.logolist').css('padding-bottom', 0);
	}
});
var lastSt = 0;
$(window).scroll(function(e) {
	var st = $(this).scrollTop();
	var winW = $(window).width();
	var winH = $(window).height();

	if($('.sub_title').length > 0){
		var subT = $('.sub_title').position().top;
		var subContT = $('.sub_head').position().top;
		// console.log(subContT)
		if (st > lastSt){
			if(st >= subT) {
				$('.sub_title').addClass('fixed')
			}
		} else {
			if(st <= subContT) {
				$('.sub_title').removeClass('fixed')
			}
		}// up
	}
	lastSt = st;

});
