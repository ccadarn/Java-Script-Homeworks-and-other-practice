//<p>The prime factors of 13195 are 5, 7, 13 and 29.</p>
//<p>What is the largest prime factor of the number 600851475143?</p>

function largestPrimeFactor(number) {
    let factor = 2;
    while (factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            number /= factor;
        } else {
            factor++;
        }
    }
    return number;
}

const number = 600851475143;
const largestFactor = largestPrimeFactor(number);
console.log("The largest prime factor of", number, "is", largestFactor);
