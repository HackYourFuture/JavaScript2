'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const uniqueObject = {};

  arr.forEach(item => {
    if (!uniqueObject[item]) {
      uniqueObject[item] = '';
    }
  });

  return Object.keys(uniqueObject);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
