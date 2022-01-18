
let x = 23;

console.log(x); // 1: 23

let doSomething = function () {
  console.log(x); // 2: undefined, wegen Hoisting!
  let y = 42;
  console.log(y); // 3: 42
};

doSomething();

console.log(x); // 4: 23
