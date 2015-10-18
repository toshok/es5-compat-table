// xfail: unknown
// Array.prototype.shift
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Array.prototype.shift -> Set -> [[Set]]
        var set = [];
        var p = new Proxy([0,0,,0], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
        p.shift();
        return set + '' === "0,2,length";
       };
console.log(test())
