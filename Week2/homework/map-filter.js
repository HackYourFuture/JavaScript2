'use strict';

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  const doubledOddNumbers = numbers.filter(number => number % 2 !== 0).map(odd => odd * 2);
  return doubledOddNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
