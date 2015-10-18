// xfail: unknown
// %GeneratorPrototype%
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        function * generatorFn(){}
        var ownProto = Object.getPrototypeOf(generatorFn());
        var passed = ownProto === generatorFn.prototype;

        var sharedProto = Object.getPrototypeOf(ownProto);
        passed &= sharedProto !== Object.prototype &&
          sharedProto === Object.getPrototypeOf(function*(){}.prototype) &&
          sharedProto.hasOwnProperty('next');

        return passed;
       };
console.log(test())
