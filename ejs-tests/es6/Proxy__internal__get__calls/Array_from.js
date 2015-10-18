// Array.from
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Array.from -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
        Array.from(p);
        return get[0] === Symbol.iterator && get.slice(1) + '' === "length,0,1";
       };
console.log(test())