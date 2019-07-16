'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  // Array from with map method
  const numbers = Array.from(Array(stopIndex - startIndex + 1)).map(
    (num, index) => startIndex + index,
  );
  numbers.forEach(num => {
    if (num % 15 === 0) {
      threeCallback(num);
      fiveCallback(num);
    } else if (num % 3 === 0) {
      threeCallback(num);
    } else if (num % 5 === 0) {
      fiveCallback(num);
    }
  });
}

function sayThree(number) {
  console.log(`sayThree() is called because of ${number} is multiple of three`);
}

function sayFive(number) {
  console.log(`sayFive() is called because of ${number} is multiple of five`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
