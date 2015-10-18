// tagged template strings
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var called = false;
        function fn(parts, a, b) {
          called = true;
          return parts instanceof Array &&
            parts[0]     === "foo"      &&
            parts[1]     === "bar\n"    &&
            parts.raw[0] === "foo"      &&
            parts.raw[1] === "bar\\n"   &&
            a === 123                   &&
            b === 456;
        }
        return fn `foo${123}bar\n${456}` && called;
       };
console.log(test())
