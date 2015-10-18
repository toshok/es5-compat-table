// xfail: unknown
// defaults in parameters, new Function() support
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        return new Function("{a = 1, b = 0, c = 3, x:d = 0, y:e = 5}",
          "return a === 1 && b === 2 && c === 3 && d === 4 && e === 5;"
        )({b:2, c:undefined, x:4});
       };
console.log(test())
