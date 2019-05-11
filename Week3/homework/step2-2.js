('use strict');

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i); // push all nrs between the startIndex & the stopIndex
    if (i % 3 === 0 && i % 5 === 0) {
      threeCallback(i);
      fiveCallback(i);
    } else if (i % 3 === 0) {
      threeCallback(i);
    } else if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  return numbers; // returns all the nrs between the startIndex & the stopIndex
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' can be divided by 3'); // adds some text to show how the threeCallback func works
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' can be divided by 5'); // adds some text to show how the fiveCallback func works
}

threeFive(10, 15, sayThree, sayFive);
// it applies first the threeCallback func then the fiveCallback func
// 10 can be divided by 5
// 12 can be divided by 3
// 15 can be divided by 3
// 15 can be divided by 5

// Do not change or remove anything below this line
module.exports = threeFive;
