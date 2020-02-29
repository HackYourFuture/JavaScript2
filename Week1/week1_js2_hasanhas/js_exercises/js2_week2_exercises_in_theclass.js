// const btn = document.getElementById('btn');
// const now = Date.now();

// console.log(now);

// console.log('starting withh script');

// btn.addEventListener('click', function () {
// console.log('BUTTON WAS CLICKED');

// });

// while (now + 5000 >= Date.now)){
//     // do nothing
// }

// console.log();

// function testFunction (cb) {
// console.log('printing something inside a');

// }
// function someOtherFunction (){
//     console.log('printing inside b');

// }

// testFunction (someOtherFunction);

// ////////////////////

// console.log('START');

// setTimeout(function) {
//     console.log('INSIDE TIMEOUT');

// } 1000);

// console.log('END');

// ///////////

// function parent(callback) {
//     console.log('AT START');
//     setTimeout (() => {
//         callback(); 0);
//     }
//     console.log('AT END');

// };

// function child('I AM A CHILD); {

// };

// parent (child);



// /////////////



/*
 * Given the following students(array of objects):
 * 1. group students in two arrays of male and female students
 * 2. convert marks to numbers
 * 3. find out average marks of both male and female students
 * 4. find out average marks of the entire class
 */
const students = [{
    name: 'Noah',
    gender: 'M',
    marks: "89.25"
}, {
    name: 'Olivia',
    gender: 'F',
    marks: "93.30"
}, {
    name: 'Wiliam',
    gender: 'M',
    marks: "84.50"
}, {
    name: 'Isabella',
    gender: 'F',
    marks: "76.00"
}, {
    name: 'Jacob',
    gender: 'M',
    marks: "81.75"
}, {
    name: 'Sofia',
    gender: 'F',
    marks: "94.00"
}, {
    name: 'David',
    gender: 'M',
    marks: "78.50"
}, {
    name: 'Grace',
    gender: 'F',
    marks: "85.00"
}];

const gender = students.filter (gender);
console.log(gender);
