// %TypedArray%.prototype.some
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array.prototype.some === "function" &&
    typeof Uint8Array.prototype.some === "function" &&
    typeof Uint8ClampedArray.prototype.some === "function" &&
    typeof Int16Array.prototype.some === "function" &&
    typeof Uint16Array.prototype.some === "function" &&
    typeof Int32Array.prototype.some === "function" &&
    typeof Uint32Array.prototype.some === "function" &&
    typeof Float32Array.prototype.some === "function" &&
    typeof Float64Array.prototype.some === "function";
 };
console.log(test())