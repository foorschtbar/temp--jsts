'use strict';

console.log('Start');

const now = Date.now();
const future = now + 2000;

while (Date.now() < future) {
  // Wait ...
}

console.log('Ende');
