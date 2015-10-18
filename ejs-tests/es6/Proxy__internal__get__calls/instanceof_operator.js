// xfail: unknown
// instanceof operator
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // InstanceofOperator -> GetMethod -> GetV -> [[Get]]
        // InstanceofOperator -> OrdinaryHasInstance -> Get -> [[Get]]
        var get = [];
        var p = new Proxy(function() { }, { get: function(o, k) { get.push(k); return o[k]; }});
        ({}) instanceof p;
        return get[0] === Symbol.hasInstance && get.slice(1) + '' === "prototype";
       };
console.log(test())
