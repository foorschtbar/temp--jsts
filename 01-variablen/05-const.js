
const x = 23;

// x = 42;     // TypeError: Assignment to constant variable.



const y = {
  firstName: 'Donald'
};

// TypeError: Assignment to constant variable.
// y = {
//   firstName: 'Dagobert'
// };

y.firstName = 'Dagobert';

console.log(y);
