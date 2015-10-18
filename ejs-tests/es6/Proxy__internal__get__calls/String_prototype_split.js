// String.prototype.split
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // String.prototype.split functions -> Get -> [[Get]]
        var get = [];
        var proxied = {};
        proxied[Symbol.toPrimitive] = function(){};
        var p = new Proxy(proxied, { get: function(o, k) { get.push(k); return o[k]; }});
        "".split(p);
        return get[0] === Symbol.split && get[1] === Symbol.toPrimitive && get.length === 2;
       };
console.log(test())
