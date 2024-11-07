/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

let find = (numbers) => {
    // Step 1: Create an object to store counts of each number
    const counts = numbers.reduce((acc, number) => {
        acc[number] = (acc[number] || 0) + 1;
        return acc;
    }, {});

    //console.log(counts);

    // Step 2: Find the key (number) with a count of 1
    for (let number in counts) {
        if (counts[number] === 1) {
            return number;
        }
    }
    return null;  // Return null if no stray number is found
};


console.log(find([1, 1, 2]))
console.log(find([1, 2, 1]))
console.log(find([2, 1, 1]))
