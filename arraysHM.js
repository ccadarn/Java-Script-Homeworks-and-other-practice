//This was my first try. )


//Task 1
const printNumbers = (n) => {
    console.log(`Iteration of number ${n}`)
    for (let i=1; i <= n; i++) {
        console.log(i);
    }
    return 'Done';
}

console.log(printNumbers(6));

//Task 2
const calculateFactorial = (num) => {
    console.log(`Factorial of number ${num} is:`)
    let fac = 1
    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    return fac;
}

console.log(calculateFactorial(20));

//Task 3
const multiplicationTable = (n) => {
    console.log(`This is multiplication table of ${n}:`)
    let num = n
    for (i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
    return `Done`;
}

console.log(multiplicationTable(8));

//Task 4
const findPrimes = (n) => {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
};

console.log(findPrimes(12)); // Output the array of prime numbers up to 12


/* Task: Find the Maximum Number

Write a function that takes an array of numbers as an argument and returns the maximum number in the array.

Create a function called findMaxNumber that accepts one parameter (an array).
Inside the function, find and return the largest number in the array.
Test your function with various arrays containing numbers and ensure it returns the correct maximum value.
For instance:

javascript
Copy code
findMaxNumber([3, 7, 2, 10, 5]); // Expected output: 10
findMaxNumber([-1, -5, -2, -8]); // Expected output: -1
findMaxNumber([17, 42, 5, 9, 21]); // Expected output: 42
*/

const findMaxNumber = (arr) => {
    let highestNumber = arr[0]; // Set the initial highestNumber to the first element of the array

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > highestNumber) {
            highestNumber = arr[i]; // Update highestNumber if a larger value is found
        }
    }

    return highestNumber; // Return the highest number after iterating through the whole array
};


/* **NOTE**
As it turned out all that can be achived with build in method 
const maxNumber = Math.max(...numbers);
also in the process learned about spread operator )
*/


console.log(findMaxNumber([3, 7, 2, 10, 5]));
console.log(findMaxNumber([-5, -1, -2, -8]));
console.log(findMaxNumber([17, 42, 5, 9, 21]));

/*
Task 2: Remove Duplicates

Write a function that takes an array as an argument and returns a new array without any duplicate elements.

Create a function called removeDuplicates that accepts one parameter (an array).
Inside the function, create a new array that contains only the unique elements from the original array.
Test your function with arrays containing duplicate elements and ensure it returns a new array with unique elements only.
For example:

javascript
Copy code
removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Expected output: [1, 2, 3, 4, 5]
removeDuplicates(['apple', 'orange', 'apple', 'banana']); // Expected output: ['apple', 'orange', 'banana']
Try implementing this function on your own to practice manipulating arrays.
*/

//----------------------------------------------------------------------

//FAIL :(

/* MY answer
const removeDuplicates = (arr) => {
    let noDupes = [];
    for (let i = 0; i < arr.length; i++) {
        if (!noDupes.includes(arr[i])) {
            noDupes.push(arr[i]);
        }
    }
    return noDupes;
};

*/ 

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//Correct answer
const removeDuplicates = (arr) => {
    let noDupes = [];
    for (let i = 0; i < arr.length; i++) {
        if (!noDupes.includes(arr[i])) {
            noDupes.push(arr[i]);
        }
    }
    return noDupes;
};

/* alternative using for loops
const removeDuplicates = (arr) => {
    let noDupes = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < noDupes.length; j++) {
            if (arr[i] === noDupes[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            noDupes.push(arr[i]);
        }
    }
    return noDupes;
};
*/

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['apple', 'orange', 'apple', 'banana'])); // Expected output: ['apple', 'orange', 'banana']


//--------------------------------------------------
/*Task: Reverse Array Elements

Write a function that reverses the order of elements in an array without using the built-in reverse() method.

Create a function called reverseArray that accepts one parameter (an array).
Inside the function, reverse the order of elements in the array without using the reverse() method.
Return the modified array with the reversed elements.
For example:

javascript
reverseArray([1, 2, 3, 4, 5]); // Expected output: [5, 4, 3, 2, 1]
reverseArray(['apple', 'orange', 'banana']); // Expected output: ['banana', 'orange', 'apple']
Try implementing this function without using the reverse() method or any other built-in functions that directly reverse the array. You can use loops or any other logical approach to reverse the array elements.*/
//----------------------------


//Answer was CORRECT but I have doene it before in forLoopsHM so had some practice :)

const reverseArray = (arr) => {
    let newArr = []
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['apple', 'orange', 'banana']));

/*There is a build in medhod - .reverse for that
const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
*/


//--------------------------------------------
/*Write a function that takes in two arrays of numbers and returns a new array containing the sum of elements at the same index from both arrays.

Create a function called sumOfTwo that accepts two parameters (two arrays of numbers).
Inside the function, add elements at the same index from both arrays to form a new array containing the sums.
Return the new array with the sums of elements at corresponding indices.
For example:

javascript
Copy code
sumOfTwo([1, 2, 3], [4, 5, 6]); // Expected output: [5, 7, 9]
sumOfTwo([10, 20, 30, 40], [5, 10, 15, 20]); // Expected output: [15, 30, 45, 60]
Try implementing this function to add corresponding elements from two arrays and create a new array containing the sums. 
This task involves iterating through arrays and performing addition at corresponding indices to generate the resultant array. */

const sumOfTwo = (arr, arr2) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let sum = arr[i] + arr2[j];
            newArr.push(sum);
        } 
    }
    return newArr;
}

console.log(sumOfTwo([1, 2, 3], [4, 5, 6]));




