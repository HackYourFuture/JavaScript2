'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function uniqueValues() {
  let newArr = Array.from(new Set(values));
  return newArr;
}

/* Second way */
let uniqueValues = [... new Set(values)];
