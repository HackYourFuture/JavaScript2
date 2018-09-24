"use strict";

let mainArr = ["a", "b", "c", "d", "a", "e", "f", "c"];

mainArr.getUnique = function() {
  let j = {},
    uniqArr = [],
    mainArrItem;
  for (let i = 0; (mainArrItem = this[i]); i++) {
    j[mainArrItem] = 1;
  }

  for (mainArrItem in j) {
    uniqArr.push(mainArrItem);
  }
  return uniqArr;
};
console.log(mainArr.getUnique());

//simplest way

const mainArr = ["a", "b", "c", "d", "a", "e", "f", "c"];
let uniqueArray = Array.from(new Set(mainArr));

console.log(uniqueArray);
