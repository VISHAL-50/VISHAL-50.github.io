!function a(i,o,c){function l(n,t){if(!o[n]){if(!i[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}var r=o[n]={exports:{}};i[n][0].call(r.exports,function(t){var e=i[n][1][t];return l(e||t)},r,r.exports,a,i,o,c)}return o[n].exports}for(var u="function"==typeof require&&require,t=0;t<c.length;t++)l(c[t]);return l}({1:[function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(n,"__esModule",{value:!0}),n.StickyBanner=void 0;var a=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".section-landing-banner";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.instance=t,this.init()}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(e,[{key:"_parallax",value:function(){var t=.25*((document.documentElement.scrollTop||document.body.scrollTop)-$(this.instance).offset().top);t<0&&(t=0),$(this.instance).find(".banner__bg").css({transform:"translateY(".concat(t,"px)")})}},{key:"_evtHandler",value:function(){var t=this;window.addEventListener("scroll",function(){t._parallax()}),$('[data-target=".wechatQr"]').click(function(t){t.preventDefault(),$('.overlay-menu[data-filter="wechatQr"]').addClass("active");var e=$(this).parent().find("img").attr("src"),n=$(this).parent().find(".text-caption").text(),r=$("<img>").attr("src",e).attr("alt",""),a=$("<p>").text(n);r.appendTo($(".wechat-qr-code")),a.appendTo($(".wechat-txt"))}),$(".overlay-menu__close").click(function(t){t.preventDefault(),$(this).parents(".overlay-menu").removeClass("active"),$(".wechat-qr-code, .wechat-txt").html("")})}},{key:"init",value:function(){this._evtHandler(),this._parallax()}}]),e}();n.StickyBanner=a,$(function(){new a})},{}]},{},[1]);