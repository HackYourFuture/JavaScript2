'use strict';

const doubleOddNumbers = numbers => {
  let newNumbers = [];
  newNumbers = numbers.filter(number => number % 2 !== 0);
  newNumbers = newNumbers.map(x => x * 2);
  return newNumbers;
};

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
