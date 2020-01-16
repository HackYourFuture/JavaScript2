// Snippet
const x = 9;

function f1(val) {
    val = val + 1;
    return val;
}
// when the functions f() fired it will increase verbal x
// so the output the value will be 10
f1(x);

// the function will not change the variable x value it will be still the sam so the output is 9
console.log(x);

const y = { x: 9 };

function f2(val) {
    val.x = val.x + 1;
    return val;
}

// when the functions f2() fired it will increase the object y
// so the output the value will be 10
f2(y);

// the function here will change the the value of the object the output is 10
console.log(y);