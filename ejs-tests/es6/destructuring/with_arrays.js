// with arrays
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var [a, , [b], c] = [5, null, [6]];
        var d, e;
        [d,e] = [7,8];
        return a === 5 && b === 6 && c === undefined
          && d === 7 && e === 8;
       };
console.log(test())
