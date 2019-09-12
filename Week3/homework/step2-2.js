'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let elem = startIndex; elem <= stopIndex; elem++) {
    numbers.push(elem);
  }
  numbers.forEach(elem => {
    if (elem % 3 === 0) {
      threeCallback(elem);
    } else if (elem % 5 === 0) {
      fiveCallback(elem);
    } else if (elem % 5 === 0 && elem % 3 === 0) {
      fiveCallback(elem);
      threeCallback(elem);
    }
  });
}

function sayThree(number) {
  console.log(number);
}

function sayFive(number) {
  console.log(number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
