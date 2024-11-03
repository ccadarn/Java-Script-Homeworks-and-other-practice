/*Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

let split = (string) => {
    let oddString = string;
    if (string.length % 2 !== 0) {
        oddString = string + '_';
    }
    
    let newString = [];
    for (let i = 0; i < oddString.length; i += 2) {
        let pair = oddString[i] + oddString[i + 1];
        newString.push(pair);
    }
    return newString;
}

console.log(split('fires'));