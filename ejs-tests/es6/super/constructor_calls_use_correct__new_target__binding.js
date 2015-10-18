// constructor calls use correct "new.target" binding
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var passed;
        class B {
          constructor() { passed = (new.target === C); }
        }
        class C extends B {
          constructor() { super(); }
        }
        new C();
        return passed;
       };
console.log(test())
