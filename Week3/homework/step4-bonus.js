'use strict';

// ----------first way to do it without es6-----------

// const different = (val, ind, self) => {
//     return self.indexOf(val) === ind;
// }

// const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
// values.filter(different);
// // Add your function here. Try and come up with a good name for this function

// console.log(values.filter(different));

// ----------second way to do it with es6-------------

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

const newValues = [... new Set(values)]
// Replace `yourFunction` with the name of the function you just created
// console.log(newValues);
