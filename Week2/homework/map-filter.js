'use strict';

function doubleOddNumbers(numbers) {
  const newNumbers = numbers.filter(x => x % 2 === 1).map(y => y * 2);
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

module.exports = {
  myNumbers,
  doubleOddNumbers
};
