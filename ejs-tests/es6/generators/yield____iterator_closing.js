// xfail: unknown
// yield *, iterator closing
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var closed = '';
        var iter = global.__createIterableObject([1, 2, 3], {
          'return': function(){
            closed += 'a';
            return {done: true};
          }
        });
        var gen = (function* generator(){
          try {
            yield *iter;
          } finally {
            closed += 'b';
          }
        })();
        gen.next();
        gen['return']();
        return closed === 'ab';
       };
console.log(test())
