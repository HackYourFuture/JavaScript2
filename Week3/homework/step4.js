'use strict';

// Add your code here

//This is created by me!
const createBase = (x) => { return (y) => { return x + y } };

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27

//I added logs in order to check whether the function runs or not.
console.log(addSix(10));
console.log(addSix(21));