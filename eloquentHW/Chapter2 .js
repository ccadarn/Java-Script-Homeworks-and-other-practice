//Eloquent JS Home work

//----------------------------------------------------------------
//Task 1

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

//Task2 - FizzBuzz
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

/*
Results:
1st task made several minor mistakes
2nd task was ruined by bild in AI autocompletion in Visual studio - it just provided a solution at the very start (
3rd task was solved but I am lasking inner loop practice and understanding, was on the right track but was not able to solve it in the end (

But it was refreshing )
will continue...
*/

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
