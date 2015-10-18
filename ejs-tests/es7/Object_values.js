// Object.values
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
    var obj = Object.create({ a: "qux", d: "qux" });
    obj.a = "foo"; obj.b = "bar"; obj.c = "baz";
    var v = Object.values(obj);
    return Array.isArray(v) && String(v) === "foo,bar,baz";
   };
console.log(test())