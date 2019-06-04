'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const uniques = [];
  arr.forEach(element => {
    if (uniques.find(unique => unique === element) === undefined) {
      uniques.push(element);
    }
  });
  return uniques;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
