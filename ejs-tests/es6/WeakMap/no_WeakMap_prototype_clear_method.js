// no WeakMap.prototype.clear method
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        if (!("clear" in WeakMap.prototype)) {
          return true;
        }
        var m = new WeakMap();
        var key = {};
        m.set(key, 2);
        m.clear();
        return m.has(key);
       };
console.log(test())