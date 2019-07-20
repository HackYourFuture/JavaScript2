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
  // Replace this comment and the next line with your code
  return console.log(`${number} is divisible by 3`);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  return console.log(`${number} is divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
