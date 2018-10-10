'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function uniqueValuesFinder() {
  let uniqueValueArr = [];
  for (let i = 0; i < values.length; i++) {
    if (!uniqueValueArr.includes(values[i])) {
      uniqueValueArr.push(values[i]);
    }
  }
  return uniqueValueArr;
}
const uniqueValues = uniqueValuesFinder(values);
console.log(uniqueValues);
