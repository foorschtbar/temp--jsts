'use strict';

const person = {
  firstName: 'Elon',
  lastName: 'Musk'
};

// Objekte iterieren
for (const key in person) {
  if (Object.hasOwnProperty(person, key)) {
    const value = person[key];

    // ...
  }
}
