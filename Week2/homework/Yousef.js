# Homework Week 2

```

### Step 2: Array exercises
_Deadline Friday_

- Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

```js

const firstElement =  (array, n) => {
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
    let osize = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};

const person = { 
name : "John", 
age: 31, 
city: "New York" };

const objsize = Object.objsize(person);
console.log('The length of an object : '+objsize);

```
