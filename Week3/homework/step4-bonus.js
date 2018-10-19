'use strict';

//const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
const values = [1, 2, 3, 4, 5, 2, 3, 5, 7, 8, 9];
// Add your function here. Try and come up with a good name for this function
function findUniqElements(arr) {
  const newValues = [];
  while (arr.length > 0) {
    if (newValues.includes(arr[0]))
      arr.shift();
    else
      newValues.push(arr[0]);
  }
  return newValues;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = findUniqElements(values);

console.log(uniqueValues);

