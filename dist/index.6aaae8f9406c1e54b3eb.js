!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n(8),n(13),n(15),n(1),n(2);var r=n(3);$(document).ready(function(){(new WOW).init(),$(window).scroll(function(){$("#arrow-down").css("opacity",1-$(window).scrollTop()/650),$(this).scrollTop()<65?$("#back-to-top").fadeOut():$("#back-to-top").fadeIn()});r.attach();$(".navbar-burger").click(function(){$(".navbar-burger").toggleClass("is-active"),$(".navbar-menu").toggleClass("is-active")})}),$(function(){$(".counter").counterUp({delay:10,time:7500})}),$(function(){$("a.smooth-scroll").click(function(t){t.preventDefault();var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top},1200,"easeInOutExpo")})})},function(t,e){
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
!function(t){"use strict";t.fn.counterUp=function(e){var n=t.extend({time:400,delay:10},e);return this.each(function(){var e=t(this),r=n;e.waypoint(function(){var t=[],n=r.time/r.delay,i=e.text(),o=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");/^[0-9]+$/.test(i);for(var s=/^[0-9]+\.[0-9]+$/.test(i),a=s?(i.split(".")[1]||[]).length:0,l=n;l>=1;l--){var u=parseInt(i/n*l);if(s&&(u=parseFloat(i/n*l).toFixed(a)),o)for(;/(\d+)(\d{3})/.test(u.toString());)u=u.toString().replace(/(\d+)(\d{3})/,"$1,$2");t.unshift(u)}e.data("counterup-nums",t),e.text("0");e.data("counterup-func",function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),r.delay):(e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))}),setTimeout(e.data("counterup-func"),r.delay)},{offset:"100%",triggerOnce:!0})})}}(jQuery)},function(t,e){
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(r){if(!r)throw new Error("No options passed to Waypoint constructor");if(!r.element)throw new Error("No element option passed to Waypoint constructor");if(!r.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,r),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=r.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),n[this.key]=this,e+=1}var e=0,n={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete n[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var r in n)e.push(n[r]);for(var i=0,o=e.length;o>i;i++)e[i][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){for(var e in t.Context.refreshAll(),n)n[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=i.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,r[t.waypointContextKey]=this,n+=1,i.windowContext||(i.windowContext=!0,i.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,r={},i=window.Waypoint,o=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),n=this.element==this.element.window;t&&e&&!n&&(this.adapter.off(".waypoints"),delete r[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,i.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||i.isTouch)&&(e.didScroll=!0,i.requestAnimationFrame(t))})},e.prototype.handleResize=function(){i.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var n in e){var r=e[n],i=r.newScroll>r.oldScroll?r.forward:r.backward;for(var o in this.waypoints[n]){var s=this.waypoints[n][o];if(null!==s.triggerPoint){var a=r.oldScroll<s.triggerPoint,l=r.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(i),t[s.group.id]=s.group)}}}for(var u in t)t[u].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?i.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?i.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var n in this.waypoints[e])t.push(this.waypoints[e][n]);for(var r=0,i=t.length;i>r;r++)t[r].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,n=e?void 0:this.adapter.offset(),r={};for(var o in this.handleScroll(),t={horizontal:{contextOffset:e?0:n.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:n.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[o];for(var a in this.waypoints[o]){var l,u,c,f,h=this.waypoints[o][a],d=h.options.offset,p=h.triggerPoint,y=0,w=null==p;h.element!==h.element.window&&(y=h.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(h):"string"==typeof d&&(d=parseFloat(d),h.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),l=s.contextScroll-s.contextOffset,h.triggerPoint=Math.floor(y+l-d),u=p<s.oldScroll,c=h.triggerPoint>=s.oldScroll,f=!u&&!c,!w&&(u&&c)?(h.queueTrigger(s.backward),r[h.group.id]=h.group):!w&&f?(h.queueTrigger(s.forward),r[h.group.id]=h.group):w&&s.oldScroll>=h.triggerPoint&&(h.queueTrigger(s.forward),r[h.group.id]=h.group)}}return i.requestAnimationFrame(function(){for(var t in r)r[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in r)r[t].refresh()},e.findByElement=function(t){return r[t.waypointContextKey]},window.onload=function(){o&&o(),e.refreshAll()},i.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},i.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function n(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),r[this.axis][this.name]=this}var r={vertical:{},horizontal:{}},i=window.Waypoint;n.prototype.add=function(t){this.waypoints.push(t)},n.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},n.prototype.flushTriggers=function(){for(var n in this.triggerQueues){var r=this.triggerQueues[n],i="up"===n||"left"===n;r.sort(i?e:t);for(var o=0,s=r.length;s>o;o+=1){var a=r[o];(a.options.continuous||o===r.length-1)&&a.trigger([n])}}this.clearTriggerQueues()},n.prototype.next=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n===this.waypoints.length-1?null:this.waypoints[n+1]},n.prototype.previous=function(e){this.waypoints.sort(t);var n=i.Adapter.inArray(e,this.waypoints);return n?this.waypoints[n-1]:null},n.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},n.prototype.remove=function(t){var e=i.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},n.prototype.first=function(){return this.waypoints[0]},n.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},n.findOrCreate=function(t){return r[t.axis][t.name]||new n(t)},i.Group=n}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,n=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,n){t.prototype[n]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[n].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(n,r){t[r]=e[r]}),n.adapters.push({name:"jquery",Adapter:t}),n.Adapter=t}(),function(){"use strict";function t(t){return function(){var n=[],r=arguments[0];return t.isFunction(arguments[0])&&((r=t.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var i=t.extend({},r,{element:this});"string"==typeof i.context&&(i.context=t(this).closest(i.context)[0]),n.push(new e(i))}),n}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}()},function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=Symbol("onBulmaAccordionClick"),s=function(t){function e(t){1<arguments.length&&void 0!==arguments[1]&&arguments[1],function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));if(n.element="string"==typeof t?document.querySelector(t):t,!n.element)throw new Error("An invalid selector or non-DOM node has been provided.");return n._clickEvents=["click"],n[o]=n[o].bind(n),n.init(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.a),i(e,[{key:"init",value:function(){this.items=this.element.querySelectorAll(".accordion")||[],this._bindEvents()}},{key:"destroy",value:function(){var t=this;this.items.forEach(function(e){t._clickEvents.forEach(function(n){e.removeEventListener(n,t[o],!1)})})}},{key:"_bindEvents",value:function(){var t=this;this.items.forEach(function(e){t._clickEvents.forEach(function(n){e.addEventListener(n,t[o],!1)})})}},{key:o,value:function(t){t.preventDefault();var e=t.currentTarget.closest(".accordion")||t.currentTarget;if(e.classList.contains("is-active"))e.classList.remove("is-active");else{var n=this.element.querySelector(".accordion.is-active");n&&n.classList.remove("is-active"),e.classList.add("is-active")}}}],[{key:"attach",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".accordions",n=new Array,r=document.querySelectorAll(t);return[].forEach.call(r,function(t){setTimeout(function(){n.push(new e(t))},100)}),n}}]),e}();e.default=s},function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._listeners=new Map(e),this._middlewares=new Map}return r(t,[{key:"listenerCount",value:function(t){return this._listeners.has(t)?this._listeners.get(t).length:0}},{key:"removeListeners",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,n=1<arguments.length&&void 0!==arguments[1]&&arguments[1];null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeListeners(e,n)}):(this._listeners.delete(e),n&&this.removeMiddleware(e)):this._listeners=new Map}},{key:"middleware",value:function(t,e){var n=this;Array.isArray(t)?name.forEach(function(t){return n.middleware(t,e)}):(Array.isArray(this._middlewares.get(t))||this._middlewares.set(t,[]),this._middlewares.get(t).push(e))}},{key:"removeMiddleware",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==e?Array.isArray(e)?name.forEach(function(e){return t.removeMiddleware(e)}):this._middlewares.delete(e):this._middlewares=new Map}},{key:"on",value:function(t,e){var n=this,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(Array.isArray(t))t.forEach(function(t){return n.on(t,e)});else{var i=(t=t.toString()).split(/,|, | /);1<i.length?i.forEach(function(t){return n.on(t,e)}):(Array.isArray(this._listeners.get(t))||this._listeners.set(t,[]),this._listeners.get(t).push({once:r,callback:e}))}}},{key:"once",value:function(t,e){this.on(t,e,!0)}},{key:"emit",value:function(t,e){var n=this,r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];t=t.toString();var i=this._listeners.get(t),o=null,s=0,a=r;if(Array.isArray(i))for(i.forEach(function(l,u){r||(o=n._middlewares.get(t),Array.isArray(o)?(o.forEach(function(n){n(e,function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;null!==t&&(e=t),s++},t)}),s>=o.length&&(a=!0)):a=!0),a&&(l.once&&(i[u]=null),l.callback(e))});-1!==i.indexOf(null);)i.splice(i.indexOf(null),1)}}]),t}();e.a=i}]).default},,,,,function(t,e){},,,,,function(t,e){},,function(t,e){}]);
//# sourceMappingURL=index.6aaae8f9406c1e54b3eb.js.map