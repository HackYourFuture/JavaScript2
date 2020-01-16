"use strict";

function createBase(base) {
    function add(num) {
        return base + num;
    }
    return add;
}

const addSix = createBase(6);

// Put here your function calls... with newNumber

console.log(addSix(9)); // 15

console.log(addSix(18)); //24

console.log(addSix(30)); //36