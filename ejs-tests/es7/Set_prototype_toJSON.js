// Set.prototype.toJSON
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
    var set = new Set();
    [1, 2, 3, 2, 1].forEach(function (i) { set.add(i); });
    return JSON.stringify(set) === '[1,2,3]';
   };
console.log(test())