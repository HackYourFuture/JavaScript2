const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(arr) {
  return arr.filter((a, b) => arr.indexOf(a) === b)
};

console.log(removeDuplicates(letters));
