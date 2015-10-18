// xfail: unknown
// Object.defineProperties
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Object.defineProperties -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({foo:{}, bar:{}}, { get: function(o, k) { get.push(k); return o[k]; }});
        Object.defineProperties({}, p);
        return get + '' === "foo,bar";
       };
console.log(test())
