// %TypedArray%.of
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array.of === "function" &&
    typeof Uint8Array.of === "function" &&
    typeof Uint8ClampedArray.of === "function" &&
    typeof Int16Array.of === "function" &&
    typeof Uint16Array.of === "function" &&
    typeof Int32Array.of === "function" &&
    typeof Uint32Array.of === "function" &&
    typeof Float32Array.of === "function" &&
    typeof Float64Array.of === "function";
 };
console.log(test())