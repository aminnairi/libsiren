/**
 * GNU GENERAL PUBLIC LICENSE Version 3
 */

!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(n.libsiren={})}(this,function(n){"use strict";function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return function(n){return r.reduce(function(n,r){return r(n)},n)}}function t(n){return"string"!=typeof n?n.toString():n}function e(n){return n.replace(/\s/g,"")}function u(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,u,o=t.call(n),i=[];try{for(;(void 0===r||0<r--)&&!(e=o.next()).done;)i.push(e.value)}catch(n){u={error:n}}finally{try{e&&!e.done&&(t=o.return)&&t.call(o)}finally{if(u)throw u.error}}return i}function o(n){return function(){for(var n=[],r=0;r<arguments.length;r++)n=n.concat(u(arguments[r]));return n}(n)}function i(n){return n.map(function(n){return parseInt(n)||0})}function f(n){return n.map(function(n,r){return r%2!=0?2*n:n})}function c(n){return n.map(function(n,r){return r%2==0?2*n:n})}function a(n){return n.map(function(n){return 9<n?n-9:n})}function l(n){return n.reduce(function(n,r){return n+r},0)}function d(n){return n%10==0}function p(r){return function(n){return n.length===r}}n.isValidSiren=function(n){return!!r(t,e,p(9))(n)&&r(t,e,o,i,f,a,l,d)(n)},n.isValidSiret=function(n){return!!r(t,e,p(14))(n)&&r(t,e,o,i,c,a,l,d)(n)},Object.defineProperty(n,"__esModule",{value:!0})});
