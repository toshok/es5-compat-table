// String.prototype.padRight
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        return 'hello'.padRight(10) === 'hello     '
          && 'hello'.padRight(10, '1234') === 'hello12341'
          && 'hello'.padRight() === 'hello'
          && 'hello'.padRight(6, '123') === 'hello1';
       };
console.log(test())