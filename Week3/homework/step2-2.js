'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const range = (begin, end) => [...Array(end + 1).keys()].filter(n => n >= begin);
  const numbers = range(startIndex, stopIndex);

  numbers.forEach(item => {
    if (item % 15 === 0) {
      console.log(item + '=>' + threeCallback(item) + ' and ' + fiveCallback(item));
    } else if (item % 3 === 0) {
      console.log(item + '=>' + threeCallback(item));
    } else if (item % 5 === 0) {
      console.log(item + '=>' + fiveCallback(item));
    }
  });
}

function sayThree(number) {
  return `${number} divisible by 3`;
}

function sayFive(number) {
  return `${number} divisible by 5`;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
