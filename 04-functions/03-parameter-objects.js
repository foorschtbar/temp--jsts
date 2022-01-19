'use strict';

const saveFile = function (convertToPng, updateTimestamp, withFileExtension) {
  // ...
  if (convertToPng) {
    // ...
  }
};

saveFile(true, false, true);

// -----------------------------------------

const saveFile = function (options) {
  // ...
  if (options.convertToPng) {
    // ...
  }
};

saveFile({
  convertToPng: true,
  updateTimestamp: false,
  withFileExtension: true
});
