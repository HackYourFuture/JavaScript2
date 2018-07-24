'use strict';

const monday = [{
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

const tuesday = [{
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

const tasks = monday.concat(tuesday)
let minutesToHours = tasks.filter(a => a.duration >= 120).map(h => h.duration / 60);

console.log(minutesToHours);

let perHour = minutesToHours.map(v => v * 23) // per hour 23 euro

console.log(perHour);

let total = perHour.reduce(function(a, b) {
    return a + b;

});
total = total.toFixed(2); //rounding number
console.log("Maartje totally will earn: " + total + " Euro");