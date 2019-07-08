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

// Adham's code
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

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  maartjesEarnings,
};
