// [[Set]]
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // [[Set]] -> [[GetOwnProperty]]
        var gopd = [];
        var p = new Proxy({},
          { getOwnPropertyDescriptor: function(o, v) { gopd.push(v); return Object.getOwnPropertyDescriptor(o, v); }});
        p.foo = 1; p.bar = 1;
        return gopd + '' === "foo,bar";
       };
console.log(test())