'use strict';

const primes = [ 2, 3, 5, 7, 11, 13, 17, 19 ];

console.log(
  primes.
    filter(prime => prime > 10).
    map(prime => prime * 2).
    reduce((sum, prime) => sum + prime, 0)
);

console.log(primes.some(prime => prime % 2 === 0));
console.log(primes.every(prime => prime % 2 === 0));

console.log(primes.includes(17));
console.log(primes.findIndex(prime => prime === 17));
console.log(primes.find(prime => prime > 10));
