// xfail: unknown
// Array.prototype.pop
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Array.prototype.pop -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.pop();
        return set + '' === "length";
       };
console.log(test())
