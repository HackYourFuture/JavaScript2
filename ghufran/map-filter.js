'use strict';

function doubleOddNumbers(num) {
  num = num.filter(n => n % 2 !== 0).map(number => number * 2);
  return num;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // [2, 6] the double of [1,3]

module.exports = {
  myNumbers,
  doubleOddNumbers,
};
