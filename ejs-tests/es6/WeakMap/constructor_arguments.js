// constructor arguments
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var key1 = {};
        var key2 = {};
        var weakmap = new WeakMap([[key1, 123], [key2, 456]]);

        return weakmap.has(key1) && weakmap.get(key1) === 123 &&
               weakmap.has(key2) && weakmap.get(key2) === 456;
       };
console.log(test())