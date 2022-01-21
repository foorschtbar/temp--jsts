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

// -------

const main = async function () {
  console.log('BERECHNEN');

  await sleep(2_000);

  console.log('Berechnung läuft...');

  try {
    const result = await divide(23, 0);

    console.log('Der Quotient ist:', result);
  } catch (ex) {
    console.log(ex.message);
  }
};

// 1. Top-Level await (voraussichtlich ab ES2022)
// try {
//   await main();
// } catch ...
//     // ...
// }

// 2. Async Immediately Invoked Function Expression (AIIFE)
(async function () {
  try {
    await main();
  } catch {
    // ...
  }
})();

// 3. async-Function als Promise behandeln
// main().catch(err => {
//   // ...
// });
