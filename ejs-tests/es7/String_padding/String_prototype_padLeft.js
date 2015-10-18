// String.prototype.padLeft
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        return 'hello'.padLeft(10) === '     hello'
          && 'hello'.padLeft(10, '1234') === '12341hello'
          && 'hello'.padLeft() === 'hello'
          && 'hello'.padLeft(6, '123') === '1hello';
       };
console.log(test())