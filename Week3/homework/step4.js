'use strict';
{
  function createBase(num1) {
    return function (num2) {
      return num1 + num2;
    };
  }

  const addSix = createBase(6);

  console.log(addSix(10));
  console.log(addSix(21));
}
