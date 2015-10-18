// with generator instances
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var [a, b, c] = (function*(){ yield 1; yield 2; }());
        var d, e;
        [d, e] = (function*(){ yield 3; yield 4; }());
        return a === 1 && b === 2 && c === undefined
          && d === 3 && e === 4;
       };
console.log(test())
