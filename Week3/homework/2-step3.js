'use strict';

function sayThree(threeCallback) {
  console.log(threeCallback + ' is divisible by three');
}

function sayFive(fiveCallback) {
  console.log(fiveCallback + ' is divisible by five');
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

  const values = [];  //function generating an array containing values from start value to end value
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);  

    if (i % 3 === 0) {
      threeCallback(i);
    }

    if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  console.log(values);
}

threeFive(10, 15, sayThree, sayFive);
