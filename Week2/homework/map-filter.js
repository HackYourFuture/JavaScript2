'use strict';

function doubleOddNumbers(numbers) {
  const doubledNumbers = numbers.filter(elem => elem % 2 !== 0).map(elem => elem * 2);
  return doubledNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
