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

//Map the tasks to durations in hours.
let Maartje = tasks.map(element => element.duration / 60);
console.log(Maartje);
//(9) [3, 2, 0.3333333333333333, 3.3333333333333335, 4, 3,
// 0.16666666666666666, 3.3333333333333335, 0.6666666666666666]


//Filter out everything that took less than two hours 
let Maartje1 = Maartje.filter(element => element > 2);
console.log(Maartje1);
//(5) [3, 3.3333333333333335, 4, 3, 3.3333333333333335]


//Multiply the each duration by a per-hour rate for billing and sum it all up.
let maartje2 = Maartje.map(element => element * 13);
let Maartje3 = maartje2.reduce((total, element) => total + element, 0);
console.log(Maartje3);
//257.8333333333333


//Output a formatted Euro amount, rounded to Euro cents
//ther is two ways how i made this 

// first and hard way 
let Maartje5 = Maartje3 - 0.0033333333333;
console.log(Maartje5);
//257.83

let finalsalary = "€ " + Maartje5;
console.log(finalsalary);
//€ 257.83


//second and easy way 
let finalsalary1 = "€ " + Maartje3.toFixed(2);
console.log(finalsalary1);
//€ 257.83
