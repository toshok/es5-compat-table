// xfail: unknown
// variables (class)
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var foo = class {};
        var bar = class baz {};
        var qux = class { static name() {} };
        return foo.name === "foo" &&
               bar.name === "baz" &&
               typeof qux.name === "function";
       };
console.log(test())
