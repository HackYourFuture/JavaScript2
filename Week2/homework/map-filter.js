'use strict';

function doubleOddNumbers(numbers) {
  const oddNumbers = numbers.filter(number => number % 2 !== 0);
  const numbersDuplicate = oddNumbers.map(number => number * 2);
  return numbersDuplicate;
}

const myNumbers = [1, 2, 3, 4];
const myNewNumbers = doubleOddNumbers(myNumbers);
console.log(`The new array is: [${myNewNumbers}]`);
// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
