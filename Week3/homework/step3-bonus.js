'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const b = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (b.indexOf(arr[i]) === -1) {
      b.push(arr[i]);
    }
  }
  return b;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
