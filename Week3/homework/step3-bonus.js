'use strict';

const values = [ 'a', 'b', 'c', 'd', 'a', 'e', 'f', 'c' ];

function makeUnique(arr) {
	return arr.filter((item, index, array) => array.indexOf(item) === index);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
