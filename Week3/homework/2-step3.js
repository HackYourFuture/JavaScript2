'use strict'

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let values = [];
    for (startIndex; startIndex <= stopIndex; startIndex++) {
        values = startIndex;
        //console.log(values)

        if (values % 3 === 0) {
            threeCallback(values);
        }
        if (values % 5 === 0) {

            fiveCallback(values);
        }
        if (values % 3 === 0 && values % 5 === 0) {

            console.log('array value is divisible by both 3 and 5')

        }
    }
}

threeFive(10, 15, sayThree, sayFive);


function sayThree(values) {
    console.log(values + " is divisible by 3");

};

function sayFive(values) {
    console.log(values + " is divisible by 5")

}