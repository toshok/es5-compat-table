// Object.getOwnPropertyNames
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var s = Object.getOwnPropertyNames('a');
        return s.length === 2 &&
          ((s[0] === 'length' && s[1] === '0') || (s[0] === '0' && s[1] === 'length'));
       };
console.log(test())
