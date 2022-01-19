'use strict';

// Ausführen
//   $ node ./05-tasks/01-app.js

const createStack = function () {
  // TODO: Stack implementieren und Anwendung korrekt ans Laufen bringen,
  //       wobei die interne Datenstruktur privat sein sollte.
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
