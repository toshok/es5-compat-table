// xfail: unknown
// %TypedArray%.from
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array.from === "function" &&
    typeof Uint8Array.from === "function" &&
    typeof Uint8ClampedArray.from === "function" &&
    typeof Int16Array.from === "function" &&
    typeof Uint16Array.from === "function" &&
    typeof Int32Array.from === "function" &&
    typeof Uint32Array.from === "function" &&
    typeof Float32Array.from === "function" &&
    typeof Float64Array.from === "function";
 };
console.log(test())
