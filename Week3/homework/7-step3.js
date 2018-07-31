'use strict';

const x = 9;

function f1(val) {
    val = val + 1;
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

/* I think that for objects the value of the variable is a reference, the value that is passed, is a pure reference, so you can change the data inside object like this: (val.x += 1;).
But you can't assign/ update new value like this: ( val += 1;).

Pass by Value:
In Pass by Value, Function is called by directly passing the value of the variable as the argument.Changing the argument inside the function doesn’t affect the variable passed from outside the function.

Pass by Reference:
In Pass by Reference, Function is called by directly passing the reference / address of the variable as the argument.Changing the argument inside the function affect the variable passed from outside the function. 
*/