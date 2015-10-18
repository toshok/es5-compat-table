// line break normalisation
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () { 
        var cr   = `xy`;
        var lf   = `x
y`;
        var crlf = `x
y`;

        return cr.length === 3 && lf.length === 3 && crlf.length === 3
          && cr[1] === lf[1] && lf[1] === crlf[1] && crlf[1] === '\n';
       };
console.log(test())
