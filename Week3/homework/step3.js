'use strict';

function createBase(base) {
  return number => number + base;
}

function makeUnique(arr) {
  return arr.filter((item, index, array) => array.indexOf(item) === index);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
