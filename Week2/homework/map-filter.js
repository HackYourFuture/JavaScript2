'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  const newNumber = myNumbers.filter(number => (number % 2 === 0 ? number : false));

  return newNumber;
}

const myNumbers = [1, 2, 3, 4];
console.log('Using the filter method :' + doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers
};
