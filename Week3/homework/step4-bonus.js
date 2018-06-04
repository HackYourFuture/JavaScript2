"use strict";

const values = ["a", "b", "c", "d", "a", "e", "f", "c"];

// Add your function here. Try and come up with a good name for this function
function getUnique(arr) {
  const uniqueValues = arr.filter((elm, index) => arr.indexOf(elm) == index);
  return uniqueValues;
}

const uniqueValues = getUnique(values);

console.log(uniqueValues);
