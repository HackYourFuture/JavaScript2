'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  // E5:
  return arr.filter((value, index, array) => array.indexOf(value) === index);
  // E6:
  // console.log([...new Set(arr)]);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
