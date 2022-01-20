'use strict';

const createStack = function () {
  const values = [];

  const isEmpty = function () {
    return values.length === 0;
  };

  const put = function (value) {
    values.unshift(value);
  };

  const top = function () {
    return values[0];
  };

  const get = function () {
    return values.shift();
  };

  const stack = { isEmpty, put, top, get };

  return stack;
};

const stack = createStack();

console.log(stack.isEmpty());    // => true

stack.put(23);
stack.put(42);
stack.put(7);

console.log(stack.isEmpty());    // => false

console.log(stack.top());        // => 7
console.log(stack.top());        // => 7

console.log(stack.get());        // => 7
console.log(stack.top());        // => 42

console.log(stack.get());        // => 42
console.log(stack.get());        // => 23

console.log(stack.isEmpty());    // => true

const anotherStack = createStack();

stack.put(23);
anotherStack.put(42);

console.log(stack.top());        // => 23
console.log(anotherStack.top()); // => 42
