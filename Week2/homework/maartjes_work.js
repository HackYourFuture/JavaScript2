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
// Add your code here
// Map the tasks to durations in hours

const durationInMinute = [];
for (let k in tasks) {
  durationInMinute[k] = tasks[k].duration;
}

let durationInHours = durationInMinute.map( i => (Number((i / 60).toFixed(2))));
console.log(durationInHours);

[3, 2, 0.33, 3.33, 4, 3, 0.17, 3.33, 0.67]

// Filter out everything that took less than two hours (i.e., remove from the collection)

let lessThanTowHours = two
  .filter();