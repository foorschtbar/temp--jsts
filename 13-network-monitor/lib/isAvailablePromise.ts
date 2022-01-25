import https from 'https';

const isAvailable = function ({ url }: {
  url: string;
}): Promise<boolean> {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode !== 200) {
        resolve(false);
        return;
      }

      resolve(true);
    }).on('error', err => {
      reject(err);
    });
  });
};

export { isAvailable };
