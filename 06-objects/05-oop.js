'use strict';

class Dog {
  constructor ({ name, color }) {
    this.name = name;
    this.color = color;
  }

  bark () {
    console.log(`Wau wau! ${this.name}`);
  }
}

const alice = new Dog({ name: 'Alice', color: 'tricolour' });

alice.bark();
