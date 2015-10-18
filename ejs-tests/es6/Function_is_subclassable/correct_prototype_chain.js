// xfail: ejs doesn't support "new Function"
// correct prototype chain
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class C extends Function {}
        var c = new C("return 'foo';");
        return c instanceof C && c instanceof Function && Object.getPrototypeOf(C) === Function;
       };
console.log(test())
