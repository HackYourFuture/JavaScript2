'use strict';

function doubleOddNumbers(numbers) {
  const chooseOdds = numbers.filter(number => number % 2 === 1);
  const doubles = chooseOdds.map(number => number * 2);
  return doubles;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

module.exports = {
  myNumbers,
  doubleOddNumbers,
};
