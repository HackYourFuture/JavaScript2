'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function filterUniqueValues(uniqueArray) {
  uniqueArray = values.filter(function (item, pos) {
    return values.indexOf(item) === pos;
  });
  return uniqueArray;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = filterUniqueValues(values);

console.log(uniqueValues);
