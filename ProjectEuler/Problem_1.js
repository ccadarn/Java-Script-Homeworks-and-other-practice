/*If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/*
let sum = (num) => {
    let numArr = []
    
    for(let i=1; i<num; i++){
      if(i%3 === 0 || i%5 === 0) {
        numArr.push(i)
      } 
    }
    let sum = numArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  } 
  
  console.log(sum(10));
  console.log(sum(1000));

  */

  //alternative (simpler)

  let sum = (num) => {
    let totalSum = 0;
  
    for (let i = 1; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        totalSum += i;
      }
    }
  
    return totalSum;
  };
  
  console.log(sum(10)); // Output: 23
  console.log(sum(1000)); // Output: 233168
  