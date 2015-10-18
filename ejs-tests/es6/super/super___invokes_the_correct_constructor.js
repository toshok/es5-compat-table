// super() invokes the correct constructor
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // checks that super() is *not* a synonym of super.constructor()
        var passed;
        class B {
            constructor() {
                passed = true;
            }
        };
        B.prototype.constructor = function () {
            passed = false;
        };
        class C extends B { };
        new C;
        return passed;
       };
console.log(test())