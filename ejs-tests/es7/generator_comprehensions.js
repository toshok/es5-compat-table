// generator comprehensions
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
    var iterator = (for (a of [1,2]) a + 4);
    var item = iterator.next();
    var passed = item.value === 5 && item.done === false;
    item = iterator.next();
    passed    &= item.value === 6 && item.done === false;
    item = iterator.next();
    passed    &= item.value === undefined && item.done === true;
    return passed;
   };
console.log(test())