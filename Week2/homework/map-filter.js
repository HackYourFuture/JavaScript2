'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  const newNumber = numbers.filter(number => (number % 2 === 1 ? number : false)).map(x => x + x);
  return newNumber;
}

const myNumbers = [1, 2, 3, 4];
console.log('Using the filter method :' + doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers
};
