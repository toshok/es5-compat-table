// %TypedArray%.prototype.keys
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array.prototype.keys === "function" &&
    typeof Uint8Array.prototype.keys === "function" &&
    typeof Uint8ClampedArray.prototype.keys === "function" &&
    typeof Int16Array.prototype.keys === "function" &&
    typeof Uint16Array.prototype.keys === "function" &&
    typeof Int32Array.prototype.keys === "function" &&
    typeof Uint32Array.prototype.keys === "function" &&
    typeof Float32Array.prototype.keys === "function" &&
    typeof Float64Array.prototype.keys === "function";
 };
console.log(test())