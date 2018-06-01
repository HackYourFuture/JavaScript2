'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];
    // Add your code here
    for (let i = startIndex; i <= stopIndex; i++) {
        values.push(i);
        if (i % 3 === 0) sayThree(i);
        if (i % 5 === 0) sayFive(i);
    }
}

threeFive(10, 15, sayThree, sayFive);

function sayThree(number) {
    console.log(number + ' is divisible by three');
}

function sayFive(number) {
    console.log(number + ' is divisible by five');
}
