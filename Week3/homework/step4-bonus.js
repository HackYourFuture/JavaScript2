'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

// Add your function here. Try and come up with a good name for this function
function uniqueElement(myArr) {
    const els = myArr.map(el => el);
    let newArr = [];
    let temp = 0;
    for (let i = 0; i < els.length; i++) {
        for (let j = 0; j < myArr.length; j++) {
            if (els[i] === myArr[j]) {
                temp += 1;
            }
        }
        if (temp <= 1) {
            newArr.push(els[i]);
        }
        temp = 0;
    }
    return newArr;
}
// Replace `yourFunction` with the name of the function you just created
const uniqueValues = uniqueElement(values);

console.log(uniqueValues);
