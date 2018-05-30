"use strict";

const monday = [
  {
    name: "Write a summary HTML/CSS",
    duration: 180
  },
  {
    name: "Some web development",
    duration: 120
  },
  {
    name: "Fix homework for class10",
    duration: 20
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  }
];

const tuesday = [
  {
    name: "Keep writing summary",
    duration: 240
  },
  {
    name: "Some more web development",
    duration: 180
  },
  {
    name: "Staring out the window",
    duration: 10
  },
  {
    name: "Talk to a lot of people",
    duration: 200
  },
  {
    name: "Look at application assignments new students",
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Add your code here
let hourSalary = 25;
const earnings = tasks
  .map(minutesToHours => minutesToHours.duration / 60) // transforming all task durations to hours
  .filter(atLeastTwoHours => atLeastTwoHours >= 2) // filtering and keeping only the tasks that take more than two hours
  .reduce((sum, task) => (sum += task * hourSalary), 0); // sum is the accumulator initialized with 0, and task is the index

console.log("Maartje has earned " + earnings.toFixed(2) + " euros.");
