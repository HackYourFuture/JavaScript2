'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  console.log(values);
  console.log(threeCallback(values));
  console.log(fiveCallback(values));
}
function sayThree(num) {
  return num.filter(x => x % 3 === 0);
}
function sayFive(num) {
  return num.filter(x => x % 5 === 0);
}
threeFive(10, 15, sayThree, sayFive);


