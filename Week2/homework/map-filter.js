'use strict';

const doubleOddNumbers = numbers =>
  numbers.filter(number => number % 2 !== 0).map(number => number * 2);

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

module.exports = {
  myNumbers,
  doubleOddNumbers,
};
