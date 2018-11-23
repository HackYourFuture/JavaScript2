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
 let durationInHours = tasks.map(hours => hours.duration / 60 ); 
 console.log(durationInHours);

 // (9) [3, 2, 0.3333333333333333, 3.3333333333333335, 4, 3,
 // 0.16666666666666666, 3.3333333333333335, 0.6666666666666666]

 let moreThanTwo = durationInHours.filter(hours => hours > 2 );
 console.log(moreThanTwo);

//(5) [3, 3.3333333333333335, 4, 3, 3.3333333333333335] 

let salary = moreThanTwo.map(hour => hour * 10 );

let amount = salary.reduce((getsum , total) => getsum + total );
console.log(amount);

//166.66666666666669

let theSalary = '€ ' +  amount.toFixed(2);

console.log(theSalary);

//€166.67




