/*
For every string, after every occurrence of 'and' and/or 'but', insert the substring 'apparently' directly after the occurrence(s).

If input does not contain 'and' or 'but', return the same string. If a blank string, return ''.

If substring 'apparently' is already directly after an 'and' and/or 'but', do not add another. (Do not add duplicates).

Examples:
Input 1

'It was great and I've never been on live television before but sometimes I don't watch this.'
Output 1

'It was great and apparently I've never been on live television before but apparently sometimes I don't watch this.'
Input 2

'but apparently'
Output 2

'but apparently' 
(no changes because 'apparently' is already directly after 'but' and there should not be a duplicate.)

An occurrence of 'and' and/or 'but' only counts when it is at least one space separated. For example 'andd' and 'bbut' do not count as occurrences, whereas 'b but' and 'and d' does count.
*/

function apparently(sentence) {
    let words = sentence.split(' '); // Split the sentence into an array of words
    let result = []; // To store the modified sentence

    for (let i = 0; i < words.length; i++) {
        result.push(words[i]); // Add the current word to the result
        // Check if the word is "and" or "but" and the next word isn't "apparently"
        if ((words[i] === 'and' || words[i] === 'but') && words[i + 1] !== 'apparently') {
            result.push('apparently'); // Insert "apparently" after "and" or "but"
        }
    }

    return result.join(' '); // Reassemble the words into a sentence
}

console.log(apparently('fire but fire')); // Output: "fire but apparently fire"
console.log(apparently('fire and water but ice')); // Output: "fire and apparently water but apparently ice"
