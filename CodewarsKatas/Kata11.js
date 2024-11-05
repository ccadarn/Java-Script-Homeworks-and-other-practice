/*

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

let grow = (x) => {
    let result = 1;
    for(let i=0; i<x.length; i++){
        result *= x[i];
    }
    return result;
}

console.log(grow([1, 2, 3, 4]));

/////////////////////////////////////////

const grow2 = (nums) => nums.reduce((product, num) => product * num, 1);

console.log(grow2([1, 2, 3, 6]));
