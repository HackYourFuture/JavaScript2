"use strict";

const values = ["a", "b", "c", "d", "a", "e", "f", "c"];

// Add your function here. Try and come up with a good name for this function
function uniqueKeys(arr) {
  return Array.from(new Set(arr));
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = uniqueKeys(values);

console.log(uniqueValues);
