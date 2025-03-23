/*
2206. Divide Array Into Equal Pairs

You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.
*/

//First atempt:
/*
var divideArray = function(nums) {
    let arr = nums.sort((a, b) => a - b);
    count = 0;

    for(let i=0; i<arr.length; i+=2){
        if(arr[i]===arr[(i+1)]){
            count++
        } else{
            break
        }
    }
    return count % 2 ? true : false;
};

console.log(divideArray([3,2,3,2,2,2]));
console.log(divideArray([1,2,3,4]));
*/

//Optimization

var divideArray = function(nums) {
    nums.sort((a, b) => a - b); // Sort array in ascending order

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return false; // If a pair is not equal, return false immediately
        }
    }
    
    return true; // If all pairs match, return true
};

console.log(divideArray([3,2,3,2,2,2]));
console.log(divideArray([1,2,3,4]));