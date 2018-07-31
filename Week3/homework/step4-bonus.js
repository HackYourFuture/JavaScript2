'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name 
//for this function

function listUniqueOnes(arr) {
    arr.sort();

    let myUniques = [];

    for (let i = 0; i < arr.length; i++) {

        //main part of function
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
