'use strict';

const add = function (x, y) {
  return x + y;
};

const add = (x, y) => x + y;
const id = x => x;
const get5 = () => 5;

// Vorsicht bei Objekten, die müssen nochmals geklammert werden!
const getPerson = () => ({
  firstName: 'Donald',
  lastName: 'Duck'
});

const add = (x, y) => {
  const sum = x + y;

  return sum;
};

console.log(
  [ 2, 3, 5, 7, 11 ].
    map(prime => prime ** 2).
    reduce((sum, prime) => sum + prime, 0)
);
