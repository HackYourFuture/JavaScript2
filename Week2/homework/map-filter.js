'use strict';

function doubleOddNumbers(numbers) {
  const changeOddNums = numbers.filter(data => data % 2 !== 0).map(data => data * 2);
  return changeOddNums;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
