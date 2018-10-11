'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  //make array
  for (let index = startIndex; index <= stopIndex; index++) {
    values.push(index);
  }
  console.log(values);
  for (let index = 0; index <= values.length; index++) {
    const value = values[index];
    if (value % 3 === 0 && value % 5 === 0) { threeCallback(value), fiveCallback(value); }
    else if (value % 3 === 0) { threeCallback(value); }
    else if (value % 5 === 0) { fiveCallback(value); }

  }

}

function sayThree(value) {
  console.log(value + 'is divisible by three');
  return value;
}
function sayFive(value) {
  console.log(value + 'is divisible by five');
  return value;
}

threeFive(10, 15, sayThree, sayFive);

