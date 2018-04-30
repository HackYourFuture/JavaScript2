## Homework Week 2

```
Topics discussed this week:
• Functions + JSON/Arrays
• Array Manipulations
• JSON
• Map and filter
• Arrow functions
```

>[Here](/Week3/README.md) you find the readings you have to complete before the third lecture.

## Step 1: Feedback

_Deadline Monday_

Go through the `html-css`, `javascript1` and `javascript2` Github repositories of one of your fellow students, check if they have neat repository's with the different weeks (eg. `week1`, `week2`, `week3`)of homework for all the modules up and until now. Also check if they have hosted their homework on Github pages. If there is anything that they can improve please provide feedback in an issue.

## Step 2: More map, filter and `=>`

_Deadline Wednesday_

**2.1** Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.

Your solution could be something like this:

```js
const numbers = [1, 2, 3, 4];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log('The doubled numbers are', newNumbers); // ==> [2, 6]

```

Rewrite the above program using `map` and `filter` don't forget to use `=>`.

---

**2.2** Underneath you see a very interesting small insight in Maartje's work:

```js
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
```

_Note: the durations are specified in minutes._

Write a program that computes how much Maartje has earned by completing these tasks, using `map` and `filter`. For the 'summing part' you can try your luck with `reduce`; alternatively, you may use `forEach` or a `for` loop.

Follow these steps. Each step should build on the result of the previous step. 

- Map the tasks to durations in hours.
- Filter out everything that took less than two hours (i.e., remove from the collection)
- Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should earn per hour) and sum it all up.
- Output a formatted Euro amount, rounded to Euro cents, e.g: `€ 12.34`.
- Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. `durations`. For a single item, use a singular form, e.g. `duration`. For details, see [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md).
- Don't forget to use `=>`.

## Step 3: ROVER

Finish up to chapter 7: JSON on [roverjs.com](http://roverjs.com/)!

## Step 4: **Some freeCodeCamp challenges:**

_Deadline Saturday_

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Iterate over Arrays with map](https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map)


## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week3/README.md) to prepare for your next class


### How to hand in your homework:

Go over your homework one last time:

- Does every file run without errors and with the correct results when you run them with Node?
- Does every file start with `'use strict';`?
- Have you used `const` and `let` and avoided `var`?
- Do the variable, function and argument names you created follow the [Naming Conventions](../../../../fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Is your code well-formatted (see [Code Formatting](../../../../fundamentals/blob/master/fundamentals/naming_conventions.md))?

If the answer is 'yes' to all preceding questions you are ready to follow these instructions:

- [Handing in homework](../../../../fundamentals/blob/master/fundamentals/homework_pr.md)
