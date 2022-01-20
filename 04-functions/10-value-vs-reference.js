'use strict';

// Feste Größe (aka Value Types, liegen auf dem Stack)
// - number
// - boolean
// - undefined

// Variable Größe (aka Reference Types, liegen auf dem Heap)
// - string (verhalten sich aber wie ein Value Type)
// - function
// - object

// Call by Value
const doNumber = function (n) {
  n = n + 1;
};

let x = 5;
doNumber(x);
console.log(x); // => 5

// ---

// Call by Reference
const doObject = function (o) {
  // // Shallow clone
  // const copyOfO = Object.assign({}, o);
  //
  // // Deep clone
  // const deepCopyOfO = structuredClone(o);            // "Standard", superneu
  // const deepCopyOfO = JSON.parse(JSON.stringify(o)); // Keine Funktionen, langsam
  // const deepCopyOfO = lodash.cloneDeep(o);           // Externe Bibliothek

  o.myProperty = 'bar';
};

let y = {
  myProperty: 'foo'
};
doObject(y);
console.log(y);
