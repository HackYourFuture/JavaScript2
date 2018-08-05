'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, nr) {
    // add your code here
    let reString = "";
    if (nr >= 0) {
        for (let i = 0; i < nr; i++) {
            reString += str;
        }
        return reString;
    } else {
        return reString;
    }
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, nr) {
    // add your code here
    let reString = "";
    if (nr >= 0) {
        while (nr) {
            reString += str;
            nr--;
        }
        return reString;
    } else {
        return reString;
    }
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, nr) {
    // add your code here
    let reString = "";
    if (nr >= 0) {
        do {
            reString += str, nr--;

        }
        while (nr);
        return reString
    } else {
        return reString;
    }
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));