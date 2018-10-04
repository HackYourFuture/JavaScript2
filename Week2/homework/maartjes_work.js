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

let durationOfTasks = tasks.map(Element => Element.duration);

 console.log(durationOfTasks);

// Map the tasks to durations in hours.
let durationInHours = durationOfTasks
  .map(element => element / 60)

 console.log(durationInHours);

// Filter out everything that took less than two hours
  
let lessThanTwoHours = durationInHours
    
.filter(element => element >= 2)
console.log(lessThanTwoHours);

// Multiply the each duration by a per-hour rate for billing and sum it all up.

let paymentPerHour = durationOfTasks
  .map(element => (element / 60) * 100)

console.log(paymentPerHour);

let totalPayment = paymentPerHour
  .reduce(function (a, b) {
    return a + b;
    
  });
console.log(`Total hours payment is: ${totalPayment}`);

// Output a formatted Euro amount, rounded to Euro cents, e.g: € 12.34.

let amountEUR = totalPayment.toFixed(2);
console.log(`The total amount to Euro is: ${amountEUR} EUR.`);


