// xfail: unknown
// tags' names are lowercase
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var i, names = ["anchor", "big", "bold", "fixed", "fontcolor", "fontsize",
          "italics", "link", "small", "strike", "sub", "sup"];
        for (i = 0; i < names.length; i++) {
          if (""[names[i]]().toLowerCase() !== ""[names[i]]()) {
            return false;
          }
        }
        return true;
       };
console.log(test())
