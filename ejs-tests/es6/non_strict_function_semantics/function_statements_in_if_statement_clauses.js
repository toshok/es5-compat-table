// xfail: unknown
// function statements in if-statement clauses
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Note: only available outside of strict mode.
        if (!this) return false;

        if(true) function foo() { return 2; }
        if(false) {} else function bar() { return 3; }
        if(true) function baz() { return 4; } else {}
        if(false) function qux() { return 5; } else function qux() { return 6; }
        return foo() === 2 && bar() === 3 && baz() === 4 && qux() === 6;
       };
console.log(test())
