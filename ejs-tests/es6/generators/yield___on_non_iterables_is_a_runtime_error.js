// xfail: unknown
// yield * on non-iterables is a runtime error
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var iterator = (function * generator() {
          yield * [5];
        }());
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        iterator = (function * generator() {
          yield * 5;
        }());
        try {
          iterator.next();
        } catch (e) {
          return passed;
        }
       };
console.log(test())
