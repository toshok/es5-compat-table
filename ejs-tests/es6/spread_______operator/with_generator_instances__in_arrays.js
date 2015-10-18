// xcfail: compiler error (abort in llvm)
// with generator instances, in arrays
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var iterable = (function*(){ yield "b"; yield "c"; yield "d"; }());
        return ["a", ...iterable, "e"][3] === "d";
       };
console.log(test())
