type AddFn = (x: number) => number;

const getAddNumber = function (number: number): AddFn {
  return function (x: number): number {
    return x + number;
  };
};

const add17: AddFn = getAddNumber(17);
const add23: AddFn = getAddNumber(23);

console.log(add17(5));
console.log(add23(5));
