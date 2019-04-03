'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  // return arrArg => {
  //   arrArg.filter((elem, pos, arr) => {
  //     return arr.indexOf(elem) === pos;
  //   });
  // };
  const arrUnique = [...new Set(arr.map(elem => elem))];
  return arrUnique;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
