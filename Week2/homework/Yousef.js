# Homework Week 2

```
Topics discussed this week:
• Functions + JSON/Arrays
• Array Manipulations
• JSON
• Map and filter
• Arrow functions
```

> [Here](/Week3/README.md) you find the readings you have to complete before the third lecture.

### Step 1: More map, filter and `=>`

_Deadline Wednesday_

**1.1** Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

Your solution could be something like this:

```js

const doubleOddNumbers = (numbers) => {
    
}

const myNumbers = [1, 2, 3, 4];

const oddNumbers = myNumbers.filter(num => {
  return num % 2 !== 0 
});

const newNumbers = oddNumbers.map((value, index, array) => {
  return value * 2;
});

console.log(newNumbers);

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

### Step 2: Array exercises
_Deadline Friday_

- Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

```js

var firstElement =  (array, n) => {
      if (array == null) 
      return void 0;
    if (n == null) 
      return array[0];
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

console.log(firstElement([7, 9, 0, -2]));
/*
console.log(firstElement([],3));
console.log(firstElement([7, 9, 0, -2],3));
console.log(firstElement([7, 9, 0, -2],6));
console.log(firstElement([7, 9, 0, -2],-3));
*/
```

- Write a JavaScript program to find the most frequent item of an array.

```js

const arr1=[3, 'a', 'a', 'a', 2, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(`${item} ( ${mf} times ) `) ;


```

- Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX’.

```js

const swapcase = (str) => {
        return str.replace(/([a-z]+)|([A-Z]+)/g, (match, chr) => {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
console.log(swapcase('The Quick Brown Fox')); //tHE qUICK bROWN fOX

```

##### BONUS

Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

### Step 3: JSON exercises
_Deadline Friday_
- Write a JavaScript function to check if an object contains given property.

```js

function person(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(person({ name: "John", age: 31, city: "New York" }, "age"));

```

- Write a JavaScript program to get the length (amount of keys) of a JavaScript object.

```js

Object.objsize = function(Myobj) {
    var osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

var person = { 
name : "John", 
age: 31, 
city: "New York" };

var objsize = Object.objsize(person);
console.log('The length of an object : '+objsize);

```

##### BONUS

Write a JavaScript program to create a Clock.
Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45" 

### Step 4: ROVER (bonus)

Finish up to chapter 7: JSON on [roverjs.com](http://roverjs.com/)!

### Step 5: **Some FreeCodeCamp challenges:** (bonus)


1. [Comparisons with the Logical And Operator](https://www.freecodecamp.com/challenges/comparisons-with-the-logical-and-operator)

2. [Record Collection](https://www.freecodecamp.com/challenges/record-collection)

3. [Use the map Method to Extract Data from an Array](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)


## How to hand in your homework:

Go over your homework one last time:

- Is your code properly formatted?
- Does every file start with `'use strict';`?
- Do the variable, function and argument names you created follow the [Naming Conventions](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/naming_conventions.md)?
- Have you resolved all issues flagged by ESLint and the spell checker plugins (no wavy red and green underlines in VSCode)?
- Create  **1 NEW PULL REQUEST** containing all of this homework 

Here is a refresher on the needed GIT commands & workflow:

- [Handing in homework](https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/homework_pr.md)

</br></br>

#### Good luck students!
