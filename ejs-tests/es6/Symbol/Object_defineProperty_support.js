// Object.defineProperty support
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var object = {};
        var symbol = Symbol();
        var value = {};

        //if (Object.defineProperty) {
          Object.defineProperty(object, symbol, { value: value });
          return object[symbol] === value;
        //}

        //return passed;
       };
console.log(test())
