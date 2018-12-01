'use strict';
function createBase (x){
 return function (y){

    return(x + y);
}

}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
