// static accessor properties
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var baz = false;
        class C {
          static get foo() { return "foo"; }
          static set bar(x) { baz = x; }
        }
        C.bar = true;
        return C.foo === "foo" && baz;
       };
console.log(test())