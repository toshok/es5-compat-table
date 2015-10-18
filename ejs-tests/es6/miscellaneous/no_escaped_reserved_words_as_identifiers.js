// xcfail: ejs doesn't support eval
// no escaped reserved words as identifiers
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var \u0061;
        try {
          eval('var v\\u0061r');
        } catch(e) {
          return true;
        }
       };
console.log(test())
// xfail: unknown
