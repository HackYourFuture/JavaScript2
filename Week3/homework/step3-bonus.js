'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique() {
  values.filter(function(item, pos) {
 return values.indexOf(item) == pos;
})
};

function makeUnique(values) {
  let seen = {};
  return values.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}


const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
