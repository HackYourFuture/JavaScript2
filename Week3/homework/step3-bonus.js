'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const uniqueArray = [];

  for (const key of arr) {
    if (uniqueArray.includes(key) === false) {
      uniqueArray.push(key);
    }
  }
  return uniqueArray;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
