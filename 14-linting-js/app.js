'use strict';

const pi = 3.14;
const area = function (radius) {
  return pi * (radius ** 2);
};
const areaOfCircle = area(2);

// eslint-disable-next-line no-console
console.log(`Der Kreis mit dem Radius 2 hat eine Fläche von: ${areaOfCircle}`);
