//Eloquent JS Home work

//----------------------------------------------------------------
//Excercise 1
/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3

*/

//------------------------------------------------------------------------

// 1 try
/*
let triangle = '#######';
let result ='';
for (let i = 0; i <= triangle.length-1; i++) {
    console.log(result += triangle[i])
}
*/

//2nd try
/*
let result2 ='';
let i = 0;
while (i <= 7){
    console.log(result2 += '#');
    i++;
}
*/

//3rd try
/*
let result3 = '';
for(let i=0; i <=7; i++){
    console.log(result3 += '#');
}
*/

//---------------------------------------------

//Excercise 2

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

*/

//----------------------------------------------

/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/

//-----------------------------------------

//Task 3 - Chess board

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

/*

//-------------------------------------------------

/*let size = 8;
let grid = '';

for (let i = 1; i <= size * size; i++) {
    if (i % (size + 1) === 0) {
        grid += '\n';
    } else if (i % 2 === 0) {
        grid += ' ';
    } else {
        grid += '#';
    }
}

console.log(grid);
/*

//------------------------------------------


/*
Results:
1st excercise: made several minor mistakes
2nd excercise: was ruined by build in AI autocompletion plugin in Visual studio - it just provided a solution at the very start (turned it off)
3rd excercise: was solved but I am lacking inner loop practice and understanding, was on the right track but was not able to solve it in the end (

But it was interesting )
will continue...
*/

//--- Below is just my personal excercise, was trying to build a multiplication table...


for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
        row += `${i * j}\t`; // Calculate and concatenate each multiplication result
    }
    console.log(row); // Output each row of the multiplication table
}


let table = '';
for (let i = 1; i <= 10; i++) {
    table += `${i}\t${i * 2}\t${i * 3}\t${i * 4}\t${i * 5}\t${i * 6}\t${i * 7}\t${i * 8}\t${i * 9}\t${i * 10}\n`;
}
console.log(table);
