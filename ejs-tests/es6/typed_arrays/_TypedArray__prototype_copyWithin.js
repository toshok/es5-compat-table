// %TypedArray%.prototype.copyWithin
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array.prototype.copyWithin === "function" &&
    typeof Uint8Array.prototype.copyWithin === "function" &&
    typeof Uint8ClampedArray.prototype.copyWithin === "function" &&
    typeof Int16Array.prototype.copyWithin === "function" &&
    typeof Uint16Array.prototype.copyWithin === "function" &&
    typeof Int32Array.prototype.copyWithin === "function" &&
    typeof Uint32Array.prototype.copyWithin === "function" &&
    typeof Float32Array.prototype.copyWithin === "function" &&
    typeof Float64Array.prototype.copyWithin === "function";
 };
console.log(test())