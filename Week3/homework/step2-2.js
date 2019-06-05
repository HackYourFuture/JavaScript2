'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0 && i % 5 === 0) {
      const divisibleByBoth = [];
      divisibleByBoth.push(i);
      threeCallback(i);
      fiveCallback(i);
    } else if (i % 3 === 0) {
      threeCallback(i);
    } else if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
}
function sayThree(number) {
  const divisibleBy3 = [];
  divisibleBy3.push(number);
  console.log(number + ' is divisible by 3');
}
function sayFive(number) {
  const divisibleBy5 = [];
  divisibleBy5.push(number);
  console.log(number + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
