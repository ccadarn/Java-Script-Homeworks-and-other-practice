/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
*/


//My try

var findMedianSortedArrays = function(nums1, nums2) {
    newArr = [...nums1, ...nums2].sort((a, b) => a - b);

    for (let i = 0, j = newArr.length - 1; i < newArr.length && i <= j; i++, j--) {
        if(i === j && newArr.length%2 !== 0){
            return newArr[j];
        } else if (newArr.length%2 === 0) {
            let a = newArr.length/2;
            let b = a-1;
            let median = (newArr[a] + newArr[b])/2;
            return median;
        }
    }
};

//console.log(findMedianSortedArrays([1,2,3,4], [5,2,3]))
//console.log(findMedianSortedArrays([1,2,3,5], [5,2,3]))
//console.log(findMedianSortedArrays([1,2,3,6], [5,2,3]))
console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2,3], [5,2,3]))
console.log(findMedianSortedArrays([1,2,4,6], []))
console.log(findMedianSortedArrays([3], [-2, -1]))

