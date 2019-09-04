'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  const oddNum = numbers.filter(num => num % 2 === 1);
  const doubleOddNum = oddNum.map(num => num * 2);
  return doubleOddNum;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
