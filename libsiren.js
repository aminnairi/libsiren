var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function pipe() {
        var callbacks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callbacks[_i] = arguments[_i];
        }
        return function (target) {
            return callbacks.reduce(function (value, next) {
                return next(value);
            }, target);
        };
    }
    function anyToString(target) {
        if (typeof target !== 'string') {
            return target.toString();
        }
        return target;
    }
    function spread(target) {
        return __spread(target);
    }
    function stringToInteger(target) {
        return target.map(function (string) {
            return parseInt(string) || 0;
        });
    }
    function doubleIfOddIndex(target) {
        return target.map(function (charCode, index) {
            if (index % 2 !== 0) {
                return charCode * 2;
            }
            return charCode;
        });
    }
    function addDigits(target) {
        return target.map(function (number) {
            if (number > 9) {
                return number - 9;
            }
            return number;
        });
    }
    function sum(target) {
        return target.reduce(function (sum, number) {
            return sum + number;
        }, 0);
    }
    function isModulo10(target) {
        if (target % 10 === 0) {
            return true;
        }
        return false;
    }
    exports.isValidSiren = pipe(anyToString, spread, stringToInteger, doubleIfOddIndex, addDigits, sum, isModulo10);
});
