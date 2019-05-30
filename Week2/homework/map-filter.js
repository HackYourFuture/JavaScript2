'use strict';

function doubleOddNumbers(numbers) {
  const doubleOddNumber = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
  return doubleOddNumber;
  // console.log(numbers);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
