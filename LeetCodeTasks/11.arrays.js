/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

let height = [1,8,6,2,5,4,8,3,7];

/* my code doesn't work with large arrays :(

let area = (height) => {
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = height.length - 1; j > i; j--) {
            let x = 0;
            height[i] > height[j] ? x = height[j] : x = height[i];
                
            let area = x * (j - i);
            (area > result) && (result = area);
            }
        }
        return result
    }
*/

let maxArea = (height) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;
        let area = minHeight * width;
        max = Math.max(max, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

console.log(maxArea(height));
