'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function makeUnique(values) {
  const newValues = [];
  values.forEach(value => {
    if (!newValues.includes(value)) {
      newValues.push(value);
    }
  });
  return newValues;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = makeUnique(values);

console.log(uniqueValues);
