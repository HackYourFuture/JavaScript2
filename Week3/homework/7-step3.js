'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/* This is how I understand it -> In Javascript Primitive data types like number,
string, boolean are pass by value , while Objects 
are pass by reference.

                      -> PASS BY VALUE
This means when we pass a primitive value of a variable as a function argument,
we are actually passing the copy of it and not the actual value itself.
So when we change it inside the function, it does not affect the original value.
This is why, when we console.log the variable, we still get the original value.

This kind of reminds me of what Xerox/Printers do. We can copy/print a document, 
write on it,highlight texts or throw it away, but
the original version of it will remain unchanged. 

                    -> PASS BY REFERENCE 
While when we pass a reference value as a function argument the original value changes too.

And this could be compared with an Editor.
When we edit a document and save it. It replaces the old version with the new version.
This is why when we console.log the reference value,
after changing it inside the function, we get the new version of it.

*/

