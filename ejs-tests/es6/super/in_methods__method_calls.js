// in methods, method calls
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class B {
          qux(a) { return "foo" + a; }
        }
        class C extends B {
          qux(a) { return super.qux("bar" + a); }
        }
        return new C().qux("baz") === "foobarbaz";
       };
console.log(test())