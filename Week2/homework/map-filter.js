'use strict';

function doubleOddNumbers(numbers) {
  const res1 = numbers.filter(num => num % 2 !== 0);
  const result = res1.map(number => number * 2);
  return result;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
