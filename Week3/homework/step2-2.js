'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  let i = startIndex;
  while (i <= stopIndex) {
    numbers.push(i);
    i++;
  }

  numbers.forEach(number => {
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
    return number;
  });
}

function sayThree(number) {
  console.log('three', number);
}

function sayFive(number) {
  console.log('five', number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
