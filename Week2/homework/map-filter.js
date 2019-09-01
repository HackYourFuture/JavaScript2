'use strict';

function doubleOddNumbers(numbers) {
  let result = numbers.filter(elem => elem % 2 !== 0);
  console.log(result); // [1,3]
  result = result.map(x => x * 2);
  return result; // [2,6]
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
