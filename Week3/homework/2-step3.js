"use strict";
function sayThree(x) {
  console.log(x + " is divisible by 3 ");
}
function sayFive(x) {
  console.log(x + " is divisible by 5 ");
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 3 === 0 && values[i] % 5=== 0 ) {
      threeCallback(values[i]);
      fiveCallback(values[i]);
    }
    else if (values[i] % 3 === 0) {
      threeCallback(values[i]);
    }
    else if (values[i] % 5 === 0) {
      fiveCallback(values[i]);
    }
  }
}
threeFive(10, 15, sayThree, sayFive);
