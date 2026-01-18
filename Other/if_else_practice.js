//hour practice
let hour = 1;
let personName = 'Arlen';

if(hour >= 6 && hour <= 12){
    console.log(`Good morning ${personName}!`);
} else if(hour >= 13 && hour <= 17){
    console.log(`Good afternoon ${personName}!`);
} else {
    console.log(`Good night ${personName}!`);
}

//discount practice
let age = 65;
let holiday = false;

(age <= 6 || age >= 65) && !holiday ? console.log(`Discount`) : console.log(`No discount`);

////////////////////////////////////////////////////////////////////////////////

//coin flip practice
// 1. Initialize Global State
let result = '';

let coinFlip = (currentHistory) => {
    let randomNum = Math.random();
    let flip = randomNum < 0.5 ? `Heads!` : `Tails!`;
    
    // Concatenate the new flip to the history passed in
    // This is the correct use of the += operator!
    let newResult = currentHistory + flip + '\n'; 

    return newResult; // Return the full, updated string
}

// 2. First Flip: Update the state by assigning the returned value
result = coinFlip(result);
console.log(`Flip 1:\n${result}`); 

// 3. Second Flip: Pass the updated 'result' back in, and update it again
result = coinFlip(result);
console.log(`Flip 2:\n${result}`);

// 4. Third Flip: The history continues to grow
result = coinFlip(result);
console.log(`Flip 3:\n${result}`);