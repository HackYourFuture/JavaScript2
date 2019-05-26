'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  return numbers.filter(number => number % 2 === 1).map(number => number * 2);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
