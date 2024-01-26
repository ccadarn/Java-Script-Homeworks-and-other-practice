/*
Create a Counter:
Create a function counter that returns a closure. The closure should, when called, increment and return a counter variable.
*/

let counter = () => {
    let count = 0;
    return () => count++;
}

let increment = counter();

console.log(increment()); // Output: 0
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2


