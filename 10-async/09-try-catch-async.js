'use strict';

try {
  setTimeout(() => {
    throw new Error('Something went wrong in an async way...');
  }, 100);
} catch {
  console.log('Fehler!');
}
