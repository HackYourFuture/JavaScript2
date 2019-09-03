'use strict';

function doubleOddNumbers(numbers) {
  const number = numbers.filter(num => num % 2 !== 0).map(num => num * 2);
  return number;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
