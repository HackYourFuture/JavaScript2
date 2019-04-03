'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  function inner(arr) {
    for (let i = startIndex; i <= stopIndex; i++) {
      arr.push(i);
    }
    return arr;
  }
  threeCallback(inner(numbers));
  fiveCallback(inner(numbers));
}

function sayThree(arr) {
  return arr.filter(x => x % 3 === 0);
}

function sayFive(arr) {
  return arr.filter(x => x % 5 === 0);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
