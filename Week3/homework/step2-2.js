'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0 && i % 5 === 0) {
        threeCallback(i);
        fiveCallback(i);
      } else if (i % 3 === 0) {
        threeCallback(i);
      } else {
        fiveCallback(i);
      }
    }
  }
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' is divisible by 3.');
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' is divisible by 5.');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
