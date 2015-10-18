// Reflect.ownKeys, symbol keys
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var s1 = Symbol(), s2 = Symbol(), s3 = Symbol();
        var proto = {};
        proto[s1] = true;
        var obj = Object.create(proto);
        obj[s2] = true;
        Object.defineProperty(obj, s3, { value: true, enumerable: false });

        var keys = Reflect.ownKeys(obj);
        return keys.indexOf(s2) >-1 && keys.indexOf(s3) >-1 && keys.length === 2;
       };
console.log(test())