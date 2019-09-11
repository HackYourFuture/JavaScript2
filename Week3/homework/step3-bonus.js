'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  arr = arr.filter((item, index, array) => array.indexOf(item) === index);
  return arr;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);
/* This can be du=one using Set to store unique values as:
let uniqueValues = [...new Set(values)];
*/

// Do not change or remove anything below this line
module.exports = makeUnique;
