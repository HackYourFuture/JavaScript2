'use strict';

function doubleOddNumbers(numbers) {
  const oddNumbers = numbers.filter(elem => elem % 2);
  const doubledNumbers = oddNumbers.map(elem => elem * 2);
  console.log(numbers);
  return doubledNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
