// xfail: unknown
// "enumerate" handler
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var proxied = {};
        var passed = false;
        for (var i in
          new Proxy(proxied, {
            enumerate: function (t) {
              passed = t === proxied;
              return {
                next: function(){ return { done: true, value: null };}
              };
            }
          })
        ) { }
        return passed;
       };
console.log(test())
