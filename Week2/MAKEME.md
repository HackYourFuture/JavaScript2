# Homework JavaScript2 Week 2

## **Todo list**

1. Practice the concepts
2. JavaScript exercises
3. Code along
4. PROJECT: The Pomodoro Clock

## **1. Practice the concepts**

Before we head into the exercises, it might be nice to do some interactive exercises first! In the following resource you'll find some exercises that'll teach you all about callbacks and array functions!

- [Learn JavaScript: Iterators](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-iterators)

## **2. JavaScript exercises**

> Inside of your `JavaScript2` fork, create a folder called `week2`. Inside of that folder, create a folder called `js-exercises`. For all the following exercises create a new `.js` file in that folder (5 files in total). Make sure the name of each file reflects its content: for example, the filename for exercise one could be `oddOnesOut.js`.

**Exercise 1: The odd ones out**

Look at the following code snippet:

```js
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers)); // Logs "[4, 8]" to the console
```

The `doubleEvenNumbers` function returns only the even numbers in the array `myNumbers` and doubles them. Like you've learned in the [README](README.md), this block of code isn't easy to decipher.

Let's rewrite it. Using the `map` and `filter` functions, rewrite the `doubleEvenNumbers` function.

**Exercise 2: What's your Monday worth?**

When you're a developer at a big company your Monday could look something like this:

```js
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];
```

Write a program that computes how much Maartje has earned by completing these tasks, using `map` and `filter`.

For the 'summing part' you can try your luck with `reduce`; alternatively, you may use `forEach` or a `for` loop.

Follow these steps. Each step should build on the result of the previous step.

- Map the tasks to durations in hours.
- Filter out everything that took less than two hours (i.e., remove from the collection)
- Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
- Output a formatted Euro amount, rounded to Euro cents, e.g: `€11.34`.
- Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. `durations`. For a single item, use a singular form, e.g. `duration`.

**Exercise 3**

**Exercise 4**

**Exercise 5 **

## **3. Code along**

Programming can be used to not only make websites, but also games! In the following tutorial you're going to apply your DOM manipulation skills in order to make a classic game: Rock, Paper, Scissors! Enjoy!

- [Build a Rock, Paper, Scissors Game](https://www.youtube.com/watch?v=WR_pWXJZiRY)

## **4. PROJECT: The Pomodoro Clock**

> Every week ends with a project you have to build on your own. Instead of getting clear-cut instructions, you'll get a list of criteria that your project needs to measure up to.

> Before you start, create a new folder called `project` that includes the files for the following app you'll be building.

In this week's project you'll be making a Pomodoro Clock! A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down! If the user wants to pause the timer, they can do so by clicking the pause button.

It should look like this:

![Pomodoro Clock](../assets/pomodoro.png)

Here are the requirements:

- If the timer is running, the user can't change the session length anymore
- Use at least 3 functions
- Display minutes and seconds
- If the timer finishes the timer should be replaced by the message: `Time's up!`

Good luck!

## **SUBMIT YOUR HOMEWORK!**

After you've finished your todo list it's time to show us what you got! The homework that needs to be submitted is the following:

1. JavaScript exercises
2. PROJECT: The Pomodoro Clock

Upload both to your forked JavaScript2 repository in GitHub. Make a pull request to the original repository.

> Forgotten how to upload your homework? Go through the [guide](../hand-in-homework-guide.md) to learn how to do this again.

_Deadline Saturday 23.59 CET_
