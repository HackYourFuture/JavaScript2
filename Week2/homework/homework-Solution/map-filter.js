'use strict';
{
  //Question #1

  // Function filter odd Numbers and makes it double
  const doubleOddNumbers = numbers => {
    if (numbers % 2 !== 0) {
      return numbers * 2;
    }
  };

  const myNumbers = [1, 2, 3, 4];
  // filter odd number from myNumbers
  const myOddNumbers = myNumbers.filter(doubleOddNumbers);

  // creat doubled  odd number from myOddNumbers
  const myNewDoubledOdd = myOddNumbers.map(doubleOddNumbers);

  console.log('Filtered Odd Number:' + myOddNumbers);
  console.log('Filtered Odd Number after doubled:' + myNewDoubledOdd);

  //Do not change or remove anything below this line
  // module.exports = {
  //   myNumbers,
  //   doubleOddNumbers,
  // };
}
