// xcfail: unknown
// defaults in parameters
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        return (function({a = 1, b = 0, c = 3, x:d = 0, y:e = 5},
            [f = 6, g = 0, h = 8]) {
          return a === 1 && b === 2 && c === 3 && d === 4 &&
            e === 5 && f === 6 && g === 7 && h === 8;
        }({b:2, c:undefined, x:4},[, 7, undefined]));
       };
console.log(test())
