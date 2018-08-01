'use strict'

const values = ['a', 'b', 'b', 'c', 'd', 'a', 7, 'f', 'f', 'c', 7, 'a', 99];



function deleteDuplicate(x) {

    var unique = x.filter(function(item, index) {
        return x.indexOf(item) === index;
    })
    return unique;
}
// Add your function here. Try and come up with a good name for this function

// Replace `yourFunction` with the name of the function you just created
const uniqueValues = deleteDuplicate(values);

console.log(uniqueValues);