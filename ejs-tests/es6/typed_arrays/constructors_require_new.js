// constructors require new
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var buffer = new ArrayBuffer(64);
        var constructors = [
          ['ArrayBuffer',ArrayBuffer],
          ['DataView',DataView],
          ['Int8Array',Int8Array],
          ['Uint8Array',Uint8Array],
          ['Uint8ClampedArray',Uint8ClampedArray],
          ['Int16Array',Int16Array],
          ['Uint16Array',Uint16Array],
          ['Int32Array',Int32Array],
          ['Uint32Array',Uint32Array],
          ['Float32Array',Float32Array],
          ['Float64Array',Float64Array]
        ];
        return constructors.every(function (pair) {
          var name = pair[0];
          var constructor = pair[1];
          try {
            constructor(name === "ArrayBuffer" ? 64 : buffer);
            return false;
          } catch(e) {
            return true;
          }
        });
       };
console.log(test())
