'use strict';

const myNumbers = [1, 2, 3, 4];

const doubleOddNumbers = myNumbers
    .filter(odd => odd % 2 !== 0)
    .map(odd => odd * 2);

console.log(doubleOddNumbers);




// Do not change or remove anything below this line
module.exports = {
    myNumbers,
    doubleOddNumbers
};