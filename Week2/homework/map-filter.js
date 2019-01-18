'use strict';

function doubleOddNumbers(numbers) {
  // step 1.1
  return numbers.filter(number => number % 2 !== 0).map(oddNumber => oddNumber * 2);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers
};
