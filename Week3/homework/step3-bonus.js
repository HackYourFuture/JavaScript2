'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
function makeUnique(arr) {
  const uniqValArr = arr.filter((el, i, array) => array.indexOf(el) === i);
  return uniqValArr;
}
const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
