'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  let i = startIndex;
  for (i; i <= stopIndex; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      threeCallback(i);
      fiveCallback(i);
    } else if (i % 3 === 0) {
      threeCallback(i);
    } else if (i % 5 === 0) {
      fiveCallback(i);
    }
    numbers.push(i);
  }
  console.log('numbers:', numbers);
}

function sayThree(number) {
  console.log(number, 'can divide by 3');
}

function sayFive(number) {
  console.log(number, 'can divide by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
