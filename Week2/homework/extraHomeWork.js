'use strict';

// Try to reverse an array using reduce
const arr = ['a', 'b', 'c', 'd'];
const reverseAnArrayUsingReduce = oldArray =>
  oldArray.reduce((total, map) => map + total).split('');
console.log(reverseAnArrayUsingReduce(arr));
