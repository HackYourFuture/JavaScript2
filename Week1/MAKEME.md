# Homework Week 1

```
Topics discussed in class this week:
• Capturing user input
• Events
• Basic DOM manipulations (img src, innerHTML)
• Code debugging using the browser
• Code commenting
• Structuring code files
• Code formatting
• Handing in homework via PR
```

> [Here](/Week2/README.md) you find the readings you have to complete before the second lecture.

## Step 0: Make a small dance

Give yourself (or your neighbor) a little tap on the shoulder, you've made it to JS2! :muscle:

## Step 1: Custom DOM manipulation challenge :mortar_board:

_Deadline Thursday evening_

Modify the (mostly empty) files in the `Week1/homework` folder for this step.

**1.1** Open the `apps.js` and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces so that you can use these later as HTML `id` attributes. (Example: _Harry Potter's - The Chamber of Secrets_ -> `harry_potter_chamber_secrets`). Add a console.log statement to output this array to console. (This is for debugging and making sure everything is in order. Delete it later when you're done :))

**1.2** Open the empty `index.html` and add the required HTML to load the `app.js` file. Open `index.html` in the browser and confirm that the `console.log` statement shows the array. (Open the Chrome Developer Tools and inspect the console.)

**1.3** Remove the temporary `console.log` from step 1.1. Make a function (or functions) that generate a `ul` with `li` elements for each book ID in the array using a `for` loop. Make sure that the function names you choose are an accurate reflection of what they do. As a reminder, here are the recommended [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md).

**1.4** Make an object (_not an array!_) containing information for each book. Each property of this object should be another (i.e., nested) object with the book ID you thought up in step 1.1 as a key, and at least the following properties: `title`, `language` and `author`.

**1.5** Now change the function from step 1.3 that you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.

**1.6** Beautify your html page with css (use the `style.css` file for that), add sources and alts to each of the images.

**1.7** Find and download book covers for each book and construct a new object which has as keys the book IDs again, and as value the path to the image source (e.g. `{ harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }`).

**1.8** Loop over these entries (_hint: `Object.keys(objectName)` gives you an array containing the keys_). Then write a function which places an image at the corresponding `li` element. Remember that objects are not ordered, so you cannot guarantee that the first key is the first `li` element. (_Hint: you could give each `li` item an `id` tag by modifying the function you made before._)

### How to hand in your homework:

Go over your homework one last time:

- Does your JavaScript file start with `'use strict';`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Have you resolved all issues flagged by ESLint and the spell checker (no wavy red and green underlines in VSCode)?

If the answer is 'yes' to all preceding questions you are ready to follow these instructions:

- [Handing in homework](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/homework_pr.md)

## Step 2: **FreeCodeCamp challenges:**

_Deadline Sunday morning_

- [Build JavaScript Objects](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects)

Use a Constructor to Create Objects

- [Define a Constructor Function](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function)
- [Extend Constructors to Receive Argument](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments)

And just for fun ... [Sum All Numbers in a Range](https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range)

## Step 3: Read before next lecture

_Deadline Sunday morning_

Go trough the reading material in the [README.md](/Week2/README.md) to prepare for your next class

## :boom: Bonus homework :boom:

the Bonus homework for this week (for those of you want an extra challenge) do the following:

- Sign up on codewars.com
- In you account setting under “clan” write “Hack Your Future”
- Go do the challenges in the following playlist: https://www.codewars.com/collections/fun-fun-fundamentals

Codewars is really a lot of fun, and you can compete against each other who has the most points :trollface:
it’s a great way to really practice JavaScript a lot in various problems.

Please note, there are various challenges all sorted on difficultly called KIU. Kiu 8 is the easiest, Kiu 1 is the hardest, we expect you to do challenges around level 8, 7 maybe.

Enjoy!
