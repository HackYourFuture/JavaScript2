// Collect two days ' worth of tasks.

console.log(" Collection of two days worth of tasks of Martje are: ");

let twoDaysTasks = [];
for (var i in tasks) {
    twoDaysTasks[i] = tasks[i].name;
    console.log("*** " + twoDaysTasks[i] + " ***");
}
console.log('**************************************************');

//Convert the task durations to hours, instead of minutes.

console.log('Convert the task durations to hours, instead of minutes:');

let minuteDuration = [];
for (var j in tasks) {
    minuteDuration[j] = tasks[j].duration;
}

let hourDuration = minuteDuration.map(k => (Number((k / 60).toFixed(2))));
console.log('the durations converted hours are : ' + hourDuration);

console.log('**************************************************');

//Filter out everything that took two hours or more(remove from the collection)

let lessTwoHour = [];
for (var f in tasks) {
    let fTemp = tasks[f].duration;
    if (fTemp / 60 < 2) {
        lessTwoHour[f] = tasks[f].name;
    };
};
console.log("Maartje's worth of tasks less than 2 hours are : " + lessTwoHour);

console.log('**************************************************');

/*
Multiply the each duration by a per - hour rate
for billing(you can decide yourself what Maartje should make per hour) and sum it all up.
Output a formatted Euro amount.*/

let salaryDetails = hourDuration.map(oneHour => (oneHour * 40));
const salary = (before, next) => before + next;
console.log("Maartje should make " + Number(salaryDetails.reduce(salary)).toFixed(2) + "€");