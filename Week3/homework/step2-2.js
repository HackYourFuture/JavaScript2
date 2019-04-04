'use strict';
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // Replace this comment and the next line with your code
  for (let num = startIndex; num <= stopIndex; num++) {
    numbers.push(num);
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number, 'divisible by 3');
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number, 'divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
