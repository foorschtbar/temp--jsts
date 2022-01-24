const connect = function ({ host, port }: {
  host: string;
  port: number;
}): void {
  console.log(`Connecting to http://${host}:${port}...`);
};

connect({ host: 'localhost', port: 80 });
