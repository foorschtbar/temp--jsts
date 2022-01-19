'use strict';

const primes = [ 2, 3, 5, 7, 11 ];

const isEven = function (n) {
  return n % 2 == 0;
};

// WIE-Programmierung (prozedurale Denkweise)
const processReverse = function (array, fn) {
  for (let i = array.length - 1; i >= 0; i--) {
    fn(array[i]);
  }
};

// WAS-Programmierung (deklarative Denkweise)
processReverse(primes, function (prime) {
  console.log(prime, isEven(prime));
});
