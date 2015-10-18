// xfail: unknown
// Array.prototype iteration methods
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // Array.prototype methods -> Get -> [[Get]]
        var methods = ['copyWithin', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach',
          'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'some'];
        var get;
        var p = new Proxy({length: 2, 0: '', 1: ''}, { get: function(o, k) { get.push(k); return o[k]; }});
        for(var i = 0; i < methods.length; i+=1) {
          get = [];
          Array.prototype[methods[i]].call(p, function(){});
          if (get + '' !== (
            methods[i] === 'fill' ? "length" :
            methods[i] === 'every' ? "length,0" :
            methods[i] === 'lastIndexOf' || methods[i] === 'reduceRight' ? "length,1,0" :
            "length,0,1"
          )) {
            return false;
          }
        }
        return true;
       };
console.log(test())
