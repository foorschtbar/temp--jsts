'use strict';

const Dog = function (options) {
  this.name = options.name;
};

Dog.prototype.bark = function () {
  console.log(`Wau wau! ${this.name}`);
};

const alice = new Dog({ name: 'Alice' });

// Method invocation: this zeigt auf das alice-Objekt
alice.bark();
