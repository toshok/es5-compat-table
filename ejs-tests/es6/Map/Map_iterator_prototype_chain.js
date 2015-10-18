// Map iterator prototype chain
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Iterator instance
        var iterator = new Map()[Symbol.iterator]();
        // %MapIteratorPrototype%
        var proto1 = Object.getPrototypeOf(iterator);
        // %IteratorPrototype%
        var proto2 = Object.getPrototypeOf(proto1);

        return proto2.hasOwnProperty(Symbol.iterator) &&
          !proto1    .hasOwnProperty(Symbol.iterator) &&
          !iterator  .hasOwnProperty(Symbol.iterator) &&
          iterator[Symbol.iterator]() === iterator;
       };
console.log(test())