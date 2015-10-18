// xfail: unknown
// Object.assign
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Object.assign -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({foo:1, bar:2}, { get: function(o, k) { get.push(k); return o[k]; }});
        Object.assign({}, p);
        return get + '' === "foo,bar";
       };
console.log(test())
