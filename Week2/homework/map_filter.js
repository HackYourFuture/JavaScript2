'use strict';

const numbers = [1, 2, 3, 4];
/*
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}
console.log('The doubled numbers are', newNumbers);
*/
function isOdd(num) {
  return num % 2 !== 0;
}
const filteredNumber = (numbers.filter(isOdd));
function double(num) {
  return num * 2;
}

console.log('The doubled numbers are', filteredNumber.map(double));


