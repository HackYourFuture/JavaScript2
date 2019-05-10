'use strict';

const doubleOddNumbers = (numbers) => {
const oddNumbers = myNumbers.filter(num => {
  return num % 2 !== 0 
});
const newNumbers = oddNumbers.map((value) => {
  return value * 2;
});

console.log(newNumbers);
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
