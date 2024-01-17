/*
Memoization:
Implement a function memoize that takes a function f as an argument and returns a memoized version of it. 
The memoized function should remember the results of previous calls.
*/

let memorize = (f) => {
    let lastInput = null;
    let lastResult = null;

    return (...args) => {
        const currentInputString = JSON.stringify(args);
        if (currentInputString === lastInput) {
            return `Retrieving from memory... Memorized result is: ${lastResult}`;
        } else {
            const result = f(...args);
            lastInput = currentInputString;
            lastResult = result;
            return `${result}, memorizing...`;
        }
    }
}

// Example function to be memoized
function add(a, b) {
    return a + b;
}

// Memoize the add function
let memoizedAdd = memorize(add);

console.log(memoizedAdd(2, 3)); // Output: 5, memorizing...
console.log(memoizedAdd(2, 3)); // Output: Retrieving from memory... Memorized result is: 5
console.log(memoizedAdd(4, 5)); // Output: 9, memorizing...
console.log(memoizedAdd(4, 5)); // Output: Retrieving from memory... Memorized result is: 9
