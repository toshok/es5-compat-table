// xfail: unknown
// Array.from map function, generator instances
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var iterable = (function*(){ yield "foo"; yield "bar"; yield "bal"; }());
        return Array.from(iterable, function(e, i) {
          return e + this.baz + i;
        }, { baz: "d" }) + '' === "food0,bard1,bald2";
       };
console.log(test())
