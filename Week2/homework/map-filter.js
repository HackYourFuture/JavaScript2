'use strict';

function doubleOddNumbers(numbers) {
  const result = numbers.filter(item => item % 2 !== 0).map(value => value * 2);
  console.log(result);
  return result;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
