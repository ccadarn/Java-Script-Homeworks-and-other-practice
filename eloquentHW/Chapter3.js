

//Excercise 1
//Write a 'min' function to find a min bumber out of tow parameters

/*
Try1
let min = (a, b) => {
    if (a < b){
        return a;
    } else if (a > b){
        return b
    } else {
        return `Both numbers are equal: ${a}`
    }
}  

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(0, 0));

*/

/*
Try 2 (want to shorten it)
let min = (a, b) => a < b ? a : (a > b ? b : `Both numbers are equal: ${a}`)

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(0, 0));
*/


//Excercise 2
// *Zero is even
// *One is odd
// use N-2 to find if number (N) is even or odd, using recursion function


let isEven = (number) => {
    let even = 0;
    let odd = 1;

    let find = (current) => {
        if (current === even) {
            return true;
        } else if (current === odd) {
            return false;
        } else if (current < 0) {
            return `Input number (${current}) should be bigger than 0`
        } else {
            return find(current - 2);
        }
        
    }

    return find(number);
}

console.log(isEven(50)); // Output: true
console.log(isEven(75)); // Output: false
console.log(isEven(-1)); // `Input number (-1) should be bigger than 0`

//Trying loops

/*
let isEven = (number) => {
    let even = 0;
    let odd = 1;

    while (number >= 0){
        if(number === even){
            return true;
        } else if (number === odd){
            return false;
        } else {
            number -= 2;
        }
    }
    return `Input number (${number}) should be bigger than 0`
}

console.log(isEven(50)); // Output: true
console.log(isEven(75)); // Output: false
console.log(isEven(-1)); // `Input number (-1) should be bigger than 0`

*/