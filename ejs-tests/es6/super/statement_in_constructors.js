// xcfail: unknown
// statement in constructors
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var passed = false;
        class B {
          constructor(a) { passed = (a === "barbaz"); }
        }
        class C extends B {
          constructor(a) { super("bar" + a); }
        }
        new C("baz");
        return passed;
       };
console.log(test())
