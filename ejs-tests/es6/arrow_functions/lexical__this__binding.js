// lexical "this" binding
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function (){ 
        var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
        var e = { x : "baz", y : d };
        return d("ley") === "barley" && e.y("ley") === "barley";
       };
console.log(test())