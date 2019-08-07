# Homework JavaScript2 Week 2

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT:

## **1. Practice the concepts**

## **2. JavaScript exercises**

Step 1: More map, filter and

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
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
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

## **3. Code along**

- [Build a Rock, Paper, Scissors Game](https://www.youtube.com/watch?v=WR_pWXJZiRY)

## **4. PROJECT:**

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! Starting from this week you'll be submitting all your homework through GitHub. What you'll be doing is upload all your files to a forked repository (a copy from the original, which in this case is the [JavaScript1](https://www.github.com/HackYourFuture/JavaScript1) repository) using GIT.

Take a look at the following [guide](../hand-in-homework-guide.md) to see how it's done.

The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT:

_Deadline Saturday 23.59 CET_
