'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const myColors = ['red', 'blue', 'green', 'blue', 'brown', 'yellow', 'red'];
const myNumbers = [5, 8, 12, 56, 8, 40, 5];

function makeUnique(arr) {
  // eslint-disable-next-line no-shadow
  return arr.filter((value, index, arr) => arr.indexOf(value) === index);
}

console.log(makeUnique(values));
console.log(makeUnique(myColors));
console.log(makeUnique(myNumbers));

function unique(arr) {
  return [...new Set(arr)];
}
console.log(unique(values));
console.log(unique(myColors));
console.log(unique(myNumbers));

// I ve learned the both methods from stack overflow

// Do not change or remove anything below this line
module.exports = makeUnique;
