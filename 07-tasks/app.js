'use strict';

// TODO
// - Queue-Klasse
// - logify-Funktion (für Teilaufgabe 3)

// --- 1: Klasse implementieren ---

const queue = new Queue();

console.log(queue.isEmpty());             // => true

queue.enqueue(42);
queue.enqueue(23);
queue.enqueue(7);

console.log(queue.isEmpty());             // => false
console.log(queue.front());               // => 42
console.log(queue.front());               // => 42

console.log(queue.dequeue());             // => 42
console.log(queue.dequeue());             // => 23
console.log(queue.dequeue());             // => 7
console.log(queue.isEmpty());             // => true

const anotherQueue = new Queue();

queue.enqueue(42);
anotherQueue.enqueue(23);

console.log(queue.front());               // => 42
console.log(anotherQueue.front());        // => 23

// --- 2: Objekte klonen ---

const clonedQueue = queue.clone();

console.log(clonedQueue.isEmpty());       // => false
console.log(clonedQueue.front());         // => 42
console.log(clonedQueue.dequeue());       // => 42
console.log(clonedQueue.isEmpty());       // => true

console.log(queue.front());               // => 42

// --- 3: Advanced stuff ---

logify(queue);

console.log(queue.front());               // => 42
// Zusätzlich: "front() wurde aufgerufen" auf der Konsole

console.log(queue.isEmpty());             // => false
// Zusätzlich: "isEmpty() wurde aufgerufen" auf der Konsole

queue.enqueue(23);
// Zusätzlich: "enqueue(23) wurde aufgerufen" auf der Konsole
