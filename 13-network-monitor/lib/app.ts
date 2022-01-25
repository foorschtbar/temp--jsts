// import { isAvailable } from './isAvailableCallback';
//
// isAvailable({ url: 'https://www.thenativeweb.io' }, (err, isAvailable) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//
//   if (isAvailable) {
//     console.log('Webseite ist erreichbar!');
//   } else {
//     console.log('Webseite ist nicht erreichbar!');
//   }
// });


// import { isAvailable } from './isAvailablePromise';
//
// isAvailable({ url: 'https://www.thenativeweb.io' }).then(isAvailable => {
//   if (isAvailable) {
//     console.log('Webseite ist erreichbar!');
//   } else {
//     console.log('Webseite ist nicht erreichbar!');
//   }
// }).catch((err: Error) => {
//   console.log(err.message);
// });


import { isAvailable } from './isAvailablePromise';

const main = async function (): Promise<void> {
  try {
    const websiteStatus = await isAvailable({ url: 'https://www.thenativeweb.io' });

    if (websiteStatus) {
      console.log('Webseite ist erreichbar!');
    } else {
      console.log('Webseite ist nicht erreichbar!');
    }
  } catch (ex) {
    console.log((ex as Error).message);
  }
};

(async (): Promise<void> => {
  try {
    main();
  } catch (ex) {
    console.log((ex as Error).message);
  }
})();
