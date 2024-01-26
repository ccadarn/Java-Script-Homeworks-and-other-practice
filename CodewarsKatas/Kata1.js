/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/

//Attemt 1: It seemed I have overcomplicated it :(
/*
let multipleOfThreeAndFive = (number) => {
    if(number < 0){
        return 0
    } else {
        let multiple = [];
        for(let i=1; i<number; i++){
            if (i%3 === 0 && i%5 !== 0){
                multiple.push(i);
            }else if(i%5 === 0 && i%3 !== 0){
                multiple.push(i);
            }else if(i%5 === 0 && i%3 === 0){
                multiple.push(i)
            }
        }
        const sum = multiple.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
          return sum;
        }
}
*/

let multipleOfThreeAndFive = (number) => {
        let sum = 0;
        for(let i=3; i<number; i++){
            if (i%3 === 0 || i%5 === 0){
                sum +=i;
            }
         }
        return sum;
}

console.log(multipleOfThreeAndFive(-1))
console.log(multipleOfThreeAndFive(0))
console.log(multipleOfThreeAndFive(1))
console.log(multipleOfThreeAndFive(2))
console.log(multipleOfThreeAndFive(3))
console.log(multipleOfThreeAndFive(4))
console.log(multipleOfThreeAndFive(5))
console.log(multipleOfThreeAndFive(1000))