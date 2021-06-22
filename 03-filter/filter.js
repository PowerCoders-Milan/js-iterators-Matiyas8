// create a randomNumbers array, containing 100 random numbers
const randomNumbers = [];
for (let count = 0; count < 100; count++) {
    randomNumbers[count] = Math.ceil(Math.random() * 100);
}
console.log(randomNumbers);
// create a function isPrime(number)
function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

// create a primeNumbers array
const primeNumbers = randomNumbers.filter(isPrime);
// filter randomNumbers with isPrime(number)
console.log('Among this random Numbers the following are prime Numbers >>>>')
console.log(primeNumbers);