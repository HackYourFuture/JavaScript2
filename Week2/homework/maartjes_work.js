"use strict";

// 2.2
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

const durations = tasks.map(task => task.duration);

// Map the tasks to durations in hours.
const durationInHours = durations.map(task => task / 60)

// Filter out everything that took less than two hours
const durationsOTwoHoursOfMore = durationInHours.filter(task => task >= 2)

// Multiply the each duration by a per-hour rate for billing and sum it all up.
const hourlyRate = 50;

const paymentPerHour = durations.filter(task => (task / 60) * hourlyRate)

const totalEarnings = paymentPerHour.reduce(function (a, b) {
  return a + b;

});

// Output a formatted Euro amount, rounded to Euro cents, e.g: € 12.34.

const amountEUR = totalEarnings.toFixed(2);