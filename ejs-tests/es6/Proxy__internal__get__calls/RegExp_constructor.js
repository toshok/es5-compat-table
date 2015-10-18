// RegExp constructor
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // RegExp -> Get -> [[Get]]
        var get = [];
        var re = { constructor: null };
        re[Symbol.match] = true;
        var p = new Proxy(re, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp(p);
        return get[0] === Symbol.match && get.slice(1) + '' === "constructor,source,flags";
       };
console.log(test())
