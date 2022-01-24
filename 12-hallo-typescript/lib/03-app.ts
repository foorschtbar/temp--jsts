class Animal {
  protected legs: number;

  public constructor () {
    this.legs = 4;
  }
}

class Dog extends Animal {
  #name: string;

  public constructor (name: string) {
    super();
    this.#name = name;
  }

  public getName (): string {
    return this.#name;
  }
}

const alice = new Dog('Alice');

console.log(alice.getName());
