

//Excercise 1
/*
Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

*/

//----------------------------------------------------------------

/*
//Try1

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
//Try 2 (want to shorten it)

let min = (a, b) => a < b ? a : (a > b ? b : `Both numbers are equal: ${a}`)

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(0, 0));
*/

//---------------------------------------------

//Excercise 2

/*
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
*/

/*
//Normal solution

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

*/

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

//----------------------------------------------------------------------------
//Exercise 3

/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

*/

//---First Part (countBs)

/*
let countBs = (string) => {
    let numberOfB = 0;
    for(let i=0; i<=string.length-1; i++) {
        if (string[i] === 'B') {
            numberOfB ++;
        }
    }
    return numberOfB;
}

console.log(countBs("BBC")); //2
*/

//---Second part (countChar)

/*
let countChar = (string, letter) => {
    let numberOfChar = 0;
    for(let i=0; i<=string.length-1; i++) {
        if (string[i] === letter) {
            numberOfChar ++;
        }
    }
    return numberOfChar;
}


console.log(countChar("kakkerlak", "k")) //4
console.log(countChar("bumble bee", "b")) //3
console.log(countChar("Bumble Bee", "B")) //2
*/

//---Using 'for...of' loop (cleaner method)

let countChar = (string, letter) => {
    let numberOfChar = 0;
    for(let char of string) {
        char === letter && numberOfChar++;
    }
    return numberOfChar;
}


console.log(countChar("kakkerlak", "k")) //4
console.log(countChar("bumble bee", "b")) //3
console.log(countChar("Bumble Bee", "B")) //2

/*

//-------------------------------

Results:
1st excercise: at this stage didnt have any touble which is very good )
2nd excercise: still need to practice recursion functions, I generaly understand it but practice is needed 100%
3rd excercise: no truble at this stage I had a lot of practice with for loop, so simple for loop iteration wasnt a problem. 
Need more practice with for...of and ternary operator, when the condition is true and do nothing when it's false

condition && expressionIfTrue; - i like using ternary operator a lot when if...else arises so this code was new to me (so far havent came across this)

---Practice:---
1) Recursion functions;
2) for...of loops
3) Ternary operator when condition && expressionIfTrue;

Overal happy with the results ^^
*/