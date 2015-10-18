// %TypedArray%.prototype.forEach
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array.prototype.forEach === "function" &&
    typeof Uint8Array.prototype.forEach === "function" &&
    typeof Uint8ClampedArray.prototype.forEach === "function" &&
    typeof Int16Array.prototype.forEach === "function" &&
    typeof Uint16Array.prototype.forEach === "function" &&
    typeof Int32Array.prototype.forEach === "function" &&
    typeof Uint32Array.prototype.forEach === "function" &&
    typeof Float32Array.prototype.forEach === "function" &&
    typeof Float64Array.prototype.forEach === "function";
 };
console.log(test())