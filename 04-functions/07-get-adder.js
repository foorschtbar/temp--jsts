'use strict';

const getAddNumber = function (number) {
  return function (x) {
    return x + number;
  };
};

const add17 = getAddNumber(17);
const add23 = getAddNumber(23);

console.log(add17(5));
console.log(add23(5));
