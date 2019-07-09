'use strict';

function doubleOddNumbers(numbers) {
  const newNumbers = numbers.filter(item => item % 2 !== 0);
  const newNumbersAfterFilter = newNumbers.map(item => item * 2);
  return newNumbersAfterFilter;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
