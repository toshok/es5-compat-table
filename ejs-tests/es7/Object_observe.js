// Object.observe
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
    var obj = {x: 1};
    Object.observe(obj, function(changes){
      var data = changes[0];
      if(data.name === 'x' && data.type === 'update' && data.oldValue === 1 && data.object.x === 2){
        asyncTestPassed();
      }
    });
    obj.x = 2;
   };
console.log(test())