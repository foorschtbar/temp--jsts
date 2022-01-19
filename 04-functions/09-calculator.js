'use strict';

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const calculator = {
  // Wenn Key === Value, dann genügt es, nur den Key anzugeben
  add,
  subtract,
  multiply,
  divide,

  // Method shorthand syntax (bei Funktionen in Objekten kann man das Wort
  // function und den Doppelpunkt weglassen)
  modulo (x, y) {
    return x % y;
  }
};
