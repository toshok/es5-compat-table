// "get" handler, instances of proxies
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var proxied = { };
        var proxy = Object.create(new Proxy(proxied, {
          get: function (t, k, r) {
            return t === proxied && k === "foo" && r === proxy && 5;
          }
        }));
        return proxy.foo === 5;
       };
console.log(test())