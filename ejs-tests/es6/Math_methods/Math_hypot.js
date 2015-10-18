// Math.hypot
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        return Math.hypot() === 0 &&
          Math.hypot(1) === 1 &&
          Math.hypot(9, 12, 20) === 25 &&
          Math.hypot(27, 36, 60, 100) === 125;
       };
console.log(test())
