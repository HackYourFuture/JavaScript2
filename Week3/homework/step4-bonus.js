'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function

// Replace `yourFunction` with the name of the function you just created
 function removeDuplicateUsingFilter(values){
    let unique_array = values.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
};

console.log(removeDuplicateUsingFilter(values));

//["a", "b", "c", "d", "e", "f"]

// i read on (https://codehandbook.org/how-to-remove-duplicates-from-javascript-array/)
//to  solve this problem  
