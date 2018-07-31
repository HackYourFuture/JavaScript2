'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', []];

// Add your function here. Try and come up with a good name 
//for this function

function listUniqueOnes(arr) {
    arr.sort();

    let myUniques = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "string" || "number") {
            return "This array contains non-string or non-number element!"
        };

        if (arr[i] !== arr[i + 1]) {
            myUniques.push(arr[i]);
        }
    }

    return myUniques;
}

// Replace `yourFunction` with the name of the function you 
//just created

const uniqueValues = listUniqueOnes(values);

console.log(uniqueValues);
