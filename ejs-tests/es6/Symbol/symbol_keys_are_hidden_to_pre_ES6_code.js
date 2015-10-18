// xfail: unknown
// symbol keys are hidden to pre-ES6 code
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var object = {};
        var symbol = Symbol();
        object[symbol] = 1;

        for (var x in object){}
        var passed = !x;

        if (Object.keys && Object.getOwnPropertyNames) {
          passed &= Object.keys(object).length === 0
            && Object.getOwnPropertyNames(object).length === 0;
        }

        return passed;
       };
console.log(test())
