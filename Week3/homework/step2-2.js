'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (const number of numbers) {
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
}

function sayThree(number) {
  console.log(number + 'is divisible by 3');
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + 'is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
