'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = 0; i <= stopIndex - startIndex; i++) {
    numbers.push(startIndex + i);
    if ((startIndex + i) % 3 === 0 && (startIndex + i) % 5 === 0) {
      numbers.push(threeCallback(startIndex + i));
      numbers.push(fiveCallback(startIndex + i));
    } else if ((startIndex + i) % 3 === 0) {
      numbers.push(threeCallback(startIndex + i));
    } else if ((startIndex + i) % 5 === 0) {
      numbers.push(fiveCallback(startIndex + i));
    }
  }

  return numbers;
}

function sayThree() {
  return 'sayThree';
}

function sayFive() {
  return 'sayFive';
}

console.log(threeFive(10, 15, sayThree, sayFive));

// Do not change or remove anything below this line
module.exports = threeFive;
