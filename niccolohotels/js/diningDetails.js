!function o(a,s,r){function l(n,e){if(!s[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}var i=s[n]={exports:{}};a[n][0].call(i.exports,function(e){var t=a[n][1][e];return l(t||e)},i,i.exports,o,a,s,r)}return s[n].exports}for(var u="function"==typeof require&&require,e=0;e<r.length;e++)l(r[e]);return l}({1:[function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(n,"__esModule",{value:!0}),n.bookTableBar=void 0;var o=function(){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"#booktable-bar",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),$(e)&&(this.instance=e,this.defaults={rolloutElement:""},this.settings=Object.assign(this.defaults,t),this.init(),$("body").addClass("active-widget"))}return function(e,t,n){t&&i(e.prototype,t),n&&i(e,n)}(n,[{key:"_setBarPosition",value:function(){if(""!=this.settings.rolloutElement&&this.settings.rolloutElement){var e=this,t=(document.documentElement.scrollTop||document.body.scrollTop)+window.innerHeight;if(e.settings.rolloutElement.offset().top+e.settings.rolloutElement.height()-t<1)return $(e.instance).addClass("inactive"),void $("body").removeClass("active-widget");$(e.instance).removeClass("inactive"),$("body").addClass("active-widget")}}},{key:"_evtHandler",value:function(){var e=this;window.addEventListener("scroll",function(){e._setBarPosition()}),window.addEventListener("resize",function(){e._setBarPosition()})}},{key:"init",value:function(){this._evtHandler()}},{key:"rolloutElement",set:function(e){this.settings.rolloutElement=e}}]),n}();n.bookTableBar=o},{}],2:[function(e,t,n){"use strict";var i=e("../../modules/common/bookTableBar/bookTableBar.js");function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".menus-wrapper";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.instance=e,this.childClass=".menu-item",this.imgClass=".menu-img-container",this.currentMenu=null,$(this.instance).length<=0||this._init()}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(t,[{key:"showMenu",value:function(e){var t=this;if(this.currentMenu!=e){this.currentMenu=e;var n=$(t.instance).find(t.childClass+"[data-menu=".concat(e,"]")),i=$(t.instance).find(t.imgClass+"[data-menu=".concat(e,"]"));$(t.instance).find(t.imgClass).hide(),$(t.instance).find(t.childClass+" .item__content").slideUp(),$(t.instance).find(t.childClass).removeClass("active"),i.fadeIn(),n.find(".item__content").slideDown(),n.addClass("active")}}},{key:"_defaultMenu",value:function(){var e=$(this.instance).find(this.childClass).eq(0).attr("data-menu");this.showMenu(e)}},{key:"_evtHandler",value:function(){var t=this;$(t.instance).on("click","".concat(t.childClass," .item__header"),function(){var e=$(this).parents(t.childClass).attr("data-menu");t.showMenu(e)})}},{key:"_initTippy",value:function(){tippy(".tippy",{theme:"light",allowHTML:!0,placement:"bottom",content:function(e){var t=e.getAttribute("data-template");return document.getElementById(t).innerHTML}})}},{key:"_init",value:function(){(new i.bookTableBar).rolloutElement=$(".footer-subscribe"),this._evtHandler(),this._defaultMenu(),this._initTippy()}}]),t}();$(function(){new a})},{"../../modules/common/bookTableBar/bookTableBar.js":1}]},{},[2]);