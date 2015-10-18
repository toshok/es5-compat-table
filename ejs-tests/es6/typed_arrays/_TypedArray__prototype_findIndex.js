// %TypedArray%.prototype.findIndex
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array.prototype.findIndex === "function" &&
    typeof Uint8Array.prototype.findIndex === "function" &&
    typeof Uint8ClampedArray.prototype.findIndex === "function" &&
    typeof Int16Array.prototype.findIndex === "function" &&
    typeof Uint16Array.prototype.findIndex === "function" &&
    typeof Int32Array.prototype.findIndex === "function" &&
    typeof Uint32Array.prototype.findIndex === "function" &&
    typeof Float32Array.prototype.findIndex === "function" &&
    typeof Float64Array.prototype.findIndex === "function";
 };
console.log(test())