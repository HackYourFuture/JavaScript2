'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  while (startIndex <= stopIndex) {
    values.push(startIndex);
    startIndex++;
  }
  for (let i = 0; i < values.length; i++) {
    const number = values[i];
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
    if (number === 15) {
      console.log('number ' + number + ' is divisible by both 3 and 5');
    }
  }
}

threeFive(10, 15, sayThree, sayFive);

//number are divisible by 3
function sayThree(number) {
  console.log("the " + number + " is divisible by 3");
}

//number are divisible by 5
function sayFive(number) {
  console.log("the " + number + " is divisible by 5");
}

