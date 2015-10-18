// xfail: unknown
// "getOwnPropertyDescriptor" handler
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var proxied = {};
        var fakeDesc = { value: "foo", configurable: true };
        var returnedDesc = Object.getOwnPropertyDescriptor(
          new Proxy(proxied, {
            getOwnPropertyDescriptor: function (t, k) {
              return t === proxied && k === "foo" && fakeDesc;
            }
          }),
          "foo"
        );
        return (returnedDesc.value     === fakeDesc.value
          && returnedDesc.configurable === fakeDesc.configurable
          && returnedDesc.writable     === false
          && returnedDesc.enumerable   === false);
       };
console.log(test())
