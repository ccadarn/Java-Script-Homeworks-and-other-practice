/*
1480. Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[nums[0]];

    for(let i=1; i<nums.length; i++){
        arr.push(nums[i]+arr[arr.length-1])
    }
    return arr;    
};

console.log(runningSum([1,2,3,4]))

var runningSum = function(nums) {
    let arr=[nums[0]];

    for(let i=1; i<nums.length; i++){
        arr[i]=arr[i-1]+nums[i];
    }
    return arr;    
};

console.log(runningSum([1,2,3,4]))