'use strict';

// Test PASS
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // Replace this comment and the next line with your code
  let i;
  for (i = startIndex; i < stopIndex + 1; i++) {
    numbers.push(i);
  }
  let ii;
  for (ii = 0; ii < numbers.length; ii++) {
    if (numbers[ii] % 5 === 0 && numbers[ii] % 3 === 0) {
      console.log(`Hi: I am ${numbers[ii]},\n my index is ${numbers.indexOf(numbers[ii])}`);
      threeCallback(numbers[ii]);
      fiveCallback(numbers[ii]);
      console.log(`Bye.`);
    } else if (numbers[ii] % 3 === 0) {
      console.log(`Hi: I am ${numbers[ii]},\n my index is ${numbers.indexOf(numbers[ii])}`);
      threeCallback(numbers[ii]);
      console.log(`Bye.`);
    } else if (numbers[ii] % 5 === 0) {
      console.log(`Hi: I am ${numbers[ii]},\n my index is ${numbers.indexOf(numbers[ii])}`);
      fiveCallback(numbers[ii]);
      console.log(`Bye.`);
    } else {
      console.log(
        `Hi: I am ${numbers[ii]}\n my index is ${numbers.indexOf(
          numbers[ii],
        )} . \n I can NOT be divided on 3 neither on 5 \n Bye.`,
      );
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(`Because I am ${number} I can be divided on 3 `);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(`Because I am ${number} I can be divided on 5 `);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
