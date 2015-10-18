// "this" unchanged by call or apply
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var d = { x : "foo", y : function() { return () => this.x; }};
        var e = { x : "bar" };
        return d.y().call(e) === "foo" && d.y().apply(e) === "foo";
       };
console.log(test())