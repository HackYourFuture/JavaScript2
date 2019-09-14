'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const uniqueArray = [...new Set(arr)];
  return uniqueArray;
}
// I worked on loop in loop but there were to many lines.
// The question was asking for it to be fast then I got it from google.
const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
