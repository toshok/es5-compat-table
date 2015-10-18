// method calls use correct "this" binding
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class B {
          qux(a) { return this.foo + a; }
        }
        class C extends B {
          qux(a) { return super.qux("bar" + a); }
        }
        var obj = new C();
        obj.foo = "foo";
        return obj.qux("baz") === "foobarbaz";
       };
console.log(test())