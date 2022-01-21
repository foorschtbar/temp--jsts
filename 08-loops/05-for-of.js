'use strict';

// Array iterieren
const primes = [ 2, 3, 5, 7, 11 ];

for (const prime of primes) {
  // ...
}

// Objekt iterieren
const person = {
  firstName: 'Steve',
  lastName: 'Jobs'
};

for (const [ key, value ] of Object.entries(person)) {
  // ...
}

for (const key of Object.keys(person)) {
  // ...
}

for (const value of Object.values(person)) {
  // ...
}
