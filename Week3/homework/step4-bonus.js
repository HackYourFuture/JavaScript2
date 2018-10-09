'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function arrFilter(arr) {
  let uniq = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniq.indexOf(arr[i]) === -1) {
      uniq.push(arr[i]);
    }
  }
  return uniq;
}
const uniqueValues = arrFilter(values);

console.log(uniqueValues);