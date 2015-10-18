// xfail: unknown
// "apply" handler
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var proxied = function(){};
        var passed = false;
        var host = {
          method: new Proxy(proxied, {
            apply: function (t, thisArg, args) {
              passed = t === proxied && thisArg === host && args + "" === "foo,bar";
            }
          })
        };
        host.method("foo", "bar");
        return passed;
       };
console.log(test())
