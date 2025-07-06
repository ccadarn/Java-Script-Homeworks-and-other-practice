/*
Function Factory:
Create a function multiplyBy that takes a number x and returns a closure. The closure, when called with a parameter y, should return the product of x and y.
*/

let multiplyBy = (x) => {
    return (y) => x * y;
}

let timesEight = multiplyBy(8);

console.log(timesEight(5))
console.log(timesEight(3))
console.log(timesEight(2))
