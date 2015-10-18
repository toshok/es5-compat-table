// xfail: unknown
// Object.getOwnPropertyNames
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var obj = {
          2:    true,
          0:    true,
          1:    true,
          ' ':  true,
          9:    true,
          D:    true,
          B:    true,
          '-1': true,
        };
        obj.A = true;
        obj[3] = true;
        Object.defineProperty(obj, 'C', { value: true, enumerable: true });
        Object.defineProperty(obj, '4', { value: true, enumerable: true });
        delete obj[2];
        obj[2] = true;

        return Object.getOwnPropertyNames(obj).join('') === "012349 DB-1AC";
       };
console.log(test())
