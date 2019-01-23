'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (let i = startIndex; i <= stopIndex; i++) {
    if (i % 3 === 0) {
      threeCallback(i);
    }
    if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  console.log('numbers:', numbers);
}

function sayThree(number) {
  console.log(number, 'can be divided by 3');
}

function sayFive(number) {
  console.log(number, 'can be divided by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
