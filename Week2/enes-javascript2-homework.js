{
"use strict";
//1.1

const myNumbers = [1, 2, 3, 4];

const doubleOddNumbers = myNumbers.filter(number => number % 2 === 1).map(number => number * 2);

console.log(doubleOddNumbers);

//1.2

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];
/* this is for control purposes
const thursday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

*/

const finalBill = (...args) => {
  //i tried create a function regardless of the numbers of the args that take day as parameters. Even though new days are added, my program will work.

  const workingDays = args.reduce((acc, val) => [...acc, ...val], []); //at first I tried to spread args but it spit out nested arrays. So, then I come up with this method.
  const totalHoursOfWork = workingDays.map(hour => hour.duration / 60);
  const hoursMoreThanTwo = totalHoursOfWork.filter(hour => hour >= 2);
  const billing1 = hoursMoreThanTwo
    .map(duration => duration * 20)
    .reduce((sum, elem) => (sum += elem), 0);
  const billing = totalHoursOfWork
    .map(duration => duration * 20)
    .reduce((sum, elem) => (sum += elem), 0);
  const roundedBilling = Math.round(billing * 100) / 100;
  return `€${roundedBilling};`;
};

console.log(finalBill(monday, tuesday /*,thursday*/));
}
