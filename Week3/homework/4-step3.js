'use strict';
// paste your freeCodeCamp solutions in here

/*By the time i wanted to make this homework there was no 
access to the homework mentioned on the github so i made 
Jim's suggested homework which is this one : 
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects*/


function dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line

const hound = new dog();

console.log(hound);
