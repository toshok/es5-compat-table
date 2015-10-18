// generator functions
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
          function correctProtoBound(proto) {
            var f = function*(){};
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(f, proto);
            }
            else {
              f.__proto__ = proto;
            }
            var boundF = Function.prototype.bind.call(f, null);
            return Object.getPrototypeOf(boundF) === proto;
          }
          return correctProtoBound(Function.prototype)
            && correctProtoBound({})
            && correctProtoBound(null);
       };
console.log(test())