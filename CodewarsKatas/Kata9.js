/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

function generateHashtag(str) {
    // Remove leading and trailing spaces
    str = str.trim();
    
    // Check if the string is empty after trimming
    if (str === '') {
        return false;
    }

    let single = str.split(/\s+/).join(' ');

    let result = '#';
    for (let i = 0; i < single.length; i++) {
        if (i === 0 || single[i - 1] === ' ') {
            result += single[i].toUpperCase();
        } else {
            result += single[i];
        }
    }
    
    // Remove spaces
    let noSps = result.replace(/\s+/g, '');

    // Check if the resulting hashtag exceeds 140 characters
    if (noSps.length > 140) {
        return false;
    }
    
    return noSps;
}


console.log(generateHashtag(" Hello there thanks for trying my Kata")); // Outputs: " Hello There Thanks For Trying My Kata"
