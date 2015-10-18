// xcfail: unknown
// in parameters, 'arguments' interaction
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        return (function({a, x:b, y:e}, [c, d]) {
          return arguments[0].a === 1 && arguments[0].x === 2
            && !("y" in arguments[0]) && arguments[1] + '' === "3,4";
        }({a:1, x:2}, [3, 4]));
       };
console.log(test())
