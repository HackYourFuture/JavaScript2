//Say you would like to write a program that doubles the odd numbers in an array 
//and throws away the even number.

//Your solution could be something like this:

let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

// 1) Rewrite the above program using map and filter don't forget to use =>

let numArray = [1, 2, 3, 4];
let newNumbersArray = [];

newNumbersArray = numArray.filter(value => value % 2 !== 0);       //an array of [1,3]
console.log(newNumbersArray);

var times2 = newNumbersArray.map(value => value * 2);               //1*2=3, 3*2=6. output 2, 6
console.log("The doubled numbers are: " + times2);


//Underneath you see a very interesting small insight in Maartje's work:

let monday = [
    { name: 'Write a summary HTML/CSS', duration: 180 },
    { name: 'Some web development', duration: 120 },
    { name: 'Fix homework for class10', duration: 20 },
    { name: 'Talk to a lot of people', duration: 200 }
];

let tuesday = [
    { name: 'Keep writing summary', duration: 240 },
    { name: 'Some more web development', duration: 180 },
    { name: 'Staring out the window', duration: 10 },
    { name: 'Talk to a lot of people', duration: 200 },
    { name: 'Look at application assignments new students', duration: 40 }
];

let tasks = monday.concat(tuesday);
console.log(tasks);

// 2) Write a program that does the following below. Use map and filter. You will also need a forEach or a for loop for the 'summing up' part.
/*Collect two days' worth of tasks.
Convert the task durations to hours, instead of minutes.
Filter out everything that took two hours or more (remove from the collection)
Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.
Output a formatted Euro amount.
Don't forget to use => */
let thursday = [
    { activity: "get kids ready for school", hours: 1 },
    { activity: "drop off/pick up kids at school", hours: 1 },
    { activity: "attend a meetup", hours: 3 },
    { activity: "study for HYF", hours: 5 },
    { activity: "cook dinner", hours: 1 },
    { activity: "kid's bedtime routine", hours: 1 },
    { activity: "relax, watch tv", hours: 3 },
];
let friday = [
    { activity: "get kids ready for school", hours: 1 },
    { activity: "drop off/pick up kids at school", hours: 1 },
    { activity: "study for HYF", hours: 8 },
    { activity: "cook dinner", hours: 1 },
    { activity: "kid's bedtime routine", hours: 1 },
    { activity: "go out with friends", hours: 4 },
];
let activities = thursday.concat(friday);       //combines both arrays
//console.log(activities);

let underTwo= activities.filter(item=> item.hours <= 2);    // creates a new array that only includes the activities that were under 2 hours 
//console.log(underTwo); 

let hourlyRates= underTwo.map(item=> item.hours*25.00);        // creates an array with the hourly rates 
//console.log(hourlyRates);

let payment= hourlyRates.reduce( (accumulator, currentValue) => accumulator + currentValue );  //reduces payment to 200 which is all the hourly rates combined 

let totalEuros= payment.toLocaleString('en-US', {style: 'currency', currency: 'EUR'});
//console.log(totalEuros);                           //200 euros

console.log("I would get paid: " + totalEuros);
