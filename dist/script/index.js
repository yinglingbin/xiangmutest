"use strict";var _createClass=function(){function n(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(i,t,e){return t&&n(i.prototype,t),e&&n(i,e),i}}();function _classCallCheck(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}!function(n){var i=n(".menu li"),t=n(".cartlist"),e=n(".cartlist .item");function s(){_classCallCheck(this,s),this.lunbo=n(".lunbo"),this.picul=n(".lunbo ul"),this.picli=this.picul.children(),this.btnli=n(".lunbo ol li"),this.leftarrow=n(".left"),this.rightarrow=n(".right"),this.index=0,this.timer=null}i.on("mouseover",function(){n(this).addClass("active").siblings("li").removeClass("active"),t.show(),n(window).scrollTop()>n(".banner").offset().top?t.css({top:n(window).scrollTop()-n(".banner").offset().top}):t.css({top:0}),e.eq(n(this).index()).show().siblings(".item").hide()}),i.on("mouseout",function(){i.removeClass("active"),t.hide()}),t.on("mouseover",function(){n(this).show()}),t.on("mouseout",function(){n(this).hide()}),localStorage.getItem("username")&&(n(".login").hide(),n(".admin").show(),n(".admin span").html(localStorage.getItem("username"))),n(".admin a").on("click",function(){n(".login").show(),n(".admin").hide(),localStorage.removeItem("username")}),(new(_createClass(s,[{key:"init",value:function(){var i=this;this.btnli.on("click",function(){i.index=n(this).index(),i.tabswitch()}),this.rightarrow.on("click",function(){i.rightevent()}),this.leftarrow.on("click",function(){i.leftevent()}),this.timer=setInterval(function(){i.rightarrow.click()},2e3),this.lunbo.hover(function(){clearInterval(i.timer)},function(){this.timer=setInterval(function(){i.rightarrow.click()},2e3)})}},{key:"tabswitch",value:function(){this.btnli.eq(this.index).addClass("active").siblings("ol li").removeClass("active"),this.picli.eq(this.index).animate({opacity:1}).siblings("ul li").animate({opacity:0})}},{key:"rightevent",value:function(){this.index++,this.index>this.btnli.length-1&&(this.index=0),this.tabswitch()}},{key:"leftevent",value:function(){this.index--,this.index<0&&(this.index=this.btnli.length-1),this.tabswitch()}}]),s)).init();n(window).scroll(function(){var e=n(window).scrollTop();e>=n(".seckill").offset().top?(n(".louceng").show(),n(".shangbu").show(),n(".xiabu").show()):(n(".louceng").hide(),n(".shangbu").hide(),n(".xiabu").hide()),n(".allshop").each(function(i,t){e>=n(this).offset().top-200&&n(".louceng li").eq(i).addClass("hover").siblings("li").removeClass("hover")})})}(jQuery);