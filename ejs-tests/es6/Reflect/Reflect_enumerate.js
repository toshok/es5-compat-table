// xfail: unknown
// Reflect.enumerate
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var obj = { foo: 1, bar: 2 };
        var iterator = Reflect.enumerate(obj);
        var passed = 1;
        if (typeof Symbol === 'function' && 'iterator' in Symbol) {
          passed &= Symbol.iterator in iterator;
        }
        var item = iterator.next();
        passed &= item.value === "foo" && item.done === false;
        item = iterator.next();
        passed &= item.value === "bar" && item.done === false;
        item = iterator.next();
        passed &= item.value === undefined && item.done === true;
        return passed === 1;
       };
console.log(test())
