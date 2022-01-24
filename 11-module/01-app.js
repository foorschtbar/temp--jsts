'use strict';

const { pi, multiply, power } = require('./math/02-math');

const area = function (r) {
  return multiply(pi, power(r, 2));
};

console.log(area(2));
