/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

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

/*!
* c2-tabs
* https://github.com/TheC2Group/tabs
* @version 2.2.2
* @license MIT (c) The C2 Group (c2experience.com)
*/
var Tabs=function(t,i){"use strict";var a=0,e={tablist:".tab_wrap .tablist",tab:".tablist .tab",panel:".tab_contents .tab_panel",prefix:"uiTabs-",hashEnabled:!1,direction:"horizontal"},n=37,l=39,s=38,r=40,o=function(){var t=this.index-1;t<0&&(t=this.len-1),c.call(this,t)},h=function(){var t=this.index+1;t>=this.len&&(t=0),c.call(this,t)},d=function(t,i){return t.which===n&&"horizontal"===this.opts.direction?(t.preventDefault(),void o.call(this,i)):t.which===l&&"horizontal"===this.opts.direction?(t.preventDefault(),void h.call(this,i)):t.which===s&&"vertical"===this.opts.direction?(t.preventDefault(),void o.call(this,i)):t.which===r&&"vertical"===this.opts.direction?(t.preventDefault(),void h.call(this,i)):void 0},c=function(t){if(t!==this.index){var i=this.index;this.index=t,this.$tabs.eq(i).attr({"aria-selected":!1,tabindex:-1}),this.$panels.eq(i).attr({"aria-hidden":!0,tabindex:-1}),this.$tabs.eq(t).attr({"aria-selected":!0,tabindex:0})[0].focus(),this.$panels.eq(t).attr({"aria-hidden":!1,tabindex:0}),this.emit("update",t)}},b=function(){if(document.location.hash){var t=document.location.hash.split("#")[1],i=this.$tabs.filter('[data-hash="'+t+'"]');i.length>0&&c.call(this,i.index())}},p=function(i,n){a+=1,this.count=a,this.opts=t.extend({},e,n),this.$el=t(i),this.$tablist=this.$el.find(this.opts.tablist),this.$tabs=this.$el.find(this.opts.tab),this.$panels=this.$el.find(this.opts.panel),this._enabled=!0,this.len=this.$tabs.length,this.index=0,function(){var i=this;this.$tablist.attr("role")||this.$tablist.attr("role","tablist"),this.$tabs.each(function(a,e){var n=t(e).attr("id");t(e).attr({role:"tab",tabindex:a===i.index?0:-1,"aria-selected":a===i.index}),n?t(e).attr("data-original-id",!0):t(e).attr({id:i.opts.prefix+i.count+"-"+(a+1)})}),this.$panels.each(function(a,e){var n=t(e).attr("aria-labelledby");t(e).attr({role:"tabpanel",tabindex:a===i.index?0:-1,"aria-hidden":a!==i.index}),n?t(e).attr("data-original-labelledBy",!0):t(e).attr({"aria-labelledby":i.opts.prefix+i.count+"-"+(a+1)})})}.call(this),function(){var i=this;i.$tabs.on("click",function(t){c.call(i,i.$tabs.index(t.currentTarget))}),i.$tabs.on("keydown",function(t){d.call(i,t)}),i.$panels.on("keydown",function(t){t.ctrlKey&&d.call(i,t)}),t(window).on("hashchange",function(){i.opts.hashEnabled&&i._enabled&&b.call(i)})}.call(this),this.opts.hashEnabled&&b.call(this)};return i(p),p.prototype.activate=c,p.prototype.activateNext=h,p.prototype.activatePrevious=o,p.prototype.destroy=function(){(function(){this.$tablist.removeAttr("role"),this.$tabs.each(function(i,a){t(a).attr("id"),t(a).attr("data-original-id")||t(a).removeAttr("id"),t(a).removeAttr("role tabindex aria-selected data-original-id")}),this.$panels.each(function(i,a){t(a).attr("aria-labelledby"),t(a).attr("data-original-labelledBy")||t(a).removeAttr("aria-labelledby"),t(a).removeAttr("role tabindex aria-hidden data-original-labelledBy")})}).call(this),function(){this.$tabs.off("click keydown"),this.$panels.off("keydown"),this._enabled=!1}.call(this)},p}(jQuery,eventHandler);

/*****
  Pinterest Grid Plugin
	http://blog.johnavis.com/blog/828/enhanced-simple-pinterest-style-grid-layout-jquery-plugin/
*****/
!function(t,i,n,o){var e,a,s,c="cardGrid",h={padding_x:10,padding_y:10,no_columns:3,margin_bottom:50,single_column_breakpoint:700};function l(i,n){this.element=i,this.options=t.extend({},h,n),this._defaults=h,this._name=c,this.init()}l.prototype.init=function(){var n,o=this;t(i).resize(function(){clearTimeout(n),n=setTimeout(function(){o.make_layout_change(o)},11)}),o.make_layout_change(o);var e=setTimeout(function(){t(i).resize(),clearTimeout(e)},500)},l.prototype.calculate=function(n){var o=this,c=0,h=t(this.element);h.width();a=t(this.element).children(),s=!0===n?h.width()-o.options.padding_x:(h.width()-o.options.padding_x*o.options.no_columns)/o.options.no_columns,a.each(function(){t(this).css("width",s)}),e=o.options.no_columns,a.each(function(i){var a,h=0,l=0,u=t(this),p=u.prevAll();a=!1===n?i%e:0;for(var r=0;r<e;r++)u.removeClass("c"+r);i%e==0&&c++,u.addClass("gcol"+a),u.addClass("grow"+c),p.each(function(i){t(this).hasClass("gcol"+a)&&(l+=t(this).outerHeight()+o.options.padding_y)}),h=!0===n?0:i%e*(s+o.options.padding_x),u.css({left:h,top:l})}),this.tallest(h),t(i).resize()},l.prototype.tallest=function(i){for(var n,o=[],a=0;a<e;a++){var s=0;i.find(".gcol"+a).each(function(){s+=t(this).outerHeight()}),o[a]=s}n=Math.max.apply(Math,o),i.css("height",n+(this.options.padding_y+this.options.margin_bottom))},l.prototype.make_layout_change=function(n){t(i).width()<n.options.single_column_breakpoint?n.calculate(!0):n.calculate(!1)},t.fn[c]=function(i){return this.each(function(){t.data(this,"plugin_"+c)||t.data(this,"plugin_"+c,new l(this,i))})}}(jQuery,window,document);

/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function b(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;h<g&&(c=f[h],c.search(/^(http|https|ftp):\/\//)===-1&&c.search(":")!==-1);h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||"false"!==e&&e),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function c(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;d<b;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function d(b,c){var d=function(){c(this.src)};}function e(c,d,e){if(this.$element=a(c),"string"==typeof d&&(d=b(d)),e?"string"==typeof e&&(e=b(e)):e={},"string"==typeof d)d=d.replace(/\.\w*$/,"");else if("object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(d[f]=d[f].replace(/\.\w*$/,""));this.settings=a.extend({},g,e),this.path=d;try{this.init()}catch(i){if(i.message!==h)throw i}}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},h="Not implemented";e.prototype.init=function(){var b,e,f=this,g=f.path,i=g,j="",k=f.$element,l=f.settings,m=c(l.position),n=l.posterType;e=f.$wrapper=a("<div>").addClass(l.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":l.bgColor,"background-repeat":"no-repeat","background-position":m.x+" "+m.y}),"object"==typeof g&&(g.poster?i=g.poster:g.mp4?i=g.mp4:g.webm?i=g.webm:g.ogv&&(i=g.ogv)),"detect"===n?d(i,function(a){e.css("background-image","url("+a+")")}):"none"!==n&&e.css("background-image","url("+i+"."+n+")"),"static"===k.css("position")&&k.css("position","relative"),k.prepend(e),"object"==typeof g?(g.mp4&&(j+='<source src="'+g.mp4+'.mp4" type="video/mp4">'),g.webm&&(j+='<source src="'+g.webm+'.webm" type="video/webm">'),g.ogv&&(j+='<source src="'+g.ogv+'.ogv" type="video/ogg">'),b=f.$video=a("<video>"+j+"</video>")):b=f.$video=a('<video><source src="'+g+'.mp4" type="video/mp4"><source src="'+g+'.webm" type="video/webm"><source src="'+g+'.ogv" type="video/ogg"></video>');try{b.prop({autoplay:l.autoplay,loop:l.loop,volume:l.volume,muted:l.muted,defaultMuted:l.muted,playbackRate:l.playbackRate,defaultPlaybackRate:l.playbackRate})}catch(o){throw new Error(h)}b.css({margin:"auto",position:"absolute","z-index":-1,top:m.y,left:m.x,"-webkit-transform":"translate(-"+m.x+", -"+m.y+")","-ms-transform":"translate(-"+m.x+", -"+m.y+")","-moz-transform":"translate(-"+m.x+", -"+m.y+")",transform:"translate(-"+m.x+", -"+m.y+")",visibility:"hidden",opacity:0}).one("canplaythrough.vide",function(){f.resize()}).one("playing.vide",function(){b.css({visibility:"visible",opacity:1}),e.css("background-image","none")}),k.on("resize.vide",function(){l.resizing&&f.resize()}),e.append(b)},e.prototype.getVideoObject=function(){return this.$video[0]},e.prototype.resize=function(){if(this.$video){var a=this.$wrapper,b=this.$video,c=b[0],d=c.videoHeight,e=c.videoWidth,f=a.height(),g=a.width();g/e>f/d?b.css({width:g+2,height:"auto"}):b.css({width:"auto",height:f+2})}},e.prototype.destroy=function(){delete a[f].lookup[this.index],this.$video&&this.$video.off(f),this.$element.off(f).removeData(f),this.$wrapper.remove()},a[f]={lookup:[]},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(document).ready(function(){var b=a(window);b.on("resize.vide",function(){for(var b,c=a[f].lookup.length,d=0;d<c;d++)b=a[f].lookup[d],b&&b.settings.resizing&&b.resize()}),b.on("unload.vide",function(){return!1}),a(document).find("[data-vide-bg]").each(function(b,c){var d=a(c),e=d.data("vide-options"),g=d.data("vide-bg");d[f](g,e)})})});
