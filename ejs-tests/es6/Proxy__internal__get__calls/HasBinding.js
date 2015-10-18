// xcfail: ejs doesn't support 'with'
// HasBinding
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // HasBinding -> Get -> [[Get]]
        var get = [];
        var p = new Proxy({foo:1}, { get: function(o, k) { get.push(k); return o[k]; }});
        p[Symbol.unscopables] = p;
        with(p) {
          typeof foo;
        }
        return get[0] === Symbol.unscopables && get.slice(1) + '' === "foo";
       };
console.log(test())
