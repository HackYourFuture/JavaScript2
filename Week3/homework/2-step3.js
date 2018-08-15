"use strict";

// 3.2 make array
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // make array
  // start at beginning of array and check if you should call
  // threeCallback or fiveCallback or go on to next

  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  console.log(values);

  values.forEach(num => {
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0);
    {
      fiveCallback(num);
    }
  });
}

function sayDivisibleBy(divisor) {
  return function(num) {
    console.log(`${num} is divisible by ${divisor}`);
  };
}

threeFive(10, 15, sayDivisibleBy(3), sayDivisibleBy(5));
