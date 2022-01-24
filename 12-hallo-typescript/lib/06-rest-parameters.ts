const addWithRest = function (x: number, y: number, ...numbers: number[]): number {
  let sum = x + y;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
};

const sumWithRest = addWithRest(2, 3, 5, 7, 11);

console.log(sumWithRest);
