'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

function pickAndDoubleOdds(arr) {

    let myOdds = arr.filter(num => num % 2 === 1);
    //this is for filtering odd numbers in parameter array

    return myOdds.map(odd => odd *= 2);
    //this is for doubling odd numbers previously chosen
}

console.log(pickAndDoubleOdds(numbers));
// display the result: [2, 6]