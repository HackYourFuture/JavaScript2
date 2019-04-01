'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let counter = startIndex; counter <= stopIndex; counter++) {
    numbers.push(counter);
  }
  const result = numbers.filter(number => threeCallback(number) || fiveCallback(number));
  return console.log(result);
}

function sayThree(number) {
  return number % 3 === 0;
}

function sayFive(number) {
  return number % 5 === 0;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
