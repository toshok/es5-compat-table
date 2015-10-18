// arguments object interaction
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        return (function (foo, ...args) {
          foo = "qux";
          // The arguments object is not mapped to the
          // parameters, even outside of strict mode.
          return arguments.length === 3
            && arguments[0] === "foo"
            && arguments[1] === "bar"
            && arguments[2] === "baz";
        }("foo", "bar", "baz"));
       };
console.log(test())