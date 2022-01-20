'use strict';

const dog = {
  name: 'Alice',

  bark (loud = false) {
    if (loud) {
      console.log(this.name.toUpperCase());
      return;
    }

    console.log(this.name);
  }
};

// 1. Method invocation: this zeigt auf das Objekt, an dem die Funktion
// aufgerufen wird
dog.bark();

// 2. Function invocation: this ist undefined (im Strict-Mode), oder es zeigt
// auf den globalen Kontext aka window-Objekt (im Nicht-Strict-Mode)
const externalBark = dog.bark;
// externalBark(); // => liefert einen Fehler

// 3. Constructor invocation: this zeigt auf ein neu erzeugtes Objekt
// const foo = new externalBark(); // => liefert einen Fehler

// 4. Call invocation: this zeigt auf den ersten Parameter von call
const dog2 = {
  name: 'Malin'
};
externalBark.call(dog2, true); // => äquivalent zu dog2.externalBark();

// 5. Apply invocation: this zeigt auf den ersten Parameter von apply
const dog3 = {
  name: 'Ella'
};
externalBark.apply(dog3, [ true ]); // => äquivalent zu dog3.externalBark();
