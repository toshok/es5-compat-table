// "preventExtensions" handler
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var proxied = {};
        var passed = false;
        Object.preventExtensions(
          new Proxy(proxied, {
            preventExtensions: function (t) {
              passed = t === proxied;
              return Object.preventExtensions(proxied);
            }
          })
        );
        return passed;
       };
console.log(test())