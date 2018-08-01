'use strict';

// Add your code here

'use strict';

function createBase(a) {

    return function(b) {

        console.log(a + b);

    }
}
const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27