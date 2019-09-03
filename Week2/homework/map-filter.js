'use strict';

function doubleOddNumbers(numbers) {
  const oddNums = numbers.filter(data => data % 2 !== 0).map(data => data * 2);
  return oddNums;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
