('use strict');

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i); // push all nrs between the startIndex & the stopIndex
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      // apply a condition to check if the [i] is divided by 3
      threeCallback(numbers[i]);
    } else if (numbers[i] % 5 === 0) {
      // apply a condition to check if the [i] is divided by 3
      fiveCallback(numbers[i]);
    }
  }
    
  return numbers; // returns all the nrs between the startIndex & the stopIndex
}

function sayThree(number) {
  console.log(number + ' can be divided by 3.'); // adds some text to show how the threeCallback func works
}

function sayFive(number) {
  console.log(number + ' can be divided by 5.'); // adds some text to show how the fiveCallback func works
}

threeFive(10, 15, sayThree, sayFive);
// it applies first the threeCallback func then the fiveCallback func
// 12 is divisible by 3.
// 15 is divisible by 3.
// 10 is divisible by 5.
// 15 is divisible by 5.
// [10, 11, 12, 13, 14, 15]

// Do not change or remove anything below this line
module.exports = threeFive;
