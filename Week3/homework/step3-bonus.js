'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const sortedArr = arr.sort();
  const uniqueArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      uniqueArr.push(sortedArr[i]);
    }
  }

  return uniqueArr;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
