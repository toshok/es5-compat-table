// xfail: unknown
// function 'length' is configurable
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var fn = function(a, b) {};

        var desc = Object.getOwnPropertyDescriptor(fn, "length");
        if (desc.configurable) {
          Object.defineProperty(fn, "length", { value: 1 });
          return fn.length === 1;
        }

        return false;
       };
console.log(test())
