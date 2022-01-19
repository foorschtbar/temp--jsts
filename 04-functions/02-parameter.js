'use strict';

// x und y sind Parameter der Funktion
const multiply = function (x, y, z = 1) {
  return x * y * z;
};

// 23 und 42 sind Argumente des Funktionsaufrufs
const product = multiply(7, 5);

console.log(product);

// --------------------------

// Rest Operator => variadische Parameter
const add = function (a, b, ...values) {
  let sum = a + b;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }

  return sum;
}

const sum = add(5, 7);

console.log(sum);
