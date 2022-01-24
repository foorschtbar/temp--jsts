class Queue<TValue> {
  #values: TValue[];

  constructor () {
    this.#values = [];
  }

  isEmpty () {
    return this.#values.length === 0;
  }

  enqueue (value: TValue) {
    this.#values.push(value);
  }

  dequeue () {
    return this.#values.shift();
  }

  front () {
    return this.#values[0];
  }
}
