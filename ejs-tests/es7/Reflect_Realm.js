// Reflect.Realm
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
    var i, names =
      ["eval", "global", "intrinsics", "stdlib", "directEval",
      "indirectEval", "initGlobal", "nonEval"];

    if (typeof Reflect !== "object" || typeof Reflect.Realm !== "function"
        || typeof Reflect.Realm.prototype !== "object") {
      return false;
    }
    for (i = 0; i < names.length; i++) {
      if (!(names[i] in Reflect.Realm.prototype)) {
        return false;
      }
    }
    return true;
   };
console.log(test())