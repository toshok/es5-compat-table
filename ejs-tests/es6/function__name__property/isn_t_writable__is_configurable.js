// xfail: unknown
// isn't writable, is configurable
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var descriptor = Object.getOwnPropertyDescriptor(function f(){},"name");
        return descriptor.enumerable   === false &&
               descriptor.writable     === false &&
               descriptor.configurable === true;
       };
console.log(test())
