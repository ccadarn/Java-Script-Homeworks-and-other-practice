/*
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
*/


function rot13(str) {
    const alphabetL = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (alphabetL.includes(char)) {
        let index = (alphabetL.indexOf(char) + 13) % 26;
        result += alphabetL[index];
      } else if (alphabetU.includes(char)) {
        let index = (alphabetU.indexOf(char) + 13) % 26;
        result += alphabetU[index];
      } else {
        result += char; // Non-alphabetic characters remain unchanged
      }
    }
  
    return result;
  }
  
  let decoded = rot13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.");
  console.log(decoded);

  let encoded = rot13("Hello World")
  console.log(encoded);
  

