// "set" handler
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var proxied = { };
        var passed = false;
        var proxy = new Proxy(proxied, {
          set: function (t, k, v, r) {
            passed = t === proxied && k + v === "foobar" && r === proxy;
          }
        });
        proxy.foo = "bar";
        return passed;
       };
console.log(test())