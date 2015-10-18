// xfail: unknown
// RegExp.prototype.flags
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // RegExp.prototype.flags -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
        Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(p);
        return get + '' === "global,ignoreCase,multiline,unicode,sticky";
       };
console.log(test())
