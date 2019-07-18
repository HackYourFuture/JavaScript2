'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach(number => {
    const isNumberDivisibleBy5 = number % 5 === 0;
    const isNumberDivisibleBy3 = number % 3 === 0;
    if (isNumberDivisibleBy3) {
      threeCallback(number);
    }
    if (isNumberDivisibleBy5) {
      fiveCallback(number);
    }
  });
}

function sayThree(number) {
  console.log(`The number ${number} is divisible by 3.`);
}

function sayFive(number) {
  console.log(`The number ${number} is divisible by 5.`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
