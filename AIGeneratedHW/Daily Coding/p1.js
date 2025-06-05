/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

let sum = (numbers, k) => {
    numbers.sort((a, b) => a - b);
    let j=numbers[numbers.length-1];

    for(let i=0; i<numbers.length; i++){
        if(numbers[i] + j > k){
            j--;
        }
        if (numbers[i] + j === k) {
                return true;
            }
        }
        return false;
 }

console.log(sum([10, 15, 3, 7], 17));
console.log(sum([10, 15, 3, 7], 25));
console.log(sum([10, 11], 25));
console.log(sum([10,11,15,67,31,42], 109));
console.log(sum([10,11,12,15,25], 25));
console.log('----------')

let sum2 = (numbers, k) => {
    numbers.sort((a, b) => a - b);

    for(let i=0; i<numbers.length; i++){
        for(let j=numbers.length-1; j>=0; j--){
            if(numbers[i] + numbers[j] === k){
                return true
            }
        }
    }
}

console.log(sum2([10, 15, 3, 7], 17));
console.log(sum2([10, 15, 3, 7], 25));
console.log(sum2([10, 11], 25));
console.log(sum2([10,11,15,67,31,42], 109));
console.log(sum2([10,11,12,15,25], 25));