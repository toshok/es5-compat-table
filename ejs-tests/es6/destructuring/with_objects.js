// xcfail: unknown
// with objects
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var {c, x:d, e} = {c:7, x:8};
        var f, g;
        ({f,g} = {f:9,g:10});
        return c === 7 && d === 8 && e === undefined
          && f === 9 && g === 10;
       };
console.log(test())
