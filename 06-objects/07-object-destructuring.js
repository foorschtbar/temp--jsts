'use strict';

const person = {
  firstName: 'Donald',
  lastName: 'Duck',
  city: 'Ducksburgh',
  clothing: 'sailor',
  nephews: [ 'Tick', 'Trick', 'Track' ],
  look: { wearsGlasses: false }
};

// const firstName = person.firstName;
// const lastName = person.lastName;

const { firstName, lastName, ...rest } = person;

console.log(firstName);
console.log(lastName);
console.log(rest);

const person2 = {
  ...person,
  firstName: 'Dagobert',
  clothing: 'tailcoat',
  nephews: []
};

person2.look.wearsGlasses = true;

console.log(person);
console.log(person2);
