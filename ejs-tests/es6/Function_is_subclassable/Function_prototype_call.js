// xfail: ejs doesn't support "new Function"
// Function.prototype.call
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class C extends Function {}
        var c = new C("x", "return this.bar + x;");
        return c.call({bar:1}, 2) === 3;
       };
console.log(test())
