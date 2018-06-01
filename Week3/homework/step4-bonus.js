'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

const uniqueValues = values.filter(function (value, index) { return values.indexOf(value) === index });

// I got help from here https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array

console.log(uniqueValues);
