'use strict';

const myNumbers = [1, 2, 3, 4];

const doubleOddNumbers = numbers =>
  numbers.filter(number => number % 2 !== 0).map(number => number * 2);

console.log(myNumbers);
console.log(doubleOddNumbers);
console.log(doubleOddNumbers(myNumbers));
// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
