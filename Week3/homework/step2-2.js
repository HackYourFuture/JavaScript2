'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  // console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);'
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0) {
      threeCallback(i);
    }
    if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  return number % 3 === 0;
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  // console.log(number);
  return number % 5 === 0;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
