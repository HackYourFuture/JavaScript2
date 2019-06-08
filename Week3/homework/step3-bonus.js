'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const values2 = ['s', 'f', 'g', 's', 'r', 't', 't', 'a', 'f'];
const values3 = [
  '22',
  '33',
  '2',
  '4',
  '54',
  '33',
  '67',
  '76',
  '77',
  '66',
  '77',
  '67',
  '8',
  '4',
  '2',
  '12',
  '11',
  '54',
];
function makeUnique(arr) {
  const uniqueValuesArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueValuesArr.indexOf(arr[i]) === -1) {
      uniqueValuesArr.push(arr[i]);
    }
  }
  console.log(uniqueValuesArr);
  return uniqueValuesArr;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);
const uniqueValues2 = makeUnique(values2);
console.log(uniqueValues2);
const uniqueValues3 = makeUnique(values3);
console.log(uniqueValues3);

// Do not change or remove anything below this line
module.exports = makeUnique;
