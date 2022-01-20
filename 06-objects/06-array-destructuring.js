'use strict';

const primes = [ 2, 3, 5, 7, 11 ];

const recursivePrint = function (array) {
  // Array destructuring
  const [ first, ...rest ] = array;

  console.log(first);

  if (rest.length === 0) {
    return;
  }

  recursivePrint(rest);
};

recursivePrint(primes);
