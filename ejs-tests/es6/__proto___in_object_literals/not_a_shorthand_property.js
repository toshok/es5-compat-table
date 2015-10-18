// xfail: unknown
// not a shorthand property
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        if (!({ __proto__ : [] } instanceof Array)) {
          return false;
        }
        var __proto__ = [];
        return !({ __proto__ } instanceof Array);
       };
console.log(test())
