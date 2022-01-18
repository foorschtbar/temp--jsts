
'use strict';

const doSomething = function () {
  x = 5;

  console.log(x);
};

const doSomethingElse = function () {
  console.log(x);
};

doSomething();
doSomethingElse();
