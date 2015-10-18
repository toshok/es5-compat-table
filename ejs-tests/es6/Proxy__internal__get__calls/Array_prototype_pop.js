// Array.prototype.pop
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Array.prototype.pop -> Get -> [[Get]]
        var get = [];
        var p = new Proxy([0,1,2,3], { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.pop.call(p);
        return get + '' === "length,3";
       };
console.log(test())