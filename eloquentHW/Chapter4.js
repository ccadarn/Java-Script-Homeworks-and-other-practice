/*
The sum of a range
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
*/


//----------------------------First task
//My first try (totally failed it ^^, misunderstood what the task was asking to do)
let range = (a,b) => {
    let array = (array) => {
        return array.slice(a-1,b)
    }
    return array
}

let rangeOneToTen = range(1,10);
let rangeFiveToFifteen = range(5,15);

// 2nd try
let range2 = (a,b) => {
    let array = [];
    for(let i=a; i<=b; i++){
        array.push(i)
    }
    return array;
}

console.log(range2(1,10)) // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//-------------------------------------------Sum task
//All correct on the first try ^^

let sum = (array) => {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // -> 55

//---------------------------------Bonus task
let modifiedRange = (a,b,c) => {
    let array = [];
    if (a<b){
        c = c ?? 1;
        for(let i=a; i<=b; i+=c){
            array.push(i)
        }
        return array;
    } else {
        c = c ?? -1;

        for(let i=a; i>=b; i+=c){
            array.push(i)
        }
        return array;
    }
}

console.log(modifiedRange(5,2,-1)); // → [5,4,3,2]
console.log(modifiedRange(10,2)); // -> [10,9,8,7,6,5,4,3,2]

/*
Reversing an array
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

let reverseArray = (array) => {
    let newArray = [];
    for(let i=array.length-1; i>=0; i--){
        newArray.push(array[i])
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"])) // → ["C", "B", "A"]

//--------------------------------------

let reverseArrayInPlace = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        array.push(array[i]);
    }
    
    array.splice(0, array.length / 2);  // Remove the original elements

    return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(arrayValue);  // -> [5, 4, 3, 2, 1]


/*
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. 
For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier),
they are both independent lists, but they share the structure that makes up their last three elements. 
The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
Also write a listToArray function that produces an array from a list. 
Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, 
which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

// Function to build a list structure from an array
let arrayToList = (array) => {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = prepend(array[i], list);
    }

    return list;
}

// Function to convert a list to an array
let listToArray = (obj) => {
    let array = [];
    let current = obj;

    while (current !== null) {
        array.push(current.value);
        current = current.rest;
    }

    return array;
}

// Helper function to prepend an element to a list
let prepend = (element, rest) => {
    return { value: element, rest: rest };
}

// Function to get the element at a given position in the list
let nth = (list, position) => {
    let current = list;

    for (let i = 0; i < position; i++) {
        if (current === null) {
            return undefined; // Position is out of bounds
        }
        current = current.rest;
    }

    return current !== null ? current.value : undefined;
}

// Recursive version of nth function
let nthRecursive = (list, position) => {
    if (list === null) {
        return undefined; // End of list, position is out of bounds
    }

    if (position === 0) {
        return list.value; // Found the element at the given position
    }

    return nthRecursive(list.rest, position - 1);
}

// Example usage:
let exampleArray = [1, 2, 3];
let exampleList = arrayToList(exampleArray);

console.log(listToArray(exampleList)); // Output: [1, 2, 3]
console.log(nth(exampleList, 1)); // Output: 2
console.log(nthRecursive(exampleList, 2)); // Output: 3


/*
Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

let deepEqual = (a, b) => {
    if (a === b) {
        return true;
    }

    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj)); // -> true
console.log(deepEqual(obj, {here: 1, object: 2})); // -> false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // -> true