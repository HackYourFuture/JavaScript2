'use strict';

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
  ];
  
  function combinedAge(callback) {
    const ages = callback.map(member => member.age);
    const agesSum = ages.reduce((total, age) => total + age, 0);
    console.log(`The collective age of the HYF team is: ${agesSum}`);
    return agesSum;
  }
  console.log(combinedAge(hackYourFutureMembers));