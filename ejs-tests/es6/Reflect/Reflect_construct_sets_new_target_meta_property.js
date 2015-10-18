// Reflect.construct sets new.target meta property
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        return Reflect.construct(function(a, b, c) {
          if (new.target === Object) {
            this.qux = a + b + c;
          }
        }, ["foo", "bar", "baz"], Object).qux === "foobarbaz";
       };
console.log(test())
