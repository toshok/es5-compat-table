// Date.parse on invalid dates
if (typeof global === 'undefined') { var global = {}; }
global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }
var test = function () {
    var brokenOnFirefox = !isNaN(Date.parse('2012-04-04T24:00:00.500Z'));
    var brokenOnIE10 = !isNaN(Date.parse('2012-12-31T24:01:00.000Z'));
    var brokenOnChrome = !isNaN(Date.parse('2011-02-29T12:00:00.000Z'));
    return !brokenOnFirefox && !brokenOnIE10 && !brokenOnChrome;
  };
console.log(test())