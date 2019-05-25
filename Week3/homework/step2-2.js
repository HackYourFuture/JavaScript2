'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);

  numbers.forEach(num => {
      if (num % 3 === 0) {
        threeCallback(num);
      }
      if (num % 5 === 0) {
        fiveCallback(num);
      }
    })
  }
}


function sayThree(number) {
  return function (num) {
  console.log((`${num} is divisible by ${number}`));
  }
}

function sayFive(number) {
  return function (num) {
  console.log((`${num} is divisible by ${number}`));
  }
}

threeFive(10, 15, sayThree(3), sayFive(5));

// Do not change or remove anything below this line
module.exports = threeFive;
