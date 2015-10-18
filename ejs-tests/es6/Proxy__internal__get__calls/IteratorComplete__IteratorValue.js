// IteratorComplete, IteratorValue
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // IteratorComplete -> Get -> [[Get]]
        // IteratorValue -> Get -> [[Get]]
        var get = [];
        var iterable = {};
        iterable[Symbol.iterator] = function() {
          return {
            next: function() {
              return new Proxy({ value: 2, done: false }, { get: function(o, k) { get.push(k); return o[k]; }});
            }
          };
        }
        var i = 0;
        for(var e of iterable) {
          if (++i >= 2) break;
        }
        return get + '' === "done,value,done,value";
       };
console.log(test())