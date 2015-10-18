// xfail: we don't have a different primitive symbol vs. symbol object
// generator: none
// Object(symbol)
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var symbol = Symbol();
        var symbolObject = Object(symbol);

        return typeof symbolObject === "object" &&
          symbolObject instanceof Symbol &&
          symbolObject == symbol &&
          symbolObject !== symbol &&
          symbolObject.valueOf() === symbol;
       };
console.log(test())
