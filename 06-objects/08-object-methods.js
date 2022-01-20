'use strict';

const person = {
  firstName: 'Donald',
  lastName: 'Duck',
  getFullName () {
    return 'Donald Duck';
  }
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
