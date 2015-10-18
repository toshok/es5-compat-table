// %TypedArray%[Symbol.species]
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
return typeof Int8Array[Symbol.species] === "function" &&
    typeof Uint8Array[Symbol.species] === "function" &&
    typeof Uint8ClampedArray[Symbol.species] === "function" &&
    typeof Int16Array[Symbol.species] === "function" &&
    typeof Uint16Array[Symbol.species] === "function" &&
    typeof Int32Array[Symbol.species] === "function" &&
    typeof Uint32Array[Symbol.species] === "function" &&
    typeof Float32Array[Symbol.species] === "function" &&
    typeof Float64Array[Symbol.species] === "function";
 };
console.log(test())