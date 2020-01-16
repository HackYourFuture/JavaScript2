// Snippet

let a = 10;
// the verbal a take 10 as value

const x = (function() {
    // here we give new value to the same variable that variable.
    a = 12;
    // then the value of variable x will be 12

    return function() {
        alert(a);
    };
})();

// the output for function x it will be 12
x();