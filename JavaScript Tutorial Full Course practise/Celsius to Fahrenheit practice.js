//End of lesson 2 practice

let convertToF = (celsius) => (celsius *9/5)+32;
let convertToC = (fahrenheit) => (fahrenheit-32)*5/9;

console.log(convertToF(25));
console.log(convertToC(86));
console.log(convertToF(-5));

//Alternative conversion idea

let convertTemp = (string) => {
    let conversion = string[string.length-1];

    let number = +string.slice(0,-1);

    if(isNaN(number)){
        return 'Please input valid temperature in Celsius or Fahrenheit!'
    }else if (conversion === 'C'){
        return (number*9/5)+32;
    }else if (conversion === 'F'){
        return (number-32)*5/9;
    }else {
       return 'Error: Please choose correct temperature (C or F)!'; 
    }
}

console.log(convertTemp('25C'));
console.log(convertTemp('86F'));
console.log(convertTemp('-5C'));
console.log(convertTemp('86X'));
console.log(convertTemp('banana'));