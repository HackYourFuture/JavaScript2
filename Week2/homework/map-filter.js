'use strict';

// function doubleOddNumbers(arr) {
//   const chooseOdd = arr.filter(number => number % 2 === 1);
//   const double = chooseOdd.map(number => number * 2);
//   return double;
// }

// const myNumbers = [1, 2, 3, 4];
// console.log(doubleOddNumbers(myNumbers));

function doubleOddNumbers(numbers) {
  const chooseOdds = numbers.filter(number => number % 2 === 1);
  const doubles = chooseOdds.map(number => number * 2);
  return doubles;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
