// xfail: unknown
// SetIntegrityLevel
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // SetIntegrityLevel -> DefinePropertyOrThrow -> [[DefineOwnProperty]]
        var def = [];
        var p = new Proxy({foo:1, bar:2}, { defineProperty: function(o, v, desc) { def.push(v); Object.defineProperty(o, v, desc); return true; }});
        Object.freeze(p);
        return def + '' === "foo,bar";
       };
console.log(test())
