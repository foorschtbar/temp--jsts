'use strict';

const https = require('https');

const isUp = function ({ url }, callback) {
  https.get(url, function (res)  {
    const { statusCode } = res;
    const isAvailable = statusCode === 200;

    callback(null, isAvailable);
  }).on('error', err => {
    callback(err);
  });
};

setInterval(() => {
  isUp({ url: 'https://www.thenativeweb.io' }, (err, isAvailable) => {
    if (err) {
      console.log('Prüfung fehlgeschlagen!');
      return;
    }

    console.log(isAvailable ? 'Webseite erreichbar' : 'Webseite nicht erreichbar');
  });
}, 5_000);
