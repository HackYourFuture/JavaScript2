'use strict'

function foo(func) {
    return setTimeout(func, 2000);
}

function bar() {
    console.log('Hello, I am bar!');
}


foo(bar);