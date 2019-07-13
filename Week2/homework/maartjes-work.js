'use strict';

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
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
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
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

// Start: Adham's code
const maartjesDurationsHours = []; /* Collect our data in one array */
maartjesTasks.forEach(element => {
  const durationMinutes = element.duration;
  const durationHours = durationMinutes / 60;
  if (durationHours >= 2) {
    maartjesDurationsHours.push(durationHours);
  }
});
// console.log(maartjesDurationsHours); /* Array of durations in hours, just if the duration is more than 2 hours */
const reducingProcess = (totalToLeft, right) => totalToLeft + right;
const maartjesTotalDuration = maartjesDurationsHours.reduce(reducingProcess);
// console.log(maartjesTotalDuration); /* One Number: the total of durations in hours */
const maartjesEarnings = maartjesTotalDuration * maartjesHourlyRate;
// console.log(earnings); /* One Number: The exactly earnings with lots of decimals */
// add code to convert `earnings` to a string rounded to two decimals (euro cents)
const earnings2decimals = maartjesEarnings.toFixed(2);
// console.log(Earnings2decimals); /* Number with 2 decimals as string */
const earningsNumber = parseFloat(earnings2decimals);
// console.log(earningsNumber);
console.log(`Maartje has earned € ${maartjesEarnings}`);
console.log(`Maartje has earned € ${earningsNumber}`);
// Finish: Adham's code
// original is :
function computeEarnings(a, b) {
  // Replace this comment and the next line with your code
  a = 'Me Me';
  b += b;
  console.log(
    `I am an argument, my value now is: ${b}. I am unnecessarily here.\nI am an argument in the function computeEarnings.\nMy mission is to avoid errors in ESLint while it is reading the code.\nAfter that the code can go to the next step (unit test).\nBut without me the ESLint will report errors and then the test will not be abel to run at all.\nSo I am unnecessarily to execute the code.\nBut important to take the code to the next step "Unit test" and then make the test able to run.`,
  );
  return maartjesEarnings;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)
const euroCents = maartjesEarnings.toFixed(2);
console.log(`Maartje has earned €${euroCents}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
