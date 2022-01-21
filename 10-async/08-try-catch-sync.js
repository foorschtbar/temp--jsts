'use strict';

try {
  // ...
  throw new Error('Something, somewhere, went horribly wrong...');
  // ...
} catch (ex) {
  console.log('Fehler!', ex.message);
} finally {
  console.log('Aufräumen');
}
