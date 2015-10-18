// xfail: unknown
// correct prototype chains
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var constructors = [
          'Int8Array',
          'Uint8Array',
          'Uint8ClampedArray',
          'Int16Array',
          'Uint16Array',
          'Int32Array',
          'Uint32Array',
          'Float32Array',
          'Float64Array'
        ];
        var constructor = Object.getPrototypeOf(Int8Array);
        var prototype = Object.getPrototypeOf(Int8Array.prototype);
        for(var i = 0; i < constructors.length; i+=1) {
          if (!(constructors[i] in global
              && Object.getPrototypeOf(global[constructors[i]]) === constructor
              && Object.getPrototypeOf(global[constructors[i]].prototype) === prototype
              && Object.getOwnPropertyNames(global[constructors[i]].prototype).sort() + ''
                === "BYTES_PER_ELEMENT,constructor")) {
            return false;
          }
        }
        return true;
       };
console.log(test())
