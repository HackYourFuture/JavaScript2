'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];
    // Add your code here
    let myArr = stopIndex - startIndex;
    for (let i = 0; i <= myArr; i++) {
        values[i] = startIndex;
        startIndex++;
    }
    values.forEach((value) => {
        if (value % 3 === 0 && value % 5 === 0) {
            threeCallback();
            fiveCallback();
        } else if (value % 3 === 0) {
            threeCallback();
        } else if (value % 5 === 0) {
            fiveCallback();
        }
    });
}

function sayThree() {
    console.log("3");
}

function sayFive() {
    console.log("5");
}
threeFive(10, 15, sayThree, sayFive);