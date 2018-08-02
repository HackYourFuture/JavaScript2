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


//Step-1: Map the tasks to durations in hours.
const workHour = tasks.map(myElement =>
  (Math.round(100 * (myElement.duration / 60))) / 100);
//60 is used to show duration in hour.
//100 is used to round with two decimals such as 0.33 or 1.23


//Step-2: Filter out everything that took less than two hours
//(i.e., remove from the collection)
const morethan2Hours = workHour.filter(hour => hour >= 2);
// durations which are less than 2, are gone.


//Step-3: Multiply the each duration by a per-hour rate for billing
//(you can decide yourself what Maartje should earn per hour) 
//and sum it all up.
const totalHour = morethan2Hours.reduce((per, total) => total += per);

const earningAmount = `€ ${Math.round((totalHour * 24.5) * 100) / 100}`;

console.log(earningAmount);
//it will return € 457.17




//Output a formatted Euro amount, rounded to Euro cents,
//e.g: € 12.34.

