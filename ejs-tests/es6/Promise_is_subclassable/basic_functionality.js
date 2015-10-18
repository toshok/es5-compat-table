// basic functionality
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
function asyncTestPassed() {
  console.log("passed");
}
var test = function () { 
        class P extends Promise {}
        var p1 = new P(function(resolve, reject) { resolve("foo"); });
        var p2 = new P(function(resolve, reject) { reject("quux"); });
        var score = +(p1 instanceof P);

        function thenFn(result)  { score += (result === "foo");  check(); }
        function catchFn(result) { score += (result === "quux"); check(); }
        function shouldNotRun(result)  { score = -Infinity;   }

        p1.then(thenFn, shouldNotRun);
        p2.then(shouldNotRun, catchFn);
        p1.catch(shouldNotRun);
        p2.catch(catchFn);

        p1.then(function() {
          // P.prototype.then() should return a new P
          score += p1.then() instanceof P && p1.then() !== p1;
          check();
        });

        function check() {
          if (score === 5) asyncTestPassed();
        }
       };
console.log(test())
