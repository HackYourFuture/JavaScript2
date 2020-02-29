'use strict';

function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console

// Using the map and filter functions, rewrite the doubleEvenNumbers function.

function reWriteWithMapAndFilter(elem) {
  const numberEven = myNumbers.filter(number => number % 2 === 0)
  const numberOdd = numberEven.map(number => number * 2);
  return numberOdd;
};
console.log(reWriteWithMapAndFilter(doubleEvenNumbers));