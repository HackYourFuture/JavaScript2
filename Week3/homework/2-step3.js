"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  const divisibleBy3 = [];
  const divisibleBy5 = [];

  if (startIndex > stopIndex) {
    stopIndex = [startIndex, (startIndex = stopIndex)][0];
  }

  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);

    if (i % 3 === 0) {
      divisibleBy3.push(i);
      threeCallback(i);
    }
    if (i % 5 === 0) {
      divisibleBy5.push(i);
      fiveCallback(i);
    }
  }

  console.log(`Original array is: ${values}`);
  console.log(`Numbers that can be divided by 3 are: ${divisibleBy3}`);
  console.log(`Numbers that can be divided by 5 are: ${divisibleBy5}`);
}

function sayThree(val) {
  console.log(`number ${val} can be divided by 3`);
}

function sayFive(val) {
  console.log(`number ${val} can be divided by 5`);
}
threeFive(25, 7, sayThree, sayFive);
