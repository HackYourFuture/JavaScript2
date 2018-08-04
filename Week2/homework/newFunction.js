'use strict';
newFunction(); //[2, 6]

function newFunction() {
    const numbers = [1, 2, 3, 4];
    let newNumbers = [];
    let newNumbers = numbers.filter(function (number) {
        return (number % 2 !== 0);
    }).map(function () {
        return numbers * 2;
    });
    console.log(newNumbers);
}