// correct "this" binding
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        function * generator(){
          yield this.x; yield this.y;
        };
        var iterator = { g: generator, x: 5, y: 6 }.g();
        var item = iterator.next();
        var passed = item.value === 5 && item.done === false;
        item = iterator.next();
        passed    &= item.value === 6 && item.done === false;
        item = iterator.next();
        passed    &= item.value === undefined && item.done === true;
        return passed;
       };
console.log(test())