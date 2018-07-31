'use strict';


function createBase(n){
    let sume = (a) => a + n;
    return sume;
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27

console.log(addSix(10), addSix(21));
