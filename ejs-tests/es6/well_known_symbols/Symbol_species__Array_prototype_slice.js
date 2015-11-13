// Symbol.species, Array.prototype.slice
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var obj = [];
        obj.constructor = {};
        obj.constructor[Symbol.species] = function() {
            return { foo: 1 };
        };
        return Array.prototype.slice.call(obj, 0).foo === 1;
       };
console.log(test())