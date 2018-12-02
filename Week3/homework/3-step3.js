'use strict';

// use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // add your code here
  var strOut = "";
  for (var i = 0; i < num; i++) {
    strOut = strOut + str;
  }
  return strOut;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // add your code here
  var str = 0;

  while (str < 3) {
    str++;
  }


  // expected output: 3

}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // add your code here
  var str = "";
  var i = 0;

  do {
    i = i + 1;
    str = str + i;
  } while (i < 3);


}

console.log('while', repeatStringNumTimesWithDoWhile('abc', 3));


// function repeatStringNumTimes(str, num) {
  // var strOut = "";
  // for (var i = 0; i < num; i++) {
    // strOut = strOut + str;
  // }

  // return strOut;
// }