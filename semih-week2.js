'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isOdd = x => x % 2 !== 0;
const double = x => x * 2;
const doubleOdd = numbers.filter(isOdd).map(double);
console.log(doubleOdd);

// /////////////////////////////////

const monday = [{
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

const tuesday = [{
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

const minToHour = x => x.duration / 60; // map
const moreThanTwoHours = x => x > 2; // filter
const perHourRate = x => x * 20; // map
const sum = (x, y) => x + y; // reduce

const mondayHours = monday.map(minToHour);
const tuesdayHours = tuesday.map(minToHour);

const mondayHoursFiltered = mondayHours.filter(moreThanTwoHours);
const tuesdayHoursFiltered = tuesdayHours.filter(moreThanTwoHours);

const mondayPerHourRates = mondayHoursFiltered.map(perHourRate);
const tuesdayPerHourRates = tuesdayHoursFiltered.map(perHourRate);

const mondayRateSum = mondayPerHourRates.reduce(sum, 0);
const tuesdayRateSum = tuesdayPerHourRates.reduce(sum, 0);

const rateSumCombined = Math.round((mondayRateSum + tuesdayRateSum) * 100) / 100;
console.log(`Total sum is €${rateSumCombined}`);