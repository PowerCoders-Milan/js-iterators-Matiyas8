# filter
Like `.map()`, `.filter()` returns a new array. However, `.filter()` returns an array of elements after filtering out certain elements from the original array. The callback function for the `.filter()` method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array.

## instructions
1. create an Array `randomNumbers` of 100 random numbers (between 1 and 200)
2. create a function `isPrime(number)` that returns `true` if the number is prime, else false
3. create an array `primeNumbers`
4. `.filter()` the array `randomNumbers` taking only the prime numbers (use the function you have created)