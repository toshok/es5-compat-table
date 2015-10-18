// Symbol.match, RegExp constructor
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var re = /./;
        re[Symbol.match] = false;
        var foo = {constructor: RegExp};
        foo[Symbol.match] = true;
        return RegExp(re) !== re && RegExp(foo) === foo;
       };
console.log(test())
