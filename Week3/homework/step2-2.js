'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  fiveCallback(numbers);
  threeCallback(numbers);

  console.log(startIndex, stopIndex, threeCallback(numbers), fiveCallback(numbers), numbers);
}

function sayThree(number) {
  const divisibleByThree = [];
  divisibleByThree.push(number.filter(num => num % 3 === 0));
  return divisibleByThree;
}

function sayFive(number) {
  const divisibleByFive = [];
  divisibleByFive.push(number.filter(num => num % 5 === 0));
  return divisibleByFive;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
