interface Person {
  firstName: string;
  lastName: string;
  getFullName: () => string;
}

interface Human {
  firstName: string;
  lastName: string;
  getFullName: () => string;
  age: number;
}

const elon: Human = {
  firstName: 'Elon',
  lastName: 'Musk',
  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  },
  age: 50
};

const greetPerson = function (person: Person): void {
  console.log(person.getFullName());
};

greetPerson(elon);
