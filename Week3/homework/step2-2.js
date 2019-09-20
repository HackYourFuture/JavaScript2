'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Make array
  for (let number = startIndex; number <= stopIndex; ++number) {
    numbers.push(number);
    if (number % 3 === 0) threeCallback(number); // Will be called when number is divisible by 15 also
    if (number % 5 === 0) fiveCallback(number); // Will be called when number is divisible by 15 also
    if (number % 15 === 0) {
      // This will print extra
      threeCallback(number);
      fiveCallback(number);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
