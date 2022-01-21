'use strict';

const divide = function (x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (y === 0) {
        reject(new Error('Division durch null ist nicht definiert.'));
        return;
      }

      const result = x / y;

      resolve(result);
    }, 3_000);
  });
};

const sleep = function (ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

console.log('BERECHNEN');

sleep(2_000).then(() => {
  console.log('Berechnung läuft...');

  return divide(23, 0);
}).then(result => {
  console.log('Der Quotient ist:', result);
}).catch(err => {
  console.log(err.message);
});
