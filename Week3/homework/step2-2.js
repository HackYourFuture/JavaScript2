'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    const number = i;
    const isNumberDivisibleBy3 = number % 3 === 0;
    const isNumberDivisibleBy5 = number % 5 === 0;
    const isNumberDivisibleBy15 = number % 15 === 0;
    if (isNumberDivisibleBy3) {
      console.log(threeCallback(number));
    }
    if (isNumberDivisibleBy5) {
      console.log(fiveCallback(number));
    }
    if (isNumberDivisibleBy15) {
      console.log(fiveCallback(number) + ' and 3');
    }
  }
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
