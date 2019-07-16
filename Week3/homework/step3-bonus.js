'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  return arr.reduce((resultArr, item) => {
    if (!resultArr.includes(item)) resultArr.push(item);
    return resultArr;
  }, []);
  // Or making unique arrays using Set datatype
  // return [...new Set(arr)];
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
