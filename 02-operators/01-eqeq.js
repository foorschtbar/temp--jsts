
const x = {
  foo: 0,

  valueOf: function () {
    this.foo += 1;

    return this.foo;
  }
};

if (x == 1 && x == 2 && x == 3) {
  console.log('Yay!');
}
