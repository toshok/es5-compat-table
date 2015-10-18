// object destructuring with primitives
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var {toFixed} = 2;
        var {slice} = '';
        var toString, match;
        ({toString} = 2);
        ({match} = '');
        return toFixed === Number.prototype.toFixed
          && toString === Number.prototype.toString
          && slice === String.prototype.slice
          && match === String.prototype.match;
       };
console.log(test())