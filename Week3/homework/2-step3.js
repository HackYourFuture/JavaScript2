'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);

    if (i % 3 === 0) {
      threeCallback(i);
    }

    if (i % 5 === 0) {
      fiveCallback(i);
    }

    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }

  }

  return values;

}

function sayThree(threes) {
  console.log(threes);
}

function sayFive(fives) {
  console.log(fives);
}


threeFive(10, 15, sayThree, sayFive);
