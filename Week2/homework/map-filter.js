'use strict';
/* cSpell:disable */

function doubleOddNumbers(numbers) {
  // Replace this comment and the next line with your code
  numbers = numbers.filter(number => number % 2 !== 0);
  numbers = numbers.map(number => number * 2);
  console.log(numbers);


}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
