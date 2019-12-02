'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isDef = isDef;
exports.isObj = isObj;
exports.isNumber = isNumber;
exports.range = range;
exports.nextTick = nextTick;
exports.getSystemInfoSync = getSystemInfoSync;
function isDef(value) {
    return value !== undefined && value !== null;
}
function isObj(x) {
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
    return (/^\d+$/.test(value)
    );
}
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
    setTimeout(function () {
        fn();
    }, 1000 / 30);
}
var systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImlzRGVmIiwiaXNPYmoiLCJpc051bWJlciIsInJhbmdlIiwibmV4dFRpY2siLCJnZXRTeXN0ZW1JbmZvU3luYyIsInZhbHVlIiwidW5kZWZpbmVkIiwieCIsInR5cGUiLCJ0ZXN0IiwibnVtIiwibWluIiwibWF4IiwiTWF0aCIsImZuIiwic2V0VGltZW91dCIsInN5c3RlbUluZm8iLCJ3eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7UUFBZ0JBLEssR0FBQUEsSztRQUdBQyxLLEdBQUFBLEs7UUFJQUMsUSxHQUFBQSxRO1FBR0FDLEssR0FBQUEsSztRQUdBQyxRLEdBQUFBLFE7UUFNQUMsaUIsR0FBQUEsaUI7QUFuQlQsU0FBU0wsS0FBVCxDQUFlTSxLQUFmLEVBQXNCO0FBQ3pCLFdBQU9BLFVBQVVDLFNBQVYsSUFBdUJELFVBQVUsSUFBeEM7QUFDSDtBQUNNLFNBQVNMLEtBQVQsQ0FBZU8sQ0FBZixFQUFrQjtBQUNyQixRQUFNQyxjQUFjRCxDQUFkLHlDQUFjQSxDQUFkLENBQU47QUFDQSxXQUFPQSxNQUFNLElBQU4sS0FBZUMsU0FBUyxRQUFULElBQXFCQSxTQUFTLFVBQTdDLENBQVA7QUFDSDtBQUNNLFNBQVNQLFFBQVQsQ0FBa0JJLEtBQWxCLEVBQXlCO0FBQzVCLFdBQU8sU0FBUUksSUFBUixDQUFhSixLQUFiO0FBQVA7QUFDSDtBQUNNLFNBQVNILEtBQVQsQ0FBZVEsR0FBZixFQUFvQkMsR0FBcEIsRUFBeUJDLEdBQXpCLEVBQThCO0FBQ2pDLFdBQU9DLEtBQUtGLEdBQUwsQ0FBU0UsS0FBS0QsR0FBTCxDQUFTRixHQUFULEVBQWNDLEdBQWQsQ0FBVCxFQUE2QkMsR0FBN0IsQ0FBUDtBQUNIO0FBQ00sU0FBU1QsUUFBVCxDQUFrQlcsRUFBbEIsRUFBc0I7QUFDekJDLGVBQVcsWUFBTTtBQUNiRDtBQUNILEtBRkQsRUFFRyxPQUFPLEVBRlY7QUFHSDtBQUNELElBQUlFLGFBQWEsSUFBakI7QUFDTyxTQUFTWixpQkFBVCxHQUE2QjtBQUNoQyxRQUFJWSxjQUFjLElBQWxCLEVBQXdCO0FBQ3BCQSxxQkFBYUMsR0FBR2IsaUJBQUgsRUFBYjtBQUNIO0FBQ0QsV0FBT1ksVUFBUDtBQUNIIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRGVmKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmooeCkge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgeDtcbiAgICByZXR1cm4geCAhPT0gbnVsbCAmJiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gL15cXGQrJC8udGVzdCh2YWx1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5leHBvcnQgZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm4oKTtcbiAgICB9LCAxMDAwIC8gMzApO1xufVxubGV0IHN5c3RlbUluZm8gPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN5c3RlbUluZm9TeW5jKCkge1xuICAgIGlmIChzeXN0ZW1JbmZvID09IG51bGwpIHtcbiAgICAgICAgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XG4gICAgfVxuICAgIHJldHVybiBzeXN0ZW1JbmZvO1xufVxuIl19