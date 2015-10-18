// xcfail: compiler error (direct_recursion.js:11:18: ReferenceError: undeclared identifier 'f')
// direct recursion
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        "use strict";
        return (function f(n){
          if (n <= 0) {
            return  "foo";
          }
          return f(n - 1);
        }(1e6)) === "foo";
       };
console.log(test())
