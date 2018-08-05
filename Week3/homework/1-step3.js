'use strict';

function foo(func) {
    // What to do here? 
    bar();
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);