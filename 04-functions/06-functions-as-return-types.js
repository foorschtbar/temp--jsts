'use strict';

const getFunction = function (message) {
  return function (number) {
    console.log(message);

    return number * 7;
  };
};

const fn = getFunction('Hallo');
const value = fn(5);

console.log(value);
