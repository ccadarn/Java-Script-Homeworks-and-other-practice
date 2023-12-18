//Task 1
const printNumbers = (n) => {
    console.log(`Iteration of number ${n}`)
    for (let i=1; i <= n; i++) {
        console.log(i);
    }
    return 'Done';
}

console.log(printNumbers(6));

//Task 2
const calculateFactorial = (num) => {
    console.log(`Factorial of number ${num} is:`)
    let fac = 1
    for (let i = 1; i <= num; i++) {
        fac *= i;
    }
    return fac;
}

console.log(calculateFactorial(20));

//Task 3
const multiplicationTable = (n) => {
    console.log(`This is multiplication table of ${n}:`)
    let num = n
    for (i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
    return `Done`;
}

console.log(multiplicationTable(8));

//Task 4
const findPrimes = (n) => {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
};

console.log(findPrimes(12)); // Output the array of prime numbers up to 12



