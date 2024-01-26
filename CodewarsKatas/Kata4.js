/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

//Mine solution

let moveZeros = (arr) => {
    let newArr = [];
    let newArrZero = [];
    for(let i=0; i<arr.length; i++){
        if (arr[i] === 0){
            newArrZero.push(arr[i])
        } else {
            newArr.push(arr[i]);
        }
    }
    return mergedArray = [...newArr, ...newArrZero];
} 

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // [false,1,1,2,1,3,'a',0,0]


// solutions (not mine) 
// 1st solution - I refractored it (mine favourite)

let moveZeros1 = (arr) => [...(arr.filter(n => n !== 0)), ...(arr.filter(n => n === 0))];

console.log(moveZeros1([false,1,0,1,2,0,1,3,"a"])); // [false,1,1,2,1,3,'a',0,0]



//2nd solution - I refractored it


let moveZeros3 = (arr) => arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));

console.log(moveZeros3([false,1,0,1,2,0,1,3,"a"])); // [false,1,1,2,1,3,'a',0,0]