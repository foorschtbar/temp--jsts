
var x = 23;

console.log(x); // 1: 23

var doSomething = function () {
  console.log(x); // 2: undefined, wegen Hoisting!
  var x = 42;
  console.log(x); // 3: 42
};

doSomething();

console.log(x); // 4: 23
