'use strict';

// use a 'for' loop
'use strict'

function repeatStringNumTimes(str, num) {
    var repeat = "";

    for (var i = 0; i < num; i++) {

        var x = repeat += str;
        console.log(x)
    }
    if (num < 0) {
        return "";

    }
    return x;
}

repeatStringNumTimes("abc", -2);
repeatStringNumTimes("*", 8)
repeatStringNumTimes("abc", 3);



// use a 'while' loop
'use strict'

function repeatStringNumTimes(str, num) {
    var repeat = "";
    while (num > 0) {
        repeat += str;
        num--;
    }
    console.log(repeat);
    return repeat;

}
repeatStringNumTimes("abc", 3);



// use a 'do...while' loop
'use strict'

function repeatStringNumTimes(str, num) {
    var repeat = "";
    if (num > 0) {
        do {
            console.log(repeat += str);
            num--;
        }
        while (num > 0);
    } else {
        return "";
    }
    return repeat;

}
repeatStringNumTimes("abc", -2)