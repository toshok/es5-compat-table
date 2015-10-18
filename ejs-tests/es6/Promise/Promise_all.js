// xfail: unknown
// Promise.all
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
function asyncTestPassed() {
console.log("passed");
}
var test = function () { 
        var fulfills = Promise.all([
          new Promise(function(resolve)   { setTimeout(resolve,200,"foo"); }),
          new Promise(function(resolve)   { setTimeout(resolve,100,"bar"); }),
        ]);
        var rejects = Promise.all([
          new Promise(function(_, reject) { setTimeout(reject, 200,"baz"); }),
          new Promise(function(_, reject) { setTimeout(reject, 100,"qux"); }),
        ]);
        var score = 0;
        fulfills.then(function(result) { score += (result + "" === "foo,bar"); check(); });
        rejects.catch(function(result) { score += (result === "qux"); check(); });

        function check() {
          if (score === 2) asyncTestPassed();
        }
       };
console.log(test())
