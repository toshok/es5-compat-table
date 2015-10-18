// in constructors
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var passed = false;
// ejs change: had to change the function expression to a decl in order for the name to be available inside the function body
        function f() {
          passed = (new.target === f);
        };
        new f();
        (function() {
          passed &= (new.target === undefined);
        }());
        return passed;
       };
console.log(test())
