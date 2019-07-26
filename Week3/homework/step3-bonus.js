'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  arr = arr.filter((item, index, a) => a.indexOf(item) === index);
  return arr;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Using set
const uniqueArray = [...new Set(values)];
console.log(`Using Set:`, uniqueArray);

// Do not change or remove anything below this line
module.exports = makeUnique;
