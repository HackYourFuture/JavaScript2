'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function removeRepetition(arr) {

  const uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }

  }
  return uniqueArr;
}

const uniqueValues = removeRepetition(values);
console.log(uniqueValues);
