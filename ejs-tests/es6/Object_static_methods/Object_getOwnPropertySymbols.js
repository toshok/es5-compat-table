// Object.getOwnPropertySymbols
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var o = {};
        var sym = Symbol(), sym2 = Symbol(), sym3 = Symbol();
        o[sym]  = true;
        o[sym2] = true;
        o[sym3] = true;
        var result = Object.getOwnPropertySymbols(o);
        return result[0] === sym
          && result[1] === sym2
          && result[2] === sym3;
       };
console.log(test())