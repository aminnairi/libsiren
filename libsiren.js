/**
 * GNU GENERAL PUBLIC LICENSE Version 3
 */

!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(n.libsiren={})}(this,function(n){"use strict";function t(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,u,o=t.call(n),i=[];try{for(;(void 0===r||0<r--)&&!(e=o.next()).done;)i.push(e.value)}catch(n){u={error:n}}finally{try{e&&!e.done&&(t=o.return)&&t.call(o)}finally{if(u)throw u.error}}return i}function r(n){return"string"!=typeof n?n.toString():n}function e(n){return n.replace(/\s/g,"")}function u(n){return function(){for(var n=[],r=0;r<arguments.length;r++)n=n.concat(t(arguments[r]));return n}(n)}function o(n){return n.map(function(n){return parseInt(n)||0})}function i(n){return n.map(function(n,r){return r%2!=0?2*n:n})}function f(n){return n.map(function(n){return 9<n?n-9:n})}function c(n){return n.reduce(function(n,r){return n+r},0)}function a(n){return n%10==0}n.isValidSiren=function(n){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return function(n){return r.reduce(function(n,r){return r(n)},n)}}(r,e,u,o,i,f,c,a)(n)},Object.defineProperty(n,"__esModule",{value:!0})});
