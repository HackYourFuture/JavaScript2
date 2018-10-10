'use strict';
{
  // use a 'for' loop
  function repeatStringNumTimesWithFor(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }

  console.log(repeatStringNumTimesWithFor('abc\n', 3));
}

{
  // use a 'while' loop
  function repeatStringNumTimesWithWhile(str, num) {
    let newStr = '';
    while (num > 0) {
      newStr += str;
      num--;
    }
    return newStr;
  }

  console.log(repeatStringNumTimesWithWhile('abc\n', 3));
}

{
  // use a 'do...while' loop
  function repeatStringNumTimesWithDoWhile(str, num) {
    let newStr = '';
    do {
      newStr += str;
      num--;
    }
    while (num > 0);
    return newStr;
  }

  console.log(repeatStringNumTimesWithDoWhile('abc\n', 3));
}
