
/*!
 * c2-accordion
 * https://github.com/TheC2Group/accordion
 * @version 2.7.1
 * @license MIT (c) The C2 Group (c2experience.com)
 *
 * 해제 : defaultAcc.destroy();
 */
var Accordion=function(t){"use strict";t="default"in t?t.default:t;var e=0,a={item:".item",target:".acco_head",control:".acco_head",panel:".acco_panel",allowMultiple:!0,attribute:"data-status",expanded:"expanded",contracted:"contracted",prefix:"uiAccor-",transition:"height .3s",transitionSupport:!0,setFocus:"none",hashEnabled:!1},i=function(t){var e=this.items[t];e.$el.removeAttr("style"),e.isExpanded?function(t){var e=this.opts.setFocus;switch(e){case"item":t.el.focus();break;case"panel":case"target":case"control":t[e].focus();break;case"first":t.$panel.find("a, :input").first().each(function(){this.focus()})}}.call(this,e):e.$panel.attr("aria-hidden","true"),e.inTransition=!1},n=function(t){var e=this.items[t];if(!e.isExpanded){var a=e.$control.outerHeight();e.inTransition||(e.$el.height(a),e.el.getBoundingClientRect(),e.el.style.transition=this.opts.transition,e.inTransition=!0),e.$el.attr(this.opts.attribute,this.opts.expanded),e.$target.attr("aria-expanded","true"),this.opts.allowMultiple||e.$target.attr("aria-selected","true"),e.$panel.attr("aria-hidden","false");var i=e.$panel.outerHeight();this.opts.transitionSupport&&e.$el.height(a+i),e.isExpanded=!0,"target"===this.opts.setFocus&&e.target.focus()}},r=function(t){var e=this.items[t];if(e.isExpanded){var a=e.$control.outerHeight();if(!e.inTransition){var n=e.$panel.outerHeight();e.$el.height(a+n),e.el.getBoundingClientRect(),e.el.style.transition=this.opts.transition,e.inTransition=!0}e.$el.attr(this.opts.attribute,this.opts.contracted),e.$target.attr("aria-expanded","false"),this.opts.allowMultiple||e.$target.attr("aria-selected","false"),this.opts.transitionSupport&&e.$el.height(a),e.isExpanded=!1,this.opts.transitionSupport||i.call(this,t)}},s=function(t){var e=this;this.items.forEach(function(a,i){i!==t&&a.isExpanded&&r.call(e,i)})},o=function(t){this.items[t].isExpanded?r.call(this,t):(this.opts.allowMultiple||s.call(this,t),n.call(this,t))},l=function(){var e=this;this.items.forEach(function(t,a){t.$target.on("click",function(t){e._enabled&&(t.preventDefault(),o.call(e,a))}),t.$el.on("transitionend",function(t){e._enabled&&t.target===t.delegateTarget&&i.call(e,a)}),t.$target.on("keydown",function(t){e._enabled&&function(t,e){return 13===t.which||32===t.which?(t.preventDefault(),void o.call(this,e)):35===t.which?(t.preventDefault(),void this.items[this.items.length-1].target.focus()):36===t.which?(t.preventDefault(),void this.items[0].target.focus()):37===t.which||38===t.which?(t.preventDefault(),void function(t){var e=t-1;e<0&&(e=this.items.length-1),this.items[e].target.focus()}.call(this,e)):39===t.which||40===t.which?(t.preventDefault(),void function(t){var e=t+1;e>=this.items.length&&(e=0),this.items[e].target.focus()}.call(this,e)):void 0}.call(e,t,a)})}),t(window).on("hashchange",function(){e.opts.hashEnabled&&e._enabled&&c.call(e)})},c=function(){var t=this;if(document.location.hash){var e=document.location.hash.split("#")[1];t.items.forEach(function(a,i){a.el.dataset.hash===e&&o.call(t,i)})}},h=function(i,n){e+=1,this.count=e,this.$el=t(i),this.opts=t.extend({},a,n),this._enabled=!0,this.$el.attr("role")||this.$el.attr("role","tablist"),this.opts.allowMultiple&&this.$el.attr("aria-multiselectable","true"),this.items=function(){var e=this;return t.map(this.$el.find(this.opts.item),function(a,i){var n=t(a),r=n.find(e.opts.target),s=e.opts.target===e.opts.control?r:n.find(e.opts.control),o=n.find(e.opts.panel);r.attr("role")||r.attr("role","tab"),o.attr("role")||o.attr("role","tabpanel");var l=n.attr(e.opts.attribute),c=l===e.opts.expanded;switch(l||n.attr(e.opts.attribute,c?e.opts.expanded:e.opts.contracted),r.attr("aria-expanded",c),e.opts.allowMultiple||r.attr("aria-selected",c),o.attr("aria-hidden",!c),e.opts.setFocus){case"item":if(n.attr("tabindex"))return;n.attr("tabindex","-1");break;case"panel":if(o.attr("tabindex"))return;o.attr("tabindex","-1");break;case"target":if(r.attr("tabindex"))return;r.attr("tabindex","0");break;case"control":if(s.attr("tabindex"))return;s.attr("tabindex","-1")}var h=r.attr("id");return h?r.attr("data-original-id",!0):(h=e.opts.prefix+e.count+"-"+(i+1),r.attr("id",h)),o.attr("aria-labelledby")?o.attr("data-original-labelledBy",!0):o.attr("aria-labelledby",h),{$el:n,el:a,$target:r,target:r[0],$control:s,control:s[0],$panel:o,panel:o[0],isExpanded:c,inTransition:!1}})}.call(this),l.call(this),this.opts.hashEnabled&&c.call(this)};return h.prototype.activate=o,h.prototype.expand=n,h.prototype.contract=r,h.prototype.contractAll=s,h.prototype.enable=function(){return this._enabled=!0,this},h.prototype.disable=function(){return this._enabled=!1,this},h.prototype.destroy=function(){(function(){this._enabled=!1}).call(this)},h}(jQuery);

/*!
 * c2-event-handler
 * https://github.com/TheC2Group/event-handler
 * @version 2.5.2 (c) The C2 Group (c2experience.com)
 * @license MIT
 */
var eventHandler=function(){"use strict";var t=function(e,n){var i=this;"string"==typeof e&&e.length&&void 0!==n&&(e.indexOf(" ")>-1?e.split(" ").forEach(function(e){t.call(i,e,n)}):(this._events=this._events||{},this._events[e]=this._events[e]||[],this._events[e].push(n)))},e=function(t,n){var i=this;if("string"==typeof t&&t.length)if(t.indexOf(" ")>-1)t.split(" ").forEach(function(t){e.call(i,t,n)});else if(this._events=this._events||{},t in this._events!=!1)if(void 0!==n){var s=this._events[t].indexOf(n);s>-1&&(1===this._events[t].length?delete this._events[t]:this._events[t].splice(s,1))}else delete this._events[t]},n=function(t){for(var e=this,i=arguments.length,s=Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];var f=t.lastIndexOf(":");f>-1&&n.call.apply(n,[this,t.substring(0,f)].concat(s)),this._events=this._events||{},t in this._events!=!1&&this._events[t].forEach(function(t){t.apply(e,s)})},i=function(){},s=i.prototype;s.on=t,s.off=e,s.emit=n,s.bind=t,s.unbind=e,s.trigger=n;var o=function(s){return 0===arguments.length?new i:("function"==typeof s&&(s.prototype.on=t,s.prototype.off=e,s.prototype.emit=n),"object"==typeof s&&(s.on=t,s.off=e,s.emit=n),s)};return o.EventConstructor=i,o}();


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

	if($('.header .logo').length > 0) {
		$('.header .logo').find('a').attr('href', '/');
	}

	if($('.tournm_cont .sched').length > 0) {
		var delay = setTimeout(function () {
			$('.sched li:nth-child(1)').find('.desc').html('<p class="desc">선수 도착</p>')
			$('.sched li:nth-child(2)').find('.desc').html('<p class="desc">공식 연습일<span class="br2"></span> | 포토콜</p>')
			$('.sched li:nth-child(3)').find('.desc').html('<p class="desc">프로암 대회<span class="br2"></span> | 공식 기자회견</p>')
			clearTimeout(delay);
		}, 30);
	}

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
		}, 700);
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
				if($(this).parents('.partn').hasClass('type01')){
					$(this).parents('.logolist:nth-child(3)').find('.partn_info').css('top', boxH*2 + 45);
				}
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
					$(this).parents('.logolist:nth-child(8)').find('.partn_info').css('top', boxH*2 + 45);
				}
			}
			if($(window).width() <= 1024){
				if($(this).parents('.partn').hasClass('type01')){
					$(this).parents('.logolist:nth-child(3)').find('.partn_info').css('top', 0);
				}
				if($(this).parents('.partn').hasClass('type03')){
					$(this).parents('.logolist').find('.partn_info').css('top', boxH);
					$(this).parents('.logolist:nth-child(4n)').find('.partn_info').css('top', boxH*2 + 15);
					$(this).parents('.logolist:nth-child(5)').find('.partn_info').css('top', boxH*2 + 15);
					$(this).parents('.logolist:nth-child(6)').find('.partn_info').css('top', boxH*2 + 15);
					$(this).parents('.logolist:nth-child(7)').find('.partn_info').css('top', boxH*2 + 105);
					$(this).parents('.logolist:nth-child(8)').find('.partn_info').css('top', boxH*2 + 105);
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

$('.accord_wrap').each(function () { // default
	if (!$(this).hasClass('manualfn')) {
		if ($(this).hasClass('multiple')) {
			defaultAcc = new Accordion($(this), {
				allowMultiple: true,
				transition: 'height .0s',
				transitionSupport: true,
				setFocus: 'first'
			});
		} else {
			defaultAcc = new Accordion($(this), {
				allowMultiple: false,
				transition: 'height .0s',
				transitionSupport: true,
				setFocus: 'first'
			});
		}
	}
});

var delay = setTimeout(function () {
	if($('.main_cont .keyvisual .conts .tit:contains("2021"), .main_cont .noti .boxs > dd .tit:contains("2021")')) {
		$('.main_cont .keyvisual .conts .tit, .main_cont .noti .boxs > dd .tit').each(function() {
			var text = $(this).text();
			$(this).text(text.replace('2021', ''));
		});
		$('title').each(function() {
			var text = $(this).text();
			$(this).text(text.replace('2021', ''));
		});
	}

	// if($('.partners_cont .desc:contains("아니쉬 카푸어(Anish Kapoor),")')) {
	// 	$('.partners_cont .desc').each(function() {
	// 		var text = $(this).text();
	// 		$(this).text(text.replace('아니쉬 카푸어(Anish Kapoor),', ''));
	// 	});
	// }
	// if($('.partners_cont .desc:contains("유일하게")')) {
	// 	$('.partners_cont .desc').each(function() {
	// 		var text = $(this).text();
	// 		$(this).text(text.replace('유일하게', ''));
	// 	});
	// }

	clearTimeout(delay);
}, 50);



if($('#pop_noti').length > 0) {
	var tmp ="";
	tmp = tmp +"<div class=layer_content>"
	tmp = tmp +"<button onclick=layerClose('pop_noti');return false; class='layer_close manualfn'>닫기</button>"
	tmp = tmp +"  <div class=desktop>"
	tmp = tmp +"    <p class=title>BMW 레이디스 챔피언십 2021 <span class=br></span>미디어 신청 안내</p>"
	tmp = tmp +"    <dl class=type1>"
	tmp = tmp +"      <dt>취재신청</dt>"
	tmp = tmp +"      <dd>LPGA 공식 신청 사이트 內 <span class=br></span>신청 페이지에 직접 입력</dd>"
	tmp = tmp +"    </dl>"
	tmp = tmp +"    <dl class='type1 last'>"
	tmp = tmp +"      <dt>기한</dt>"
	tmp = tmp +"      <dd>9월 23일~10월 6일까지</dd>"
	tmp = tmp +"    </dl>"
	tmp = tmp +"    <div class=inb>"
	tmp = tmp +"      <p>대회 일시 및 주요 일정</p>"
	tmp = tmp +"      <dl class='idl first'>"
	tmp = tmp +"        <dt>10/20(수)</dt>"
	tmp = tmp +"        <dd><p>공식 기자회견</p></dd>"
	tmp = tmp +"      </dl>"
	tmp = tmp +"      <dl class=idl>"
	tmp = tmp +"        <dt>10/21(목)</dt>"
	tmp = tmp +"        <dd><p>1R</p></dd>"
	tmp = tmp +"      </dl>"
	tmp = tmp +"      <dl class=idl>"
	tmp = tmp +"        <dt>10/22(금)</dt>"
	tmp = tmp +"        <dd><p>2R</p></dd>"
	tmp = tmp +"      </dl>"
	tmp = tmp +"      <dl class=idl>"
	tmp = tmp +"        <dt>10/23(토)</dt>"
	tmp = tmp +"        <dd><p>3R</p></dd>"
	tmp = tmp +"      </dl>"
	tmp = tmp +"      <dl class='idl last'>"
	tmp = tmp +"        <dt>10/24(일)</dt>"
	tmp = tmp +"        <dd><p>FR<br>우승자 인터뷰</p></dd>"
	tmp = tmp +"      </dl>"
	tmp = tmp +"    </div>"
	tmp = tmp +"    <div class=inb>"
	tmp = tmp +"      <dl class=type2>"
	tmp = tmp +"        <dt>대회 장소</dt>"
	tmp = tmp +"        <dd>"
	tmp = tmp +"          <p>LPGA 인터내셔널 부산 <span class=br></span>(부산 기장군 일광면 차양길 26)</p>"
	tmp = tmp +"          <span></span>"
	tmp = tmp +"        </dd>"
	tmp = tmp +"      </dl>"
	tmp = tmp +"      <dl class='type2 last'>"
	tmp = tmp +"        <dt>취재 지원 사항</dt>"
	tmp = tmp +"        <dd>"
	tmp = tmp +"          <div class=line>"
	tmp = tmp +"            <p class=fi>숙박</p>"
	tmp = tmp +"            <p>"
	tmp = tmp +"              <span>10월 20일~24일 4박 <span class=br></span>(매체당 1실, 20일 체크인 → 24일 체크아웃)</span>"
	tmp = tmp +"            </p>"
	tmp = tmp +"          </div>"
	tmp = tmp +"          <div>"
	tmp = tmp +"            <p class=fi>교통</p>"
	tmp = tmp +"            <p>"
	tmp = tmp +"              <span>10월 20일~24일 內 [서울역 ↔ 울산역] <span class=br></span>왕복 KTX 티켓 + 대회장 셔틀</span>"
	tmp = tmp +"              <span>[호텔 ↔ 대회장] 왕복 셔틀</span>"
	tmp = tmp +"            </p>"
	tmp = tmp +"          </div>"
	tmp = tmp +"          <div>"
	tmp = tmp +"            <p class=fi>식사</p>"
	tmp = tmp +"            <p>"
	tmp = tmp +"              <span>조식 호텔 제공 / <span class=br></span>중식 미디어 센터에서 제공</span>"
	tmp = tmp +"            </p>"
	tmp = tmp +"          </div>"
	tmp = tmp +"        </dd>"
	tmp = tmp +"      </dl>"
	tmp = tmp +"    </div>"
	tmp = tmp +"    <div class=info>"
	tmp = tmp +"      <ul>"
	tmp = tmp +"        <li><p>상기 일정 外 추가 지원은 불가합니다.</p></li>"
	tmp = tmp +"        <li><p>미디어 공식 호텔 및 객실 배정은 접수완료 후 공지 예정</p></li>"
	tmp = tmp +"        <li><p>자가 이동 시, VIP 주차장 내 미디어 전용 주차장 이용 (별도 PASS 발급)</p></li>"
	tmp = tmp +"        <li><p>숙박 및 교통 신청 : 기간 內 이메일로 신청 (<span class=blu><a href='mailto:blc@wellcompr.com'>blc@wellcompr.com</a></span>)</p></li>"
	tmp = tmp +"      </ul>"
	tmp = tmp +"    </div>"
	tmp = tmp +"    <div class=btnarea>"
	tmp = tmp +"      <a href=http://www.lpgamediacredentials.com class='btn_normal btn_blue' target=_blank  onclick=layerClose('pop_noti');>취재 신청 바로가기</a>"
	tmp = tmp +"    </div>"
	tmp = tmp +"  </div>"
	tmp = tmp +" </div>"

	$("#pop_noti").find('.layer_wrap').html(tmp);

	layerOpen('pop_noti');
}