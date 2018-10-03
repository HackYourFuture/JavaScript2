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
/*
function duration(item) {
  return item.duration;
}
function sum(prev, next) {
  return prev + next;
}
console.log(tasks.map(duration).reduce(sum));
*/

/*
let hours = 0;
for (let i = 0; i < tasks.length; i++) {
  const num = tasks[i].duration;
  hours += num;
}
hours /= 60;
console.log(hours);
*/

let hours = 0;
const duration = (tasks.map(tasks => tasks.duration));
for (let i = 0; i < duration.length; i++) {
  hours += duration[i];
}
hours /= 60;
console.log(hours);

//------------------


/*
const twoOrMoreHours = [];
for (let i = 0; i < duration.length; i++) {
  if (duration[i] >= 120) twoOrMoreHours.push(duration[i]);
}
console.log(twoOrMoreHours);
*/


const twoOrMoreHours = (duration.filter(values => {
  return values >= 120;
}
));

console.log(twoOrMoreHours);

//------------------
/*
const salaryPerHour = '24.35';
let salary = 0;

for (let i = 0; i < duration.length; i++) {
  salary = hours * salaryPerHour;
}
console.log('€ ' + salary.toFixed(2));

*/

const HoursArray = [hours];
function add(sum, num) {
  return sum + num;
}
const salary = HoursArray.map(HoursArray => HoursArray * 24.35).reduce(add, 0);
console.log('€ ' + salary.toFixed(2));


