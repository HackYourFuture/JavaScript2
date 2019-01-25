'use strict';

function sayThree(number) {
  if (number % 3 === 0) {
    console.log(`${number} is divisible by three!`);
  }
}

function sayFive(number) {
  if (number % 5 === 0) {
    console.log(`${number} is divisible by five!`);
  }
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  numbers.forEach(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      sayThree(number);
      sayFive(number);
    } else if (number % 3 === 0) {
      sayThree(number);
    } else if (number % 5 === 0) {
      sayFive(number);
    }
  });

  //let divby3 = numbers.map(number => sayThree(number)).filter(number => number !== 0);
  //let divby5 = numbers.map(number => sayFive(number)).filter(number => number !== 0);

  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
