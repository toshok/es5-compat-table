// constructor invokes add
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var passed = false;
        var _add = WeakSet.prototype.add;

        WeakSet.prototype.add = function(v) {
          passed = true;
        };

        new WeakSet([ { } ]);
        WeakSet.prototype.add = _add;

        return passed;
       };
console.log(test())