'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function uniqueValuesGenerator(arr) {
    const unique_array = arr.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    return unique_array;
}

const uniqueValues = uniqueValuesGenerator(values);

console.log(uniqueValues);

