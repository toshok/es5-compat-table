// xfail: unknown
// Function.prototype.bind
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class C extends Function {}
        var c = new C("x", "y", "return this.bar + x + y;").bind({bar:1}, 2);
        return c(6) === 9 && c instanceof C;
       };
console.log(test())
