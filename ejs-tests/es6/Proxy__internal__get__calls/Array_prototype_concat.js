// Array.prototype.concat
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Array.prototype.concat -> Get -> [[Get]]
        var get = [];
        var arr = [1];
        arr.constructor = undefined;
        var p = new Proxy(arr, { get: function(o, k) { get.push(k); return o[k]; }});
        Array.prototype.concat.call(p,p);
        return get[0] === "constructor"
          && get[1] === Symbol.isConcatSpreadable
          && get[2] === "length"
          && get[3] === "0"
          && get[4] === get[1] && get[5] === get[2] && get[6] === get[3]
          && get.length === 7;
       };
console.log(test())
