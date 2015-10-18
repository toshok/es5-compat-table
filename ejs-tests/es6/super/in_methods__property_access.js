// in methods, property access
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class B {}
        B.prototype.qux = "foo";
        B.prototype.corge = "baz";
        class C extends B {
          quux(a) { return super.qux + a + super["corge"]; }
        }
        C.prototype.qux = "garply";
        return new C().quux("bar") === "foobarbaz";
       };
console.log(test())