'use strict';

const primes = [ 2, 3, 5, 7, 11 ];

// const map = function (array, fn) {
//   const result = [];
//
//   for (let i = 0; i < array.length; i++) {
//     result.push(fn(array[i]));
//   }
//
//   return result;
// };

const doubledPrimes = primes.map(function (prime) {
  return prime * 2;
});
const squaredPrimes = primes.map(function (prime) {
  return prime ** 2;
});

// const reduce = function (array, initialValue, fn) {
//   let result = initialValue;
//
//   for (let i = 0; i < array.length; i++) {
//     result = fn(result, array[i]);
//   }
//
//   return result;
// };

const sumOfPrimes = primes.reduce(function (sum, prime) {
  return sum + prime;
}, 0);
const productOfPrimes = primes.reduce(function (product, prime) {
  return product * prime;
}, 1);

console.log(
  primes.
    map(function (prime) { return prime ** 2; }).
    reduce(function (sum, prime) { return sum + prime; }, 0)
);
