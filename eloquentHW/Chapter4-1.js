/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

let range = (a, b) => {
    let result = [];
    for(let i=a; i<=b; i++){
        result.push(i);
    }
    return result;
}

let sum = (array) => array.reduce((a, b) => a + b, 0);

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sum(range(1, 10)));
// → 55

let rangeStep = (a, b, c=1) => {
    if (c === 0) throw new Error("Step value cannot be zero");

    let result = [];
    if (a > b && c<0){
        for(let i=a; i>=b; i+=c){
            result.push(i);
        }
        return result;
    } else if (a > b && c>0){
        return "you are missing third parameter or its not negative!"
    }

    for(let i=a; i<=b; i+=c){
        result.push(i);
    }
    return result;
}

console.log(rangeStep(5, 2, -1));
// → [5, 4, 3, 2]


//Perspnal NOTES on the task
//Came to this task a few months later after having go through several ccoursers and starting reading the book again.
//Right now I feel more confident even thoiugh I havent moved past basic JS on the past year :(