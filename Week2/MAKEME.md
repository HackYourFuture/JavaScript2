## Homework Week 2

```
Topics discussed this week:
• Functions + JSON/Arrays
• Array Manipulations
• JSON
• Map and filter
• Arrow functions
```

> [Here](/Week3/README.md) you find the readings you have to complete before the third lecture.

## Step 0: JSON parsing
1. Create an HTML file
2. Insert a script tag that points to squirtle-sprites.js
3. In squirtle-sprites.js, convert pokemonDataJSONString to a javascript object so you can access its properties
4. Display the sprite images (located in the parsed object) in the HTML page. You'll need to do some DOM manipulation kinda of stuff (maybe element.appendChild?)
*Bonus Challenge*: Can you use an array method to loop over all sprites so you don't have to manually type each?

## Step 1: More map, filter and `=>`

_Deadline Wednesday_

**1.1** Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

Your solution could be something like this:

```js
function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
```

Rewrite the above `doubleOddNumbers` function using `map` and `filter`; don't forget to use `=>`.

---

**1.2** Underneath you see a very interesting small insight in Maartje's work:

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
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
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
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
```

_Note: the durations are specified in minutes._

Write a program that computes how much Maartje has earned by completing these tasks, using `map` and `filter`. For the 'summing part' you can try your luck with `reduce`; alternatively, you may use `forEach` or a `for` loop.

Follow these steps. Each step should build on the result of the previous step.

- Map the tasks to durations in hours.
- Filter out everything that took less than two hours (i.e., remove from the collection)
- Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
- Output a formatted Euro amount, rounded to Euro cents, e.g: `€11.34`.
- Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. `durations`. For a single item, use a singular form, e.g. `duration`. For details, see [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md).
- Don't forget to use `=>`.

## Step 2: Testing your homework

We have provided _unit tests_ in this repo that allow you to verify that your homework produces the expected results.

> **Unit test**: A _unit test_ is a piece of code (usually a function) that invokes another piece of code and checks the correctness of some assumptions afterwards. If the assumptions turn out to be wrong, the unit test has failed. A 'unit' is a method or function.
>
> Adapted from: Roy Osherove (1.09), The art of Unit Testing. Greenwich, CT: Manning.

At this point it is not important to understand how unit tests work. The only thing you need to know now is how to run the tests and how to determine whether your homework produces the correct results.

#### Run the tests

You can test your week 2 homework by typing this command in the terminal window:

```
npm run test-week2
```

You will see some output appearing in the console while the tests run. If all is well (no errors), the last couple of lines will look like this:

```
Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.849s
Ran all test suites matching /Week2\//i.
```

In case of unexpected results, say from _Maartjes work_ assignment, you might see something like this (you may need to scroll up a bit):

```
Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.255s
Ran all test suites matching /Week2\//i.
```

If that's the case, try and fix the error. When done, run the tests again: `npm run test-week2`

Repeat the previous step until all (= 2 in this case) tests pass.

## Step 3: ROVER

Finish up to chapter 7: JSON on [roverjs.com](http://roverjs.com/)!

## Step 4: **Some freeCodeCamp challenges:**

_Deadline Saturday_

1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Use the map Method to Extract Data from an Array](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)

## Step 5: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week3/README.md) to prepare for your next class

### How to hand in your homework:

Go over your homework one last time:

- Does your homework pass all the unit tests?
- Does every file start with `'use strict';`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Have you resolved all issues flagged by ESLint and the spell checker (no wavy red and green underlines in VSCode)?

If the answer is 'yes' to all preceding questions you are ready to follow these instructions:

- [Handing in homework](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/homework_pr.md)
