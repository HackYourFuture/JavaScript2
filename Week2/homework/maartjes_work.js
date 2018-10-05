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
const inHours = tasks.map(hour => hour['duration']/60);
console.log(inHours);

const moreThanTwo = inHours.filter(hour => hour > 2);
console.log(moreThanTwo);

const amountPerHour = moreThanTwo.map(hour => hour * 15);
console.log(amountPerHour);

const  roundedToEuro = amountPerHour.toLocaleString('it-IT', {style: 'currency', currency: 'EUR'});
console.log(roundedToEuro);
