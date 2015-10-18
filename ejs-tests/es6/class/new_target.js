// new.target
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var passed = false;
// ejs change: switch f to be a function decl so we can see the name inside
        function f() {
          passed = new.target === f;
        }
        new f();
        class A {
          constructor() {
            passed &= new.target === B;
          }
        }
        class B extends A {}
        new B();
        return passed;
       };
console.log(test())
