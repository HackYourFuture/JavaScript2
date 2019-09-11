'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  // Replace this comment and the next line with your code
  for (let a = 0; a < arr.length; a++) {
    for (let i = 0; i < arr.length; i++) {
      if (a !== i && arr[a] === arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
