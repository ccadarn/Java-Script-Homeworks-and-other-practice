/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/


let pigIt = (string) => {
    let array = string.split(/([ ,!]+)/);
    // Filter out empty strings from the array
    array = array.filter(word => word !== '');
    
    let wordsArray = array;
    let modifiedArray = [];

    for (let i = 0; i < wordsArray.length; i++) {
    let currentWord = wordsArray[i];

    // Check if the current element is a word (not punctuation)
    if (/[a-zA-Z]/.test(currentWord)) {
        // Move the first letter to the end of the word
        currentWord = currentWord.slice(1) + currentWord[0] + 'ay';
    }

    // Add the modified element to the new array
    modifiedArray.push(currentWord);
    }

    let newString = modifiedArray.join('');
    return newString;
}

console.log(pigIt('fire, and something!'))
console.log(pigIt('Pig latin is cool')) // igPay atinlay siay oolcay
console.log(pigIt('Hello world !')) // elloHay orldway !

//Fastest solution (not mine)--------------------
/*
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
*/