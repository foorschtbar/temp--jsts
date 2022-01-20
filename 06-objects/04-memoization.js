'use strict';

const fib = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 1;
  }

  if (fib.cache[n]) {
    return fib.cache[n];
  }

  const nextFib = fib(n - 1) + fib(n - 2);

  fib.cache[n] = nextFib;

  return nextFib;
};

fib.cache = {};

console.log(fib(50));
