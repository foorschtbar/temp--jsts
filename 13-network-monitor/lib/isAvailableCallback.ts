import https from 'https';

type IsAvailableCallback = (err: Error | null, isAvailable?: boolean) => void;

const isAvailable = function ({ url }: {
  url: string;
}, callback: IsAvailableCallback): void {
  https.get(url, res => {
    if (res.statusCode !== 200) {
      callback(null, false);
      return;
    }

    callback(null, true);
  }).on('error', err => {
    callback(err);
  });
};

export { isAvailable, IsAvailableCallback };
