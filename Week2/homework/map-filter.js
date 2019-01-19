'use strict';

const doubleOddNumbers = numbers => numbers.filter(x => x % 2 === 1).map(y => y * 2);

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers
};
