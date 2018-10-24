'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}

const uniqueValues = makeUnique(values);

console.log(uniqueValues);

// Do not change or remove the next line
module.exports = makeUnique;
