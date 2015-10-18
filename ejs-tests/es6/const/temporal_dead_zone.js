// xfail: we don't do TDZ's yet
// temporal dead zone
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var passed = (function(){ try { qux; } catch(e) { return true; }}());
        function fn() { passed &= qux === 456; }
        const qux = 456;
        fn();
        return passed;
       };
console.log(test())
