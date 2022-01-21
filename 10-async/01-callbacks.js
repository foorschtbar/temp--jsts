'use strict';

const getPizza = function (callback) {
  // ...
  callback();
};

getPizza(() => {
  console.log('Pizza ist fertig!');
});

// --------------------

const primes = [ 2, 3, 5, 7, 11 ];

primes.forEach(prime => {
  // ...
});

primes.map(prime => {
  // ...
});
