/*
Objective
Given two integer arrays a, b, both of length >= 1, 
create a program that returns true if the sum of the squares of each element in a
is strictly greater than the sum of the cubes of each element in b.
*/

let arrayMadness = (a, b) => a.reduce((accumulator, currentValue) => accumulator + (currentValue**2), 0) > b.reduce((accumulator, currentValue) => accumulator + (currentValue**3), 0);

console.log(arrayMadness([4,5,6],[1,2,3]), true);
console.log(arrayMadness([5,6,7],[4,5,6]), false);