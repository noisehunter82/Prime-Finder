
// Prime numbers finder
function findPrimeNumbers(array) {

  let primeNumbers = [];
  // iterates over the 'array' of numbers that have to be tested
  loop1:
  for (let number in array) {
    // Skips 0 and 1.
    if (number < 2) {
      continue;
    }
    // Iterates over divisors larger than 1 and smaller than the half of the tested number
    for (let j = 2; j <= number / 2; j++) {
      // Discontinues inner loop if integer found
      if (number % j == 0) {
        continue loop1;
      }
    }
    primeNumbers.push(number);
  }
  console.log(primeNumbers);
}

// generates a test array 1-100
let numbers = [];
for (let i = 0; i <= 100; i++) {
  numbers.push(i);
}
console.log(numbers);

findPrimeNumbers(numbers);
