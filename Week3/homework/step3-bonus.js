'use strict';

// Test PASS
const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  // Replace this comment and the next line with your code
  const uniques = [...new Set(arr)];
  return uniques;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
