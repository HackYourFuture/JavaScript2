'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  values.forEach(num => {
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
    }
  });
}
const sayThree = function threeCallback(x) {
  console.log(x + " is divisible by 3");
};
const sayFive = function fiveCallback(x) {
  console.log(x + " is divisible by 5");
};
threeFive(10, 15, sayThree, sayFive);

