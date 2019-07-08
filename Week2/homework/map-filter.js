'use strict';

function doubleOddNumbers(numbers) {
  return numbers.filter(n => n % 2 !== 0).map(n => n * 2);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
