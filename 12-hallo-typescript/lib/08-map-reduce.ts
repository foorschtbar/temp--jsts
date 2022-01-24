const primes: (number | undefined)[] = [ 2, 3, 5, 7, 11 ];

const squares = primes.
  map(prime => prime! ** 2).
  reduce((prime, sum) => prime + sum);
