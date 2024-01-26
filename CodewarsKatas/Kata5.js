/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

*/

//My solution: (failed - need to practice more inner loops ^^)

let firstNonRepeatingLetter = (string) => {
    for (let i = 0; i < string.length; i++) {
        let isRepeating = false;
        for (let j = 0; j < string.length; j++) {
            if (i !== j && string[i].toLowerCase() === string[j].toLowerCase()) {
                isRepeating = true;
                break;
            }
        }
        if (!isRepeating) {
            return string[i];
        }
    }
    return '';
}

  console.log(firstNonRepeatingLetter('sTress'))

  //Best solution (not mine)


  function firstNonRepeatingLetter2(s) {
  for(let i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter2('stress'))

