'use strict';

console.log('Start');

setTimeout(() => {
  console.log('Wecker');
}, 100);

const count = function (from, to) {
  for (let i = from; i < to; i++) {
    // ...
    if (i - from === 1_000_000) {
      setImmediate(() => {
        count(i + 1, to);
      });
      return;
    }
  }
};

count(0, 10_000_000_000);

console.log('Ende');
