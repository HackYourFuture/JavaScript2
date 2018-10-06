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
//shortened code
let paidPerHour = tasks.map(time => time.duration / 60).filter(filteredTime => filteredTime > 2).reduce((accumulator, elm) => accumulator + (elm * 16.50));
let totalSalary = "€" + paidPerHour.toFixed(2);
console.log(totalSalary);

//readable code
//mapped the time per hour 60min
let salaryPerHour = tasks.map(time => time.duration / 60);

//filtered all durations from 2 hours and above
let filtered = salaryPerHour.filter(filteredTime => filteredTime > 2);

//reduced the working hours to 16.50 euro per hour
let reduced = filtered.reduce((accumulator, elm) => accumulator + (elm * 16.50));
//result
let totalResult = "€" + reduced.toFixed(2);
console.log(totalResult);

