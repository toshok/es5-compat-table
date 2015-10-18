// Symbol.toPrimitive
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var a = {}, b = {}, c = {};
        var passed = 0;
        a[Symbol.toPrimitive] = function(hint) { passed += hint === "number";  return 0; };
        b[Symbol.toPrimitive] = function(hint) { passed += hint === "string";  return 0; };
        c[Symbol.toPrimitive] = function(hint) { passed += hint === "default"; return 0; };

        a >= 0;
        b in {};
        c == 0;
        return passed === 3;
       };
console.log(test())