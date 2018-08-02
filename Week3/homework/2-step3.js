'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i < stopIndex + 1; i++) {
    values.push(i);
  }
  for (let a = 0; a < values.length; a++) {
    if (values[a] % 3 === 0 && values[a] % 5 === 0) {
      threeCallback(values[a]);
      fiveCallback(values[a]);
    } else if (values[a] % 3 === 0) {
      threeCallback(values[a]);
    } else if (values[a] % 5 === 0) {
      fiveCallback(values[a]);
    } else {
      return null;
    }
  }
}
function sayThree(values) {
  console.log(values + " can be divided by 3");

}
function sayFive(values) {
  console.log(values + " can be divided by 5")
}
threeFive(10, 15, sayThree, sayFive);

