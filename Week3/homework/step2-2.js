'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let number = startIndex; number <= stopIndex; number++) {
    numbers.push(number);
  }
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
}

function sayThree(number) {
  console.log(`${number} is divisible by three.`);
}

function sayFive(number) {
  console.log(`${number} is divisible by five.`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
