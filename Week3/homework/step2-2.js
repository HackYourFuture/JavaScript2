'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  numbers.forEach(threeCallback);
  numbers.forEach(fiveCallback);
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  if (number % 3) {
    return number;
  }
  console.log(`${number} can be divided 3`);
}

function sayFive(number) {
  if (number % 5) {
    return number;
  }
  console.log(`${number} can be divided 5`);
}
threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
