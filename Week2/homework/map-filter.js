'use strict';

function doubleOddNumbers(numbers) {
  const filterCondition = number => number % 2 !== 0;
  const filterResult = numbers.filter(filterCondition);
  console.log(`The Filter Result is: [${filterResult}]`); /* array of odd numbers */
  const numberDuplicate = number => number * 2;
  const numbersDuplicate = filterResult.map(numberDuplicate);
  return numbersDuplicate;
}

const myNumbers = [1, 2, 3, 4];
console.log(`The original array is: [${myNumbers}]`);
const myNewNumbers = doubleOddNumbers(myNumbers);
console.log(`The new array is (map result): [${myNewNumbers}]`);
// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
