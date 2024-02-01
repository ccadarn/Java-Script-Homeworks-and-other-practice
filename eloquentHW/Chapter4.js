/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/


//----------------------------First task
//My first try (totally failed it ^^, misunderstood what the task was asking to do)
let range = (a,b) => {
    let array = (array) => {
        return array.slice(a-1,b)
    }
    return array
}

let rangeOneToTen = range(1,10);
let rangeFiveToFifteen = range(5,15);

// 2nd try
let range2 = (a,b) => {
    let array = [];
    for(let i=a; i<=b; i++){
        array.push(i)
    }
    return array;
}

console.log(range2(1,10)) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//-------------------------------------------Sum task
//All correct on the first try ^^

let sum = (array) => {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // -> 55

//---------------------------------Bonus task
let modifiedRange = (a,b,c) => {
    let array = [];
    if (a<b){
        c = c ?? 1;
        for(let i=a; i<=b; i+=c){
            array.push(i)
        }
        return array;
    } else {
        c = c ?? -1;

        for(let i=a; i>=b; i+=c){
            array.push(i)
        }
        return array;
    }
}

console.log(modifiedRange(5,2,-1)); // → [5,4,3,2]
console.log(modifiedRange(10,2)); // -> [10,9,8,7,6,5,4,3,2]
