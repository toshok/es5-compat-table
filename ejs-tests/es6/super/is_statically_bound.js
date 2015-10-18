// is statically bound
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        class B {
          qux() { return "bar"; }
        }
        class C extends B {
          qux() { return super.qux() + this.corge; }
        }
        var obj = {
          qux: C.prototype.qux,
          corge: "ley"
        };
        return obj.qux() === "barley";
       };
console.log(test())