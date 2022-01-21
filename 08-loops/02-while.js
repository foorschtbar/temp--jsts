'use strict';

let x = 0.1;

// Abweisende Schleife, wird evtl gar nicht durchlaufen
while (x < 5) {
  // ...
  x *= 2;
}

// Nicht-abweisende Schleife, wird garantiert mindestens einmal durchlaufen
do {
  // ...
  x *= 2;
} while (x < 5);
