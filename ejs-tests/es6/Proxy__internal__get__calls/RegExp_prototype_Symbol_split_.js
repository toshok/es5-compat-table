// RegExp.prototype[Symbol.split]
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // RegExp.prototype[Symbol.split] -> Get -> [[Get]]
        var get = [];
        var constructor = function(){};
        constructor[Symbol.species] = Object;
        var p = new Proxy({ constructor: constructor, flags: '', exec: function() { return null; } }, { get: function(o, k) { get.push(k); return o[k]; }});
        RegExp.prototype[Symbol.split].call(p, "");
        return get + '' === "constructor,flags,exec";
       };
console.log(test())
