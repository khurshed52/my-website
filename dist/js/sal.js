!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sal=t():e.sal=t()}(this,function(){return function(n){function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o={};return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist/",r(r.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n(1);var o={rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",selector:"[data-sal]",once:!0,disabled:!1},s=[],a=null,i=function(){document.body.classList.add(o.disabledClassName)},l=function(e,t){e.forEach(function(e){e.intersectionRatio>=o.threshold?(e.target.classList.add(o.animateClassName),o.once&&t.unobserve(e.target)):o.once||e.target.classList.remove(o.animateClassName)})},c=function(){i(),a.disconnect(),a=null},u=function(){document.body.classList.remove(o.disabledClassName),a=new IntersectionObserver(l,{rootMargin:o.rootMargin,threshold:o.threshold}),(s=[].filter.call(document.querySelectorAll(o.selector),function(e){return t=e,o.animateClassName,!t.classList.contains(o.animateClassName);var t})).forEach(function(e){return a.observe(e)})};t.default=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o;if(e!==o&&(o=r({},o,e)),!window.IntersectionObserver)throw i(),Error("\n      Your browser does not support IntersectionObserver!\n      Get a polyfill from here:\n      https://github.com/w3c/IntersectionObserver/tree/master/polyfill\n    ");return o.disabled||"function"==typeof o.disabled&&o.disabled()?i():u(),{elements:s,disable:c,enable:u}}},function(e,t){}]).default});