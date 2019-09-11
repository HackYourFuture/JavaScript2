'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  return arr.reduce(
    (uniquesArr, currentElm) =>
      uniquesArr.includes(currentElm) ? uniquesArr : [...uniquesArr, currentElm],
    [],
  );
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
