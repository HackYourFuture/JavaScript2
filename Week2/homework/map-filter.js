'use strict';

function doubleOddNumbers(numbers) {
  var filteredNumbered = numbers.filter(elem => elem % 2 !== 0);
  var doubledNumber = filteredNumbered.map(elem => elem * 2);
  return doubledNumber;
}
// console.log(numbers);

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
