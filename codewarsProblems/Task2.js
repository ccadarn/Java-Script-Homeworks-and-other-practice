/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

let converter = (inputString) => {
    let camelCase = '';
    for(let i=0; i<inputString.length; i++) {
        if (inputString[i] === '_' || inputString[i] === '-'){
            camelCase += inputString[i+1].toUpperCase();
            i++;
        } else {camelCase += inputString[i]
        }
    }
    return camelCase;
}

console.log(converter('the-stealth-warrior'));
console.log(converter('The_Stealth_Warrior'));
console.log(converter('The_Stealth-Warrior'));


