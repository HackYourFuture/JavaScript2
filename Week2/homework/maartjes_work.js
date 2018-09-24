'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Map the tasks to durations in hours.
const durationsToHours = tasks.map((hours) => hours.duration / 60);
console.log(durationsToHours);

// Filter out everything that took less than two hours(i.e., remove from the collection)

const moreHours = durationsToHours.filter((x) => x > 1);
console.log(moreHours);

// Multiply the each duration by a per - hour rate for billing(you can decide yourself what Maartje should earn per hour) and sum it all up.

const hourDuration = moreHours.map((y) => y * 20);
console.log(hourDuration);

// Output a formatted Euro amount, rounded to Euro cents

hourDuration.forEach(function (elem) {
  console.log("€ " + Math.round(elem * 100) / 100);
});


