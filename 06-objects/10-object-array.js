'use strict';

const person = {
  firstName: 'Donald',
  lastName: 'Duck',
  getFullName () {
    return 'Donald Duck';
  }
};

const person2 = Object.
  fromEntries(Object.
    entries(person).
      filter(([ key, value ]) => typeof value !== 'function').
      map(([ key, value ]) => [ key.toUpperCase(), value ])
    );

console.log(person);
console.log(person2);
