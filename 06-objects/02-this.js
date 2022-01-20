'use strict';

const dog = {
  name: 'Alice',

  bark () {
    console.log(`Wau wau! ${this.name}`)
  }
};

// Method invocation => this zeigt auf das Objekt dog
dog.bark();
