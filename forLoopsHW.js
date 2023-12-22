//---------------------------------------------------------------------------------
//Reverse Array: Write a function that takes an array as input and returns a new array with the elements in reverse order using a for loop.

const reverseArr = (arr) => {
    let newArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;

}


//console.log(reverseArr([1, 2, 3, 4, 'cat', 'dog', 16]))


//-----------------------------------------------------------------------------------------------------------------------
//Factorial Calculation: Create a function that calculates the factorial of a given number using a for loop. 
//The factorial of a number 'n' is the product of all positive integers less than or equal to 'n'.

const fac = (n) => {
    sum = 1;
    for (let i = 1; i <= n; i++) {
       sum *= i
    }
    return sum
}

//console.log(fac(3));


//------------------------------------------------------------------------------------------------------------------------------
//Palindrome Check: Make a function that checks whether a given word is a palindrome (reads the same forward and backward). 
//Use a for loop to compare characters from both ends of the word.

const palindromeCheck = (word) => {
    const arr = word.toLowerCase().split('');
    const arr1 = [];
    const arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i]);
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        arr2.push(arr[j]);
    }

    if (arr1.join('') === arr2.join('')) {
        return `${word} is a palindrome`;
    } else {
        return `${word} isn't a palindrome, try something else`;
    }
};

//console.log(palindromeCheck('fire'));
//console.log(palindromeCheck('Madam'));
//console.log(palindromeCheck('madam'));
//console.log(palindromeCheck('12321'));
//console.log(palindromeCheck('Able was I ere I saw Elba'));

//--------------------------------------------------------------------------------------------
//Fibonacci Sequence: Write a function to generate the Fibonacci sequence up to a specified number of terms. 
//The Fibonacci sequence starts with 0 and 1, and each subsequent term is the sum of the two preceding ones.



//------------------------------------------------------
//Prime Number Check: Create a function that checks if a given number is a prime number (a number greater than 1 that has no divisors other than 1 and itself). 
//Use a for loop to test the divisibility of the number.

const prime = (num) => {
        
    if (num < 1) {return `${num} is NOT a PRIME number because it is SMALLER than 1`}

    for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return `${num} is NOT a PRIME number`
            }
        } 
    return `${num} is a PRIME number`
} 




//console.log(prime(4));
//console.log(prime(7));
//console.log(prime(1));


//=-------------------------
const timer = (arr) => {
    if (arr.length < 10 || arr.indexOf(0) === -1) {
        console.log('Array should be more than 0 and at least 10 (0-10), and must contain 0');
        return; // Exit the function
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 10) {
            console.log('10 seconds until launch!');
        } else if (arr[i] === 5) {
            console.log('5 seconds until launch!');
        } else if (arr[i] === 3) {
            console.log('3');
        } else if (arr[i] === 2) {
            console.log('2');
        } else if (arr[i] === 1) {
            console.log('1');
        } else if (arr[i] === 0) {
            console.log('Launch!');
        }
    }
};

//timer([1, 2, 3, 4, 5, 6, 7, 8]); // Logs the error message to the console
//timer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Executes the timer function


/*Create a function called countVowels that takes a string as an argument and counts the number of vowels (a, e, i, o, u - both lowercase and uppercase)
 in the given string using a for loop. The function should return the total count of vowels found in the string.
Feel free to give it a try and experiment with the for loop to iterate through the characters of the string and count the vowels! */

const countVowels = (string) => {
 let cleanString = string.toLowerCase().split('');
 let sum = 0
 for (let i = 0; i <= cleanString.length; i++) {
    if (cleanString[i]==='a') {
        sum++;
    } else if (cleanString[i]==='e') {
        sum++;
    } else if (cleanString[i]==='i') {
        sum++;
    } else if (cleanString[i]==='o') {
        sum++;
    } else if (cleanString[i]==='u') {
        sum++;
    }
}
  if (sum === 0) {
    return `There are no vowels in '${string}'`;
  } else
  return `There are a total of ${sum} vovels in '${string}'`;
}


 //console.log(countVowels("The quick brown fox jumps over the lazy dog."));
 //console.log(countVowels("Fly thy cryptic glyphs."));
 //console.log(countVowels("Gymnymphs fly crypts."));
 //console.log(countVowels("Hello! How are you?"));



 // alternative
 const countVowels2 = (string) => {
    let cleanString = string.toLowerCase().split('');
    let sum = 0;

    for (let i = 0; i < cleanString.length; i++) {
        if (cleanString[i] === 'a' || cleanString[i] === 'e' || cleanString[i] === 'i' || cleanString[i] === 'o' || cleanString[i] === 'u') {
            sum++;
        }
    }

    if (sum === 0) {
        return `There are no vowels in '${string}'`;
    } else {
        return `There are a total of ${sum} vowels in '${string}'`;
    }
};

//console.log(countVowels2("The quick brown fox jumps over the lazy dog."));
//console.log(countVowels2("Fly thy cryptic glyphs."));
//console.log(countVowels2("Gymnymphs fly crypts."));
//console.log(countVowels("Hello! How are you?"));

// alternative 2 ))
const countVowels3 = (string) => {
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            sum++;
        }
    }

    if (sum === 0) {
        return `There are no vowels in '${string}'`;
    } else {
        return `There are a total of ${sum} vowels in '${string}'`;
    }
};

//console.log(countVowels3("The quick brown fox jumps over the lazy dog."));
//console.log(countVowels3("Fly thy cryptic glyphs."));
//console.log(countVowels3("Gymnymphs fly crypts."));

/* Write a JavaScript program that takes a number n (where n is a positive integer) as input and generates a multiplication table from 1 to n using nested loops. 
For example, if the user inputs 5, the output should be:

Copy code
1  2  3  4  5
2  4  6  8 10
3  6  9 12 15
4  8 12 16 20
5 10 15 20 25
Your task is to create this multiplication table using nested loops in JavaScript. Ensure that the output is properly formatted.

Remember to validate the input to make sure it's a positive integer greater than 0 before generating the multiplication table.

Feel free to use any approach or method in JavaScript that you find suitable. Happy coding! */

const mtable = (n) => {
    if (typeof n !== 'number' || n < 0) {
        return `${n} should be a positive integer`;
    }
    
    const maxDigits = (n * n).toString().length; // Determine the maximum digits in the table
    
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            let product = i * j;
            let spacesNeeded = maxDigits - product.toString().length; // Calculate spaces needed
            
            // Add spaces for alignment based on the number of digits
            while (spacesNeeded > 0) {
                row += ' ';
                spacesNeeded--;
            }
            
            row += product + ' ';
        }
        console.log(row);
    }
};

//console.log(mtable(5));
//console.log(mtable(1));

/* Create a function that takes a number as an argument and uses a for loop to print a multiplication table for that number. 
The table should display the multiplication of the number from 1 to 10.*/

//---------------WRONG ( -------------------
/*const multTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        answ = i*num;
        console.log(`${i} x ${num} = ${answ}`);
    }
    
}

console.log(multTable(5))*/

//------------CORRECT----------------
const multTable = (num) => {
    let table = ''; // Initialize an empty string to store the table
    for (let i = 1; i <= 10; i++) {
        let result = i * num;
        table += `${i} x ${num} = ${result}\n`; // Append each line to the table string
    }
    return table; // Return the generated multiplication table string
}

//console.log(multTable(5)); // Output the multiplication table for 5

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/*Create a function that takes an array of numbers as an argument and uses a for loop to calculate the sum of all the positive numbers in the array. The function should return the total sum.

For instance:

For the input array [3, -2, 7, -1, 5], the function should return 15 (summing up 3, 7, and 5).
For the input array [-1, -5, -10, 2], the function should return 2 (considering only the positive number, 2).
This exercise will give you the chance to practice iterating through arrays with for loops and performing calculations based on certain conditions.*/

//--------- WAS CORRECT ON THE FIRST TRY! ----------------------------------------
const posSum = (arr) => {
    let sum = 0;
    if (arr.length === 0) {
        return `Array is empty, input a value`
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    if (sum === 0) {
        return `There are no possitive numbers in your array`
    } else
    return sum;
}

//console.log(posSum([3, -2, 7, -1, 5]))
//console.log(posSum([-1, -5, -10, 2]))
//console.log(posSum([-1, -5, -10, -2]))
//console.log(posSum([]))

