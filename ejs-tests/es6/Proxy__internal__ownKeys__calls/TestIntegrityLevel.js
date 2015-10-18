// TestIntegrityLevel
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        // TestIntegrityLevel -> [[OwnPropertyKeys]]
        var ownKeysCalled = 0;
        var p = new Proxy(Object.preventExtensions({}), { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
        Object.isFrozen(p);
        return ownKeysCalled === 1;
       };
console.log(test())
