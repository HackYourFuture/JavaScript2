'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
// const values = [2, 3, 4, 1, 3, 5, 6, 7];
// const values = [1, 2, 3, 4, 5, 3, 7, 8, 9];

function linearSearch(array) { // O(n) = (2n-1) ???
  let result = 0;
  for (let searchedIndex = 0; searchedIndex < array.length; searchedIndex++) {
    for (let index = searchedIndex + 1; index < array.length; index++) {
      if (array[index] === array[searchedIndex]) {
        result = array[index];
        return result; // this function stops searching after finding the first match
      }
    }
  }
  return -1;
}

const uniqueValues1 = linearSearch(values);

console.log(uniqueValues1);
