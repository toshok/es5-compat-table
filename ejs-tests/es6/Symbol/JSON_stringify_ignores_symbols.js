// xfail: unknown
// JSON.stringify ignores symbols
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var object = {foo: Symbol()};
        object[Symbol()] = 1;
        var array = [Symbol()];
        return JSON.stringify(object) === '{}' && JSON.stringify(array) === '[null]' && JSON.stringify(Symbol()) === undefined;
       };
console.log(test())
