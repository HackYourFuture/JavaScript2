'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0) {
      threeCallback(i);
    }
    if (i % 5 === 0) {
      fiveCallback(i);
    }
    console.log(i);
  }
  console.log(numbers);
  console.log(threeCallback, fiveCallback);
}

function sayThree(number) {
  console.log('Three : ' + number);
}

function sayFive(number) {
  console.log('Five : ' + number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
