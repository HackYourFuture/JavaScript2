'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Another way
function arrFilter(arr) {
  let uniq = [];
  arr.forEach((el, i) => {
    if (arr.indexOf(el) === i) {
      uniq.push(el);
    }
  });
  return uniq;
}

const uniqueValues1 = arrFilter(values);
console.log(uniqueValues1);