'use strict';

class Queue {
  constructor () {
    this.value = Math.random();
  }

  clone (obj) {
    return Object.assign(
      new Queue(),
      JSON.parse(JSON.stringify(this))
    );
  }

  getValue () {
    return this.value;
  }
}

const queue = new Queue();
const clonedQueue = queue.clone();

console.log(queue.getValue());
console.log(clonedQueue.getValue());
