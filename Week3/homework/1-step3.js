'use strict';

function foo(func) {
    // What to do here? 
    bar();
}

function bar() {
    console.log('hello i am foo');
}

foo(bar);