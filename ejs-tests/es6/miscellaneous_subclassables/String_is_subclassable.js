// String is subclassable
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class C extends String {}
        var c = new C("golly");
        return c instanceof String
          && c instanceof C
          && c + '' === "golly"
          && c[0] === "g"
          && c.length === 5;
       };
console.log(test())
