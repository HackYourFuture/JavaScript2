'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function linearSearch(array) {
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
// linearSearch in this case has time complexity of O(n) = n(n-1) because it go through two loops in worst case.
const uniqueValues1 = linearSearch(values);
console.log(uniqueValues1);


/*
binarySearch() function is not suitable for all cases and I made it just to practice.
floor and ceil are used to guarantee that it loops over all elements.
*/
function binarySearch(array) {
  let result = 0;
  const n = array.length / 2;
  for (let searchedIndex = 0; searchedIndex < Math.ceil(n); searchedIndex++) {

    for (let index = searchedIndex + 1; index < Math.ceil(n); index++) {
      if (array[index] === array[searchedIndex]) {
        result = array[index];
        return result;
      }
    }

    for (let index = searchedIndex + Math.floor(n); index < array.length; index++) {
      if (array[index] === array[searchedIndex]) {
        result = array[index];
        return result;
      }
    }
  }
  return -1;
}
// binarySearch has advantage if the matched items are located in the first half
const uniqueValues2 = binarySearch(values);
console.log(uniqueValues2);

/*
This function searches from the front and back of the array, so the worst case is that the matched items are located in the middle.
*/
function frontBackSearch(array) {
  let result = 0;

  for (let searchedIndex = 0; searchedIndex < array.length; searchedIndex++) {
    let front = searchedIndex;
    let back = array.length - 1;

    while (front <= back) {
      if (array[front + 1] === array[searchedIndex] || array[back] === array[searchedIndex]) {
        result = array[searchedIndex];
        return result;
      }
      front++;
      back--;
    }
  }
  return -1;
}

const uniqueValues3 = frontBackSearch(values);
console.log(uniqueValues3);
