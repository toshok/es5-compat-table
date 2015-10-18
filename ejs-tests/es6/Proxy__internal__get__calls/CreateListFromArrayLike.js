// CreateListFromArrayLike
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // CreateListFromArrayLike -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({length:2, 0:0, 1:0}, { get: function(o, k) { get.push(k); return o[k]; }});
        Function.prototype.apply({}, p);
        return get + '' === "length,0,1";
       };
console.log(test())