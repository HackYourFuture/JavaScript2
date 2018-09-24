'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
    if (num <= 0) return "";
    const finalRepeat = str;
    for (let i = 0; i < num - 1; ++i)
        str += finalRepeat;
    return str;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
    // add your code here
    let rpString = "";
    if (num >= 0) {
        while (num) {
            rpString += str;
            num--;
        }
        return rpString;
    } else {
        return rpString;
    }
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
    // add your code here
    let rpString = "";
    if (num >= 0) {
        do {
            rpString += str, num--;

        }
        while (num);
        return rpString
    } else {
        return rpString;
    }
}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));