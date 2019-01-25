'use strict';

function doubleOddNumbers(numbers) {
  const newNumbers = numbers.filter(number => number % 2 !== 0);

  const doubleNewNumbers = newNumbers.map(number => number * 2);
  return doubleNewNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line

module.exports = {
  myNumbers,
  doubleOddNumbers
};
