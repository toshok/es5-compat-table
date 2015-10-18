// xfail: pretty sure it's because we leave the spaces in after the \n
// basic functionality
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var a = "ba", b = "QUX";
        return `foo bar
        ${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux";
       };
console.log(test())
