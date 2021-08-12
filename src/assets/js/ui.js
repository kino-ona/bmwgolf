
function subMenuShow(set){
	var subD = $(set).next('.subdepth');

	if(subD.css("display") == "none") {
		$(set).addClass('active');
		$('.mtop_navi .navi').css('z-index', 1);
		$(set).next('.subdepth').slideDown();
		$('body').css('overflow', 'hidden');
	}else{
		$(set).removeClass('active');
		$(set).next('.subdepth').slideUp();
		$('body').css('overflow', 'auto');
		$('.mtop_navi .navi').css('z-index', 0);
	}
}

$(document).ready(function() {

	$('.mo_menu .mbtn').click(function(){
		$('body').css('overflow', 'auto');
		$(this).toggleClass('collapsed');
		$('.header').toggleClass('nav-on');
		$('.mtop_navi .navi li a').removeClass('active');
		$('.subdepth').css('display', 'none')

		if($('.header').hasClass('nav-on')){
			$('body').css('overflow', 'hidden');
			// $('.header').css('z-index', 1001);
			$('#wrap').animate({
				'padding-top': 0
			}, 100);
			$('.header').animate({
				'top': 0,
			}, 150);
		}
	});

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
		if($(window).width() < 1185){
			if (st > 1){
				$('.header').addClass('fixed');
				// $('.header').css('z-index', 1000);
			}else{
				$('.header').removeClass('fixed');
				$('.header').css('z-index', 1001);
			}

		}else {
			if (st > 1){
				$('.header .logo').addClass('scroll');
			}else{
				$('.header .logo').removeClass('scroll');
			}
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
					// $(this).parents('.logolist:nth-child(5n)').find('.partn_info').css('top', parninfoH + boxH);
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

// ************
// top menu
// ************
function topNavi(pagenm){
	$('.top_navi .navi li').removeClass('bullet_active');
	if(pagenm == null) {
		$('.top_navi .navi li').eq(0).addClass('bullet_active');
	}else {
		$('.top_navi .navi li').eq(pagenm).addClass('bullet_active');
	}
	$.fn.makeNavbar = function() {
		var $this = this;
		$this.find('li').css('list-style', 'none');
		return $this;
	}
	$.fn.hoverline = function(options) {
		var settings = $.extend({
			'start': '1',
			'speed': '200',
		}, options);
		var $hoverline = $('<div>');
		$hoverline.attr('class', 'hoverline');
		this.each(function() {
			$this = $(this);
			function moveHover() {
				$link = $(this);
				$(this).parent().parent().find('.hoverline').stop().animate({
					'left': $link.position().left,
					'width': $link.width()+1,
				}, speed);
			}
			function clickedItem() {
				$(this).parent().parent().parent().find('li.bullet_active').removeClass('bullet_active');
				$(this).addClass('bullet_active');
			}
			function leaveHover() {
				$link = $(this).find('li.bullet_active');
				$(this).find('.hoverline').stop().animate({
					'left': $link.position().left,
					'width': $link.width()+1,
				}, speed);
			}
			if($('.top_navi .hoverline').length > 1) $('.hoverline').remove();
			$this.append($hoverline.clone());
			$hoverline = $this.find('.hoverline');
			var speed = parseInt(settings.speed);
			$this.find('li').bind('click', clickedItem);
			$this.find('li').bind('mouseenter', moveHover);
			$this.bind('mouseleave', leaveHover);
			$this.trigger('mouseleave');
		});
		return this;
	};
	$('.header .top_navi .navi').makeNavbar();
	$('.header .top_navi .navi').hoverline();
}
// if ($('.header .top_navi').length > 0) {
	// 	topNavi();
	// $('.header .top_navi .navi').makeNavbar();
	// $('.header .top_navi .navi').hoverline();
// }

function subNavi(pagenm){
	$('.sub_title .sub_navi li').removeClass('bullet_active');
	$.fn.makeNavbar2 = function() {
		var $this = this;
		$this.find('li').css('list-style', 'none');
		return $this;
	}
	$.fn.hoverline2 = function(options) {
		var settings = $.extend({
			'start': '0',
			'speed': '200',
		}, options);
		var $hoverline = $('<div>');
		$hoverline.attr('class', 'hoverline2');
		this.each(function() {
			$this = $(this);
			function moveHover() {
				$link = $(this);
				if($link.index() > 0){
					$(this).parent().parent().find('.hoverline2').stop().show().animate({
						'left': $link.position().left,
						'width': $link.width()+1,
					}, speed);
				}
			}
			function clickedItem() {
				$(this).parent().parent().parent().find('li.bullet_active').removeClass('bullet_active');
				$(this).addClass('bullet_active');
			}
			function leaveHover() {
				$link = $(this).find('li.bullet_active');
				if($link.index() == 0){
					$('.hoverline2').hide();
				}else{
					$(this).find('.hoverline2').stop().animate({
						'left': $link.position().left,
						'width': $link.width()+1,
					}, speed);
				}
			}
			if($('.sub_title .hoverline2').length > 1) $('.hoverline2').remove();
			$this.append($hoverline.clone());
			$hoverline = $this.find('.hoverline2');
			var speed = parseInt(settings.speed);
			$this.find('li').bind('click', clickedItem);
			$this.find('li').bind('mouseenter', moveHover);
			$this.bind('mouseleave', leaveHover);
			$this.trigger('mouseleave');
		});
		return this;
	};
	$('.sub_title .sub_navi li').eq(pagenm).addClass('bullet_active');
	if($(window).width() > 768) {
		$('.sub_title .sub_navi').makeNavbar2();
		$('.sub_title .sub_navi').hoverline2();
	}
}

if($(window).width() < 769) {
	if($('.mobile.subnavi').length > 0) {
		var subtParnt = $('.mobile.subnavi');
		var titClk = $('.mobile.subnavi').find('h1');
		var subtTop = $('.sub_cont').position().top;

		titClk.on('click', function(e) {
			if(titClk.parents(subtParnt).find('.sub_menu').hasClass('show')){
				$('.sub_menu').removeClass('show');
			}else {
				if(titClk.parents(subtParnt).hasClass('fixed')){
					titClk.parents(subtParnt).find('.sub_menu').addClass('show', 200, 'linear');
				}else{
					$('.header').css({
						'top' : '-100%'
					});
					$('html, body').stop().animate({
            scrollTop: subtTop - 300
	        }, 300);
					$(subtParnt).addClass('fixed');
					titClk.parents(subtParnt).find('.sub_menu').addClass('show');
				}
			}
		});
		$(window).scroll(function(e) {
			$(subtParnt).find('.sub_menu').removeClass('show', 200, 'linear');
		});
	}
}

var lastSt = 0;
$(window).scroll(function(e) {
	var st = $(this).scrollTop();
	var winW = $(window).width();
	var winH = $(window).height();

	if($('.mobile.subnavi').length > 0){
		var subT = $('.mobile.subnavi').position().top;
		var subContT = $('.sub_cont').position().top;
		var headT = $('.header').height();

		if (st > lastSt){
			if(st >= (subT + 0)) {
				$('.mobile.subnavi').addClass('fixed')
			}
			if(st >= headT * 2 && st <= (headT * 2 + 200)) {
				$('.header').css({
					'top' : '-' + st/3.5 + 'px',
					'z-index' : 999
				});
			}
		} else {
			if(st <= subContT - 200) {
				$('.mobile.subnavi').removeClass('fixed')
			}
			if(st <= headT * 1.5) {
				$('.header').css({
					'top' : '-' + st/3.0 + 'px'
				});
			}
		}// up
	}
	lastSt = st;
});
