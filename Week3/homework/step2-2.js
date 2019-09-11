'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let number = startIndex; number <= stopIndex; number++) {
    numbers.push(number); // This create an array [10,11,12,13,14,15]
  }
  // Set the conditions of the callback for threeCallback, fiveCallback.
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
  console.log(number + ' is divisible by 3');
}

function sayFive(number) {
  console.log(number + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
