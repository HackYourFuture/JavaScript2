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

const durationsHours = tasks.map(hour => (hour.duration/60));
//console.log(durationsHours);

const moreThanTwoHours = durationsHours.filter(hour => hour>=2);
//console.log(moreThanTwoHours);

const sumHours = moreThanTwoHours.reduce((total, hour) => total+hour, 0);
//line 53 is for line 62

const earnings = moreThanTwoHours.map(earn => earn*10);
//console.log(earnings);

const totalEarning = earnings.reduce((total, earn) => total+earn, 0);
//console.log(totalEarning);

console.log('Maartje has worked '+(sumHours.toFixed(2))+' hours.');
console.log('The rate is '+ "\u20ac" + '10.');
console.log('The total earning is '+ "\u20ac" + (totalEarning.toFixed(2)) + '.');