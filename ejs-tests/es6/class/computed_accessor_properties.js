// computed accessor properties
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var garply = "foo", grault = "bar", baz = false;
        class C {
          get [garply]() { return "foo"; }
          set [grault](x) { baz = x; }
        }
        new C().bar = true;
        return new C().foo === "foo" && baz;
       };
console.log(test())