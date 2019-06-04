'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // Replace this comment and the next line with your code
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.map(number => {
    if (number % 3 === 0 && !(number % 5 === 0)) {
      threeCallback(number);
    } else if (number % 5 === 0 && !(number % 3 === 0)) {
      fiveCallback(number);
    } else if (number % 3 === 0 && number % 5 === 0) {
      threeCallback(number);
      fiveCallback(number);
    }
    return number;
  });
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number);
  return number + ' is divisible by three';
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number);
  return number + ' is divisible by five';
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
