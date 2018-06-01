'use strict';

const x = 9;
function f1(val) {
    val = val + 1;
    console.log(val);
    return val;
}

f1(x);

console.log(x);


const y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

// In Pass by Value(the first function), Function is called by directly passing the value of the variable as the argument.Changing the argument inside the function doesn’t affect the variable passed from outside the function. In Javascript numbers and strings follows pass by reference.

// In Pass by Reference(the second function), Function is called by directly passing the reference/address of the variable as the argument. Changing the argument inside the function affect the variable passed from outside the function. In Javascript objects and arrays follows pass by reference.
